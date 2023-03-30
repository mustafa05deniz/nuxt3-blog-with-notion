import { createStore } from "vuex";
import { about } from "./modules/about";
const store = createStore({
  modules: {
    about,
  },
});

export default store;
