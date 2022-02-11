module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    "vue/setup-compiler-macros": true, //编译器宏环境
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    // add more generic rulesets here, such as:
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    // "prettier", //需要 eslint-config-prettier 支持才行
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    "@typescript-eslint/no-explicit-any": "off", //允许声明不赋值
    "vue/multi-word-component-names": "off", //组件无需多单词
    "vue/require-prop-types": "off", //props属性不强制
    "vue/max-attributes-per-line": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/html-self-closing": "off", //允许自闭标签
    "vue/valid-v-for": "off",
    "@typescript-eslint/no-empty-function": "off",
    "vue/component-definition-name-casing": "off",
    "@typescript-eslint/no-var-requires": "off",
    "vue/comment-directive": "off",
    "no-useless-escape": "off",
    "@typescript-eslint/no-this-alias": "off",
  },
};
