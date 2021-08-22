<script>
	import translations from '../translations';
	import { dict, t } from '../i18n';
	import { goto } from '$app/navigation';
	import axiosInstance from '../components/axios/axiosApi.js';
	import { authStore } from '../store.js';

	$: dict.set(translations);

	if ($authStore.isLogin) {
		goto('/');
	}

	let data = {
		username: null,
		email: null,
		password1: null,
		password2: null,
		first_name: null,
		last_name: null
	};

	let message = false;

	let messageText = '';

	const onRegister = () => {
		console.log(message);
		axiosInstance.post('/api/authentication/registration/', data).then(
			(res) => {
				message = true;
				messageText = 'Account created successfully!';
				console.log(res);
				console.log(messageText);
			},
			(err) => {
				message = true;
				messageText = err.response.data.username[0];
				console.log(messageText);
				console.log(err.response.data.username[0]);
			}
		);
	};
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

<div class="container-fluid ">
	<div class="row">
		<div class="col" style="background-color: yellow;">
			<div class="row justify-content-center align-items-center registerPage">
				<div class="col-6 ">
					<h2 style="font-family: 'Open Sans'; font-size:36px; font-weight: meduim">
						{$t('auth_text.welcome')}
					</h2>
					<p style="font-family: 'Open Sans'; font-size:20px; font-weight: meduim">
						{$t('auth_text.welcome_text')}
					</p>
					<a
						href="/auth"
						class="btn btn-outline-primary btn-rounded btn-lg btn-block mb-4"
						style="border-color: grey; color:black">{$t('auth.button_signin')}</a
					>
				</div>
			</div>
		</div>
		<div class="col-8 text-center ">
			<div class="row justify-content-center align-items-center registerPage">
				<div class="col-6 ">
					<form on:submit|preventDefault={onRegister}>
						<h1 class="mb-5" style="font-family: 'Open Sans'; font-size:36px; font-weight: meduim">
							{$t('auth.create')}
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

						<!-- First name input -->
						<p
							class="text-start mb-2"
							style="font-family: 'Open Sans'; font-size:20px; font-weight: meduim"
						>
							{$t('auth.text_first_name')}
						</p>
						<div class="input-group mb-4 input-group-lg">
							<span class="input-group-text border-1 border-end-0 bg-light"
								><i class="fas fa-user-alt" /></span
							>
							<input
								type="text"
								class="form-control border-start-0"
								placeholder={$t('auth.text_first_name')}
								bind:value={data.first_name}
								style="font-family: 'Open Sans'; font-size:20px; font-weight: meduim"
							/>
						</div>

						<!-- Last name input -->
						<p
							class="text-start mb-2"
							style="font-family: 'Open Sans'; font-size:20px; font-weight: meduim"
						>
							{$t('auth.text_last_name')}
						</p>
						<div class="input-group mb-4 input-group-lg">
							<span class="input-group-text border-1 border-end-0 bg-light"
								><i class="fas fa-user-alt" /></span
							>
							<input
								type="text"
								class="form-control border-start-0"
								placeholder={$t('auth.text_last_name')}
								bind:value={data.last_name}
								style="font-family: 'Open Sans'; font-size:20px; font-weight: meduim"
							/>
						</div>

						<!-- Email input -->
						<p
							class="text-start mb-2"
							style="font-family: 'Open Sans'; font-size:20px; font-weight: meduim"
						>
							{$t('auth.text_email')}
						</p>
						<div class="input-group mb-3">
							<span class="input-group-text border-1 border-end-0 bg-light"
								><i class="fas fa-at" /></span
							>
							<input
								type="email"
								class="form-control border-start-0"
								placeholder={$t('auth.text_email')}
								bind:value={data.email}
								style="font-family: 'Open Sans'; font-size:20px; font-weight: meduim"
							/>
						</div>

						<!-- Password1 input -->
						<p
							class="text-start mb-2"
							style="font-family: 'Open Sans'; font-size:20px; font-weight: meduim"
						>
							{$t('auth.text_password')}
						</p>
						<div class="input-group mb-4 input-group-lg">
							<span class="input-group-text border-1 border-end-0 bg-light"
								><i class="fas fa-key" /></span
							>
							<input
								type="password"
								placeholder={$t('auth.text_password')}
								class="form-control border-start-0"
								bind:value={data.password1}
								style="font-family: 'Open Sans'; font-size:20px; font-weight: meduim"
							/>
						</div>

						<!-- Password2 input -->
						<p
							class="text-start mb-2"
							style="font-family: 'Open Sans'; font-size:20px; font-weight: meduim"
						>
							{$t('auth.text_password_confirmation')}
						</p>
						<div class="input-group mb-4 input-group-lg">
							<span class="input-group-text border-1 border-end-0 bg-light"
								><i class="fas fa-key" /></span
							>
							<input
								type="password"
								placeholder={$t('auth.text_password_confirmation')}
								class="form-control border-start-0"
								bind:value={data.password2}
								style="font-family: 'Open Sans'; font-size:20px; font-weight: meduim"
							/>
						</div>

						<!-- Submit button -->
						<button
							type="submit"
							class="btn btn-primary btn-rounded btn-lg btn-block mb-4"
							style="background-color: yellow; color:black">{$t('auth.button_register')}</button
						>
					</form>
				</div>
			</div>
		</div>
		<!-- <div class="col" style="background-color: yellow;">
                <div class="row justify-content-center align-items-center registerPage">
                    <div class="col-6 ">
                        <h2>{$t('auth_text.welcome')}</h2>
                        <p>{$t('auth_text.welcome_text')}</p>
                        <a href="/auth" class="btn btn-outline-primary btn-rounded btn-lg btn-block mb-4" style="border-color: grey; color:black">{$t('auth.button_signin')}</a>
                    </div>
                </div>
            </div> -->
	</div>
</div>

<style>
	.registerPage {
		height: 90vh;
	}
</style>
