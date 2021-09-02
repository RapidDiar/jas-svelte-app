<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import axiosInstance from '../axios/axiosApi';
	import { host } from '../../host';
	import { authStore } from '../../store';

	let isLogin = $authStore.isLogin;
	let promise = getData();

	async function getData() {
		try {
			let response = await axiosInstance.get('/api/nft/?page_size=100');
			let data = response.data.results;
			return data;
		} catch (error) {
			console.log(error);
		}
	}

	onMount(async () => {
		data = await getData();
	});
</script>

<div class="row justify-content-center text-light bgImage">
	<div class="col-3 text-center align-self-end px-5">
		<h1 class="mb-5 mainGalleryText">
			Sale of NFT tokens confirming ownership of the material object
		</h1>
		<a href="/marketplace" type="button" class="btn btn-light btn-lg col-4 me-5 btnExplore"
			>Explore</a
		>
		<a
			href={isLogin ? '/addNft' : '/auth'}
			type="button"
			class="btn btn-light btn-lg  col-4 btnCreate">Create</a
		>
	</div>
	<div class="col-auto px-5" />
	<div class="col-4 mainGallery">
		<div class="row">
			{#await promise}
				<div class="col text-center loadGallery">
					<div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
						<span class="visually-hidden">Loading...</span>
					</div>
				</div>
			{:then data}
				<div class="col text-center pt-5" transition:fade>
					<img
						src={host + data[Math.floor(Math.random() * data.length)].image}
						class="img-fluid mb-3"
						alt=""
					/>
					<img
						src={host + data[Math.floor(Math.random() * data.length)].image}
						alt=""
						class="img-fluid"
					/>
				</div>
				<div class="col text-center">
					<img
						src={host + data[Math.floor(Math.random() * data.length)].image}
						class="img-fluid mb-3"
						alt=""
					/>
					<img
						src={host + data[Math.floor(Math.random() * data.length)].image}
						alt=""
						class="img-fluid"
					/>
				</div>
				<div class="col text-center pt-5">
					<img
						src={host + data[Math.floor(Math.random() * data.length)].image}
						class="img-fluid mb-3"
						alt=""
					/>
					<img
						src={host + data[Math.floor(Math.random() * data.length)].image}
						alt=""
						class="img-fluid"
					/>
				</div>
			{/await}
		</div>
	</div>
</div>

<style>
	@font-face {
		font-family: NeueMachina-Light;
		src: url('/src/assets/font/NeueMachina-Light.woff');
	}

	.mainGalleryText {
		font-family: NeueMachina-Light;
	}

	img {
		height: 280px;
	}

	.mainGallery {
		margin-top: -200px;
	}

	.mainGalleryBottom {
		height: 200px;
	}

	.loadGallery {
		height: 577px;
		padding-top: 400px;
	}

	.bgImage {
		background-image: url('/src/assets/MainImage/bgMainGallery5.svg');
		background-repeat: no-repeat;
		background-position: bottom;
		background-size: cover;
		padding-bottom: 500px;
	}

	.btnCreate {
		color: #1868ef;
	}

	.btnExplore {
		background-color: #eac503;
		color: #1868ef;
	}

	.mainGalleryText {
		/* padding-right: 150px; */
	}
</style>
