export const topics=['外交与国际关系','安全与防务','经济与贸易','金融与产业','科技与数字','气候与能源','治理与法治','社会政策','发展与人道主义','健康','教育','区域/国别研究'];
export const functionRoles=['研究型','合同研究/评估型','倡议型','数据型','召集平台型','政策实验室/Do-tank','人才网络型','媒体传播型','培训能力建设型'];
export const institutionTypes=['政府/公共部门内设型','准政府/公共授权型','大学/学术机构附属型','政党/政治基金会附属型','企业/行业/商业支持型','独立非营利/民间社会型','多主体联盟/网络型','未核验/信息不足'];
const S=institutionTypes, U='https://';
const r=[
['Brookings','布鲁金斯学会','Brookings Institution','美国','华盛顿',0,'经济与贸易|公共治理|社会政策|外交与安全|国际发展','综合研究经济、治理、外交与全球发展。','brookings.edu','about-us/'],
['CSIS','战略与国际问题研究中心','Center for Strategic and International Studies','美国','华盛顿',0,'外交与安全|经济与贸易|气候与能源|科技与数字|国际发展','聚焦国防、地缘政治、经济安全与关键技术。','csis.org','about'],
['RAND','兰德公司','RAND Corporation','美国','圣莫尼卡',0,'外交与安全|社会政策|气候与能源|科技与数字','以严谨方法研究国防、健康、教育和新兴技术。','rand.org','about.html'],
['CFR','美国外交关系协会','Council on Foreign Relations','美国','纽约',0,'外交与安全|经济与贸易|公共治理','研究美国对外关系，并出版《外交事务》。','cfr.org','about'],
['Carnegie','卡内基国际和平基金会','Carnegie Endowment for International Peace','美国','华盛顿',4,'外交与安全|公共治理|科技与数字|国际发展','以全球研究网络分析安全、治理与技术政策。','carnegieendowment.org','about'],
['PIIE','彼得森国际经济研究所','Peterson Institute for International Economics','美国','华盛顿',0,'经济与贸易','专注贸易、国际金融、汇率和宏观经济。','piie.com','about-piie'],
['Cato','卡托研究所','Cato Institute','美国','华盛顿',1,'经济与贸易|公共治理|社会政策|外交与安全','从自由意志主义视角研究公共政策。','cato.org','about'],
['Heritage','美国传统基金会','The Heritage Foundation','美国','华盛顿',1,'外交与安全|经济与贸易|公共治理|社会政策|气候与能源','研究并倡导保守主义公共政策。','heritage.org','about-heritage/mission'],
['Urban','城市研究所','Urban Institute','美国','华盛顿',0,'经济与贸易|社会政策|公共治理|科技与数字','研究住房、税收、健康、劳动与社会流动。','urban.org','about'],
['WRI','世界资源研究所','World Resources Institute','美国','华盛顿',4,'气候与能源|国际发展|公共治理','将气候、资源和城市研究连接到政策行动。','wri.org','about'],
['Chatham House','英国皇家国际事务研究所','Royal Institute of International Affairs','英国','伦敦',0,'外交与安全|经济与贸易|公共治理|气候与能源|科技与数字','国际事务与全球治理研究及政策对话平台。','chathamhouse.org','about-us'],
['IISS','国际战略研究所','International Institute for Strategic Studies','英国','伦敦',0,'外交与安全|经济与贸易|科技与数字','研究国防、冲突、地缘政治与地缘经济，并发布《军事平衡》等资料。','iiss.org','about-us/'],
['RUSI','英国皇家联合军种研究所','Royal United Services Institute','英国','伦敦',0,'外交与安全|科技与数字','专注国防、安全、核政策和网络安全。','rusi.org','about'],
['IFS','英国财政研究所','Institute for Fiscal Studies','英国','伦敦',3,'经济与贸易|社会政策','以经济学和数据研究税收、财政、福利与不平等。','ifs.org.uk','about'],
['IPPR','英国公共政策研究所','Institute for Public Policy Research','英国','伦敦',1,'经济与贸易|公共治理|社会政策|气候与能源','提出进步主义公共政策方案。','ippr.org','who-we-are'],
['ODI Global','ODI 全球发展研究所','ODI Global','英国','伦敦',0,'国际发展|气候与能源|公共治理|经济与贸易|科技与数字','研究发展融资、人道主义与全球治理。','odi.org','en/about/'],
['Resolution','Resolution Foundation','Resolution Foundation','英国','伦敦',0,'经济与贸易|社会政策','研究生活水平、劳动、住房与代际公平。','resolutionfoundation.org','about-us/mission/'],
['Bruegel','布鲁盖尔研究所','Bruegel','比利时','布鲁塞尔',0,'经济与贸易|气候与能源|科技与数字|欧洲事务','研究欧洲宏观经济、贸易与绿色转型。','bruegel.org','bruegel-european-think-tank-specialises-economics'],
['CEPS','欧洲政策研究中心','Centre for European Policy Studies','比利时','布鲁塞尔',0,'欧洲事务|经济与贸易|公共治理|气候与能源|科技与数字','跨领域研究欧盟经济、制度和数字政策。','ceps.eu','about-ceps/'],
['ECFR','欧洲对外关系委员会','European Council on Foreign Relations','德国','柏林',4,'外交与安全|欧洲事务|经济与贸易|气候与能源|科技与数字','泛欧洲网络，研究外交、安全与地缘经济。','ecfr.eu','about/'],
['SWP','德国科学与政治基金会','German Institute for International and Security Affairs','德国','柏林',2,'外交与安全|欧洲事务|气候与能源|科技与数字','向德国议会和政府提供外交安全研究。','swp-berlin.org','en/swp/about-us'],
['MERICS','墨卡托中国研究中心','Mercator Institute for China Studies','德国','柏林',0,'外交与安全|经济与贸易|科技与数字|欧洲事务','聚焦当代中国及其与欧洲和世界的关系，覆盖地缘政治、贸易投资与科技产业。','merics.org','en/about'],
['DGAP','德国外交关系协会','German Council on Foreign Relations','德国','柏林',0,'外交与安全|欧洲事务|经济与贸易|气候与能源|科技与数字','参与德国及欧洲外交政策研究与讨论。','dgap.org','en/about-us'],
['ifo','德国伊弗经济研究所','ifo Institute','德国','慕尼黑',3,'经济与贸易|社会政策|气候与能源|科技与数字','结合经济研究、景气调查和政策分析。','ifo.de','en/about-ifo'],
['Kiel Institute','基尔世界经济研究所','Kiel Institute for the World Economy','德国','基尔',2,'经济与贸易|气候与能源|国际发展','研究全球经济、贸易和发展。','kielinstitut.de','institute/about-the-kiel-institute/'],
['Ifri','法国国际关系研究所','Institut français des relations internationales','法国','巴黎',0,'外交与安全|欧洲事务|气候与能源|科技与数字','多学科分析国际关系和全球治理。','ifri.org','en/about-ifri'],
['IDDRI','可持续发展与国际关系研究所','Institute for Sustainable Development and International Relations','法国','巴黎',0,'气候与能源|国际发展|欧洲事务|公共治理','研究气候、生物多样性与可持续发展。','iddri.org','en/about-iddri'],
['SIPRI','斯德哥尔摩国际和平研究所','Stockholm International Peace Research Institute','瑞典','斯德哥尔摩',2,'外交与安全|气候与能源','提供冲突、军备、军控与裁军数据。','sipri.org','about'],
['PRIO','奥斯陆和平研究所','Peace Research Institute Oslo','挪威','奥斯陆',3,'外交与安全|国际发展|公共治理','研究冲突、暴力影响与和平建设。','prio.org','about'],
['HCSS','海牙战略研究中心','The Hague Centre for Strategic Studies','荷兰','海牙',0,'外交与安全|气候与能源|科技与数字','用战略研究、情景分析评估安全风险。','hcss.nl','about/'],
['Clingendael','荷兰国际关系研究所“克林亨达尔”','Netherlands Institute of International Relations “Clingendael”','荷兰','海牙',0,'外交与安全|欧洲事务|公共治理|国际发展','独立荷兰智库与外交学院，研究公共外交、国际安全、欧洲事务与冲突管理。','clingendael.org',''],
['Elcano','埃尔卡诺皇家研究所','Real Instituto Elcano','西班牙','马德里',0,'外交与安全|欧洲事务|经济与贸易|气候与能源','从西班牙和欧洲视角研究国际战略。','realinstitutoelcano.org','en/about-elcano/'],
['FIIA','芬兰国际事务研究所','Finnish Institute of International Affairs','芬兰','赫尔辛基',2,'外交与安全|欧洲事务|经济与贸易','研究芬兰外交、国际政治与欧盟。','fiia.fi','en/institute/the-institute'],
['NUPI','挪威国际事务研究所','Norwegian Institute of International Affairs','挪威','奥斯陆',2,'外交与安全|经济与贸易|国际发展|公共治理','研究战争和平、发展与全球治理。','nupi.no','en/about-nupi'],
['IAI','意大利国际事务研究所','Istituto Affari Internazionali','意大利','罗马',0,'外交与安全|欧洲事务|经济与贸易|气候与能源','研究欧洲一体化、地中海与国际安全。','iai.it','en/institute/about-us']];
// 第一层：按治理与正式隶属关系单选；资金结构不作为类型判定依据。
const T={Brookings:5,CSIS:5,RAND:5,CFR:5,Carnegie:6,PIIE:5,Cato:5,Heritage:5,Urban:5,WRI:5,'Chatham House':5,IISS:5,RUSI:5,IFS:5,IPPR:5,'ODI Global':5,Resolution:5,Bruegel:6,CEPS:5,ECFR:6,SWP:1,MERICS:5,DGAP:5,ifo:2,'Kiel Institute':1,Ifri:5,IDDRI:5,SIPRI:1,PRIO:5,HCSS:5,Clingendael:5,Elcano:5,FIIA:1,NUPI:1,IAI:5};
// 第二层：研究领域可多选；保留同一套可编辑标签，便于横向筛选。
const D={
Brookings:'外交与国际关系|经济与贸易|金融与产业|科技与数字|气候与能源|治理与法治|社会政策|发展与人道主义|健康|教育',
CSIS:'外交与国际关系|安全与防务|经济与贸易|金融与产业|科技与数字|气候与能源|发展与人道主义|区域/国别研究',
RAND:'安全与防务|科技与数字|气候与能源|治理与法治|社会政策|健康|教育',CFR:'外交与国际关系|经济与贸易|区域/国别研究',
Carnegie:'外交与国际关系|安全与防务|科技与数字|治理与法治|发展与人道主义|区域/国别研究',PIIE:'经济与贸易|金融与产业',
Cato:'外交与国际关系|经济与贸易|金融与产业|治理与法治|社会政策|健康|教育',Heritage:'外交与国际关系|安全与防务|经济与贸易|金融与产业|治理与法治|社会政策|健康|教育',
Urban:'金融与产业|治理与法治|社会政策|健康|教育',WRI:'气候与能源|治理与法治|发展与人道主义',
'Chatham House':'外交与国际关系|安全与防务|经济与贸易|治理与法治|气候与能源|科技与数字|发展与人道主义|区域/国别研究',IISS:'外交与国际关系|安全与防务|科技与数字|区域/国别研究',RUSI:'外交与国际关系|安全与防务|科技与数字|区域/国别研究',
IFS:'经济与贸易|金融与产业|社会政策|健康|教育',IPPR:'经济与贸易|金融与产业|气候与能源|治理与法治|社会政策','ODI Global':'经济与贸易|气候与能源|治理与法治|发展与人道主义|区域/国别研究',Resolution:'经济与贸易|金融与产业|社会政策',
Bruegel:'经济与贸易|金融与产业|科技与数字|气候与能源|区域/国别研究',CEPS:'经济与贸易|金融与产业|科技与数字|气候与能源|治理与法治|区域/国别研究',ECFR:'外交与国际关系|安全与防务|经济与贸易|科技与数字|气候与能源|区域/国别研究',SWP:'外交与国际关系|安全与防务|科技与数字|气候与能源|区域/国别研究',
MERICS:'外交与国际关系|安全与防务|经济与贸易|金融与产业|科技与数字|区域/国别研究',DGAP:'外交与国际关系|安全与防务|经济与贸易|科技与数字|气候与能源|区域/国别研究',ifo:'经济与贸易|金融与产业|社会政策|气候与能源|科技与数字','Kiel Institute':'经济与贸易|金融与产业|气候与能源|发展与人道主义',
Ifri:'外交与国际关系|安全与防务|科技与数字|气候与能源|区域/国别研究',IDDRI:'气候与能源|治理与法治|发展与人道主义|区域/国别研究',SIPRI:'外交与国际关系|安全与防务|气候与能源|区域/国别研究',PRIO:'外交与国际关系|安全与防务|治理与法治|发展与人道主义|区域/国别研究',
HCSS:'外交与国际关系|安全与防务|科技与数字|气候与能源',Clingendael:'外交与国际关系|安全与防务|治理与法治|发展与人道主义|区域/国别研究',Elcano:'外交与国际关系|安全与防务|经济与贸易|气候与能源|区域/国别研究',FIIA:'外交与国际关系|安全与防务|经济与贸易|区域/国别研究',NUPI:'外交与国际关系|安全与防务|经济与贸易|治理与法治|发展与人道主义|区域/国别研究',IAI:'外交与国际关系|安全与防务|经济与贸易|气候与能源|区域/国别研究'};
// 第三层：为比较和筛选而作的编辑性功能标签，可多选。
const R={
Brookings:'研究型|召集平台型|媒体传播型',CSIS:'研究型|召集平台型|媒体传播型',RAND:'研究型|合同研究/评估型|数据型',CFR:'研究型|召集平台型|媒体传播型',Carnegie:'研究型|召集平台型|人才网络型|媒体传播型',PIIE:'研究型|数据型|媒体传播型',Cato:'研究型|倡议型|媒体传播型',Heritage:'研究型|倡议型|媒体传播型',Urban:'研究型|合同研究/评估型|数据型',WRI:'研究型|倡议型|数据型|政策实验室/Do-tank|召集平台型',
'Chatham House':'研究型|召集平台型|媒体传播型',IISS:'研究型|数据型|召集平台型|媒体传播型',RUSI:'研究型|召集平台型|媒体传播型',IFS:'研究型|数据型|媒体传播型',IPPR:'研究型|倡议型|政策实验室/Do-tank|媒体传播型','ODI Global':'研究型|合同研究/评估型|数据型|培训能力建设型',Resolution:'研究型|倡议型|数据型|媒体传播型',
Bruegel:'研究型|数据型|召集平台型|媒体传播型',CEPS:'研究型|合同研究/评估型|召集平台型|媒体传播型',ECFR:'研究型|召集平台型|人才网络型|媒体传播型',SWP:'研究型|合同研究/评估型|数据型',MERICS:'研究型|数据型|媒体传播型',DGAP:'研究型|召集平台型|媒体传播型',ifo:'研究型|数据型|媒体传播型','Kiel Institute':'研究型|数据型|媒体传播型',
Ifri:'研究型|召集平台型|媒体传播型',IDDRI:'研究型|倡议型|政策实验室/Do-tank|召集平台型',SIPRI:'研究型|数据型|媒体传播型',PRIO:'研究型|数据型|培训能力建设型',HCSS:'研究型|数据型|政策实验室/Do-tank',Clingendael:'研究型|召集平台型|培训能力建设型',Elcano:'研究型|召集平台型|媒体传播型',FIIA:'研究型|合同研究/评估型|媒体传播型',NUPI:'研究型|合同研究/评估型|数据型',IAI:'研究型|召集平台型|媒体传播型'};
const F={
Brookings:['个人、基金会、企业及政府等多元捐赠者。','https://www.brookings.edu/about-us/finances/'],
CFR:['会员费、年度捐赠、企业会员、基金与捐款，以及出版和投资收益。','https://static.cfr.org/sites/default/files/pdf/2025%20Council%20on%20Foreign%20Relations%20FS.pdf'],
RAND:['美国各级政府、盟国政府、国际组织、高校、基金会、非营利组织和私营部门委托研究，以及公益捐赠。','https://www.rand.org/about.html'],
Carnegie:['基金会、企业、政府和个人捐赠，并有投资收益。','https://assets.carnegieendowment.org/files/2025_AnnualReport_final-1.pdf'],
CSIS:['企业、基金会、美国及盟国政府、个人等捐助者。','https://www.csis.org/about/financial-information/donors'],
'Chatham House':['慈善、研究项目、企业合作和会员支持；机构说明其不接受英国政府或其他来源的固定补贴。','https://www.chathamhouse.org/about-us/our-funding'],
IISS:['会员费、赞助与版税，以及研究、会议活动和部分东道国支持。','https://www.iiss.org/governance/our-funding/'],
PIIE:['约 150 家企业、基金会、个人和公共机构，以及资本基金收益和出版销售；Peter G. Peterson Foundation 为长期最大捐助方。','https://www.piie.com/about/transparency-policy'],
Bruegel:['会员制支持，成员包括欧盟成员国政府、国际企业和机构。','https://www.bruegel.org/membership'],
ECFR:['基金会、政府／公共机构和企业等多元支持。','https://ecfr.eu/donors/funding/'],
MERICS:['Stiftung Mercator 为最大机构资助方：2024 年占总资金 52.6%，并在 2024—2028 年支持 1,200 万欧元；另有政府项目支持与会员贡献。','https://merics.org/en/transparency'],
Clingendael:['荷兰外交部等公共部门的项目支持与委托研究；荷兰政府公开文件显示，外交部在 2022—2026 年为其冲突谈判培训项目提供约 684 万欧元。','https://static.rijksoverheid.nl/bz/bestanden/activity-appraisal-document-4000005818.pdf']};
const P={
Brookings:'中间派／建制派',CSIS:'跨党派／建制派',RAND:'中立／技术官僚型',CFR:'中间派／建制派',Carnegie:'中间派／自由国际主义',PIIE:'中立／市场开放取向',Cato:'自由意志主义／小政府',Heritage:'保守派／右翼',Urban:'中立／社会政策实证取向',WRI:'中立／绿色转型倡议',
'Chatham House':'中立／建制派国际主义',IISS:'中立／建制派安全政策',RUSI:'中立／建制派安全政策',IFS:'中立／技术官僚型',IPPR:'中间偏左／进步派','ODI Global':'中立／国际发展取向',Resolution:'中间偏左／社会民主取向',
Bruegel:'中立／亲欧技术官僚型',CEPS:'中立／亲欧技术官僚型',ECFR:'自由国际主义／亲欧派',SWP:'中立／公共政策顾问型',MERICS:'自由民主价值／欧洲中国政策取向',DGAP:'中立／亲欧跨大西洋取向',ifo:'市场自由主义／中间偏右经济取向','Kiel Institute':'市场自由主义／中间派',Ifri:'中立／建制派国际主义',IDDRI:'绿色进步／可持续发展取向',SIPRI:'中立／和平与军控取向',PRIO:'中立／和平研究取向',HCSS:'中立／战略安全取向',Clingendael:'中立／公共政策与外交实务取向',Elcano:'中立／亲欧建制派',FIIA:'中立／公共政策研究型',NUPI:'中立／公共研究型',IAI:'中立／亲欧国际主义'};
const PD={
Brookings:'综合政策研究与跨党派影响力使其更接近美国中间派建制传统。',CSIS:'强调跨党派政策研究，风格偏务实的国家安全与战略政策咨询。',RAND:'以委托研究、量化方法和政策评估为主，通常不按党派定位。',CFR:'外交政策建制派平台，强调跨党派讨论与自由国际秩序。',Carnegie:'强调独立研究、外交与国际合作，整体呈自由国际主义风格。',PIIE:'强调非党派国际经济研究，政策上重视开放贸易与市场机制。',Cato:'以个人自由、有限政府、自由市场与和平为明确原则。',Heritage:'明确倡导美国保守主义公共政策。',Urban:'以数据和项目评估研究社会政策，机构自述为非党派。',WRI:'以科学研究推动气候、资源与可持续发展政策行动。',
'Chatham House':'独立国际事务平台，风格接近英国外交政策建制与多边主义传统。',IISS:'以防务数据、战略评估和政策对话为核心，偏建制型安全研究。',RUSI:'英国国防安全政策传统浓厚，强调独立、实务型研究。',IFS:'以财政和社会政策的计量研究见长，风格偏技术官僚。',IPPR:'机构长期以进步主义公共政策研究定位。','ODI Global':'强调独立研究与全球发展、人道政策，通常不作党派归类。',Resolution:'聚焦中低收入家庭、劳动与分配议题，常呈中间偏左政策取向。',
Bruegel:'以欧盟经济政策和技术分析为主，整体亲欧洲一体化。',CEPS:'面向欧盟制度与政策的独立研究，风格偏亲欧技术官僚。',ECFR:'泛欧洲外交政策网络，强调欧洲行动能力与自由国际主义。',SWP:'主要服务德国议会与政府决策，采用非党派政策顾问模式。',MERICS:'机构自述独立、非营利，并明确以自由民主价值为基础，为欧洲对华政策讨论提供研究。',DGAP:'德国外交政策平台，整体重视欧洲合作与跨大西洋关系。',ifo:'经济研究强调市场机制、竞争与财政纪律。','Kiel Institute':'国际经济与贸易研究偏市场开放和规则导向。',Ifri:'法国独立国际事务研究，风格接近外交政策建制传统。',IDDRI:'以气候、生物多样性和可持续转型为中心，呈绿色进步取向。',SIPRI:'独立和平、安全与军控数据研究，通常不作左右划分。',PRIO:'学术型和平与冲突研究，通常不作党派归类。',HCSS:'战略与安全风险研究，风格偏实务和情景分析。',Clingendael:'机构自述为独立荷兰智库兼外交学院，以政策分析和培训为主，不宜按左右党派归类。',Elcano:'西班牙国际事务平台，整体重视欧洲一体化与多边合作。',FIIA:'受芬兰议会支持的独立研究机构，定位偏公共政策服务。',NUPI:'挪威公共研究机构，采用非党派学术研究取向。',IAI:'意大利国际事务研究，长期重视欧洲一体化与多边主义。'};
export const data=r.map((x,i)=>{let website=U+'www.'+x[8]+'/';return{id:i,short:x[0],name:x[1],full:x[2],country:x[3],city:x[4],region:x[3]==='美国'?'美国':x[3]==='英国'?'英国':'欧洲大陆',type:S[T[x[0]]??7],topics:(D[x[0]]||x[6]).split('|'),roles:(R[x[0]]||'研究型').split('|'),summary:x[7],website,source:U+'www.'+x[8]+'/'+x[9],funding:F[x[0]]?.[0]||'',fundingSource:F[x[0]]?.[1]||'',stance:P[x[0]],stanceNote:PD[x[0]],stanceSource:U+'www.'+x[8]+'/'+x[9],rss:'https://news.google.com/rss/search?q='+encodeURIComponent('site:'+x[8])+'&hl=en-US&gl=US&ceid=US:en',verified:'2026-09-20'}});
