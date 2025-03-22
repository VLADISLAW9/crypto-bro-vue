import { computed } from 'vue';

import { useGetCoinsQuery } from '@/utils/api/hooks';

export const useHomeView = () => {
  const getStatsQuery = useGetCoinsQuery();

  return { coins: computed(() => getStatsQuery.data.value?.data.data.coins ?? []) };
};
