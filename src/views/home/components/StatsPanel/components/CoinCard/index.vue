<script setup lang="ts">
import { Button } from 'primevue';

import { ROUTES } from '@/utils/constants';
import { useFavoriteCoinsStore } from '@/utils/stores';

interface CoinCardProps {
  coin: Coin;
}

const { coin } = defineProps<CoinCardProps>();

const { toggleFavoriteCoin, isFavoriteCoin } = useFavoriteCoinsStore();
</script>

<template>
  <div class="flex bg-surface-800 px-2 py-1 rounded-2xl items-center gap-2">
    <div class="flex items-center justify-between w-full">
      <div class="flex gap-3 items-center">
        <img class="w-8 h-8 rounded-full" :src="coin.iconUrl" alt="coin" />
        <div class="flex flex-col">
          <span class="text-sm font-bold">{{ coin.name }}</span>
          <span class="text-sm text-gray-500">{{ coin.symbol }}</span>
        </div>
      </div>
      <div class="flex items-center">
        <Button
          size="small"
          severity="contrast"
          variant="text"
          rounded
          :icon="isFavoriteCoin(coin.uuid) ? 'pi pi-star-fill' : 'pi pi-star'"
          @click="toggleFavoriteCoin(coin)"
        />
        <router-link :to="{ path: `${ROUTES.COIN}/${coin.uuid}` }">
          <Button
            size="small"
            icon="pi pi-external-link"
            severity="contrast"
            variant="text"
            rounded
          />
        </router-link>
      </div>
    </div>
  </div>
</template>
