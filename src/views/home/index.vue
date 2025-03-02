<script setup lang="ts">
import { Column, DataTable } from 'primevue';
import { onMounted, ref } from 'vue';

import { getCoins } from '@/utils/api/requests';

const coinList = ref<CoinListItem[]>([]);

onMounted(async () => {
  const getCoinsResponse = await getCoins();

  if (getCoinsResponse.data.status !== 'success') return;

  coinList.value = getCoinsResponse.data.data.coins;
});
</script>

<template>
  <h1 class="text-2xl font-bold mb-5">Главная</h1>
  <div class="w-[50%] h-[400px]">
    <h2 class="text-lg font-bold mb-5">Топ криптовалют</h2>
    <DataTable :value="coinList" show-gridlines paginator :rows="8" class="h-full">
      <Column field="rank" header="#" style="width: 5%" />
      <Column field="name" header="Монета" style="width: 30%">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <img class="w-8 h-8 rounded-full" :src="data.iconUrl" alt="coin" />
            <span>{{ data.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="symbol" header="Символ" style="width: 15%" />
      <Column field="price" header="Цена" style="width: 20%" />
      <Column field="marketCap" header="Капитализация" style="width: 25%" />
    </DataTable>
  </div>
</template>
