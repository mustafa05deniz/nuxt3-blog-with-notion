import axios from "axios";

export default defineNuxtPlugin((NuxtApp) => {
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = 'https://api.notion.com/v1'
  return {
    provide: {
      axios: axios
    },
  }
})
