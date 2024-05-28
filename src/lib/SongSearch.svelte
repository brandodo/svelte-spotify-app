<script>
	export let debounce;
</script>

<input type="search" on:input={debounce} placeholder="Enter a song / artist name..." />

<style>
	input {
		padding: 10px;
		border-radius: 10px;
		width: 500px;
	}
</style>
