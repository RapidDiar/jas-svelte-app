<script context="module">
	import axiosInstance from '../../components/axios/axiosApi';
	let promiseGetList = getNftList();

	async function getNftData(id) {
		try {
			let result = await axiosInstance.get(`/api/nft/nft/${id}`);
			console.log(result);
			let data = result.data.nft;
			return data;
		} catch (error) {
			console.log(error.response);
		}
	}

	async function getNftList() {
		try {
			let result = await axiosInstance.get(`/api/nft/nft/?page_size=100`);
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
	import { authStore } from '../../store';
	import BasicCard from '../../components/Card/BasicCard.svelte';
	import { host } from '../../host';
	import { t, dict } from '../../i18n';
	export let nft;
	export let items = [];

	async function mint() {
		try {
			let result = await axiosInstance.post(`/api/nft/nft/${nft.id}/mint/`, {
				from_address: $authStore.wallet
			});
			console.log(result);
		} catch (error) {
			console.log(error);
		}
	}
</script>

<div class="container-fluid">
	<div class="row justify-content-lg-center my-5">
		<div class="col-4 pe-5">
			<img class="img-fluid" src={host + nft?.image} alt="" />
		</div>
		<div class="col-4 ps-5">
			<div class="row mb-3">
				<div class="col">
					<h1 class="mb-0">{nft?.name}</h1>
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
								<th class="ps-0 py-2" scope="row">{$t('nftItem.set_name')}:</th>
								<td class="ps-0 py-2">{nft?.name}</td>
							</tr>
							<tr>
								<th class="ps-0 py-2" scope="row">{$t('nftItem.sold_by')}:</th>
								<td class="ps-0 py-2">{nft?.user?.username}</td>
							</tr>
							<tr>
								<th class="ps-0 py-2" scope="row">{$t('main.card.price')}</th>
								<td class="ps-0 py-2">{nft?.price} ETH</td>
							</tr>
							<tr>
								<th class="ps-0 py-2" scope="row">{$t('main.card.tag')}</th>
								<td class="ps-0 py-2">{nft?.tags.map((item) => item)}</td>
							</tr>
							<tr>
								<th class="ps-0 py-2" scope="row">{$t('main.card.contract_address')}</th>
								<td class="ps-0 py-2">{nft?.contract_address || $t('main.card.not_defined')}</td>
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
				<p class="mb-0">{nft?.description}</p>
			</div>
			{#if $authStore.authData?.user?.pk === nft?.user?.pk}
				{#if !nft?.is_deployed}
					<div class="row mb-5">
						<div class="col">
							<button on:click={mint} type="button" class="btn btn-primary btn-lg px-5">Mint</button
							>
						</div>
					</div>
				{/if}
			{:else}
				<div class="row mb-5">
					<div class="col">
						<button type="button" class="btn btn-primary btn-lg px-5">Buy Now</button>
					</div>
				</div>
			{/if}
		</div>
	</div>
	<div class="row justify-content-center">
		<div class="col-8">
			<div class="row text-center mb-3">
				<h3>{$t('nftItem.similar_items')}</h3>
			</div>
			<div class="row row-cols-5 mb-5">
				{#await promiseGetList}
					{#each { length: 5 } as _, index}
						<BasicCard />
					{/each}
				{:then data}
					{#each { length: data.length } as _, index}
						<BasicCard data={data[index]} />
					{/each}
				{/await}
			</div>
		</div>
	</div>
</div>
