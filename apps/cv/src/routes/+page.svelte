<script lang="ts">
	export let data;
	import '../app.css';
</script>

<svelte:component this={data.content} />

<section>
	<p>Alexander Czigler | Curriculum Vitae</p>
	<p><a href="https://alexanderczigler.se/"> alexanderczigler.se </a></p>
</section>

<style>
	section {
		margin-top: 5rem;
		border-top: 1px solid #ccc;
		padding: 1rem 0.5rem;
		font-size: 0.8rem;

		display: flex;
		justify-content: space-between;
	}

	section p {
		margin: 0;
	}

	section a,
	section a:visited {
		color: var(--link-color);
		text-decoration: none;
	}

	section a:hover {
		font-weight: 400;
	}
</style>
