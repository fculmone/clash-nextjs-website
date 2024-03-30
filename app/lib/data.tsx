'use server'

export async function getDataFromServer(clanTag: string) {
  'use server'
  let data;
  //console.log(process.env.BASE_URL + '/get-clan/' + clanTag)
  try {
    const result = await fetch(process.env.BASE_URL + '/get-clan/' + clanTag);   
    data = await result.json();
  } catch (err: any) {
    if (err.response) { // if there is response, it means its not a 50x, but 4xx
      console.error(err);
      console.log('should only go on 400 errors');
      throw err;
    } else {   // gets activated on 50x errors, since no response from server
      // do whatever you want here :)
      console.error(err);
      console.log('should be a 500 timeout error. restarting page');
      location.reload();
    }    
  }
  
  return data;
}