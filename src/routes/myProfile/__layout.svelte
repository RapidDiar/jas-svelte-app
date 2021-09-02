<script>
	import { authStore } from '../../store.js';
	import { onMount } from 'svelte';
	import axiosInstance from '../../components/axios/axiosApiMedia.js';
	import { host } from '../../host';

	let baseURL = host;
	let profile = $authStore.profile;
	let fullName;
	let backgroundInput;
	let avatarInput;

	const truncate = (str, max, suffix) =>
		str.length < max
			? str
			: `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`;

	const getProfile = async () => {
		try {
			let userData = JSON.parse(localStorage.getItem('jas-auth-data'));
			axiosInstance.defaults.headers.Authorization = 'Bearer ' + userData.access_token;
			const response = await axiosInstance.get('/api/authentication/profile/');
			$authStore.profile = response?.data?.profile;
			profile = $authStore.profile;
		} catch (error) {}
	};

	const objectToFormData = () => {
		let formData = new FormData();
		let fields = { ...profile };
		if (typeof fields.avatar === 'string') delete fields.avatar;
		if (typeof fields.background === 'string') delete fields.background;
		for (var key in fields) {
			if (fields[key] !== null) formData.append(key, fields[key]);
		}
		return formData;
	};

	const getFilePath = (path) => baseURL + path;

	const updateProfile = async () => {
		try {
			let userData = JSON.parse(localStorage.getItem('jas-auth-data'));
			axiosInstance.defaults.headers.Authorization = 'Bearer ' + userData.access_token;
			const response = await axiosInstance.post(
				'/api/authentication/profile/',
				objectToFormData(profile)
			);
			$authStore.profile = response?.data?.profile;
			profile = response?.data?.profile;
		} catch (error) {}
	};

	const addBackground = () => backgroundInput.click();
	const addAvatar = () => avatarInput.click();
	const setBackground = (event) => {
		profile.background = event.target.files[0];
		updateProfile();
	};
	const setAvatar = (event) => {
		profile.avatar = event.target.files[0];
		updateProfile();
	};
	onMount(() => {
		let userData = JSON.parse(localStorage.getItem('jas-auth-data'));
		fullName = `${userData.user.first_name} ${userData.user.last_name}`;
		getProfile();
	});
</script>

<div class="container-fluid">
	<div class="row justify-content-center" on:click={addBackground}>
		<img
			src={getFilePath(profile.background)}
			class="img-fluid ps-0 pe-0"
			style="height: 300px; background-color: #BDBDBD;"
			alt="..."
		/>
		<input type="file" bind:this={backgroundInput} on:change={setBackground} hidden />
	</div>
	<div style="margin-top: -100px;" class="row justify-content-center">
		<div class="col-8">
			<div class="row">
				<div class="col-3 text-center">
					<img
						on:click={addAvatar}
						style="width: 200px; height:200px; background-color: #9E9E9E; "
						src={getFilePath(profile.avatar)}
						class="img-fluid rounded-circle"
						alt=""
					/>
					<input type="file" bind:this={avatarInput} on:change={setAvatar} hidden />
				</div>
				<div class="col d-flex justify-content-lg-between">
					<a
						href="/myProfile/onSale"
						type="button"
						class="btn btn-light btn-lg me-2 w-responsive pt-3 pb-3 h-25 align-self-end">On Sale</a
					>
					<a
						href="/myProfile/created"
						type="button"
						class="btn btn-light btn-lg me-2 w-responsive pt-3 pb-3 h-25 align-self-end">Created</a
					>
					<a
						href="#"
						type="button"
						class="btn btn-light btn-lg me-2 w-responsive pt-3 pb-3 h-25 align-self-end">Bought</a
					>
					<a
						href="#"
						type="button"
						class="btn btn-light btn-lg me-2 w-responsive pt-3 pb-3 h-25 align-self-end"
						>Favorites</a
					>
					<a
						href="#"
						type="button"
						class="btn btn-light btn-lg w-responsive pt-3 pb-3 h-25 align-self-end">Following</a
					>
				</div>
			</div>
			<div class="row mt-4">
				<div class="col-3 text-center now ps-3 pe-3">
					<h4 class="mb-2">{fullName}</h4>
					{#if $authStore.wallet}<p class="text-break mb-2">{$authStore.wallet}</p>{/if}
					{#if !$authStore.wallet}<p class="text-break mb-2">No metamask account</p>{/if}
					{#if profile.email}<p class="text-break mb-2">{profile.email}</p>{/if}
					{#if profile.description}<p class="text-break mb-2">{profile.description}</p>{/if}
					<div class="mt-3 mb-3">
						<a href={profile.instagram} target="_blank">
							<i class="fab fa-instagram fa-2x me-3" />
						</a>
						<a href={profile.telegram} target="_blank">
							<i class="fab fa-telegram-plane fa-2x me-3" />
						</a>
						<a href={profile.facebook} target="_blank"> <i class="fab fa-facebook fa-2x" /> </a>
					</div>
					<a href="/myProfile/editProfile" type="button" class="btn btn-primary btn-lg"
						>Edit profile</a
					>
				</div>
				<div class="col mb-5">
					<slot />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	img {
		object-fit: cover;
	}

	i {
		color: #ded4da;
	}
</style>
