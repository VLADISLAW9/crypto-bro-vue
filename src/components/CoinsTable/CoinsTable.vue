<script setup lang="ts">
import { Button, Column, DataTable } from 'primevue';

import { ROUTES } from '@/utils/constants';
import { formatCurrency } from '@/utils/helpers';

import { useCoinsTable } from './hooks';

interface CoinsTableProps {
  coins: CoinListItem[];
}

const { coins } = defineProps<CoinsTableProps>();

const { toggleFavorite, isFavoriteCoin } = useCoinsTable();
</script>

<template>
  <div class="w-[60%]">
    <DataTable :value="coins" show-gridlines paginator :rows="7">
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
        <template #body="{ data }">
          <div class="flex">
            <Button
              :icon="isFavoriteCoin(data.uuid) ? 'pi pi-star-fill' : 'pi pi-star'"
              severity="contrast"
              variant="text"
              rounded
              @click="() => toggleFavorite(data)"
            />
            <router-link :to="{ path: `${ROUTES.COIN}/${data.uuid}` }">
              <Button icon="pi pi-external-link" severity="contrast" variant="text" rounded />
            </router-link>
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>
