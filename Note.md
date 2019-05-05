### NVM和N (node 的包管理器)

1. 安装好nvm之后，会在`~/.nvm/version/node`
2. 而n的node包下载在`/usr/local/n/version/node`里面
3. 切换node版本时, node可能被nvm接管了。所以，n切换失败。
4. 通过nvm管理的node.js , npm install下载的包在`.nvm/versions/node/v10.14.0/lib/node_modules`

