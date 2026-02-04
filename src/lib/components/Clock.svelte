<script lang="ts">
	import Square from './Square.svelte';
	import type { ClockProps } from '$lib/types';
	import { PUBLIC_COMMIT_SHA } from '$env/static/public';

	const { time }: ClockProps = $props();

	const hours = $derived(time.getHours() % 12 || 12);
	const minutes = $derived(Math.floor(time.getMinutes() / 5));
</script>

<svg viewBox="0 0 802 502">
	<g transform="translate(1, 1)">
		<Square x={300} y={0} width={500} height={500} {hours} {minutes} index={0} />
		<Square x={0} y={200} width={300} height={300} {hours} {minutes} index={1} />
		<Square x={0} y={0} width={200} height={200} {hours} {minutes} index={2} />
		<Square x={200} y={0} width={100} height={100} {hours} {minutes} index={3} />
		<Square x={200} y={100} width={100} height={100} {hours} {minutes} index={4} />
		<text x="795" y="495" class="fill-slate-950 text-xs" text-anchor="end"
			><tspan class="font-icon">commit</tspan><tspan class="font-mono">{PUBLIC_COMMIT_SHA}</tspan
			></text
		>
	</g>
</svg>
