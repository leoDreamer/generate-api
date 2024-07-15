# generate-api

## 介绍

根据swagger json文件生成api.js文件，用于axios请求，目前支持`Swagger2.0`&`OpenAPI3.0`

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
  // 基础service路径，用作string写入模板，内容应为axios的实例
  servicePath: '@/utils/services',
  // 是否生成请求体的jsDoc
  generateRequestDoc: true,
  // 是否生成响应体的jsDoc
  generateResponseDoc: false,
})
```
