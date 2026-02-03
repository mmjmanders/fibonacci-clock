<script lang="ts">
	import type { SquareProps } from '$lib/types';
	const numbers = [5, 3, 2, 1, 1] as const;

	const { hours, minutes, index, x, y, width, height }: SquareProps = $props();
</script>

<rect
	{x}
	{y}
	{width}
	{height}
	stroke-width="2"
	class="fill-amber-400 stroke-neutral-950 dark:stroke-neutral-50"
/>
