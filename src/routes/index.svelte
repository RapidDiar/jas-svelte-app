<script>
	import { onMount } from 'svelte';
	import { authStore } from '../store';
	import { dict, t } from '../i18n';
	import translations from '../translations';
	import axiosInstance from '../components/axios/axiosApi';

	import BasicCard from '../components/Card/BasicCard.svelte';
	import MainGallery from '../components/MainPage/MainGallery.svelte';
	import CollectionCard from '../components/Card/CollectionCard.svelte';
	import MainAuction from '../components/MainPage/MainAuction.svelte';
	import UserCard from '../components/Card/UserCard.svelte';
	import MainGuide from '../components/MainPage/MainGuide.svelte';

	$: dict.set(translations);

	let isLogin = $authStore.isLogin;
	let dataCard = [];
	let userData;
	let promise = getNft();

	async function getToken(refreshToken) {
		await axiosInstance.post('/api/authentication/token/refresh/', { refresh: refreshToken }).then(
			(res) => {
				isLogin = true;
				console.log(res);
				let userData = JSON.parse(localStorage.getItem('jas-auth-data'));
				userData.access_token = res.data.access;
				localStorage.setItem('jas-auth-data', JSON.stringify(userData));
			},
			(err) => {
				isLogin = false;
				console.log(err.response);
				localStorage.setItem('jas-auth-data', '');
				localStorage.setItem('MetamaskId', '');
			}
		);
	}

	async function getNft() {
		try {
			let res = await axiosInstance.get('/api/nft/nft/?page_size=100');
			let data = [...res.data.results];
			return data;
		} catch (err) {
			console.log(err.response);
		}
	}

	onMount(async () => {
		if (localStorage.getItem('jas-auth-data')) {
			userData = JSON.parse(localStorage.getItem('jas-auth-data'));
			await getToken(userData.refresh_token);
		} else {
			isLogin = false;
		}
		dataCard = await getNft();
		console.log($authStore);
	});
</script>

<!-- <MainBackImg/> -->

<div class="container-fluid">
	<MainGallery />

	<div class="row text-center mb-3 ">
		<h3>{$t('main.title.collection')}</h3>
	</div>
	<div class="row justify-content-center mb-5">
		<div class="col-lg-8 col-md ">
			<div class="row row-cols-md-5 row-cols-sm-2 row-cols-2 g-4">
				{#await promise}
					{#each { length: 5 } as _, index}
						<CollectionCard />
					{/each}
				{:then data}
					{#each { length: 5 } as _, index}
						<CollectionCard data={data[index]} />
					{/each}
				{/await}
			</div>
		</div>
	</div>

	<div class="row justify-content-center flex-lg-row flex-column ">
		<div class="col-lg-4 col-md col-sm col align-self-center">
			<h3 class="mb-5">{$t('main.title.pre_sale')}</h3>
			<p class="mb-5">
				The art of Kazakhstan covers all forms of art created throughout history by the peoples
				living on the territory of modern-day Kazakhstan. Throughout most periods, much of the
				population of Kazakhstan was nomadic, or at least moved regularly across the vast country.
			</p>
			<p class="m-0"><strong>Pre-Sale ending in 20 Aug 2021, 20:00</strong></p>
		</div>
		<MainAuction />
	</div>

	<div class="row text-center align-items-center flex-column py-5 my-3 bgTopSeller">
		<div class="col-8 pb-3">
			<h3>{$t('main.title.sellers')}</h3>
		</div>

		<div class="col-8">
			<div class="row row-cols-1 row-cols-md-5 g-4">
				{#await promise}
					{#each { length: 5 } as _, index}
						<UserCard />
					{/each}
				{:then data}
					{#each { length: 5 } as _, index}
						<UserCard data={data[index]} />
					{/each}
				{/await}
			</div>
		</div>
	</div>

	<div class="row text-center mb-3">
		<h3>{$t('navbar.button_marketplace')}</h3>
	</div>
	<div class="row justify-content-center mb-3">
		<div class=" col-lg-8 col-md col-sm col">
			<div class="row row-cols-2 row-cols-lg-5 g-4">
				{#await promise}
					<h3>...Loading</h3>
				{:then data}
					{#each { length: 10 } as _, index}
						<BasicCard data={data[index]} />
					{/each}
				{/await}
			</div>
		</div>
	</div>
	<div class="row justify-content-center mb-5">
		<div class="col-auto">
			<a href="/marketplace" type="button" class="btn btn-primary btn-lg"
				>{$t('main.button.load')}</a
			>
		</div>
	</div>

	<div class="row text-center mb-4">
		<h3>{$t('main.title.nft')}</h3>
	</div>
	<div class="row justify-content-center mb-5">
		<div class="col-8">
			<MainGuide />
		</div>
	</div>
</div>

<style>
	:global(img) {
		object-fit: cover;
	}

	.bgTopSeller {
		background-image: url('/src/assets/MainImage/bgUserList.svg');
		background-repeat: no-repeat;
		background-position: top right;
		background-size: cover;
	}
</style>
