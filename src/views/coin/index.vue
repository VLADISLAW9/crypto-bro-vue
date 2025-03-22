<script setup lang="ts">
import { formatCurrency } from '@/utils/helpers';
import Chart from 'primevue/chart';

import { Button } from 'primevue';
import { useCoinView } from './hooks';

const { coin, coinChartData, isPending } = useCoinView();
</script>

<template>
  <div v-if="isPending">
    <p>Loading...</p>
  </div>
  <div v-else-if="coin">
    <div class="flex gap-10">
      <div class="flex w-[30%] flex-col gap-10">
        <div class="flex gap-3 items-center">
          <img class="w-7 h-7" :src="coin.iconUrl" alt="coin" />
          <div class="flex items-end gap-2">
            <h1 class="text-2xl font-bold">{{ coin.name }}</h1>
            <p class="text-gray-500 font-semibold">
              {{ coin.symbol }}
            </p>
          </div>
          <div class="bg-surface-800 px-2 py-0.5 rounded-2xl flex justify-center items-center">
            <p class="text-sm text-gray-300"># {{ coin.rank }}</p>
          </div>
        </div>
        <div>
          <h2 class="text-2xl font-bold">
            {{ formatCurrency(Number(coin.price)) }}
          </h2>
        </div>
        <div class="grid gap-3 grid-cols-2">
          <div class="border border-surface-800 rounded-2xl py-3 text-center">
            <p class="text-sm text-gray-500">Общая капитализация</p>
            <p class="text-sm font-bold">
              {{ formatCurrency(Number(coin.marketCap)) }}
            </p>
          </div>
          <div class="border border-surface-800 rounded-2xl py-3 text-center">
            <p class="text-sm text-gray-500">Объем за сутки</p>
            <p class="text-sm font-bold">
              {{ formatCurrency(Number(coin['24hVolume'])) }}
            </p>
          </div>
          <div class="border border-surface-800 rounded-2xl py-3 text-center">
            <p class="text-sm text-gray-500">FDV</p>
            <p class="text-sm font-bold">
              {{ formatCurrency(Number(coin.fullyDilutedMarketCap)) }}
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-5">
          <div class="flex items-center justify-between">
            <p class="font-semibold text-gray-500">Сайт</p>
            <Button
              rounded
              severity="secondary"
              size="small"
              :href="coin.websiteUrl"
              target="_blank"
            >
              <i class="pi pi-globe" />
              <span class="text-sm">Перейти</span>
            </Button>
          </div>
          <div class="flex items-center justify-between">
            <p class="font-semibold text-gray-500">Изменения в цене за 24 часа</p>
            <Button
              rounded
              variant="outlined"
              :severity="Number(coin.change) > 0 ? 'danger' : 'success'"
              size="small"
            >
              {{ Number(coin.change) > 0 ? '↓' : '↑' }}
              <span class="text-sm"> {{ Math.abs(Number(coin.change)) }} </span>
            </Button>
          </div>
        </div>
      </div>
      <div class="w-[70%]">
        <Chart class="h-full w-full" type="line" :data="coinChartData" />
      </div>
    </div>
  </div>
</template>
