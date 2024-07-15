import * as path from 'path'
import generateApi from '../src'

describe('app', () => {
  xit('should generate openapi v2', async () => {
    generateApi({
      url: path.resolve(__dirname, './mocks/v2.json'),
      outPut: path.resolve(__dirname, './apis-v2.js'),
      servicePath: '@/utils/services',
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
