<script>
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	import SlideHome from '$lib/components/SlideHome.svelte';

	const showPrevPage = () => {};
	const showNextPage = () => {};
	let carousel; // for calling methods of the carousel instance
</script>

{#if browser}
	<Carousel bind:this={carousel} autoplay>
		<button slot="prev" on:click={showPrevPage} class="custom-arrow custom-arrow-prev">
			<i />
		</button>
		<SlideHome kicker="O processo" image="/images/o-processo/01.jpg" />
		<SlideHome kicker="Passo-a-passo" image="/images/passo-a-passo/01.jpg" />
		<SlideHome kicker="quem é quem" image="/images/quem-e-quem/01.jpg" />
		<SlideHome kicker="A recuperação" image="/images/a-recuperacao/01.jpg" />
		<SlideHome kicker="Mini-doc" image="/images/documentario/01.jpg" />
		<SlideHome kicker="Fotografias" image="/images/fotografias/01.jpg" />
		<button slot="next" on:click={showNextPage} class="custom-arrow custom-arrow-next">
			<i />
		</button>
	</Carousel>
{/if}

<style lang="scss">
	.custom-arrow {
		width: 32px;
		height: 32px;
		border: none;
		background-color: rgba(255, 255, 255, 1);
		opacity: 0.3;
		position: absolute;
		top: 50%;
		bottom: 0;
		z-index: 1;
		transition: opacity 150ms ease;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		-webkit-tap-highlight-color: transparent;
	}
	.custom-arrow:hover {
		opacity: 0.5;
	}
	.custom-arrow > i {
		border: solid #333;
		border-width: 0 5px 5px 0;
		padding: 5px;
		position: relative;
	}
	.custom-arrow-prev {
		left: 32px;
	}
	.custom-arrow-prev > i {
		transform: rotate(135deg);
		right: -4px;
	}
	.custom-arrow-next {
		right: 32px;
	}
	.custom-arrow-next > i {
		transform: rotate(-45deg);
		left: -4px;
	}
</style>
