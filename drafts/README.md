# 气候与可持续前沿：待审稿

这个目录保存自动检索产生的候选稿，不会随 `dist/` 部署到公开网站。

后续自动检索应只从 [`docs/RESEARCH-ENTRY-REGISTRY.md`](../docs/RESEARCH-ENTRY-REGISTRY.md) 登记的官方专题入口开始，而不是逐个浏览机构首页，并读取 `data/research-entry-registry.json` 的主入口、备用入口与筛选规则。

## 每周操作

1. 自动任务生成过去 7 天的候选条目，并按 `draft-template.json` 的字段整理。
2. 编辑逐条标记保留、改写、改标签或剔除；只使用官方原文能支持的表述。
3. 将确认后的条目写入 `dist/frontier.json` 的 `items`，更新本期标题和说明。
4. 将相同的已确认条目写入 `dist/frontier-rss.xml`，再发布网站。

候选稿中的研究观点必须明确归属于原机构；未经确认的条目不得进入公开文件。
