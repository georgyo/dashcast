import type { PageLoad } from './$types';
interface urlList {
	url: string;
	wait?: number;
}

export const load: PageLoad = async ({ url, fetch, params }) => {
	let sourceURL = url.searchParams.get('url') || '';
	let switchTime = parseInt(url.searchParams.get('delay') || '30') * 1000;

	let urls: urlList[];
	try {
		const res = await fetch(sourceURL);
		urls = await res.json();
	} catch (err) {
		urls = [{ url: '/info' }];
	}

	return { urls, switchTime };
};
