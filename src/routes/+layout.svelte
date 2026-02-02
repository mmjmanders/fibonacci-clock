<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { pwaInfo } from 'virtual:pwa-info';

	let { children } = $props();
	const manifest = $derived(pwaInfo?.webManifest?.href);
</script>

<svelte:head>
	<link rel="icon" href={favicon} type="image/svg+xml" />
	{#if manifest}
		<link rel="manifest" href={manifest} />
	{/if}
</svelte:head>

{@render children()}
