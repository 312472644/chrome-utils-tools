/** rollup打包配置 */
import { terser } from "rollup-plugin-terser";
import babel from 'rollup-plugin-babel';

export default {
    input: './utils/index.js',
    output: {
        file: './dist/dist.min.js',
        format: 'umd',
        name: 'chromeUtils'
    },
    plugins: [
        // 压缩js文件
        terser({ compress: { drop_console: true } }),
        // 高级特性转化(es6->es5)
        babel()
    ]
}