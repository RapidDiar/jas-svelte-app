<script>
	import { goto } from '$app/navigation';
	import { nftStore } from '../../nftStore';
	let host = 'http://127.0.0.1:8000';
	export let data = {
		image: 'https://mdbootstrap.com/img/new/standard/city/041.jpg',
		title: 'Tron',
		price: '0.10',
		tags: 'tron'
	};

	const goToPage = () => {
		nftStore.set(data);
		goto('/nftItem');
	};
</script>

<div class="col">
	<div class="card h-100 hover-shadow" on:click={goToPage}>
		<img src={host + data.image} class="card-img-top" alt="..." />
		<div class="card-body">
			<div class="container">
				<div class="row">
					<div class="col">
						<h5 class="card-title">Name:</h5>
					</div>
					<div class="col text-end">
						<p class="card-text mb-1">Price:</p>
						<p class="card-text mb-1">ETH {data.price}</p>
						<p class="card-text mb-1">{data.user.username}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	img {
		height: 230px;
		object-fit: cover;
	}
</style>
