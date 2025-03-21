import { useQuery } from '@tanstack/vue-query';

import type { getStatsConfig } from '../requests';

import { getStats } from '../requests';

export const useGetStatsQuery = (
  config?: getStatsConfig,
  settings?: QuerySettings<typeof getStats>
) =>
  useQuery({
    queryKey: ['stats'],
    queryFn: () => getStats(config),
    ...settings
  });
