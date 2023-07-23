import axios from "axios";
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  let api = axios.create({
    baseURL: config.public.apiUrl,
    headers: {
      common: {},
    },
  });
  return {
    provide: {
      api: api,
    },
  };
});
