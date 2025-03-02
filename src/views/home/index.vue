<script setup lang="ts">
import { CoinsTable, StatsPanel } from './components';
</script>

<template>
  <h1 class="text-2xl font-bold mb-5">Главная</h1>
  <div class="flex justify-between">
    <CoinsTable />
    <StatsPanel />
  </div>
</template>
