import {data,topics as baseTopics,functionRoles as baseRoles,institutionTypes} from './data.js';

const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const key='think-tank-edits-v2';
let st={q:'',region:'全部',topics:new Set,roles:new Set,country:'',type:'',compare:[]},shown=[];
const original=new Map(data.map(d=>[d.id,{topics:[...d.topics],stance:d.stance,stanceNote:d.stanceNote}]));
let edits={};try{edits=JSON.parse(localStorage.getItem(key)||'{}')}catch{}

function applyEdit(id,edit){
  let d=data[id];if(!d||!edit)return;
  d.topics=edit.topics?.length?edit.topics:[...original.get(id).topics];
  d.stance=edit.stance?.trim()||original.get(id).stance;
  d.stanceNote=edit.stanceNote?.trim()||original.get(id).stanceNote;
}
Object.entries(edits).forEach(([id,edit])=>applyEdit(+id,edit));

const allTopics=()=>[...new Set([...baseTopics,...data.flatMap(d=>d.topics)])];
const allRoles=()=>[...new Set([...baseRoles,...data.flatMap(d=>d.roles)])];
const tags=items=>items.map(t=>`<i class="tag">${esc(t)}</i>`).join('');
const searchable=d=>Object.values(d).flat().join(' ').toLowerCase();

function filter(){
  let words=st.q.toLowerCase().trim().split(/\s+/).filter(Boolean);
  return data.filter(d=>words.every(w=>searchable(d).includes(w))&&
    (st.region==='全部'||d.region===st.region)&&(!st.country||d.country===st.country)&&
    (!st.type||d.type===st.type)&&(!st.topics.size||d.topics.some(t=>st.topics.has(t)))&&
    (!st.roles.size||d.roles.some(r=>st.roles.has(r))));
}

function renderChecks(target,items,selected,field){
  let allowed=new Set(items);selected.forEach(v=>{if(!allowed.has(v))selected.delete(v)});
  $(target).innerHTML=items.map(v=>`<label><input type="checkbox" value="${esc(v)}" ${selected.has(v)?'checked':''}>${esc(v)}<span>${data.filter(d=>d[field].includes(v)).length}</span></label>`).join('');
}

function render(){
  shown=filter();
  $('#resultCount').textContent=shown.length+' 个结果';
  $('#title').textContent=st.region==='全部'?'全部机构':st.region+'机构';
  $('#regions').innerHTML=['全部','美国','英国','欧洲大陆'].map(x=>`<button class="${st.region===x?'active':''}" data-region="${x}">${x}<small> ${data.filter(d=>x==='全部'||d.region===x).length}</small></button>`).join('');
  renderChecks('#topics',allTopics(),st.topics,'topics');
  renderChecks('#roles',allRoles(),st.roles,'roles');
  $('#chips').innerHTML=[st.q&&['q','“'+st.q+'”'],st.region!=='全部'&&['region',st.region],...Array.from(st.topics,t=>['topic',t]),...Array.from(st.roles,r=>['role',r])].filter(Boolean).map(x=>`<button class="chip" data-clear="${x[0]}" data-val="${esc(x[1])}">${esc(x[1])} ×</button>`).join('');
  $('#list').innerHTML=shown.length?shown.map(d=>`<article class="card"><small>${d.country} · ${d.city} · ${d.type}</small><button data-profile="${d.id}"><h3>${esc(d.short)}</h3><h4>${esc(d.name)}</h4></button><p class="stance">${esc(d.stance)}</p><div class="tags">${tags(d.topics)}</div><p class="roleLine"><b>功能</b> ${esc(d.roles.join(' · '))}</p>${d.funding?`<p class="funding"><b>资金来源</b>${esc(d.funding)}</p>`:''}<div class="actions"><label><input data-compare="${d.id}" type="checkbox" ${st.compare.includes(d.id)?'checked':''}>加入比较</label><span><a href="${d.rss}" target="_blank" rel="noopener">RSS ↗</a><button data-profile="${d.id}">档案 ↗</button></span></div></article>`).join(''):'<div class="empty">没有匹配结果，请减少筛选条件。</div>';
  $('#count').textContent=st.compare.length;
}

