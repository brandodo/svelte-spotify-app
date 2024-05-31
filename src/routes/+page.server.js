import { ROOT_SERVER_URL } from '$env/static/private';

// @ts-ignore
const top_tracks_endpoint = `https://api.spotify.com/v1/me/top/tracks`;
const song_search_endpoint = 'https://api.spotify.com/v1/search?';

// @ts-ignore
export async function load({ fetch }) {
	const { access_token } = await fetch(`${ROOT_SERVER_URL}/api`).then(
		(/** @type {{ json: () => any; }} */ res) => res.json()
	);

	const data = await fetch(top_tracks_endpoint, {
		headers: {
			Authorization: `Bearer ${access_token?.access_token}`
		}
	}).then((/** @type {{ json: () => any; }} */ res) => res.json());

	return {
		status: 200,
		top_tracks: data.items
	};
}

export const actions = {
	// @ts-ignore
	search: async ({ request }) => {
		const data = await request.formData();
		const query = data?.get('search');
		const { access_token } = await fetch(`${ROOT_SERVER_URL}/api`).then((res) => res.json());

		const searchData = await fetch(`${song_search_endpoint}q=${query}&type=track,artist`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${access_token?.access_token}`
			}
		}).then((res) => res.json());

		return {
			status: 200,
			tracks: searchData?.tracks?.items
		};
	}
};
