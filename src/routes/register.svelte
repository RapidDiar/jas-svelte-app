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

	let policy = false;
	let regSuccess = false;

	const renderCheck = () => {
		if (regSuccess) {
			return `<i class="fas fa-check me-2"></i>`;
		} else {
			return '';
		}
	};

	let data = {
		username: null,
		email: null,
		password1: null,
		password2: null,
		first_name: null,
		last_name: null
	};

	const onRegister = async () => {
		console.log('aa')
		try {
			const response = await axiosInstance.post('/api/authentication/registration/', data);
			localStorage.setItem('jas-auth-data', JSON.stringify(response.data));
			$authStore.isLogin = true;
			$authStore.authData = response.data;
			goto('/myProfile/onSale');
		} catch (error) {
			console.log(error.response);
			$authStore.isLogin = false;
		}
	};
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

<div class="container-fluid ">
	<div class="row">
		<div class="col">
			<div class="row align-items-center justify-content-lg-center h-100">
				<div class="col-8 text-center ">
					<h2>{$t('auth.create')}</h2>
					<form on:submit|preventDefault={onRegister}>
						<!-- Username input -->
						<p class="text-start mb-2 mt-4">{$t('auth.text_username')}</p>
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
						<!-- email input -->
						<p class="text-start mb-2">{$t('auth.text_email')}</p>
						<div class="input-group mb-4 input-group-lg">
							<span class="input-group-text border-1 border-end-0 bg-light" type
								><i class="fas fa-at" /></span
							>
							<input
								type="text"
								class="form-control border-start-1"
								placeholder="example@example.com"
								bind:value={data.email}
								style="border-right-radius: 16px;"
							/>
						</div>
						<!-- First name input -->
						<p class="text-start mb-2">{$t('auth.text_first_name')}</p>
						<div class="input-group mb-4 input-group-lg">
							<span class="input-group-text border-1 border-end-0 bg-light" type
								><i class="fas fa-file-signature" /></span
							>
							<input
								type="text"
								class="form-control border-start-1"
								placeholder="Zhazira"
								bind:value={data.first_name}
								style="border-right-radius: 16px;"
							/>
						</div>
						<!-- Last name input -->
						<p class="text-start mb-2">{$t('auth.text_last_name')}</p>
						<div class="input-group mb-4 input-group-lg">
							<span class="input-group-text border-1 border-end-0 bg-light" type
								><i class="fas fa-file-signature" /></span
							>
							<input
								type="text"
								class="form-control border-start-1"
								placeholder="Oraz"
								bind:value={data.last_name}
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
								bind:value={data.password1}
							/>
						</div>
						<!-- Password confirmation -->
						<p class="text-start mb-2">{$t('auth.text_password_confirmation')}</p>
						<div class="input-group mb-4 input-group-lg">
							<span class="input-group-text border-1 border-end-0 bg-light"
								><i class="fas fa-key" /></span
							>
							<input
								type="password"
								placeholder="*******************"
								class="form-control border-start-1"
								bind:value={data.password2}
							/>
						</div>

						<div class="row text-end mb-4">
							<a href="../auth">{$t('auth_text.auth')}</a>
						</div>

						<div class="row text-center mb-4">
							<label class="form-check-label" for="inlineCheckbox">
								<input
									class="form-check-input"
									type="checkbox"
									id="inlineCheckbox"
									value="option"
									bind:checked={policy}
								/>
								{$t('auth_text.agreement')}</label
							>
						</div>

						<!-- Submit button -->
						<div class="row">
							<div class="col text-center ">
								<button
									type="submit"
									class={regSuccess
										? ' btn btn-lg mb-4 btn-success'
										: 'btn btn-lg mb-4 btn-primary'}
									disabled={!policy}
								>
									{@html renderCheck()}
									{$t('auth.button_register')}</button
								>
							</div>
						</div>
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
		height: 100%;
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
