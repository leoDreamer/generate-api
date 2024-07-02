import { TemplateRequestCodeParams } from 'openapi'
import { IFieldItem, IResolveRequest } from './resolve-request'

interface ITmpRequestFn extends TemplateRequestCodeParams {
  description?: string
}
export function tmpRequestFn(
  { name, url, method }: ITmpRequestFn,
  docs: string,
  path?: IFieldItem[],
  query?: IFieldItem[],
  body?: IFieldItem[],
) {
  // 导出函数的参数
  let requestParamsStr = ''
  if (path) requestParamsStr += 'path'
  if (query) requestParamsStr += (requestParamsStr ? ', ' : '') + 'query'
  if (body) requestParamsStr += (requestParamsStr ? ', ' : '') + 'body'
  // 修改path参数的url
  const patchedUrl = url.includes('{')
    ? `\`${url.replace(/{([^}]+)}/g, (_, key) => '${path.' + key + '}')}\``
    : `'${url}'`

  // 生成函数
  return `${docs}
export function ${name}(${requestParamsStr}) {
    return service({
        url: ${patchedUrl},
        method: '${method}',
        ${query ? 'params: query,' : ''}${body ? 'data: body,' : ''}
    });
};\n`
}

export function tmpImportFn(servicePath: string) {
  return `import service from '${servicePath}t';\n\n`
}
export function tmpRequestDocFn(description: string, requestParams: IResolveRequest, requestDoc = true) {
  let doc = `/**
 * ${description || ''}`
  if (requestDoc) {
    ;(Object.keys(requestParams) as unknown as Array<keyof IResolveRequest>).forEach((key) => {
      requestParams[key]?.forEach((each) => {
        doc += `\n * @param {${each.type}} ${key}.${each.key} - ${each.description || ''}`
      })
    })
  }

  doc += '\n */'
  return doc
}
