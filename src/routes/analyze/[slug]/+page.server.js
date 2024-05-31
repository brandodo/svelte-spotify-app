const SPOTIFY_ANALYSIS_URL = 'https://api.spotify.com/v1/audio-analysis';

export const load = async ({ params }) => {
	const { access_token } = await fetch('http://localhost:5173/api').then((res) => res.json());

	const data = await fetch(`${SPOTIFY_ANALYSIS_URL}/${params.slug}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${access_token?.access_token}`
		}
	}).then((res) => res.json());

	return {
		slug: params?.slug,
		data
	};
};
