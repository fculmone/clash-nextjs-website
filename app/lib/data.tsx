'use server'

export async function getDataFromServer(clanTag: string) {
  'use server'
  let data;
  //console.log(process.env.BASE_URL + '/get-clan/' + clanTag)
  const result = await fetch(process.env.BASE_URL + '/get-clan/' + clanTag);
    
  data = await result.json();
  return data;
}