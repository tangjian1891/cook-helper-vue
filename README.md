# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

npm i axios fastclick mitt pinia ua-parser-js@1.0.2 vant vue-router

npm i autoprefixer postcss-pxtorem sass -D

额外插件
vite-plugin-style-import vant 的 css
vite-plugin-html html 模板


#---------------------
关于 vscode prettier 插件和项目的 prettier 依赖的问题。
vscode 的插件，读取配置优先级为.prettierrc > workspace settings.json>user settings.json 注意文件得 format 设置,配置了.prettierrc 就不需要 workspace settings.json 中配置了
但是 vscode 得仅仅局限于编辑器，想自动跑项目文件所有代码得话，一个个文件格式化太慢了

需要安装 prettier 依赖插件，这样就能使用 prettier --write {src/\*_/_.{js,vue,ts},!index.html} 统一格式化文件了
npm i prettier -D

#------------------
 关于eslint配置
 eslint   eslint本身核心
 eslint-plugin-vue  vue官方eslint插件
 @typescript-eslint/eslint-plugin  typescript的插件
 @typescript-eslint/parser        typescript对应解析器
 vite-plugin-eslint  vite运行时的eslint检查插件，需要在vite.
 
 还需要在.eslintrc.js中做细化规则配置   参考:https://juejin.cn/post/7002869322737516581#heading-1


rfc 222 是 script set 与 ref sugar

后来 222
分化为 227（已经拉取合并）

228ref sugar（继续讨论） ref:count

368 新的 ref sugar count = $ref(1)
