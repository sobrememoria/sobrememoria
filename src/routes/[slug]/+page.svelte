<script lang="ts">
	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.kicker}: {data.meta.title} | sobrememoria.com</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="container">
	<!-- Title -->
	<header class="article-header">
		<span class="kicker">{data.meta.kicker}</span>
		<h1 class="title">{data.meta.title}</h1>
	</header>

	<!-- Post -->
	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	.article-header {
		margin: 2em auto;
		text-align: center;
		max-width: 768px;
	}
	.kicker {
		padding: 0.3em 36px;
		background-color: #333;
		color: #fff;
		min-width: 90px;
		font-size: 12px;
		text-transform: uppercase;
		letter-spacing: 4px;
		white-space: nowrap;
		width: auto;
		margin-bottom: 0.5em;
	}
	.title {
		font-size: 36px;
		font-weight: 700;
		line-height: 1.2;
		margin: 1rem 0 0 0;
		padding: 0 36px;
		font-weight: 400;
	}
</style>
