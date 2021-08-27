<script>
	import { onMount } from 'svelte';
	import axiosInstance from '../axios/axiosApi';
	let host = 'http://10.0.40.96:8000/';
	let date;
	export let data = {};

	function getDataDate() {
		let result = new Date(data.created_at);
		return `${result.getDate()}.${result.getMonth()}.${result.getFullYear()}`;
	}

	onMount(() => {
		date = getDataDate();
		console.log(date);
		axiosInstance.get('https://api.coinmarketcap.com/v1/ticker/ethereum/').then(
			(res) => {
				console.log(res);
			},
			(err) => {
				console.log(err.response);
			}
		);
	});
</script>

<img src={host + data.image} class="img-fluid mb-3 nftImage rounded-4" alt="..." />

<div class="card p-3">
	<div class="row">
		<div class="col-2 text-center pe-0">
			<img src={host + data.image} class="avatar img-fluid rounded-circle" alt="" />
		</div>
		<div class="col-6 ps-0">
			<p class="mb-1"><strong>{data.user.username}</strong></p>
			<p class="mb-0">Owner</p>
		</div>
		<div class="col">
			<div class="mb-1">
				<a class="me-2"><i class="fab fa-instagram fa-lg" /></a>
				<a><i class="fab fa-twitter fa-lg" /></a>
			</div>

			<p class="mb-0">Buy NFT: {date}</p>
		</div>
	</div>
</div>

<style>
	i {
		color: #141414;
	}
	img {
		object-fit: cover;
	}
	.nftImage {
		height: 510px;
	}
	.avatar {
		width: 56px;
		height: 56px;
	}
</style>
