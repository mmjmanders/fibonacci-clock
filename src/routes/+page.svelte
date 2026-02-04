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

<div class="flex flex-col items-center gap-2">
	<Clock {time} />
	<div class="flex items-center gap-1 text-2xl">
		{formattedTime}
	</div>
	<div class="flex items-center gap-1 text-sm">
		<span class="font-icon">deployed_code</span>
		<a
			target="_blank"
			rel="noopener"
			href="https://github.com/mmjmanders/fibonacci-clock/commit/{PUBLIC_COMMIT_SHA}"
			>{PUBLIC_COMMIT_SHA}</a
		>
	</div>
</div>
