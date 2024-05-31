<script>
	import { page } from '$app/stores';
	export let data;

	$: artistName = data?.artistName;
	$: artistData = data?.artistData;
</script>

{#key $page?.params}
	{#await artistData}
		<p>Loading...</p>
	{:then artists}
		<h2>Similar Artists to {artistName}</h2>
		<div class="artists">
			{#each artists?.artists as artist}
				<a
					href={`/analyze/${artist?.id}?artist=${artist?.name}`}
					class="artist"
					data-sveltekit-preload-data
				>
					<img src={artist?.images?.[0]?.url} alt="artist" />
					<p>{artist?.name}</p>
				</a>
			{/each}
		</div>
	{/await}
{/key}

<style>
	img {
		width: 200px;
		height: 200px;
		object-fit: cover;
		object-position: center;
		border-radius: 10px;
	}
	.artists {
		display: flex;
		flex-wrap: wrap;
		gap: 15px;
	}

	.artist {
		border: 0px;
		display: flex;
		width: 200px;
		flex-direction: column;
		justify-content: space-between;
		text-decoration: none;
		color: black;
		transition: all 0.2s ease-in-out;
	}

	.artist:hover {
		border-radius: 10px;
		background-color: lightgreen;
	}

	p {
		font-weight: bold;
		font-size: 18px;
		text-align: center;
		text-wrap: wrap;
	}
</style>
