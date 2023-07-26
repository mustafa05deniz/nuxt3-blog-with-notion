
export default defineNuxtPlugin((NuxtApp) => {
  let transform = function transform(data:any):string {
    let returValue:any = {};
    Object.keys(data).forEach((key,index)=>{
      switch (data[key]?.type) {
        case 'rich_text':
          returValue[key] = data[key]['rich_text'][0]['plain_text']
          break;
        case 'files':
          if(data[key].files[0].type === 'external'){
            returValue[key] = data[key].files[0].external.url
          }
          break;
        case 'date':
          returValue[key] = data[key].date.start
          break;
      }
    })
    return returValue
  }
  return {
    provide: {
      transform: transform,
    },
  };
});


