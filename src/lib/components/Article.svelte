<script>
	import Share from './Share.svelte';

	export let title;
	export let letter;
	export let subtitle;
</script>

<section class="article-section">
	<aside class="aside">
		{#if letter}
			<span class="letter">| {letter} |</span>
		{/if}
		{#if subtitle}
			<h2>{subtitle}</h2>
		{/if}
		<Share />
	</aside>
	<div class="content">
		<slot />
	</div>
</section>

<style lang="scss">
	.article-section {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 2rem;
		grid-row-gap: 0px;

		@media (min-width: $layout-breakpoint-small) {
			grid-template-columns: repeat(5, 1fr);
		}
	}
	.aside {
		grid-area: 1 / 1 / 2 / 2;
		.letter {
			color: #989898;
			font-size: 2.5rem;
			line-height: 1;
		}
		h2 {
			font-size: 1.2rem;
			font-weight: 700;
		}
	}
	.content {
		grid-area: 1 / 2 / 2 / 5;
		:global(p + p) {
			margin-top: 1rem;
		}
	}
</style>
