const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const themes=['全部','气候与能源','可持续发展','绿色金融','AI＋可持续'];
let active='全部',feed=null;

function itemCard(item){
  return `<article class="frontierCard"><div class="frontierMeta"><span>${esc(item.institute)}</span><time datetime="${esc(item.published_at)}">${esc(item.published_at)}</time></div><i class="frontierTheme">${esc(item.theme)}</i><h3>${esc(item.title)}</h3><p class="originalTitle">${esc(item.original_title)}</p><p>${esc(item.summary)}</p><div class="why"><b>为何值得关注</b><span>${esc(item.why_it_matters)}</span></div><a href="${esc(item.url)}" target="_blank" rel="noopener">查看官方原文 ↗</a></article>`;
}

function render(){
  const items=feed.items||[];
  $('#themeFilters').innerHTML=themes.map(theme=>`<button class="${theme===active?'active':''}" data-theme="${theme}">${theme}</button>`).join('');
  const shown=active==='全部'?items:items.filter(item=>item.theme===active);
  $('#frontierList').innerHTML=shown.length?shown.map(itemCard).join(''):`<div class="frontierEmpty"><b>${items.length?'这个方向暂未收录本期内容。':'首期内容正在编辑核验。'}</b><p>${items.length?'请切换其他专题，或订阅专题 RSS 获取下一次更新。':'自动检索仅生成候选稿；通过人工确认后才会公开在这里。'}</p></div>`;
}

async function start(){
  try{
    const response=await fetch('frontier.json',{cache:'no-store'});
    if(!response.ok)throw new Error('feed unavailable');
    feed=await response.json();
    $('#editionTitle').textContent=feed.edition?.title||'本期内容';
    $('#editionNote').textContent=feed.edition?.note||'';
    $('#sourceCount').firstChild.textContent=(feed.watchlist||[]).length||11;
    $('#signalList').innerHTML=(feed.process||[]).map((signal,index)=>`<article><small>0${index+1}</small><b>${esc(signal.title)}</b><p>${esc(signal.body)}</p></article>`).join('');
    $('#watchlistItems').innerHTML=(feed.watchlist||[]).map(source=>`<a href="${esc(source.url)}" target="_blank" rel="noopener"><b>${esc(source.name)}</b><span>${esc(source.short)}</span><small>${esc(source.focus)}</small></a>`).join('');
    render();
  }catch(error){
    $('#editionTitle').textContent='暂时无法载入专题内容';
    $('#editionNote').textContent='请稍后刷新，或返回机构目录。';
  }
}

document.addEventListener('click',event=>{const button=event.target.closest('[data-theme]');if(button){active=button.dataset.theme;render()}});
start();
