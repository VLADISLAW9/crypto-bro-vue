<script setup lang="ts">
import { Column, DataTable } from 'primevue';
import { onMounted, ref } from 'vue';

import { getCoins } from '@/utils/api/requests';
import { formatCurrency } from '@/utils/helpers';

const coinList = ref<CoinListItem[]>([]);
const loading = ref(false);

onMounted(async () => {
  loading.value = true;

  const getCoinsResponse = await getCoins();

  if (getCoinsResponse.data.status !== 'success') return;

  coinList.value = getCoinsResponse.data.data.coins;
  loading.value = false;
});
</script>

<template>
  <div class="w-[60%]">
    <DataTable v-model:loading="loading" :value="coinList" show-gridlines paginator :rows="8">
      <Column field="rank" header="#" style="width: 5%" />
      <Column field="name" header="Монета" style="width: 30%">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <img class="w-8 h-8 rounded-full" :src="data.iconUrl" alt="coin" />
            <div class="flex flex-col">
              <span>{{ data.name }}</span>
              <span class="text-sm text-gray-500">{{ data.symbol }}</span>
            </div>
          </div>
        </template>
      </Column>
      <Column field="price" header="Цена" style="width: 20%">
        <template #body="{ data }">
          {{ formatCurrency(data.price) }}
        </template>
      </Column>
      <Column field="marketCap" header="Капитализация" style="width: 25%">
        <template #body="{ data }">
          {{ formatCurrency(data.marketCap) }}
        </template>
      </Column>
    </DataTable>
  </div>
</template>
