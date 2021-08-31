<script>
	import axiosInstance from '../../components/axios/axiosApi';
	import { onMount } from 'svelte';
	import BasicCard from '../../components/Card/BasicCard.svelte';
	// import { page } from "$app/stores";
	let links = {
		next: null,
		previous: null
	};
	let isLoading = false;
	let nftList = [];
	let page = 1;
	let pages = 0;

	const getNFTList = async (selectedPage) => {
		isLoading = true;
		page = selectedPage;
		const response = await axiosInstance.get(`/api/nft/?page=${page}&page_size=20`);
		nftList = response.data.results;
		links = response.data.links;
		pages = Math.ceil(response.data.total / response.data.page_size);
		isLoading = false;
	};

	onMount(async () => {
		console.log(window.location);
		await getNFTList(page);
	});
</script>

<div class="container-fluid">
	<div class="row justify-content-lg-center mt-4 mb-5">
		<div class="col-2 pe-5">
			<h4 class="mb-5">Explore</h4>
			<p><i class="fas fa-circle me-3" />View All</p>
			<p>
				<svg
					class="me-3"
					xmlns="http://www.w3.org/2000/svg"
					height="16px"
					viewBox="0 0 24 24"
					width="16px"
					fill="#000000"
					><path d="M0 0h24v24H0V0z" fill="none" /><path
						d="M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 9.67l1.69 2.26 2.48-3.1L19 15H9zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"
					/></svg
				>By Collection
			</p>
			<p><i class="fas fa-user-circle me-3" />By Author</p>
			<hr />
			<h4 class="mb-3">Categories</h4>
			<p class="mb-1">Modernism</p>
			<p class="mb-1">Impressionism</p>
			<p class="mb-1">Abstract Art</p>
			<p class="mb-1">Expressionism</p>
			<p class="mb-1">Cubism</p>
			<p class="mb-1">Surrealism</p>
			<p class="mb-1">See All</p>
			<hr />
			<h4 class="mb-3">Price</h4>
			<div class="d-flex">
				<div class="input-group mb-3 w- 50">
					<input type="text" class="form-control" placeholder="min" />
				</div>
				<div class="input-group mb-3">
					<input type="text" class="form-control" placeholder="max" />
				</div>
			</div>
			<hr />
			<h4 class="mb-3">Status</h4>
			<p class="mb-1">On Sale</p>
			<p class="mb-1">Has offers</p>
			<p class="mb-1">Buy Now</p>
			<p class="mb-1">On Auction</p>
			<div class="d-flex justify-content-center mt-4">
				<button type="button" class="btn btn-primary btn-lg">Search</button>
			</div>
		</div>
		<div class="col-6">
			<div class="row mb-4">
				<div class="col-3">
					{#if isLoading}
						<p class="mb-0 align-self-center">Loading</p>
					{:else}
						<p class="mb-0 align-self-center">{nftList.length} results</p>
					{/if}
				</div>
				<div class="col d-flex justify-content-lg-end">
					<select class="custom-select p-2 col-3">
						<option selected>Sort by</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</select>
				</div>
			</div>

			{#if isLoading}
				<div class="row justify-content-center mt-5" style="height: 1500px;">
					<div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
						<span class="visually-hidden">Loading...</span>
					</div>
				</div>
			{:else}
				<div class="row row-cols-4 g-4 mb-4">
					{#each nftList as nft}
						<BasicCard data={nft} />
					{/each}
				</div>
			{/if}
			<div class="row justify-content-center mb-5">
				<div class="col-auto">
					{#if nftList.length}
						<nav>
							<ul class="pagination pagination-lg">
								<li class="page-item">
									{#if links.previous}<div class="page-link" on:click={() => getNFTList(page - 1)}>
											Previous
										</div>{/if}
								</li>
								{#each { length: pages } as _, index}
									<li class="page-item" aria-current="page">
										<div class="page-link" on:click={() => getNFTList(index + 1)}>
											{index + 1}<span class="visually-hidden" />
										</div>
									</li>
								{/each}
								<li class="page-item">
									{#if links.next}<div class="page-link" on:click={() => getNFTList(page + 1)}>
											Next
										</div>{/if}
								</li>
							</ul>
						</nav>
					{:else}
						<div>No results</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
</style>
