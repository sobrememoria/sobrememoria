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
		<span></span>
		<span></span>
		<span></span>

		<!--
    Too bad the menu has to be inside of the button
    but hey, it's pure CSS magic.
    -->
		{#if show}
			<ul id="menu">
				<li>
					<a href="/">→ HOME</a>
				</li>
				<li>
					<a href="/about">→ O PROCESSO</a>
				</li>
				<li>
					<a href="/contact">→ PASSO-A-PASSO</a>
				</li>
				<li>
					<a href="/contact">→ QUEM É QUEM</a>
				</li>
				<li>
					<a href="/contact">→ MInI-DOC</a>
				</li>
				<li>
					<a href="/contact">→ FOToGRAFIAS</a>
				</li>
				<li>
					<a href="/contact">→ PASSO-A-PASSO</a>
				</li>
				<li>
					<a href="https://erikterwan.com/" target="_blank">Show me more</a>
				</li>
			</ul>
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
	#menuToggle span {
		display: block;
		width: 33px;
		height: 4px;
		margin-bottom: 5px;
		position: relative;

		background: #000;
		border-radius: 3px;

		z-index: 1;

		transform-origin: 4px 0px;

		transition:
			transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
			background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
			opacity 0.55s ease;
	}

	#menuToggle span:first-child {
		transform-origin: 0% 0%;
	}

	#menuToggle span:nth-last-child(2) {
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
		width: 350px;
		margin: 5px 0 0 0;
		padding: 50px;
		padding-top: 125px;
		right: -50px;

		background: $shade-500;
		list-style-type: none;
		-webkit-font-smoothing: antialiased;
		/* to stop flickering of text in safari */

		transform-origin: 0% 0%;
		transform: translate(100%, 0);

		transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
		a {
			color: #fff;
		}
	}

	#menu li {
		padding: 10px 0;
		font-size: 22px;
	}

	/*
 * And let's fade it in from the left
 */
	#menuToggle input:checked ~ ul {
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
</style>
