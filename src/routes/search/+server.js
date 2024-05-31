// @ts-nocheck
import { json } from '@sveltejs/kit';
import { ROOT_SERVER_URL } from '$env/static/private';

const song_search_endpoint = 'https://api.spotify.com/v1/search?';

export const GET = async ({ url }) => {
	const searchQuery = url.searchParams.get('q');
	const { access_token } = await fetch(`${ROOT_SERVER_URL}/api`).then((res) => res.json());

	const data = await fetch(`${song_search_endpoint}q=${searchQuery}&type=track,artist`, {
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
