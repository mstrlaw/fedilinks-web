import { default as ax } from 'axios'

const axios = ax.create({
  baseURL: import.meta.env.VITE_SERVER_API,
});

export const getEntries = async ({ offset = 0 }: { offset?: number }) => {
  const endpoint = `/links?limit=20&offset=${offset}`;
  return await axios.get(`${endpoint}`);
}