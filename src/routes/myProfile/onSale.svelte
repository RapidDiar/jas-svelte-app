<script>
	import { onMount } from 'svelte';
	import axiosInstance from '../../components/axios/axiosApi';
	import CompCard from '../../components/CompCard/CompCard.svelte';

	const getData = async () => {
		try {
			let userData = JSON.parse(localStorage.getItem('jas-auth-data'));
			axiosInstance.defaults.headers.Authorization = 'Bearer ' + userData.access_token;
			let result = await axiosInstance.get('/api/nft/');
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
	<div class="row row-cols-1 row-cols-md-3 g-4">
		{#each data as item}
			<CompCard data={item} />
		{/each}
	</div>
{/await}
