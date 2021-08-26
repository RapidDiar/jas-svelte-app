<script>
	import { onMount } from 'svelte';
	import { locale } from '../i18n';
	import { authStore } from '../store.js';
	import axiosInstance from '../components/axios/axiosApi';

	import CompFooter from '../components/CompFooter.svelte';
	import CompNavbar from '../components/CompNavbar.svelte';
	import { goto } from '$app/navigation';

	let authData = null;

	const setLocale = () => {
		const userLocale = localStorage.getItem('jas-locale');
		$locale = userLocale || 'ru';
	};

	const getToken = async () => {
		try {
			let newAuthData = authData;
			const expirationDate = new Date(authData.access_token_expiration);
			if (!authData.access_token_expiration || expirationDate <= new Date()) {
				const response = await axiosInstance.post('/api/authentication/token/refresh/', {
					refresh: authData.refresh_token
				});
				newAuthData = {
					...authData,
					access_token: response.data.access,
					access_token_expiration: response.data.access_token_expiration
				};
				localStorage.setItem('jas-auth-data', JSON.stringify(newAuthData));
			}
			$authStore.authData = newAuthData;
			$authStore.isLogin = true;
			goto('/myProfile/onSale');
		} catch (error) {
			$authStore.isLogin = false;
		}
	};

	onMount(() => {
		authData = JSON.parse(localStorage.getItem('jas-auth-data'));
		if (authData?.refresh_token) getToken();
		else $authStore.isLogin = false;
		setLocale();
	});
</script>

<div class="wrapper">
	<CompNavbar />
	<div class="content">
		<slot />
	</div>
	<CompFooter />
</div>

<style>
	.wrapper {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 0;
	}
	.content {
		width: 100%;
		flex: auto;
	}
</style>
