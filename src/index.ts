import { writeFileSync } from 'fs'
import { TemplateRequestCodeParams, openapiGenerate } from 'openapi'
import { tmpImportFn, tmpRequestDocFn, tmpRequestFn } from './templates'
import resolveRequest from './resolve-request'

export interface Config {
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
async function GenerateApi(config: Config) {
  const { code } = await openapiGenerate({
    file: config.url,
    templateCodeBefore: () => tmpImportFn(config.servicePath),
    templateRequestCode: (base: TemplateRequestCodeParams, extra: any) => {
      const { parameters, description, summary } = extra.requestSwaggerData
      const requestParams = resolveRequest(parameters)
      const docs = tmpRequestDocFn(summary || description, requestParams)
      return tmpRequestFn(base, docs, requestParams.path, requestParams.query, requestParams.body)
    },
  } as any)
  writeFileSync(config.outPut, code)
}

export default GenerateApi
