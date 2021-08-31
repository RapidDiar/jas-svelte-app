<script context="module">
	import axiosInstance from '../../components/axios/axiosApi';
	import BasicCard from '../../components/Card/BasicCard.svelte';
	import { host } from '../../host';

	async function getNftData(id) {
		try {
			let result = await axiosInstance.get(`/api/nft/${id}`);
			console.log(result);
			let data = result.data.nft;
			return data;
		} catch (error) {
			console.log(error.response);
		}
	}

	async function getNftList() {
		try {
			let result = await axiosInstance.get(`/api/nft/?page_size=100`);
			let data = result.data.results;
			return data;
		} catch (error) {
			console.log(error.response);
		}
	}
	export async function load({ page }) {
		const { slug } = page.params;
		console.log(slug);
		return {
			props: {
				nft: await getNftData(slug),
				items: await getNftList()
			}
		};
	}
</script>

<script>
	export let nft;
	export let items;
</script>

<div class="container-fluid">
	<div class="row justify-content-lg-center my-5">
		<div class="col-4 pe-5">
			<img class="img-fluid" src={host + nft.image} alt="" />
		</div>
		<div class="col-4 ps-5">
			<div class="row mb-3">
				<div class="col">
					<h1 class="mb-0">{nft.name}</h1>
				</div>
				<div class="col-2 text-end align-self-center">
					<i class="far fa-heart fa-2x" />
				</div>
			</div>
			<div class="row">
				<div class="col-8 pe-1">
					<table class="table table-borderless">
						<tbody>
							<tr>
								<th class="ps-0 py-2" scope="row">Set Name:</th>
								<td class="ps-0 py-2">{nft.name}</td>
							</tr>
							<tr>
								<th class="ps-0 py-2" scope="row">Sold by:</th>
								<td class="ps-0 py-2">{nft.user.username}</td>
							</tr>
							<tr>
								<th class="ps-0 py-2" scope="row">Price:</th>
								<td class="ps-0 py-2">{nft.price} ETH</td>
							</tr>
							<tr>
								<th class="ps-0 py-2" scope="row">Tags</th>
								<td class="ps-0 py-2">{nft.tags.map((item) => item)}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div class="row pb-4 mb-4 border-bottom">
				<div class="col">
					<i class="fab fa-instagram fa-lg p-3 bg-primary text-light me-3" />
					<i class="fab fa-twitter fa-lg p-3 bg-primary text-light" />
				</div>
			</div>
			<div class="row mb-4">
				<p class="mb-0">{nft.description}</p>
			</div>
			<div class="row mb-5">
				<div class="col">
					<button type="button" class="btn btn-primary btn-lg px-5">Buy Now</button>
				</div>
			</div>
		</div>
	</div>
	<!-- <div class="row justify-content-center mb-5">
		<div class="col-8">
			<div class="row">
				<h4>Items Details</h4>
			</div>
			<div class="row py-3 border-bottom">
				<div class="col-4">
					<p class="m-0">Documents</p>
				</div>
				<div class="col-2">
					<p class="m-0">Size</p>
				</div>
				<div class="col-2">
					<p class="m-0">Type</p>
				</div>
				<div class="col-2">
					<p class="m-0">Date</p>
				</div>
				<div class="col-2" />
			</div>
			<div class="row border-bottom py-3">
				<div class="col-4 align-self-center">
					<p class="m-0">Contract confirming ownership</p>
				</div>
				<div class="col-2 align-self-center"><p class="m-0">17.2 KB</p></div>
				<div class="col-2 align-self-center"><i class="far fa-file-pdf fa-2x text-danger" /></div>
				<div class="col-2 align-self-center"><p class="m-0">20.06.2021</p></div>
				<div class="col-2 align-self-center text-center">
					<a href={host + nft.author_rights} type="button" class="btn btn-primary" target="_blank"
						>View</a
					>
				</div>
			</div>
			<div class="row border-bottom py-3">
				<div class="col-4 align-self-center"><p class="m-0">Contract of sale</p></div>
				<div class="col-2 align-self-center"><p class="m-0">17.2 KB</p></div>
				<div class="col-2 align-self-center"><i class="far fa-file-pdf fa-2x text-danger" /></div>
				<div class="col-2 align-self-center"><p class="m-0">20.06.2021</p></div>
				<div class="col-2 align-self-center text-center">
					<a
						href={host + nft.transaction_hash}
						type="button"
						class="btn btn-primary"
						target="_blank">View</a
					>
				</div>
			</div>
		</div>
	</div> -->
	<div class="row justify-content-center">
		<div class="col-8">
			<div class="row text-center mb-3">
				<h3>Similar items</h3>
			</div>
			<div class="row row-cols-5 mb-5">
				{#each { length: 5 } as _, index}
					<BasicCard data={items[index]} />
				{/each}
			</div>
		</div>
	</div>
</div>

<!-- Reference -->

<!-- <script>
	import { page } from '$app/stores';
	import axiosInstance from '../../components/axios/axiosApi';
	import { onMount } from 'svelte';
	import { host } from '../../host';
	import BasicCard from '../../components/Card/BasicCard.svelte';
	export let id;
	let promise = getNft();
	let promiseData = getData();
	async function getNft() {
		try {
			let result = await axiosInstance.get(`/api/nft/${id}`);
			let nft = result.data.nft;
			return nft;
		} catch (error) {
			console.log(error.response);
		}
	}

	async function getData() {
		try {
			let response = await axiosInstance.get('/api/nft/?page_size=100');
			let data = response.data.results;
			return data;
		} catch (error) {}
	}

	onMount(() => {
		getNft();
		getData();
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
		<div class="row justify-content-lg-center my-5">
			<div class="col-4 pe-5">
				<img class="img-fluid" src={host + nft.image} alt="" />
			</div>
			<div class="col-4 ps-5">
				<div class="row mb-3">
					<div class="col">
						<h1 class="mb-0">{nft.name}</h1>
					</div>
					<div class="col-2 text-end align-self-center">
						<i class="far fa-heart fa-2x" />
					</div>
				</div>
				<div class="row">
					<div class="col-8 pe-1">
						<table class="table table-borderless">
							<tbody>
								<tr>
									<th class="ps-0 py-2" scope="row">Set Name:</th>
									<td class="ps-0 py-2">{nft.name}</td>
								</tr>
								<tr>
									<th class="ps-0 py-2" scope="row">Sold by:</th>
									<td class="ps-0 py-2">{nft.user.username}</td>
								</tr>
								<tr>
									<th class="ps-0 py-2" scope="row">Price:</th>
									<td class="ps-0 py-2">{nft.price} ETH</td>
								</tr>
								<tr>
									<th class="ps-0 py-2" scope="row">Tags</th>
									<td class="ps-0 py-2">{nft.tags.map((item) => item)}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="row pb-4 mb-4 border-bottom">
					<div class="col">
						<i class="fab fa-instagram fa-lg p-3 bg-primary text-light me-3" />
						<i class="fab fa-twitter fa-lg p-3 bg-primary text-light" />
					</div>
				</div>
				<div class="row mb-4">
					<p class="mb-0">{nft.description}</p>
				</div>
				<div class="row mb-5">
					<div class="col">
						<button type="button" class="btn btn-primary btn-lg px-5">Buy Now</button>
					</div>
				</div>
			</div>
		</div>
		<div class="row justify-content-center mb-5">
			<div class="col-8">
				<div class="row">
					<h4>Items Details</h4>
				</div>
				<div class="row py-3 border-bottom">
					<div class="col-4">
						<p class="m-0">Documents</p>
					</div>
					<div class="col-2">
						<p class="m-0">Size</p>
					</div>
					<div class="col-2">
						<p class="m-0">Type</p>
					</div>
					<div class="col-2">
						<p class="m-0">Date</p>
					</div>
					<div class="col-2" />
				</div>
				<div class="row border-bottom py-3">
					<div class="col-4 align-self-center">
						<p class="m-0">Contract confirming ownership</p>
					</div>
					<div class="col-2 align-self-center"><p class="m-0">17.2 KB</p></div>
					<div class="col-2 align-self-center"><i class="far fa-file-pdf fa-2x text-danger" /></div>
					<div class="col-2 align-self-center"><p class="m-0">20.06.2021</p></div>
					<div class="col-2 align-self-center text-center">
						<a href={host + nft.author_rights} type="button" class="btn btn-primary" target="_blank"
							>View</a
						>
					</div>
				</div>
				<div class="row border-bottom py-3">
					<div class="col-4 align-self-center"><p class="m-0">Contract of sale</p></div>
					<div class="col-2 align-self-center"><p class="m-0">17.2 KB</p></div>
					<div class="col-2 align-self-center"><i class="far fa-file-pdf fa-2x text-danger" /></div>
					<div class="col-2 align-self-center"><p class="m-0">20.06.2021</p></div>
					<div class="col-2 align-self-center text-center">
						<a
							href={host + nft.transaction_hash}
							type="button"
							class="btn btn-primary"
							target="_blank">View</a
						>
					</div>
				</div>
			</div>
		</div>
		<div class="row justify-content-center">
			<div class="col-8">
				<div class="row text-center mb-3">
					<h3>Similar items</h3>
				</div>
				<div class="row row-cols-5 mb-5">
					{#await promiseData}
						<div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
							<span class="visually-hidden">Loading...</span>
						</div>
					{:then data}
						{#each { length: 5 } as _, index}
							<BasicCard data={data[index]} />
						{/each}
					{/await}
				</div>
			</div>
		</div>
	</div>
{/await} -->
