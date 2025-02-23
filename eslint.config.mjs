import { eslint } from '@siberiacancode/eslint';

export default eslint({
  typescript: true,
  vue: true,
  rules: {
    'vue/singleline-html-element-content-newline': 'off'
  }
});
