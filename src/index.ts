import { appendFileSync } from 'fs'
import { resolvePath } from './resolve'
import SwaggerParse from '@readme/openapi-parser'
import { isEmpty } from 'lodash'
import { initOutPutFile } from './utils'

export interface GenerateApiConfig {
  /**
   * The URL of the server to connect to.
   */
  url: string
  /**
   * The username for authentication.
   */
  outPut: string
  /**
   * The password for authentication.
   */
  servicePath: string
  /**
   * The password for authentication.
   */
  generateRequestDoc?: boolean
  /**
   * The password for authentication.
   */
  generateResponseDoc?: boolean
}

async function generateApi(config: GenerateApiConfig) {
  // 初始化输出文件
  initOutPutFile(config.outPut, config.servicePath)
  // 解析到的路由
  const { paths = {} } = await SwaggerParse.dereference(config.url)
  if (isEmpty(paths)) return
  Object.keys(paths).forEach((path: string) => {
    resolvePath(path, paths[path] as any, config.outPut)
  })
  appendFileSync(config.outPut, '\n')
}

export default generateApi