function profile(id){
  let d=data[id];
  $('#profileBody').innerHTML=`<button class="close">×</button><div class="profileTop"><small>${d.region} / ${d.country} / ${d.city}</small><h2>${d.short}</h2><h3>${d.name}</h3><p>${d.full}</p></div><div class="profileBody"><div class="profileActions"><button data-edit="${d.id}">编辑资料</button><a href="${d.rss}" target="_blank" rel="noopener">RSS 订阅 ↗</a></div><p>${d.summary}</p><h4>机构类型</h4><p>${d.type}</p><h4>重点研究领域</h4><div class="tags">${tags(d.topics)}</div><h4>功能角色 <small>编辑性归类</small></h4><div class="tags">${tags(d.roles)}</div><h4>立场与研究风格 <small>编辑性归类</small></h4><p><b>${esc(d.stance)}</b><br>${esc(d.stanceNote)}</p><div class="sources"><a href="${d.stanceSource}" target="_blank" rel="noopener">查看机构定位依据 ↗</a></div>${d.funding?`<h4>主要出资来源／资金结构</h4><p>${esc(d.funding)}</p><div class="sources"><a href="${d.fundingSource}" target="_blank" rel="noopener">查看官方资金披露 ↗</a></div>`:''}<h4>官网核验来源</h4><div class="sources"><a href="${d.source}" target="_blank" rel="noopener">机构介绍与研究领域 ↗</a><a href="${d.website}" target="_blank" rel="noopener">官方网站 ↗</a></div><p>核验于 ${d.verified}</p></div>`;
  $('#profile').showModal();
}

function editProfile(id){
  let d=data[id],custom=!!edits[id];
  $('#profileBody').innerHTML=`<button class="close">×</button><div class="profileTop"><small>本设备的自定义资料</small><h2>编辑 ${esc(d.short)}</h2><p>保存后会立即用于搜索、筛选、比较和 CSV 导出。</p></div><form id="editForm" data-id="${id}" class="editor"><label>研究领域（用逗号、顿号或换行分隔）<textarea id="editTopics" required>${esc(d.topics.join('、'))}</textarea></label><label>立场／研究风格<input id="editStance" value="${esc(d.stance)}"></label><label>归类说明<textarea id="editStanceNote">${esc(d.stanceNote)}</textarea></label><p class="editNote">“立场”是便于比较的编辑性标签，不代表机构自我认定或党派隶属。</p><div class="formActions"><button type="button" data-profile="${id}">取消</button>${custom?`<button type="button" data-reset-edit="${id}">恢复默认</button>`:''}<button class="save" type="submit">保存修改</button></div></form>`;
  $('#profile').showModal();
}

function saveEdit(id){
  let topics=[...new Set($('#editTopics').value.split(/[，,、；;\n]/).map(x=>x.trim()).filter(Boolean))];
  if(!topics.length)return alert('请至少保留一个研究领域');
  let edit={topics,stance:$('#editStance').value.trim(),stanceNote:$('#editStanceNote').value.trim()};
  edits[id]=edit;localStorage.setItem(key,JSON.stringify(edits));applyEdit(id,edit);
  st.topics=new Set([...st.topics].filter(t=>allTopics().includes(t)));render();profile(id);
}

function resetEdit(id){
  delete edits[id];localStorage.setItem(key,JSON.stringify(edits));
  let d=data[id],o=original.get(id);d.topics=[...o.topics];d.stance=o.stance;d.stanceNote=o.stanceNote;render();profile(id);
}

function compare(){
  let ds=st.compare.map(i=>data[i]);
  $('#compareBody').innerHTML=ds.length<2?'<div class="empty">请先从列表勾选至少 2 家机构。</div>':`<div class="compareTools"><span>比较中的机构可编辑或移除</span><button data-clear-compare>清空比较</button></div><div class="scroll"><table class="compareTable"><tr><th>维度</th>${ds.map(d=>`<th>${d.short}<br><small>${d.name}</small><span class="colActions"><button data-edit="${d.id}">编辑</button><button data-remove-compare="${d.id}">移除</button></span></th>`).join('')}</tr>${[['所在地',d=>d.country+' · '+d.city],['机构类型',d=>d.type],['研究领域',d=>tags(d.topics)],['功能角色',d=>tags(d.roles)],['立场／风格',d=>`<b>${esc(d.stance)}</b><br>${esc(d.stanceNote)}<br><a href="${d.stanceSource}" target="_blank" rel="noopener">定位依据 ↗</a>`],['研究重点',d=>d.summary],['资金来源',d=>d.funding?`${esc(d.funding)}<br><a href="${d.fundingSource}" target="_blank" rel="noopener">官方披露 ↗</a>`:'未补充'],['RSS',d=>`<a href="${d.rss}" target="_blank" rel="noopener">RSS 聚合订阅 ↗</a>`],['机构来源',d=>`<a href="${d.source}" target="_blank" rel="noopener">官网依据 ↗</a>`]].map(row=>`<tr><th>${row[0]}</th>${ds.map(d=>`<td>${row[1](d)}</td>`).join('')}</tr>`).join('')}</table></div>`;
  $('#compare').showModal();
}

