module.exports = {
  env: {
    node: true,
    es2021: true
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/vue3-recommended',
    'standard',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
  }
}
