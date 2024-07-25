# generate-api

### ⚠️ This project is no longer maintained.

## ⚠️ This project is no longer maintained.

# ⚠️ This project is no longer maintained.

# ⚠️ Move to [@cqfe/generate-api](https://www.npmjs.com/package/@cqfe/generate-api)

## Description

generate api for axios, based on swagger json.support `Swagger2.0`&`OpenAPI3.0`.

## Useage

```js
// scripts/gen-api.mjs
import generateApi from 'generate-swagger-api'
import path from 'path'

generateApi.default({
  // path of swagger json file (can be http(s)://xxx)
  url: path.resolve(process.cwd(), './mocks/v2.json'),
  // output api js file path
  outPut: path.resolve(process.cwd(), './apis.js'),
  // basic service path, used for string writing template, content should be an instance of axios
  servicePath: '@/utils/services',
  // be true if you want to generate jsDoc for request body
  generateRequestDoc: true,
  // be true if you want to generate jsDoc for response body, not work still now
  generateResponseDoc: false,
})
```