$('#country').innerHTML+=[...new Set(data.map(d=>d.country))].map(x=>`<option>${x}</option>`).join('');
$('#type').innerHTML+=institutionTypes.map(x=>`<option>${x}</option>`).join('');

document.addEventListener('click',e=>{
  let x=e.target.closest('[data-region]');if(x){st.region=x.dataset.region;render();return}
  x=e.target.closest('[data-profile]');if(x){profile(+x.dataset.profile);return}
  x=e.target.closest('[data-edit]');if(x){$('#compare').open&&$('#compare').close();editProfile(+x.dataset.edit);return}
  x=e.target.closest('[data-remove-compare]');if(x){st.compare=st.compare.filter(i=>i!==+x.dataset.removeCompare);render();compare();return}
  x=e.target.closest('[data-clear-compare]');if(x){st.compare=[];render();compare();return}
  x=e.target.closest('[data-reset-edit]');if(x){resetEdit(+x.dataset.resetEdit);return}
  x=e.target.closest('[data-clear]');if(x){if(x.dataset.clear==='topic')st.topics.delete(x.dataset.val);else if(x.dataset.clear==='role')st.roles.delete(x.dataset.val);else if(x.dataset.clear==='region')st.region='全部';else{st[x.dataset.clear]='';if(x.dataset.clear==='q')$('#search').value=''}render();return}
  x=e.target.closest('[data-copy-atlas-rss]');if(x){if(navigator.clipboard?.writeText){navigator.clipboard.writeText('https://gityx4029.github.io/think-tank-atlas/rss.xml').then(()=>{x.textContent='已复制';setTimeout(()=>x.textContent='复制订阅地址',1600)}).catch(()=>{x.textContent='请复制 RSS 链接'})}else{x.textContent='请复制 RSS 链接'}return}
  if(e.target.matches('.close'))e.target.closest('dialog').close();
});

document.addEventListener('submit',e=>{if(e.target.id==='editForm'){e.preventDefault();saveEdit(+e.target.dataset.id)}});
document.addEventListener('change',e=>{
  if(e.target.closest('#topics')){e.target.checked?st.topics.add(e.target.value):st.topics.delete(e.target.value);render();return}
  if(e.target.closest('#roles')){e.target.checked?st.roles.add(e.target.value):st.roles.delete(e.target.value);render();return}
  if(e.target.id==='country'){st.country=e.target.value;render();return}
  if(e.target.id==='type'){st.type=e.target.value;render();return}
  if(e.target.dataset.compare!==undefined){let id=+e.target.dataset.compare;if(e.target.checked&&st.compare.length>=4){e.target.checked=false;return alert('最多比较 4 家机构')}st.compare=e.target.checked?[...st.compare,id]:st.compare.filter(x=>x!==id);render()}
});

$('#search').oninput=e=>{st.q=e.target.value;render()};
$('#reset').onclick=()=>{st={q:'',region:'全部',topics:new Set,roles:new Set,country:'',type:'',compare:st.compare};$('#search').value='';$('#country').value=$('#type').value='';render()};
$('#openCompare').onclick=compare;
$('#about').onclick=()=>$('#method').showModal();
$('#explore').onclick=()=>$('.work').scrollIntoView({behavior:'smooth'});
$('#filterToggle').onclick=()=>{let work=$('.work'),open=work.classList.toggle('filters-open');$('#filterToggle').setAttribute('aria-expanded',String(open));$('#filterToggle').classList.toggle('open',open)};
$('#csv').onclick=()=>{
  let h=['中文名','原文名','简称','国家','城市','机构类型','研究领域','功能角色','立场／研究风格','立场说明','立场依据','主要出资来源或资金结构','资金披露出处','RSS订阅','官网','机构来源'];
  let rows=shown.map(d=>[d.name,d.full,d.short,d.country,d.city,d.type,d.topics.join('；'),d.roles.join('；'),d.stance,d.stanceNote,d.stanceSource,d.funding,d.fundingSource,d.rss,d.website,d.source]);
  let q=v=>'"'+String(v).replaceAll('"','""')+'"',a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob(['\ufeff'+[h,...rows].map(row=>row.map(q).join(',')).join('\r\n')]));a.download='think-tank-atlas.csv';a.click();
};
render();
