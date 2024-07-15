# generate-api

## 使用

```js
// scripts/gen-api.mjs
import generateApi from 'generate-swagger-api'
import path from 'path'

generateApi.default({
  // swagger json文件路径（可以是http(s)://xxx）
  url: path.resolve(process.cwd(), './mocks/v2.json'),
  // 输出api js文件路径
  outPut: path.resolve(process.cwd(), './apis.js'),
  // 基础service路径，用作string写入模板
  servicePath: '@/utils/services',
})
```
