<script setup lang="ts">
import { useNavbar } from './hooks';

const { links } = useNavbar();
</script>

<template>
  <aside class="items-center text-center p-5 h-[calc(100vh-180px)] bg-surface-900 rounded-3xl">
    <i class="pi pi-prime !text-[30px]" />
    <div class="flex flex-col gap-4 mt-8">
      <router-link
        v-for="link in links"
        :key="link.route"
        :to="link.route"
        class="flex flex-col items-center p-3 rounded-2xl hover:bg-surface-800 transition-colors"
        :class="{ 'bg-surface-700': $route.path === link.route }"
      >
        <i class="text-xl" :class="[link.icon]" />
      </router-link>
    </div>
  </aside>
</template>
