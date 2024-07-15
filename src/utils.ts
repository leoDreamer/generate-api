import { existsSync, rmSync, writeFileSync } from 'fs'

// 根据特殊字符分割字符串并转为驼峰命名
export function toCamelCase(str: string) {
  return str
    .replace(/{/g, '')
    .replace(/}/g, '')
    .replace(/[-_/]([a-z])/g, (match, p1) => p1.toUpperCase())
}

// 初始化文件
export function initOutPutFile(outPut: string, servicePath: string) {
  const isExits = existsSync(outPut)
  if (isExits) rmSync(outPut, { recursive: true })
  writeFileSync(outPut, `import service from '${servicePath}'\n`)
}
