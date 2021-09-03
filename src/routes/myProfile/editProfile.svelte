<script>
	import { authStore } from '../../store.js';
	import axiosInstance from '../../components/axios/axiosApi';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { t } from '../../i18n.js';
	let profile = $authStore.profile;

	let message = '';

	const getProfile = async () => {
		try {
			let userData = JSON.parse(localStorage.getItem('jas-auth-data'));
			axiosInstance.defaults.headers.Authorization = 'Bearer ' + userData.access_token;
			const response = await axiosInstance.get('/api/authentication/profile/');
			$authStore.profile = response?.data?.profile;

			profile = $authStore.profile;
			profile.metamask_id = localStorage.getItem('MetamaskId');
			return response;
		} catch (error) {}
	};

	let promise = getProfile();

	onMount(async () => {
		if (!profile?.id) getProfile();
	});

	const updateProfile = async () => {
		try {
			let userData = JSON.parse(localStorage.getItem('jas-auth-data'));
			axiosInstance.defaults.headers.Authorization = 'Bearer ' + userData.access_token;
			let fields = { ...profile };
			if (fields.facebook.search('https://www.facebook.com/') !== 0) {
				fields.facebook = `https://www.facebook.com/${fields.facebook}`;
			}
			if (fields.instagram.search('https://www.instagram.com/') !== 0) {
				fields.instagram = `https://www.instagram.com/${fields.instagram}`;
			}
			if (fields.telegram.search('https://t.me/') !== 0) {
				fields.telegram = `https://t.me/${fields.telegram}`;
			}

			delete fields.background;
			delete fields.avatar;
			const response = await axiosInstance.post('/api/authentication/profile/', fields);
			$authStore.profile = response?.data?.profile;
			message = 'success';
			setTimeout(() => {
				message = '';
			}, 3000);
		} catch (error) {
			console.log(error.response);
			message = 'error';
			setTimeout(() => {
				message = '';
			}, 3000);
		}
	};
</script>

{#await promise then response}
	<form on:submit|preventDefault={updateProfile}>
		<div class="row">
			<div class="col pe-5">
				<h2 class="mb-3">{$t('profile.first_name')}</h2>
				<p class="mb-2"><strong>First Name</strong></p>
				<input
					type="text"
					class="p-2 mb-3 w-100"
					placeholder="Enter your first name"
					bind:value={profile.first_name}
				/>
				<p class="mb-2"><strong>{$t('profile.last_name')}</strong></p>
				<input
					type="text"
					class="p-2 mb-3 w-100"
					placeholder="Enter your last name"
					bind:value={profile.last_name}
				/>
				<p class="mb-2"><strong>{$t('profile.bio')}</strong></p>
				<textarea
					id="textAreaExample"
					rows="5"
					class="p-2 w-100"
					bind:value={profile.description}
				/>
			</div>

			<div class="col ps-5">
				<h2 class="mb-0">{$t('addNft.title.links')}</h2>
				<div class="input-group input-group-lg mt-5 mb-3">
					<span class="input-group-text border-0"><i class="fab fa-facebook fa-2x" /></span>
					<input
						type="text"
						class="form-control rounded"
						placeholder="Facebook username"
						bind:value={profile.facebook}
					/>
				</div>
				<div class="input-group input-group-lg mb-3">
					<span class="input-group-text border-0" id="search-addon"
						><i class="fab fa-instagram fa-2x" /></span
					>
					<input
						type="text"
						class="form-control rounded"
						placeholder="Instagram username"
						bind:value={profile.instagram}
					/>
				</div>
				<div class="input-group input-group-lg mb-3">
					<span class="input-group-text border-0" id="search-addon"
						><i class="fab fa-telegram-plane fa-2x" /></span
					>
					<input
						type="text"
						class="form-control rounded"
						placeholder="Telegram username"
						bind:value={profile.telegram}
					/>
				</div>
			</div>
		</div>
		<div class="row justify-content-lg-center mt-5">
			<button type="submit" class="btn btn-primary btn-lg col-2"
				>{$t('addNft.button_text.save')}</button
			>
		</div>
	</form>

	{#if message == 'success'}
		<div
			class="toast-container position-fixed p-1 top-0 start-50 translate-middle-x bg-success text-light w-25 mt-4"
			transition:fly={{ y: -10, duration: 200 }}
		>
			<div class="toast-header bg-success text-light p-2 mb-0">
				<strong class="me-auto">Message</strong>
			</div>
			<div class="toast-body p-2">Successfully added</div>
		</div>
	{:else if message == 'error'}
		<div
			class="toast-container position-fixed p-1 top-0 start-50 translate-middle-x bg-danger text-light w-25 mt-4"
			transition:fly={{ y: -10, duration: 200 }}
		>
			<div class="toast-header bg-danger text-light p-2 mb-0">
				<strong class="me-auto">Message</strong>
			</div>
			<div class="toast-body p-2">Something went wrong</div>
		</div>
	{/if}
{/await}

<style>
	input,
	textarea {
		border: 1px solid #dad0d0;
		border-radius: 4px;
	}

	i {
		color: #ded4da;
	}
</style>
