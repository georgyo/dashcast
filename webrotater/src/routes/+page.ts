import type { PageLoad } from './$types';
 
interface urlList {
    url: string
    wait: number
}

export const load: PageLoad = async ({ fetch, params }) => {
  const res = await fetch("https://gist.githubusercontent.com/georgyo/8e45d1c370aab949b412f99ecbbaea02/raw/urls.json");
  const urls: urlList[] = await res.json();
 
  return { urls }
}