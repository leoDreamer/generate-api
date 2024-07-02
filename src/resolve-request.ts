/* eslint-disable no-case-declarations */
import assert from 'assert'
import { pick } from 'lodash'

// 递归解析字段
// function parseField(key: string, field: any, parent?: string) {
//   const ret: any[] = []
//   switch (field.type) {
//     case 'string':
//     case 'boolean':
//     case 'integer':
//       ret.push(Object.assign({ key: `${parent ? 'parent' + '.' : ''}${key}` }, field))
//       break
//     case 'array':
//       if (!field.properties.properties) {
//       }
//       ret.push(
//         ...Object.keys(field.items.properties).map((arrKey) => {
//           return parseField(arrKey, field.items.properties[arrKey], key)
//         }),
//       )
//       break
//     case 'object':
//       if (!field.properties) {
//       }
//       ret.push(
//         ...Object.keys(field.properties).map((objKey) => {
//           return parseField(objKey, field.properties[objKey], key)
//         }),
//       )
//       break
//   }
//   return ret
// }

export interface IFieldItem {
  key: string
  type: string
  description: string
  enum?: string[]
}

export interface IResolveRequest {
  body?: Array<IFieldItem>
  query?: Array<IFieldItem>
  path?: Array<IFieldItem>
}

function parseObject(obj: Record<string, any>) {
  return Object.keys(obj).map((key) => ({
    key,
    ...pick(obj[key], 'type', 'description', 'enum'),
  }))
}

function parseArray(arr: Array<any>) {
  assert(Array.isArray(arr))
  // TODO properties
  return [
    {
      type: 'array',
      key: '',
      description: '',
    },
  ]
}

function parseSchema(schema: Record<string, any>) {
  switch (schema.type) {
    case 'object':
      return parseObject(schema.properties)
    case 'array':
      return parseArray(schema.items)
    default:
      return [
        {
          type: '',
          key: '',
          description: '',
        },
      ]
  }
}

export default function (parameters: Array<any>) {
  const ret: IResolveRequest = {}
  parameters.forEach((param) => {
    switch (param.in) {
      case 'body':
        ret.body = parseSchema(param.schema)
        break
      case 'path':
        const itemPath = {
          key: param.name,
          ...pick(param, 'type', 'description'),
        }
        if (ret.path) {
          ret.path.push(itemPath)
        } else {
          ret.path = [itemPath]
        }
        break
      case 'query':
        const itemQuery = {
          key: param.name,
          ...pick(param, 'type', 'description'),
        }
        if (ret.query) {
          ret.query.push(itemQuery)
        } else {
          ret.query = [itemQuery]
        }
        break
      default:
        // TODO - formData
        break
    }
  })
  return ret
}
