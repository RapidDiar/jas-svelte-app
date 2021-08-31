<script>
	import { onMount } from 'svelte';
	import { authStore } from '../../store.js';
	import axiosInstance from '../../components/axios/axiosApiMedia';
	import BasicCard from '../../components/Card/BasicCard.svelte';
	import axiosApiMedia from '../../components/axios/axiosApiMedia';
	let items = [];
	let profile = $authStore.profile;
	const getData = () => {
		console.log($authStore.authData);
		let userData = JSON.parse(localStorage.getItem('jas-auth-data'));
		axiosInstance.defaults.headers.Authorization = 'Bearer ' + userData.access_token;
		axiosApiMedia.get('/api/nft/my_nfts/?page_size=100').then(
			(res) => {
				console.log(res.data.results);
				items = [...res.data.results];
				// res.data.map(item => {
				//     console.log(item)
				//     items.push(item)
				// })
				items.reverse();
				console.log(items);
			},
			(err) => {
				console.log(err.response);
			}
		);
	};

	onMount(() => {
		getData();
	});
</script>

<div class="row row-cols-1 row-cols-md-4 g-4">
	{#each items.reverse() as item}
		<BasicCard data={item} />
	{/each}
</div>
