module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  globals: {
    defineOptions: 'readonly'
  },
  rules: {
    // vue 文件命名必须两个单词或以上
    'vue/multi-word-component-names': 'off',
    // vue 每行最大属性数量
    'vue/max-attributes-per-line': 'off'
  }
}
