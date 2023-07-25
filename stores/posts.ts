
import {Client} from '@notionhq/client'
import axios from "axios";
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
        const postList = await axios({
          method: 'post',
          url:`https://api.notion.com/v1/databases/${process.env.notion_db_token}/query`,
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
        }).then(res=>{
          return res.data ? res.data.results : []
        });
        this.postList = postList
      }
      catch (err){
        console.log(err)
      }
    }
  },
});