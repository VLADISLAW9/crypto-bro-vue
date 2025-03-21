import { eslint } from '@siberiacancode/eslint';

export default eslint({
  typescript: true,
  react: false,
  vue: true,
  rules: {
    'vue/singleline-html-element-content-newline': 'off'
  }
});
