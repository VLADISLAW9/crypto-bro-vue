import type { RouteRecordRaw } from 'vue-router';

import Aura from '@primeuix/themes/aura';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import { ROUTES } from './utils/constants';

import './index.css';

const routes: RouteRecordRaw[] = [
  { path: ROUTES.HOME, component: () => import('./views/home/index.vue') },
  { path: `${ROUTES.COIN}/:uuid`, component: () => import('./views/coin/index.vue') },
  { path: ROUTES.FAVORITE, component: () => import('./views/favorite/index.vue') }
];

const pinia = createPinia();

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes
});

app.use(pinia);

app.use(router);

app.use(VueQueryPlugin);

app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});

app.mount('#app');
