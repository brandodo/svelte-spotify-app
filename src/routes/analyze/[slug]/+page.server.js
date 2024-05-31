const track_analysis_url = 'https://api.spotify.com/v1/audio-analysis';
const related_artists_url = 'https://api.spotify.com/v1/artists/';

// @ts-ignore
export const load = async ({ fetch, params, url }) => {
	const { access_token } = await fetch('http://localhost:5173/api').then(
		(/** @type {{ json: () => any; }} */ res) => res.json()
	);

	const analyzeTrack = async () =>
		await fetch(`${track_analysis_url}/${params.slug}`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${access_token?.access_token}`
			}
		}).then((/** @type {{ json: () => any; }} */ res) => res.json());

	const similarArtists = async () =>
		await fetch(`${related_artists_url}${params.slug}/related-artists`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${access_token?.access_token}`
			}
		}).then((/** @type {{ json: () => any; }} */ res) => res.json());

	return {
		slug: params?.slug,
		artistName: url?.searchParams?.get('artist'),
		analysisData: analyzeTrack(),
		artistData: similarArtists()
	};
};
