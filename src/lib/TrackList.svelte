<script>
	export let topTracks;
</script>

{#await topTracks}
	<div class="loaderContainer">
		<div class="loader"></div>
	</div>
{:then resolved_tracks}
	<div class="tracks">
		{#if resolved_tracks?.top_tracks?.length > 0}
			{#each resolved_tracks?.top_tracks as track}
				<div class="track">
					<div>
						<h3>{track?.name}</h3>
						<p>{track?.artists?.[0]?.name}</p>
					</div>

					<img class="albumArt" src={track?.album?.images?.[0]?.url} alt="track album cover art" />
				</div>
			{/each}
		{/if}
	</div>
{/await}

<style>
	.tracks {
		display: flex;
		flex-wrap: wrap;
		flex: 1;
		gap: 20px;
		justify-content: space-evenly;
	}

	.track {
		border: 1px solid black;
		border-radius: 10px;
		padding: 0 15px;
		width: 350px;
	}

	.albumArt {
        border-radius: 10px;
		width: 100%;
	}

	.loaderContainer {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.loader {
		border: 16px solid #f3f3f3; /* Light grey */
		border-top: 16px solid #3498db; /* Blue */
		border-radius: 50%;
		width: 120px;
		height: 120px;
		animation: spin 2s linear infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
