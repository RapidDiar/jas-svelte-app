<script>
	import { onMount } from 'svelte';
	import axiosInstance from '../../components/axios/axiosApi';
	import BasicCard from '../../components/Card/BasicCard.svelte';

	const getData = async () => {
		try {
			let userData = JSON.parse(localStorage.getItem('jas-auth-data'));
			axiosInstance.defaults.headers.Authorization = 'Bearer ' + userData.access_token;
			let result = await axiosInstance.get('/api/nft/nft/my_nfts/?page_size=100');
			let data = [...result.data.results];
			data.reverse();
			return data;
		} catch (error) {}
	};

	let promise = getData();

	onMount(async () => {
		await getData();
	});
</script>

{#await promise then data}
	<div class="row row-cols-1 row-cols-md-4 g-4">
		{#each data as item}
			<BasicCard data={item} />
		{/each}
	</div>
{/await}
