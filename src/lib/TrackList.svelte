<script>
	export let topTracks;
</script>

{#if topTracks?.length > 0}
	<div class="tracks">
		{#each topTracks as track}
			<a
				href={`/analyze/${track?.artists?.[0]?.id}?artist=${track?.artists?.[0]?.name}`}
				class="track"
				data-sveltekit-preload-data
			>
				<img class="albumArt" src={track?.album?.images?.[0]?.url} alt="track album cover art" />
				<div class="trackDetails">
					<h3>{track?.name}</h3>
					<p>{track?.artists?.[0]?.name}</p>
				</div>
			</a>
		{/each}
	</div>
{/if}

<style>
	.tracks {
		display: flex;
		flex-wrap: wrap;
		flex: 1;
		gap: 20px;
		justify-content: space-evenly;
	}

	.track {
		color: black;
		border: 1px solid black;
		border-radius: 10px;
		width: 350px;
		text-decoration: none;
		box-sizing: border-box;
		overflow: hidden;
	}

	.trackDetails {
		padding: 0 15px;
	}

	.albumArt {
		width: 100%;
	}
</style>
