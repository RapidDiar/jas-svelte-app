<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import axiosInstance from '../axios/axiosApi';
	import { host } from '../../host';

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

<div class="row justify-content-center bg-primary text-light bgImage">
	<div class="col-4 text-center align-self-end">
		<h1 class="mb-5">Sale of NFT tokens<br />confirming ownership of<br />the material object</h1>
		<a href={'/addNft'} type="button" class="btn btn-light btn-lg me-5 col-4">Create</a>
		<a href="/marketplace" type="button" class="btn btn-light btn-lg col-4">Explore</a>
	</div>
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
<div class="row bg-primary mainGalleryBottom mb-5 " />

<style>
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
		/* background-image: url('/src/assets/GalleryBackground.jpg');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover; */
	}
</style>
