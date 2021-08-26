<script>
	import { page } from '$app/stores';
	import axiosInstance from '../../components/axios/axiosApi';
	import { onMount } from 'svelte';
	import NftCard from '../../components/CompCard/NftCard.svelte';

	let host = 'http://127.0.0.1:8000';

	let id = $page.params.slug;
	let promise = getNft();

	async function getNft() {
		let result = await axiosInstance.get(`/api/nft/${id}`);
		let nft = result.data.nft;
		return nft;
	}

	onMount(() => {
		getNft();
	});
</script>

{#await promise}
	<div class="row justify-content-md-center align-items-center" style="height: 709.972px">
		<div class="col-1 ">
			<div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
				<span class="visually-hidden">Loading...</span>
			</div>
		</div>
	</div>
{:then nft}
	<div class="container-fluid">
		<div class="row justify-content-lg-center mt-5 mb-5">
			<div class="col-4 ">
				<NftCard data={nft} />
			</div>
			<div class="col-4 pt-5">
				<div class="row mb-3">
					<div class="col">
						<h1 class="mb-0">{nft.name}</h1>
					</div>
					<div class="col-2 text-end align-self-center">
						<i class="far fa-heart fa-2x" />
					</div>
				</div>
				<div class="row mb-3">
					<div class="col-auto pe-1">
						<button
							type="button"
							class="btn btn-outline-primary btn-rounded"
							data-mdb-ripple-color="dark"
						>
							{nft.price} ETH
						</button>
					</div>
				</div>
				<div class="row mb-4">
					<p class="mb-0">{nft.description}</p>
				</div>
				<div class="row mb-5">
					<div class="col">
						<button type="button" class="btn btn-primary btn-rounded btn-lg">Buy</button>
					</div>
				</div>
				<div class="row">
					<p class="mb-0"><small>tags:</small></p>
					<p class="mb-0">{nft.tags.map((item) => item)}</p>
				</div>
				<div class="row mt-4">
					<div class="col">
						<a type="button" href={host + nft.author_rights} class="btn btn-primary"
							>Contract confirming ownership</a
						>
						<a type="button" href={host + nft.selling_doc} class="btn btn-primary ms-3"
							>Contract of sale</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
{/await}
