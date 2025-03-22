import { computed } from 'vue';

import { useGetStatsQuery } from '@/utils/api/hooks';

export const useStatsPanel = () => {
  const getStatsQuery = useGetStatsQuery();

  return {
    stats: computed(() => getStatsQuery.data.value?.data.data)
  };
};
