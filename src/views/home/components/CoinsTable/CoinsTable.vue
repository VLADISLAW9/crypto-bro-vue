<script setup lang="ts">
import { Button, Column, DataTable } from 'primevue';

import { useGetCoinsQuery } from '@/utils/api/hooks';
import { formatCurrency } from '@/utils/helpers';

const getCoinsQuery = useGetCoinsQuery();

const toggleFavorite = () => {
  console.log('sdsadsadsadsadsd');
};

const navigateToCoin = () => {};
</script>

<template>
  <div class="w-[60%]">
    <DataTable
      :value="getCoinsQuery.data.value?.data.data.coins"
      show-gridlines
      paginator
      :rows="7"
    >
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
      <Column field="actions" header="Действия" style="width: 1%">
        <template #body="">
          <div class="flex">
            <Button
              icon="pi pi-star"
              severity="contrast"
              variant="text"
              rounded
              @click="toggleFavorite"
            />
            <Button
              icon="pi pi-external-link"
              severity="contrast"
              variant="text"
              rounded
              @click="navigateToCoin"
            />
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>
