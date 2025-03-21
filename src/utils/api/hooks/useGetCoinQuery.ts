import { useQuery } from '@tanstack/vue-query';

import type { GetCoinConfig } from '../requests';

import { getCoin } from '../requests';

export const useGetCoinQuery = (config: GetCoinConfig, settings?: QuerySettings<typeof getCoin>) =>
  useQuery({
    queryKey: ['coin'],
    queryFn: () => getCoin(config),
    ...settings
  });
