<script lang="ts">
	import type { SquareProps } from '$lib/types';
	import { fibonacciBreakdown } from '$lib/utils';

	const { x, y, width, height, hours, minutes, index }: SquareProps = $props();

	const color = $derived.by<string>(() => {
		const hourOn = fibonacciBreakdown(hours)[index] > 0;
		const minuteOn = fibonacciBreakdown(minutes)[index] > 0;
		if (hourOn && minuteOn) return 'fill-blue-500';
		else if (hourOn) return 'fill-red-500';
		else if (minuteOn) return 'fill-green-500';
		return 'fill-zinc-300 dark:fill-zinc-600';
	});
</script>

<rect
	{x}
	{y}
	{width}
	{height}
	stroke-width="2"
	class="{color} stroke-neutral-950 dark:stroke-neutral-50"
/>
