<script>
	$: show = false;

	const handleButton = () => {
		show = !show;
	};
</script>

<nav>
	<div id="menuToggle">
		<!--
    A fake / hidden checkbox is used as click reciever,
    so you can use the :checked selector on it.
    -->
		<input type="checkbox" checked={show} on:change={handleButton} />

		<!--
    Some spans to act as a hamburger.

    They are acting like a real hamburger,
    not that McDonalds stuff.
    -->
		<span class="bar"></span>
		<span class="bar"></span>
		<span class="bar"></span>

		<!--
    Too bad the menu has to be inside of the button
    but hey, it's pure CSS magic.
    -->
		{#if show}
			<div id="menu">
				<svg
					width="182"
					height="56"
					viewBox="0 0 182 56"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					><g clip-path="url(#a)" fill="#333"
						><path
							d="M2.1 25.39 0 28.38h8.81c-2.38-.49-4.67-1.51-6.7-2.99H2.1Zm20.22-.3c0-8.97-16.55-4.25-16.55-9.35 0-1.77 1.85-2.86 5.39-2.86 3.24 0 6.11.88 8.97 2.65l1.64-3.41c-2.95-1.6-6.19-2.86-10.61-2.86-6.4 0-9.6 2.57-9.6 6.53 0 9.01 16.5 4.21 16.5 9.52 0 1.46-1.18 2.55-3.14 3.07h6.51c.57-.95.89-2.05.89-3.28v-.01Zm6.52-4.29c0-5.01 2.91-8 7.75-8s7.71 2.99 7.71 8c0 3.94-1.84 6.64-4.99 7.58h6.85c1.57-1.92 2.44-4.49 2.44-7.58 0-7.16-4.59-11.54-12-11.54s-12 4.38-12 11.54c0 3.09.86 5.66 2.42 7.58h6.85c-3.18-.94-5.01-3.63-5.01-7.58h-.02Zm26.9 3.58h.25c.33 1.57.81 2.9 1.45 4h4.52c-3.28-.81-5.71-3.73-5.71-10.74 1.52-1.94 4.38-4.59 8.76-4.59 3.83 0 6.19 2.11 6.19 7.41 0 4.46-1.65 7.13-4.84 7.92h6.96c1.35-1.94 2.13-4.6 2.13-8.08 0-8.34-4.51-11.03-9.3-11.03-4.04 0-7.28 1.89-9.43 5.81h-.46V0l-4.13.5v19.79l-.94 8.08h4.09l.47-4-.01.01Zm27.2 3.24c0-7.83 5.56-12.42 10.65-14.27l-1.98-3.96c-4.08 2.02-7.58 6.06-8.55 11.75h-.42V9.65l-3.83.51v18.23h4.13v-.77Zm15.53-5.56h18.69c-.72-9.73-5.31-12.8-11.37-12.8-8.17 0-11.66 5.64-11.66 11.62 0 2.76.75 5.43 2.44 7.49h6.86c-2.79-.83-4.62-2.91-4.96-6.32v.01Zm7.28-9.26c3.83 0 6.19 2.11 7.07 5.94H98.55c.67-3.79 3.33-5.94 7.2-5.94Zm8.51 13.26c-1.41 1.11-2.88 1.88-4.47 2.32h5.85l-1.38-2.32ZM5.68 51.27c0-8.38 3.45-11.28 7.24-11.28 2.99 0 4.51 1.77 4.51 4.76v10.53h4.13v-4C21.56 42.9 24.97 40 28.8 40c2.95 0 4.46 1.77 4.46 4.76v10.53h4.13V44.22c0-4.93-2.36-8.04-7.2-8.04-4.46 0-7.28 2.95-8.38 7.83h-.25c-.08-4.8-2.48-7.83-7.2-7.83-4.46 0-7.33 2.95-8.42 7.83h-.42v-7.49l-3.96.55V55.3h4.13v-4l-.01-.03Zm38.99-2.32h18.69c-.72-9.73-5.31-12.8-11.37-12.8-8.17 0-11.66 5.64-11.66 11.62 0 2.76.75 5.43 2.44 7.49h6.86c-2.79-.83-4.62-2.91-4.96-6.32v.01Zm7.28-9.26c3.83 0 6.19 2.11 7.07 5.94H44.75c.67-3.79 3.33-5.94 7.2-5.94Zm8.51 13.26c-1.41 1.11-2.88 1.88-4.47 2.32h5.85l-1.38-2.32Zm9.93-1.68c0-8.38 3.45-11.28 7.24-11.28 2.99 0 4.51 1.77 4.51 4.76v10.53h4.13v-4c0-8.38 3.41-11.28 7.24-11.28 2.95 0 4.46 1.77 4.46 4.76v10.53h4.13V44.22c0-4.93-2.36-8.04-7.2-8.04-4.46 0-7.28 2.95-8.38 7.83h-.25c-.08-4.8-2.48-7.83-7.2-7.83-4.46 0-7.33 2.95-8.42 7.83h-.42v-7.49l-3.96.55V55.3h4.13v-4l-.01-.03Zm54.52-25.22h-5.13l-4.8 7.57h4.12l5.81-7.57Zm-15.62 21.64c0-5.01 2.91-8 7.75-8s7.71 2.99 7.71 8c0 3.94-1.84 6.64-4.99 7.58h6.85c1.57-1.92 2.44-4.49 2.44-7.58 0-7.16-4.59-11.54-12-11.54s-12 4.38-12 11.54c0 3.09.86 5.66 2.42 7.58h6.85c-3.18-.94-5.01-3.63-5.01-7.58h-.02Zm27.07 6.82c0-7.83 5.56-12.42 10.65-14.27l-1.98-3.96c-4.08 2.02-7.58 6.06-8.55 11.75h-.42V36.54l-3.83.51v18.23h4.13v-.77Zm17.26-18.02-4.12.54v18.24h4.12V36.49Zm-2.06-2.45c2.23 0 3.83-1.52 3.83-3.7s-1.6-3.62-3.83-3.62-3.83 1.52-3.83 3.62 1.6 3.7 3.83 3.7Zm29.39 20.93c-1.81 0-2.48-.84-2.48-3.07v-7.54c0-5.85-4.42-8.17-9.39-8.17-4.51 0-9.39 1.94-12.67 5.94l2.06 2.74c3.07-3.49 6.74-5.05 10.32-5.05s5.56 1.68 5.56 5.39l-.3.21c-9.6-.88-16.8 1.81-16.8 7.79 0 .76.12 1.45.33 2.06h5.76c-1.15-.51-1.79-1.44-1.79-2.82 0-1.98 1.39-3.12 5.35-4.25 2.27-.67 5.39-1.39 7.45-1.77v2.4c0 3.13-2.26 5.49-5.3 6.44h4.36c.68-.94 1.16-2.04 1.37-3.28h.34c-.03 1.35.1 2.42.34 3.28h6.48v-.3h-.99Z"
						/></g
					><defs><clipPath id="a"><path fill="#fff" d="M0 0h181.92v55.27H0z" /></clipPath></defs
					></svg
				>
				<ul>
					<li>
						<a href="/"><span class="arrow">→</span> Home</a>
					</li>
					<li>
						<a href="/o-processo"><span class="arrow">→</span> O processo</a>
					</li>
					<li>
						<a href="/passo-a-passo"><span class="arrow">→</span> Passo-a-passo</a>
					</li>
					<li>
						<a href="/quem-e-quem"><span class="arrow">→</span> Quem é quem</a>
					</li>
					<li>
						<a href="/mini-doc"><span class="arrow">→</span> Mini-doc</a>
					</li>
					<li>
						<a href="/fotografias"><span class="arrow">→</span> Fotografias</a>
					</li>
					<li>
						<a href="/creditos"><span class="arrow">→</span> Créditos</a>
					</li>
				</ul>
				<div class="menu-footer">
					<a href="/downloads/manual.pdf">
						<div class="item">
							<div>
								<svg
									data-name="Isolation Mode"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									><path
										d="M2 13.5h2v5h16v-5h2v5c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2v-5m10 3 5.55-5.46-1.42-1.41L13 12.75V3.5h-2v9.25L7.88 9.63l-1.42 1.42L12 16.5Z"
										style="fill:#333;stroke-width:0"
									/><path style="stroke-width:0;fill:none" d="M0 0h24v24H0z" /></svg
								>
							</div>
							Manual de Salvamento Download [PDF]
						</div>
					</a>
					<a href="/downloads/manual.pdf">
						<div class="item">
							<div>
								<svg
									data-name="Isolation Mode"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									><path style="stroke-width:0;fill:none" d="M0 0h24v24H0z" /><path
										d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.84-5 6.7v2.07c4-.91 7-4.49 7-8.77s-3-7.86-7-8.77M16.5 12c0-1.77-1-3.29-2.5-4.03V16c1.5-.71 2.5-2.24 2.5-4M3 9v6h4l5 5V4L7 9H3Z"
										style="fill:#333;stroke-width:0"
									/></svg
								>
							</div>
							Áudio completo<br />da cartilha [MP3]
						</div>
					</a>
				</div>
			</div>
		{/if}
	</div>
</nav>

<style lang="scss">
	@import '../../style/variables.scss';
	#menuToggle {
		display: block;
		position: absolute;
		top: 8px;
		right: 50px;

		z-index: 1;

		-webkit-user-select: none;
		user-select: none;
		font-weight: bold;
	}

	#menuToggle input {
		display: block;
		width: 40px;
		height: 32px;
		position: absolute;
		top: -7px;
		left: -5px;

		cursor: pointer;

		opacity: 0; /* hide this */
		z-index: 2; /* and place it over the hamburger */

		-webkit-touch-callout: none;
	}

	/*
 * Just a quick hamburger
 */
	#menuToggle span.bar {
		display: block;
		width: 33px;
		height: 4px;
		margin-bottom: 5px;
		position: relative;

		background: $shade-900;
		border-radius: 3px;

		z-index: 1;

		transform-origin: 4px 0px;

		transition:
			transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
			background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
			opacity 0.55s ease;
	}

	#menuToggle span.bar:first-child {
		transform-origin: 0% 0%;
	}

	#menuToggle span.bar:nth-last-child(2) {
		transform-origin: 0% 100%;
	}

	/*
 * Transform all the slices of hamburger
 * into a crossmark.
 */
	#menuToggle input:checked ~ span {
		opacity: 1;
		transform: rotate(45deg) translate(-2px, -1px);
		background: #232323;
	}

	/*
 * But let's hide the middle one.
 */
	#menuToggle input:checked ~ span:nth-last-child(3) {
		opacity: 0;
		transform: rotate(0deg) scale(0.2, 0.2);
	}

	/*
 * Ohyeah and the last one should go the other direction
 */
	#menuToggle input:checked ~ span:nth-last-child(2) {
		opacity: 1;
		transform: rotate(-45deg) translate(0, -1px);
	}

	/*
 * Make this absolute positioned
 * at the top left of the screen
 */
	#menu {
		position: absolute;
		width: 250px;
		margin: 5px 0 0 0;
		padding: 25px;
		padding-top: 25px;
		right: -50px;
		border: 5px solid $shade-100;
		top: -18px;

		background: $shade-500;
		list-style-type: none;
		-webkit-font-smoothing: antialiased;
		/* to stop flickering of text in safari */

		transform-origin: 0% 0%;
		transform: translate(100%, 0);

		transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
		a {
			color: $shade-100;
		}
	}

	#menu a {
		text-decoration: none;
		text-transform: uppercase;
	}

	#menu ul li {
		padding: 5px 0;
		font-size: 16px;
		display: flex;
		align-items: center;
	}

	/*
 * And let's fade it in from the left
 */
	#menuToggle input:checked ~ #menu {
		transform: none;
		opacity: 1;
	}

	@media screen and (max-width: 768px) {
		#menu {
			transform: none;
			opacity: 0;

			transition: opacity 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
		}
	}
	#menu {
		.menu-footer {
			margin-top: 36px;
			display: flex;
			flex-direction: column;
			gap: 1rem;
			line-height: 1.5;
			a {
				color: $shade-900;
			}
			.item {
				display: flex;
				align-items: start;
				gap: 1rem;
			}
		}
	}
</style>
