const url = "https://uatinsured.mingya.com.cn"; // 测试
import { defineConfig, loadEnv } from "vite";
import { createStyleImportPlugin, VantResolve } from "vite-plugin-style-import"; //vite-plugin-style-import插件有bug  https://github.com/anncwb/vite-plugin-style-import/issues/52
import vue from "@vitejs/plugin-vue";
import autoprefixer from "autoprefixer";
import pxtorem from "postcss-pxtorem";
import eslintPlugin from "vite-plugin-eslint";
//import legacy from "@vitejs/plugin-legacy";
import { createHtmlPlugin } from "vite-plugin-html";
// https://vitejs.dev/config/
export default ({ mode }) => {
  console.log("mode:" + mode);
  const env = loadEnv(mode, "./");
  let jsCDN = [
    {
      name: "crypto-js.min.js",
      url: "https://cdn.jsdelivr.net/npm/crypto-js@4.0.0/crypto-js.min.js",
    },
    {
      name: "qingstor-sdk.min.js",
      url: "https://cdn.jsdelivr.net/npm/qingstor-sdk@3.1.1/dist/qingstor-sdk.min.js",
    },

    {
      name: "rrweb-record-salespolicy.min.js",
      url: "https://cdn.jsdelivr.net/gh/it-fuhao/CDN@1.0/rrweb-record-salespolicy.min.js",
    },
  ];
  if (env.VITE_APP_MODE === "dev" || env.VITE_APP_MODE === "uat") {
    jsCDN = [
      {
        name: "eruda.min.js",
        url: "https://cdn.jsdelivr.net/npm/eruda@2.4.1/eruda.min.js",
      },
      ...jsCDN,
    ];
  }
  return defineConfig({
    server: {
      proxy: {
        "/esapp": {
          target: url,
          changeOrigin: true,
          rewrite: path => path.replace("^/esapp", "esapp"),
        },
      },
    },
    plugins: [
      vue(),
      eslintPlugin({ include: ["src/**/*.js", "src/!**!/!*.vue", "src/!**/!*.ts"] }),
      //legacy({ targets: ["Android >= 5", "iOS >= 9"] }), // 不支持ESM的非现在浏览器使用legacy，minify默认为true压缩混淆，理解为向后编译到es5或对应移动端版本
      // ios15  500kb   ios9 580kb 其中IOS10是分水岭，    安卓直接拉胯，无论5,11都需要大量兼容
      createStyleImportPlugin({
        resolves: [VantResolve()],
        // libs: [
        //   {
        //     libraryName: "vant",
        //     esModule: true,
        //     resolveStyle: name => `vant/es/${name}/style`,
        //   },
        // ],
      }),
      createHtmlPlugin({
        inject: {
          data: {
            title: "cook-helper",
            jsCDN,
          },
        },
        minify: true,
      }),
    ],
    css: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ["*"],
            minPixelValue: 1.1,
            exclude: "node_modules/element-plus|src/multiplePage",
          }),
          {
            //取消打包报错 warning: "@charset" must be the first rule in the file
            postcssPlugin: "internal:charset-removal",
            AtRule: {
              charset: atRule => {
                if (atRule.name === "charset") {
                  atRule.remove();
                }
              },
            },
          },
        ],
      },
    },
    build: {
      target: ["chrome63", "ios11", "es2015"],
      cssTarget: ["chrome63", "ios11", "es2015"],
      outDir: "groupweb",
      rollupOptions: {
        output: {
          chunkFileNames: "static/js/[name]-[hash].js", //分离文件https://github.com/vitejs/vite/issues/3815
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]",
        },
      },
      minify: "terser", //打包方式确认  https://juejin.cn/post/7044876656049127437
      terserOptions: {
        //打包方式描述
        compress: {
          drop_console: env.VITE_APP_MODE === "prod",
          drop_debugger: env.VITE_APP_MODE === "prod",
        },
      },
      // minify: false,
    },
    base: env.VITE_APP_MODE === "dev" ? "" : "/groupweb",
  });
};

// https://juejin.cn/post/7028137821269393438#heading-0

// 直接支持原生 module的版本
// Chrome >=61
// Firefox >=60
// Safari >=11
// Edge >=16
