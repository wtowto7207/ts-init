// eslint-disable-next-line @typescript-eslint/no-var-requires
// const tsImportPluginFactory = require("ts-import-plugin");
// module.exports = {
//   configureWebpack: {
//     module: {
//       rules: [
//         {
//           test: /\.(jsx|tsx|js|ts)$/,
//           loader: "ts-loader",
//           options: {
//             transpileOnly: true,
//             getCustomTransformers: () => ({
//               before: [
//                 tsImportPluginFactory({
//                   libraryName: "vant",
//                   libraryDirectory: "es",
//                   style: true
//                 })
//               ]
//             }),
//             compilerOptions: {
//               module: "esnext"
//             }
//           },
//           exclude: /node_modules/
//         }
//       ]
//     }
//   }
// };

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/jenkins' : '/'
}
