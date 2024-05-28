import {
	SPOTIFY_CLIENT_ID,
	SPOTIFY_CLIENT_SECRET,
	SPOTIFY_REFRESH_TOKEN
} from '$env/static/private';
import { json } from '@sveltejs/kit';

const client_id = SPOTIFY_CLIENT_ID;
const client_secret = SPOTIFY_CLIENT_SECRET;
const refresh_token = SPOTIFY_REFRESH_TOKEN;
const redirect_uri = 'http://localhost:5173/';
const token_endpoint = `https://accounts.spotify.com/api/token`;

export const GET = async () => {
	const access_token = await fetch(token_endpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: new URLSearchParams({
			grant_type: 'refresh_token',
			refresh_token,
			redirect_uri,
			client_id,
			client_secret
		})
	}).then((res) => res.json());

	return json({
		access_token
	});
};
