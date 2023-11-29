<script>
	export let kicker;
	export let image;
</script>

<div>
	<div class="slide">
		<img src={image} alt={kicker} />
		<div class="kicker">
			{kicker}
		</div>
	</div>
</div>

<style lang="scss">
	.kicker {
		position: absolute;
		top: 45px;
		transform: translateX(45px);
		padding: 0 36px;
		background-color: #333;
		color: #fff;
		min-width: 90px;
		font-size: 12px;
		text-transform: uppercase;
		letter-spacing: 4px;
		white-space: nowrap;
	}
</style>
