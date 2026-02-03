<script lang="ts">
	import Clock from '$lib/components/Clock.svelte';
	import dayjs from 'dayjs';

	let time = $state<Date>(new Date());

	$effect(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);
		return () => clearInterval(interval);
	});

	const formattedTime = $derived<string>(dayjs(time).format('HH:mm:ss'));
</script>

<div class="flex flex-col items-center gap-4">
	<Clock {time} />
	<div class="font-mono text-2xl">{formattedTime}</div>
</div>
