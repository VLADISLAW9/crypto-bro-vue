import type { RouteRecordRaw } from 'vue-router';

import Aura from '@primeuix/themes/aura';
import { VueQueryPlugin } from '@tanstack/vue-query';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';
import { createMemoryHistory, createRouter } from 'vue-router';

import App from './App.vue';
import { ROUTES } from './utils/constants';

import './index.css';

const routes: RouteRecordRaw[] = [
  { path: ROUTES.HOME, component: () => import('./views/home/index.vue') },
  { path: ROUTES.COIN, component: () => import('./views/coin/index.vue') }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes
});

const app = createApp(App);

app.use(router);

app.use(VueQueryPlugin);

app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});

app.mount('#app');
