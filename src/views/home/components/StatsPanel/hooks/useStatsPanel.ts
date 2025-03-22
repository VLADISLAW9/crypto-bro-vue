import { useGetStatsQuery } from '@/utils/api/hooks';
import { computed } from 'vue';

export const useStatsPanel = () => {
  const getStatsQuery = useGetStatsQuery();
  const stats = computed(() => getStatsQuery.data.value?.data.data);

  return {
    stats
  };
};
