# 研究入口登记表

这是“气候与可持续前沿”的**唯一来源配置**。自动检索从这些官方专题页开始；它不再要求逐个浏览机构首页。每行的主入口与备用入口也会直接显示在专题页相应机构卡片下，文字即该入口的网页标题。所有候选条目仍须人工确认，才会发布到 `dist/frontier.json`。

机器可读版本：[`data/research-entry-registry.json`](../data/research-entry-registry.json)。最后核验：2026-09-26。

| 机构 | 主入口（自动检索） | 备用入口（补漏） | 主题侧重 | 检索说明 |
|---|---|---|---|---|
| WRI | [Climate](https://www.wri.org/climate) | [Insights](https://www.wri.org/insights) | 气候与能源、可持续发展、绿色金融 | 只保留报告、研究、数据与实质分析；AI 需与气候/能源直接交叉。 |
| CPI | [Climate Finance](https://www.climatepolicyinitiative.org/topics/climate-finance/) | [Climate Finance Tracking](https://www.climatepolicyinitiative.org/the-programs/climate-finance-tracking/) | 绿色金融、气候与能源 | 资金流数据更新可作为“信号”，不是自动入选文章。 |
| LSE Grantham | [Research areas](https://www.lse.ac.uk/granthaminstitute/research-areas/) | [Publications](https://www.lse.ac.uk/granthaminstitute/publications/) | 气候与能源、可持续发展、绿色金融 | 优先气候经济、治理、适应和可持续金融。 |
| E3G | [Latest](https://www.e3g.org/latest/) | [Finance & Resilience](https://www.e3g.org/our-work/finance-amp-resilience/) | 气候与能源、绿色金融 | 主入口的媒体引述必须剔除，只留 E3G 自署研究。 |
| Bruegel | [Energy and climate policy](https://www.bruegel.org/topics/energy-and-climate-policy) | [Sustainable finance](https://www.bruegel.org/keyword/sustainable-finance) | 气候与能源、绿色金融 | 重点看欧洲能源、碳市场、产业政策；AI 为观察项。 |
| CEPS | [Energy, climate change and the environment](https://www.ceps.eu/ceps-topic/energy-climate-change-environment/) | [AI, digitalisation and innovation](https://www.ceps.eu/ceps-topic/ai-digitalisation-innovation/) | 气候与能源、可持续发展、AI＋可持续 | 两入口交叉时优先；活动页不入选。 |
| IDDRI | [Climate](https://www.iddri.org/en/publications-and-events/climate) | [Publications and Events](https://www.iddri.org/en/publications-and-events) | 气候与能源、可持续发展、绿色金融 | 备用入口须按 Climate、Energy、Financing 等主题过滤。 |
| ODI Global | [Environment](https://odi.org/en/topics/environment/) | [Climate finance](https://odi.org/en/topics/climate-finance/) | 气候与能源、可持续发展、绿色金融 | 侧重全球南方、发展融资、适应和公正转型。 |
| Chatham House | [Environment](https://www.chathamhouse.org/topics/environment) | [Environment and Society Centre](https://www.chathamhouse.org/about-us/our-departments/environment-and-society-centre) | 气候与能源、可持续发展 | 媒体文章只能作线索，须回溯至原始研究。 |
| CSIS | [Energy Security and Climate Change Program — Analysis](https://www.csis.org/programs/energy-security-and-climate-change-program/analysis) | [Energy and Sustainability](https://www.csis.org/topics/energy-and-sustainability) | 气候与能源、AI＋可持续 | 不再从 CSIS 首页泛搜；AI 只保留电网、数据中心、关键矿产等直接交叉内容。 |
| PIIE | [Climate Change and Environment](https://www.piie.com/research/economic-issues/climate-change-and-environment) | [Energy](https://www.piie.com/research/economic-issues/energy) | 气候与能源、绿色金融 | 关注气候宏观经济、贸易、碳边境调节与银行审慎监管。 |

## 给每周工作流的规则

1. 先抓主入口过去 7 天的新增内容；主入口无更新或数量不足时，再查备用入口。
2. 只纳入报告、工作论文、政策简报、研究文章、数据与追踪工具，或有实质分析的评论。
3. 剔除活动、招聘、捐赠、纯机构新闻和仅媒体引述；同一 canonical URL 只保留一次。
4. “AI＋可持续”必须同时满足 AI/人工智能/算法/数据中心/数字基础设施，以及气候/能源/环境/可持续/绿色金融两类词的交叉条件。
5. 自动阶段只生成候选稿；人工可对每条执行“保留 / 删除 / 改写 / 改标签”。确认后才更新公开专题页与 RSS。

> “观察”表示该机构不是该主题的专门来源：只在存在明确交叉研究时收录，不能为了凑主题而纳入。
