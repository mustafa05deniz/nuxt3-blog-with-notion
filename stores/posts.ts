
import {Client} from '@notionhq/client'
const notion = new Client({ auth: 'secret_1hTrt4c11DWaC7cBsWJOem9VpV7HziaCcXHmVeSVDZu' });


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
          url:'https://api.notion.com/v1/databases/db_id/query',
          headers: {
            'Notion-Version':'2022-06-28',
            'Authorization':'Bearer secret____',
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