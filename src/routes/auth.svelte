<script>
	import translations from '../translations';
	import { dict, t } from '../i18n';

	$: dict.set(translations);

	import { goto } from '$app/navigation';
	import axiosInstance from '../components/axios/axiosApi.js';
	import { authStore } from '../store.js';
	import jwt_decode from 'jwt-decode';
	import { onMount } from 'svelte';

	$: languages = Object.keys(translations);

	if ($authStore.isLogin) {
		goto('/');
	}

	let data = {
		username: '',
		password: ''
	};

	const onLogin = async () => {
		try {
			const response = await axiosInstance.post('/api/authentication/login/', data);
			localStorage.setItem('jas-auth-data', JSON.stringify(response.data));
			$authStore.isLogin = true;
			$authStore.authData = response.data;
			goto('/myProfile/onSale');
		} catch (error) {
			$authStore.isLogin = false;
		}
	};

	onMount(() => {});
</script>

<svelte:head>
	<title>Auth</title>
</svelte:head>

<div class="container-fluid ">
	<div class="row">
		<div class="col-8 text-center ">
			<div class="row justify-content-center align-items-center registerPage">
				<div class="col-6 ">
					<form on:submit|preventDefault={onLogin}>
						<h1 class="mb-5" style="font-family: 'Open Sans'; font-size:36px; font-weight: meduim">
							{$t('auth.signin')}
						</h1>
						<!-- Username input -->
						<p
							class="text-start mb-2"
							style="font-family: 'Open Sans'; font-size:20px; font-weight: meduim"
						>
							{$t('auth.text_username')}
						</p>
						<div class="input-group mb-4 input-group-lg">
							<span class="input-group-text border-1 border-end-0 bg-light"
								><i class="fas fa-user-alt" /></span
							>
							<input
								type="text"
								class="form-control border-start-0"
								placeholder={$t('auth.text_username')}
								bind:value={data.username}
								style="font-family: 'Open Sans'; font-size:20px; font-weight: meduim"
							/>
						</div>

						<!-- Password input -->
						<p class="text-start mb-2">{$t('auth.text_password')}</p>
						<div class="input-group mb-4 input-group-lg">
							<span class="input-group-text border-1 border-end-0 bg-light"
								><i class="fas fa-key" /></span
							>
							<input
								type="password"
								placeholder={$t('auth.text_password')}
								class="form-control border-start-0"
								bind:value={data.password}
								style="font-family: 'Open Sans'; font-size:20px; font-weight: meduim"
							/>
						</div>

						<!-- Submit button -->
						<button
							type="submit"
							class="btn btn-primary btn-rounded btn-lg btn-block mb-4"
							style="background-color: yellow; color:black">{$t('auth.button_signin')}</button
						>
					</form>
				</div>
			</div>
		</div>
		<div class="col" style="background-color: yellow;">
			<div class="row justify-content-center align-items-center registerPage">
				<div class="col-6 ">
					<h2 style="font-family: 'Open Sans'; font-size:36px; font-weight: meduim">
						{$t('auth_text.hello')}
					</h2>
					<p>{$t('auth_text.hello_text')}</p>
					<a
						href="/register"
						class="btn btn-outline-primary btn-rounded btn-lg btn-block mb-4"
						style="border-color: grey; color:black">{$t('auth.button_register')}</a
					>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.registerPage {
		height: 90vh;
	}
</style>
