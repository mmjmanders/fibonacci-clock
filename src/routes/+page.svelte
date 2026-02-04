<script lang="ts">
	import Clock from '$lib/components/Clock.svelte';
	import dayjs from 'dayjs';
	import { PUBLIC_COMMIT_SHA } from '$env/static/public';

	let time = $state<Date>(new Date());

	$effect(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);
		return () => clearInterval(interval);
	});

	const formattedTime = $derived<string>(dayjs(time).format('HH:mm:ss'));
</script>

<div class="mt-4 flex flex-col items-center gap-2">
	<Clock {time} />
	<div class="flex items-center gap-1 text-2xl">
		<span class="font-icon">nest_clock_farsight_analog</span>
		{formattedTime}
	</div>
	<div class="flex items-center gap-1 text-sm">
		<span class="font-icon">commit</span>
		<span class="font-mono">{PUBLIC_COMMIT_SHA}</span>
	</div>
</div>
