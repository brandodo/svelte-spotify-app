<script>
	import { browser } from '$app/environment';
	import TrackList from '$lib/TrackList.svelte';
	import SongSearch from '$lib/SongSearch.svelte';

	let searchQuery = '';
	/**
	 * @type {number | undefined}
	 */
	let setSearch;

	$: searchSongs = async () => {
		if (browser) {
			if (searchQuery) {
				const data = await fetch(`./search?q=${searchQuery}`, { method: 'GET' }).then((res) =>
					res.json()
				);

				return { status: data?.status, top_tracks: data?.tracks };
			} else {
				const top_tracks = await fetch('./tracks', { method: 'GET' }).then((res) => res.json());

				return top_tracks;
			}
		}
	};

	$: topTracks = searchSongs();

	const debounce = (/**@type any*/ e) => {
		clearTimeout(setSearch);

		setSearch = setTimeout(() => {
			searchQuery = e.target.value;
		}, 500);
	};
</script>

<h1>Spotify x Svelte</h1>

<SongSearch {debounce} />

{#if searchQuery}
	<p>Searching for: <span>{searchQuery}</span></p>
{:else}
	<p>Here are your top tracks</p>
{/if}

<TrackList {topTracks} />

<style>
	* {
		font-family: Arial, Helvetica, sans-serif;
	}

	h1 {
		font-size: 48px;
		color: green;
	}

	p {
		font-size: 24px;
	}

	span {
		font-weight: bold;
	}
</style>
