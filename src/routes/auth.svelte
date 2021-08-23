<script>
	import AuthRegisterForm from '../components/AuthPage/AuthRegisterForm.svelte';
	import AuthLoginForm from '../components/AuthPage/AuthLoginForm.svelte';
	import CompNavbar from '../components/CompNavbar.svelte';

	import translations from '../translations';
	import { dict, t } from '../i18n';

	$: dict.set(translations);

	import { goto } from '$app/navigation';
	import axiosInstance from '../components/axios/axiosApi.js';
	import { authStore } from '../store.js';
	import jwt_decode from 'jwt-decode';

	$: languages = Object.keys(translations);
	$: dict.set(translations);

	if ($authStore.isLogin) {
		goto('/');
	}

	let data = {
		username: '',
		password: ''
	};

	let alert = '';

	const onLogin = () => {
		console.log(data);

		axiosInstance.post('/api/authentication/login/', data).then(
			(res) => {
				$authStore.error = false;
				$authStore.isLogin = true;
				console.log(res);
                localStorage.setItem('userData', JSON.stringify(res.data))
				goto('/');
			},
			(err) => {
				$authStore.error = true;
				alert = 'Incorrect login or password';
				console.log(err.response);
			}
		);
	};
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
