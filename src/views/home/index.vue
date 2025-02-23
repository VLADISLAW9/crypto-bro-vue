<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { getCoinList } from '@/utils/api/requests';

const coinList = ref<any[]>([]);

onMounted(async () => {
  const res = await getCoinList();

  console.log(res);
});
</script>

<template>
  <h1 class="text-2xl font-bold">Главная</h1>
</template>
1
