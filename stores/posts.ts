
import axios from '../plugins/axios'
const $axios = axios().provide.axios

import transform from '../plugins/transform'
const $transform = transform().provide.transform

export const postStore = defineStore("postStore", {
  state: () => ({
    postList : null
  }),
  // optional getters
  getters: {
  },
  // optional actions
  actions: {
    async getDatabase() {
      try {
        const postList = await $axios({
          method: 'post',
          url:`/databases/${process.env.notion_db_token}/query`,
          headers: {
            'Notion-Version': process.env.notion_version,
            'Authorization': `Bearer ${process.env.notion_secret_token}`,
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json'
          },
          data: {
            "filter": {
              "property": "visible",
              "checkbox": {
                "equals": true
              }
            }
          }
        }).then((res:any)=>{
          return res.data ? res.data.results.map((item:any)=>{
            return $transform(item.properties)
          }) : []
        });
        this.postList = postList
      }
      catch (err){
        console.log(err)
      }
    }
  },
});