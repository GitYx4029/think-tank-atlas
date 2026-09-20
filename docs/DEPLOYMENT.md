# 部署说明

## GitHub Pages

仓库包含 `.github/workflows/deploy-pages.yml`。

1. 在 GitHub 仓库 **Settings → Pages** 中选择 **GitHub Actions**。
2. 推送到 `main` 后，Actions 将 `dist/` 发布为 GitHub Pages。
3. Pages 的公开地址通常为：`https://GitYx4029.github.io/think-tank-atlas/`。

## 其他静态托管

任意静态托管服务均可部署 `dist/` 目录。无需安装依赖、环境变量或数据库。

## 本地验证

```bash
npm run dev
```

如修改了 `dist/app.js` 或 `dist/data.js`，可使用：

```bash
node --check dist/app.js
node --input-type=module -e "import('./dist/data.js')"
```
