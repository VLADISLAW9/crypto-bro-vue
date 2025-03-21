import { useQuery } from '@tanstack/vue-query';

import type { GetCoinsConfig } from '../requests';

import { getCoins } from '../requests';

export const useGetCoinsQuery = (
  config?: GetCoinsConfig,
  settings?: QuerySettings<typeof getCoins>
) =>
  useQuery({
    queryKey: ['coins'],
    queryFn: () => getCoins(config),
    ...settings
  });
