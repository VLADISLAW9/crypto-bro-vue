<script setup lang="ts">
import { formatCurrency } from '@/utils/helpers';
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
        <div
          v-for="coin in stats.bestCoins"
          :key="coin.uuid"
          class="flex bg-surface-800 px-2 py-1 rounded-2xl items-center gap-2"
        >
          <img class="w-8 h-8 rounded-full" :src="coin.iconUrl" alt="coin" />
          <div class="flex flex-col">
            <span class="text-sm font-bold">{{ coin.name }}</span>
            <span class="text-sm text-gray-500">{{ coin.symbol }}</span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h1 class="text-xl font-bold mb-5">Новейшие монеты</h1>
      <div class="flex flex-col gap-5">
        <div
          v-for="coin in stats.newestCoins"
          :key="coin.uuid"
          class="flex bg-surface-800 px-2 py-1 rounded-2xl items-center gap-2"
        >
          <img class="w-8 h-8 rounded-full" :src="coin.iconUrl" alt="coin" />
          <div class="flex flex-col">
            <span class="text-sm font-bold">{{ coin.name }}</span>
            <span class="text-sm text-gray-500">{{ coin.symbol }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
