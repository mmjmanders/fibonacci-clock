<script lang="ts">
	let time = $state<Date>(new Date());

	$effect(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);
		return () => clearInterval(interval);
	});
</script>

<div class="font-mono">{time.toISOString()}</div>
