import * as path from 'path'
import GenerateApi from '../src'

describe('app', () => {
  it('should generate openapi v2', async () => {
    GenerateApi({
      url: path.resolve(__dirname, './mocks/v2.json'),
      outPut: path.resolve(__dirname, './apis.js'),
      servicePath: '@/utils/services',
    })
  })
})
//     await OpenAPIRunner.run([
//       {
//         url: path.resolve(__dirname, '../../../openapi_v2.json'),
//         namespace: 'artist',
//         plugins: [
//           new OpenAPITransformAppPlugin({
//             apiDir: path.resolve(__dirname, './fixtures/apis'),
//             serviceDir: path.resolve(__dirname, './fixtures/services'),
//             dtsDir: path.resolve(__dirname, './fixtures/interfaces'),
//           }),
//         ],
//       },
//     ])
//     const apiFileContent = await fs.readFile(path.resolve(__dirname, './fixtures/apis/artist.ts'), 'utf-8')
//     const serviceFileContent = await fs.readFile(path.resolve(__dirname, './fixtures/services/artist.ts'), 'utf-8')
//     expect(apiFileContent.trim()).not.toEqual('')
//     expect(serviceFileContent.trim()).not.toEqual('')
//   })

//   it('should generate app client with openapi v3', async () => {
//     await OpenAPIRunner.run([
//       {
//         url: path.resolve(__dirname, '../../../openapi_v3.json'),
//         namespace: 'pets-store',
//         plugins: [
//           new OpenAPITransformAppPlugin({
//             apiDir: path.resolve(__dirname, './fixtures/apis'),
//             serviceDir: path.resolve(__dirname, './fixtures/services'),
//             dtsDir: path.resolve(__dirname, './fixtures/interfaces'),
//             writeFileMode: WriteFileMode.overwrite,
//           }),
//         ],
//       },
//     ])
//     const apiFileContent = await fs.readFile(path.resolve(__dirname, './fixtures/apis/pets-store.ts'), 'utf-8')
//     const serviceFileContent = await fs.readFile(path.resolve(__dirname, './fixtures/services/pets-store.ts'), 'utf-8')
//     expect(apiFileContent.trim()).not.toEqual('')
//     expect(serviceFileContent.trim()).not.toEqual('')
//   })
// })
