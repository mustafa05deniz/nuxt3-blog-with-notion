import { postStore } from "@/stores/posts";

export const posts = () => {
  const { postList,getDatabase } = postStore();
  async function getData() {
    return await getDatabase()
  }
  return {
    getData,
    postList
  };
};