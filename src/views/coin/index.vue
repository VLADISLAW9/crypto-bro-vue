<script setup lang="ts">
import { useRoute } from 'vue-router';

import { useGetCoinQuery } from '@/utils/api/hooks';

const route = useRoute();

const getCoinQuery = useGetCoinQuery({ params: { uuid: route.params.uuid } });
</script>

<template>
  <div v-if="getCoinQuery.isLoading">
    <p>Loading...</p>
  </div>
  <div v-if="getCoinQuery.data.value?.data.data.coin">123</div>
</template>
