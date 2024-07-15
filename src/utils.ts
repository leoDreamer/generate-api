import { existsSync, rmSync, writeFileSync } from 'fs'

// 大写首字母
export function upperCaseFirst(str: string) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
}

// 初始化文件
export function initOutPutFile(outPut: string, servicePath: string) {
  const isExits = existsSync(outPut)
  if (isExits) rmSync(outPut, { recursive: true })
  writeFileSync(outPut, `import service from '${servicePath}'\n`)
}
