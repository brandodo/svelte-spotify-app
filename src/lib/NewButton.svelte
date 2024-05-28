<script>
	import { navigating } from '$app/stores';
</script>

{#if $navigating}
	navigating to {$navigating?.to?.url?.pathname}
{:else}
	<a href="/about"> Click Me! </a>
{/if}

<style>
	a {
		border: 1px solid black;
		border-radius: 10px;
		height: 50px;
		width: 150px;
		background-color: orange;
		font-size: 24px;
	}
</style>
