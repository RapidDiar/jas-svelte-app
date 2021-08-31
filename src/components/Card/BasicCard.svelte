<script>
	import { goto, invalidate, prefetch } from '$app/navigation';

	import { host } from '../../host';
	export let data = {
		id: 2,
		image: 'https://www.mandlpaints.com/wp-content/uploads/2018/09/Lead-Gray-600x600.jpg'
	};

	function onGo() {
		goto(`/nftItem/${data.id}`);
	}
</script>

<div class="col">
	<div class="card p-3 hover-shadow h-100" on:click={onGo}>
		<img src={host + data.image} class="card-img-top rounded-4" alt="" />
		<div class="card-body d-flex justify-content-between p-0 pt-3">
			<p class="m-0"><strong>{data.name}</strong></p>
			<p class="m-0"><i class="fab fa-ethereum me-2" /><strong>{data.price}</strong></p>
		</div>
	</div>
</div>

<style>
	img {
		height: 180px;
		object-fit: cover;
	}
</style>
