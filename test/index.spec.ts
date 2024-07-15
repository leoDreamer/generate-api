import * as path from 'path'
import generateApi from '../src'

describe('app', () => {
  xit('should generate openapi v2', async () => {
    generateApi({
      url: path.resolve(__dirname, './mocks/local-test2.json'),
      outPut: path.resolve(__dirname, './apis-v2.js'),
      servicePath: '@/utils/services',
    })
  })
  xit('without jsDoc', async () => {
    generateApi({
      url: path.resolve(__dirname, './mocks/local-test2.json'),
      outPut: path.resolve(__dirname, './apis-v2-without-doc.js'),
      servicePath: '@/utils/services',
      generateRequestDoc: false,
    })
  })
  it('should generate openapi v3', async () => {
    generateApi({
      url: path.resolve(__dirname, './mocks/v3.json'),
      outPut: path.resolve(__dirname, './apis-v3.js'),
      servicePath: '@/utils/services',
    })
  })
})
