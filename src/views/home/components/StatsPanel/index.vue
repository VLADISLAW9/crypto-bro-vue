<script setup lang="ts">
import { formatCurrency } from '@/utils/helpers';

import { CoinCard } from './components';
import { useStatsPanel } from './hooks';

const { stats } = useStatsPanel();
</script>

<template>
  <div v-if="stats" class="w-[350px] flex flex-col gap-5">
    <div>
      <h1 class="text-xl font-bold mb-5">Статистика</h1>
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-2">
          <span class="text-sm text-gray-500">Всего монеток:</span>
          <span class="text-sm font-bold"> {{ stats.totalCoins }} шт.</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-sm text-gray-500">Общая капитализация:</span>
          <span class="text-sm font-bold">{{
            formatCurrency(Number(stats.totalMarketCap || 0))
          }}</span>
        </div>
      </div>
    </div>
    <div>
      <h1 class="text-xl font-bold mb-5">Лучшие монеты</h1>
      <div class="flex flex-col gap-5">
        <CoinCard v-for="coin in stats.bestCoins" :key="coin.uuid" :coin="coin" />
      </div>
    </div>
    <div>
      <h1 class="text-xl font-bold mb-5">Новейшие монеты</h1>
      <div class="flex flex-col gap-5">
        <CoinCard v-for="coin in stats.newestCoins" :key="coin.uuid" :coin="coin" />
      </div>
    </div>
  </div>
</template>
