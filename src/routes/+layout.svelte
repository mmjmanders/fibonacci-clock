<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import appleTouchIcon from '$lib/assets/apple-touch-icon-180x180.png';
	import '@fontsource-variable/open-sans';
	import '@fontsource-variable/fira-code';
	import { pwaInfo } from 'virtual:pwa-info';

	let { children } = $props();
	const manifest = $derived(pwaInfo?.webManifest?.href);
</script>

<svelte:head>
	<link rel="icon" href={favicon} type="image/svg+xml" />
	<link rel="apple-touch-icon" href={appleTouchIcon} />
	{#if manifest}
		<link rel="manifest" href={manifest} />
	{/if}
</svelte:head>

{@render children()}
