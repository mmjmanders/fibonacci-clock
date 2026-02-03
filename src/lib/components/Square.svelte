<script lang="ts">
	import type { SquareProps } from '$lib/types';
	const numbers: ReadonlyArray<number> = [5, 3, 2, 1, 1];

	const { x, y, width, height, hours, minutes, index, strokeWidth }: SquareProps = $props();

	const isOn = (target: number, currentIndex: number) => {
		let acc = target;
		for (let i = 0; i < numbers.length; i++) {
			if (acc >= numbers[i]) {
				if (i === currentIndex) return true;
				acc -= numbers[i];
			}
		}
		return false;
	};

	const color = $derived.by<string>(() => {
		const hourOn = isOn(hours, index);
		const minuteOn = isOn(minutes, index);
		if (hourOn && minuteOn) return 'fill-blue-500';
		else if (hourOn) return 'fill-red-500';
		else if (minuteOn) return 'fill-green-500';
		return 'fill-zinc-200';
	});
</script>

<rect
	{x}
	{y}
	{width}
	{height}
	stroke-width={strokeWidth}
	class="{color} stroke-neutral-950 dark:stroke-neutral-50"
/>
