<script setup lang="ts">
import { CoinsTable } from '@/components';

import { StatsPanel } from './components';
import { useHomeView } from './hooks';

const { coins } = useHomeView();
</script>

<template>
  <h1 class="text-2xl font-bold mb-5">Главная</h1>
  <div class="flex justify-between">
    <CoinsTable :coins="coins" />
    <StatsPanel />
  </div>
</template>
