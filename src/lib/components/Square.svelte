<script lang="ts">
	import type { SquareProps } from '$lib/types';
	const numbers: ReadonlyArray<number> = [5, 3, 2, 1, 1];

	const { hours, minutes, index, x, y, width, height }: SquareProps = $props();

	const isHourOn: () => boolean = () => {
		const indices: number[] = [];
		numbers.reduce((acc, curr, i) => {
			if (acc - curr > 0) {
				acc -= curr;
				indices.push(i);
			}
			return acc;
		}, hours);
		return indices.includes(index);
	};

	const color: () => string = () => {
		if (isHourOn()) return 'fill-amber-400';
		return 'fill-zinc-200';
	};
</script>

<rect
	{x}
	{y}
	{width}
	{height}
	stroke-width="2"
	class="{color} stroke-neutral-950 dark:stroke-neutral-50"
/>
