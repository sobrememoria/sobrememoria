<script>
	import Carousel from '$lib/components/Carousel.svelte';
</script>

<div class="container">
	<Carousel />
	<header>
		<h1>Por dentro da recuperação do acervo de fotografias de Bob Wolfenson</h1>
		<p>
			Entenda como boa parte do acervo de um dos maiores fotógrafos brasileiros foi recuperada
			depois de uma enchente que atingiu seu estúdio em fevereiro de 2020. E conheça os principais
			responsáveis por dar uma vida nova a esses materiais fotográficos
		</p>
	</header>
	<main>
		<div class="card">
			<div class="image">
				<img src="https://picsum.photos/seed/1/195/144" alt="Foto" />
			</div>
			<div class="body">
				<h3 class="title">dsdsds</h3>
				<p class="subtitle">Osassasas</p>
			</div>
		</div>
	</main>
</div>

<style lang="scss">
	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		.title {
			font-size: 11px;
			font-weight: 700;
			text-transform: uppercase;
			text-align: center;
			margin-bottom: 12px;
		}
		.subtitle {
			font-size: 11px;
		}
	}
</style>
