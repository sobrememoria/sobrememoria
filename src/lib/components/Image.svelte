<script>
	export let image = '';
	export let caption = '';
	export let credit = '';
</script>

<figure>
	<img src={image} alt={caption} />
	<figcaption>
		{#if caption}
			{caption}
		{/if}
		{#if credit}
			<span class="credit">{credit}</span>
		{/if}
	</figcaption>
</figure>

<style lang="scss">
	figure {
		margin: 2em 0;
		padding: 0;
	}
	figure > img {
		width: 100%;
	}
	figure > figcaption {
		font-size: 0.8rem;
		font-weight: bold;
		.credit {
			font-size: 0.7rem;
			font-weight: 400;
			margin-left: 1em;
		}
	}
</style>
