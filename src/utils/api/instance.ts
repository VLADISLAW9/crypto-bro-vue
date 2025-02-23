import fetches from '@siberiacancode/fetches';

export const bybitApi = fetches.create({
  baseURL: import.meta.env.VITE_BYBIT_API_URL,
  headers: {
    'X-BAPI-API-KEY': import.meta.env.VITE_BYBIT_API_KEY,
    'X-BAPI-TIMESTAMP': Date.now().toString(),
    'X-BAPI-RECV-WINDOW': '5000',
    'Content-Type': 'application/json'
  }
});
