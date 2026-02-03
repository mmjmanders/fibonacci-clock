<script lang="ts">
	import Square from './Square.svelte';
	import type { ClockProps } from '$lib/types';

	const { time }: ClockProps = $props();

	const hours = $derived(time.getHours() % 12 || 12);
	const minutes = $derived(Math.floor(time.getMinutes() / 5));
</script>

<svg viewBox="0 0 800 500" class="overflow-visible">
	<Square x={300} y={0} width={500} height={500} {hours} {minutes} index={0} />
	<Square x={0} y={200} width={300} height={300} {hours} {minutes} index={1} />
	<Square x={0} y={0} width={200} height={200} {hours} {minutes} index={2} />
	<Square x={200} y={0} width={100} height={100} {hours} {minutes} index={3} />
	<Square x={200} y={100} width={100} height={100} {hours} {minutes} index={4} />
</svg>
