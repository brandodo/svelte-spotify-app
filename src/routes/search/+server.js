// @ts-nocheck
import { json } from '@sveltejs/kit';

const SPOTIFY_SEARCH_URL = 'https://api.spotify.com/v1/search?';

export const GET = async ({ url }) => {
	const searchQuery = url.searchParams.get('q');
	const { access_token } = await fetch('http://localhost:5173/api').then((res) => res.json());

	const data = await fetch(`${SPOTIFY_SEARCH_URL}q=${searchQuery}&type=track,artist`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${access_token?.access_token}`
		}
	}).then((res) => res.json());

	return json({
		status: 200,
		tracks: data?.tracks?.items
	});
};
