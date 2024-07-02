# generate-api

## 使用

```js
import generateApi from 'generate-swagger-api'
import path from 'path'

generateApi({
  // swagger json文件路径（可以是http(s)://xxx）
  url: path.resolve(__dirname, './mocks/v2.json'),
  // 输出api js文件路径
  outPut: path.resolve(__dirname, './apis.js'),
  // 基础service路径，用作string写入模板
  servicePath: '@/utils/services',
})
```
