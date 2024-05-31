<script>
	import { enhance } from '$app/forms';

	export let debounce;
</script>

<form on:submit|preventDefault method="POST" action="?/search" use:enhance>
	<input
		type="search"
		name="search"
		on:input={debounce}
		placeholder="Enter a song / artist name..."
	/>
	<button>Search</button>
</form>

<style>
	input {
		padding: 10px;
		border-radius: 10px;
		width: 500px;
	}
</style>
