<script lang="ts">
	export let data;
</script>

<section>
	<ul class="positions">
		{#each data.positions as position}
			<li class="post">
				{position.title}
				<p class="date"></p>
				<p class="description">{position.employer}</p>
			</li>
		{/each}
	</ul>
</section>
