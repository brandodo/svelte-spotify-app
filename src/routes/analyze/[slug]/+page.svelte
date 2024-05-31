<script>
	export let data;
	console.log(data?.data);
</script>

<h1>
	Track ID selected: {data?.slug}
</h1>

{#if !data}
	<p>Loading...</p>
{:else}
	<p>Duration: {data?.data?.track?.duration}</p>
{/if}
