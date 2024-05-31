import { json } from '@sveltejs/kit';
import { ROOT_SERVER_URL } from '$env/static/private';

const top_tracks_endpoint = `https://api.spotify.com/v1/me/top/tracks`;

export async function GET() {
	const { access_token } = await fetch(`${ROOT_SERVER_URL}/api`).then((res) => res.json());

	const data = await fetch(top_tracks_endpoint, {
		headers: {
			Authorization: `Bearer ${access_token?.access_token}`
		}
	}).then((res) => res.json());

	return json({
		status: 200,
		top_tracks: data.items
	});
}
