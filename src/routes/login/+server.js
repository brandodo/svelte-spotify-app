import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, ROOT_SERVER_URL } from '$env/static/private';
const authorize_url = 'https://accounts.spotify.com/authorize';

export const GET = () => {
	const authorization_url = `${authorize_url}?client_id=${SPOTIFY_CLIENT_ID}&client_secret=${SPOTIFY_CLIENT_SECRET}&redirect_uri=${ROOT_SERVER_URL}&response_type=code`;
};
