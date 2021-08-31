<script>
	import { onMount } from 'svelte';
	import axiosInstance from '../axios/axiosApi';
	import { host } from '../../host';

	let promise = getData();

	async function getData() {
		try {
			let response = await axiosInstance.get('/api/nft/?page_size=100');
			let data = response.data.results;
			return data;
		} catch (error) {
			console.log(response);
		}
	}

	onMount(async () => {
		await getData();
	});
</script>

<div class="col-4">
	<div class="row">
		<h4>20h:20m:15s</h4>
	</div>
	<div class="row">
		{#await promise}
			<div class="col d-flex justify-content-center align-items-center loadingSpinner">
				<div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
					<span class="visually-hidden">Loading...</span>
				</div>
			</div>
		{:then data}
			<div class="col-lg col-12">
				<img
					src={host + data[Math.floor(Math.random() * data.length)].image}
					alt=""
					class="img-fluid baseImage w-100"
				/>
			</div>
			<div class="col-lg-auto col-12 d-flex flex-lg-column flex-row justify-content-between">
				<img
					src={host + data[Math.floor(Math.random() * data.length)].image}
					alt=""
					class="img-fluid rounded-5 afterImage"
				/>
				<img
					src={host + data[Math.floor(Math.random() * data.length)].image}
					alt=""
					class="img-fluid rounded-5 afterImage"
				/>
				<img
					src={host + data[Math.floor(Math.random() * data.length)].image}
					alt=""
					class="img-fluid rounded-5 afterImage"
				/>
			</div>
		{/await}
	</div>
</div>

<style>
	.baseImage {
		height: 400px;
	}

	.afterImage {
		width: 100px;
		height: 100px;
	}

	.loadingSpinner {
		height: 400px;
	}
</style>
