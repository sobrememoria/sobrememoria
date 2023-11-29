<script>
	import Carousel from '$lib/components/Carousel.svelte';
</script>

<div class="container">
	<Carousel />
	<div class="content">
		<div class="content__main">
			<header class="header">
				<h1>Por dentro da recuperação do acervo de fotografias de Bob Wolfenson</h1>
				<p class="subtitle">
					Entenda como boa parte do acervo de um dos maiores fotógrafos brasileiros foi recuperada
					depois de uma enchente que atingiu seu estúdio em fevereiro de 2020. E conheça os
					principais responsáveis por dar uma vida nova a esses materiais fotográficos
				</p>
			</header>
			<div>
				<div class="card">
					<div class="image">
						<img src="/o-processo/2.jpg" alt="Foto" />
					</div>
					<div class="body">
						<h3 class="title">o processo</h3>
						<p class="subtitle">Os principais momentos, da enchente à recuperação</p>
					</div>
				</div>

				<div class="card">
					<div class="image">
						<img src="https://picsum.photos/seed/1/195/144" alt="Foto" />
					</div>
					<div class="body">
						<h3 class="title">passo-a-passo</h3>
						<p class="subtitle">O trabalho da equipe de recuperação do acervo</p>
					</div>
				</div>

				<div class="card">
					<div class="image">
						<img src="https://picsum.photos/seed/1/195/144" alt="Foto" />
					</div>
					<div class="body">
						<h3 class="title">quem é quem</h3>
						<p class="subtitle">Saiba mais sobre os principais nomes envolvidos</p>
					</div>
				</div>

				<div class="card">
					<div class="image">
						<img src="https://picsum.photos/seed/1/195/144" alt="Foto" />
					</div>
					<div class="body">
						<h3 class="title">A recuperação</h3>
						<p class="subtitle">Um acervo que, enfim, volta à vida</p>
					</div>
				</div>

				<div class="card">
					<div class="image">
						<img src="https://picsum.photos/seed/1/195/144" alt="Foto" />
					</div>
					<div class="body">
						<h3 class="title">mini-doc</h3>
						<p class="subtitle">Lorem ipsum dolor sit amet consequeter lorem ipsum</p>
					</div>
				</div>

				<div class="card">
					<div class="image">
						<img src="https://picsum.photos/seed/1/195/144" alt="Foto" />
					</div>
					<div class="body">
						<h3 class="title">fotografias</h3>
						<p class="subtitle">Uma seleção das imagens do acervo que foram recuperadas</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	h1,
	.subtitle {
		text-align: center;
	}
	h1 {
		font-weight: 700;
	}
	.header {
		margin: 2em 0;
	}
	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		.image {
			max-width: 195px;
			aspect-ratio: 195/144;
			margin-bottom: 0.5em;
			img {
				aspect-ratio: 195/144;
				width: 100%;
				height: auto;
				object-fit: cover;
			}
		}
		.title {
			font-size: 11px;
			font-weight: 700;
			text-transform: uppercase;
			text-align: center;
		}
		.subtitle {
			font-size: 11px;
		}
		& + .card {
			margin-top: 24px;
		}
	}

	.content {
		display: flex;
		justify-content: center;
		&__main {
			max-width: 768px;
		}
	}
</style>
