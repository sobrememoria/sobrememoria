<script>
	import {
		Email,
		HackerNews,
		Reddit,
		LinkedIn,
		Pinterest,
		Telegram,
		Tumblr,
		Vk,
		WhatsApp,
		Xing,
		Facebook,
		X,
		Line
	} from 'svelte-share-buttons-component';
	import { browser } from '$app/environment';

	export let url = browser ? window.location.href : 'https://sobrememoria.com/';
	export let title = browser ? document.title : 'Sobrememória: um acervo em resgate';
	export let desc = 'Por dentro da recuperação do acervo de fotografias de Bob Wolfenson';
	export let showHorizontal = false;

	let show = false;
	let isMobile = browser ? window.matchMedia('(max-width: 480px)').matches : false;

	const handleShare = () => {
		if (isMobile && navigator.share) {
			navigator
				.share({
					title,
					url
				})
				.then(() => {
					console.log('Thanks for sharing!');
				})
				.catch(console.error);
		} else {
			show = !show;
		}
	};
</script>

<div class="share" class:showHorizontal>
	<button class="button-share" on:click={handleShare}>
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
			<path
				fill="#333"
				d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65c0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"
			/>
		</svg>
	</button>
	{#if show}
		<ul class:showHorizontal>
			<li><WhatsApp text="{title} {url}" /></li>
			<li><Facebook quote={title} {url} /></li>
			<li>
				<X text={title} {url} hashtags="github,svelte" via="username" related="other,users" />
			</li>
			<li><LinkedIn {url} /></li>
			<li><Email subject={title} body="{desc} {url}" /></li>
		</ul>
	{/if}
</div>

<style lang="scss">
	:global(#menu .share) {
		margin: 1rem 0;
	}
	.button-share {
		background: transparent;
		border: 0;
		cursor: pointer;
		padding: 0;
		margin: 1rem 1rem 1rem 0;
		outline: 0;
		svg {
			fill: #333;
			width: 1.5rem;
			height: 1.5rem;
		}
	}
	.showHorizontal {
		display: flex;
		flex-direction: row;
		align-items: center;
		list-style: none;
		padding: 0;
		margin: 0;
		li {
			margin: 0;
			padding: 0;
		}
	}
</style>
