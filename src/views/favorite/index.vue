<script setup lang="ts">
import { CoinsTable } from '@/components';

import { useFavoriteView } from './hooks';

const { favoriteCoins } = useFavoriteView();
</script>

<template>
  <h1 class="text-2xl font-bold mb-5">Избранное</h1>
  <CoinsTable :coins="favoriteCoins" />
</template>
