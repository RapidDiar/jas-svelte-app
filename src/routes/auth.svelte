<script>
	import { goto } from '$app/navigation';
	import axiosInstance from '../components/axios/axiosApi.js';
	import { authStore } from '../store.js';
	import { onMount } from 'svelte';

	import translations from '../translations';
	import { dict, t } from '../i18n';

	$: dict.set(translations);

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
			console.log(response);
			localStorage.setItem('jas-auth-data', JSON.stringify(response.data));
			$authStore.isLogin = true;
			$authStore.authData = response.data;
			goto('/myProfile/onSale');
		} catch (error) {
			$authStore.isLogin = false;
		}
	};

	onMount(() => {
		$: dict.set(translations);
	});
</script>

<svelte:head>
	<title>Auth</title>
</svelte:head>

<div class="container-fluid ">
	<div class="row">
		<div class="col">
			<div class="row h-100 flex-column justify-content-center align-items-center">
				<div class="col-8 text-center">
					<h2 class="mb-5">{$t('auth.signin')}</h2>
					<form on:submit|preventDefault={onLogin}>
						<!-- Username input -->
						<p class="text-start mb-2">{$t('auth.text_username')}</p>
						<div class="input-group mb-4 input-group-lg">
							<span class="input-group-text border-1 border-end-0 bg-light" type
								><i class="fas fa-user-alt" /></span
							>
							<input
								type="text"
								class="form-control border-start-1"
								placeholder="example"
								bind:value={data.username}
								style="border-right-radius: 16px;"
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
								placeholder="*******************"
								class="form-control border-start-1"
								bind:value={data.password}
							/>
						</div>

						<div class="d-flex justify-content-between">
							<a href="../register">{$t('auth_text.register')}</a>

							<p class="text-end" style="color: rgb(24,104,239,0.9);">
								{$t('auth_text.forgot_password')}
							</p>
						</div>

						<!-- Submit button -->
						<button type="submit" class="btn btn-lg btn-primary">{$t('auth.button_signin')}</button>
					</form>
				</div>
			</div>
		</div>

		<div class="col p-0">
			<img src="/src/assets/AuthImage/bgImage.png" class="img-fluid w-100 h-100" alt="" />
		</div>
	</div>
</div>

<style>
	.registerPage {
		height: 90vh;
	}

	.input-group-text {
		border-top-left-radius: 64px;
		border-bottom-left-radius: 64px;
	}

	.form-control {
		border-top-right-radius: 64px;
		border-bottom-right-radius: 64px;
	}

	img {
		object-fit: cover;
	}
</style>
