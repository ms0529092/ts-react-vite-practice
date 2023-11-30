import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite';
import path from 'path';

import react from '@vitejs/plugin-react'; //vite支援react開發 插件
import { visualizer } from 'rollup-plugin-visualizer'; //vite 打包分析 插件
import { createHtmlPlugin } from 'vite-plugin-html'; // vite為html提供ejs模板功能 插件
import viteCompression from 'vite-plugin-compression'; //使用gzip或者brotli來壓縮資源 插件

const config = () => defineConfig(({ command, mode })=>{
    const isDev = mode === 'development';
    
    return {
        // 啟動模式
        mode: isDev ? 'development' : 'production',
        // vite-dev-server設定(該設定含proxy)
        server: {
            host:'0.0.0.0',
            port:8787, //設定dev-server port號
            open: false, //設定是否啟用server時需要額外開啟視窗
            strictPort:true, //設定是否當設定port號被佔用時直接跳下一個port號
            hmr: true, //熱更新
            proxy:{    // 代理伺服器
                '/apiNinja':{
                    target:'https://api.api-ninjas.com', //代理伺服器欲發送的真實目標
                    changeOrigin:true,  //是否覆寫host頭
                    rewrite:(path) => path.replace(/^\/apiNinja/, '') //替換路徑
                }
            }
        },
        // 解析路徑
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '@public': path.resolve(__dirname, 'public')
            }
        },
        // 插件
        plugins:[
            react(), // vite對react 的依賴插件
            splitVendorChunkPlugin(), // 啟用 “代碼分割器“
            createHtmlPlugin({
                minify: true, //是否壓縮
                entry: 'src/main.tsx', //這裡寫的話index.html中的body就不用引入react js/ts了
                template : 'index.html', //修改 index.html位置
                inject: {  // 需要注入 index.html ejs 模版的資料
                    data: {
                        title: '你媽媽知道你在這裡寫廢code嘛？'
                    }
                }
            }),
            viteCompression({ //使用 gzip 或者 brotli 來壓縮資源
                filter:/\.(js|json|css|svg|woff|ttf|eot|otf)$/i,
            }),
            visualizer() //vite支援react開發 插件
        ]
    }
})

export default config();