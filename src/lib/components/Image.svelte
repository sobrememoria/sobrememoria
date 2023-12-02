<script>
	export let image = '';
	export let caption = '';
	export let credit = '';
</script>

<figure class="image">
	<img src={image} alt={caption} loading="lazy" />
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
	.image {
		margin: 2em 0 4em 0;
		padding: 0;
	}
	.image > img {
		width: 100%;
	}
	.image > figcaption {
		font-size: 0.8rem;
		font-weight: bold;
		.credit {
			font-size: 0.7rem;
			font-weight: 400;
			margin-left: 1em;
		}
	}
	:global(.image + .image) {
		margin-top: 4em;
	}
</style>
