<script>
	import TrackList from '$lib/TrackList.svelte';
	import SongSearch from '$lib/SongSearch.svelte';

	export let data;
	export let form;

	const { top_tracks } = data;

	let searchQuery = '';
	/**
	 * @type {number | undefined}
	 */
	let setSearch;

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

{#await form?.tracks then trackData}
	<TrackList topTracks={trackData} />
{/await}

{#if !form?.tracks}
	<TrackList topTracks={top_tracks} />
{/if}

<style>
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
