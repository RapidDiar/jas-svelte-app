<script>
	import { authStore } from '../../store.js';
	import { onMount } from 'svelte';
	import axiosInstance from '../../components/axios/axiosApi.js';

	let profile = $authStore.profile;
	$: fullName = `${profile?.first_name} ${profile?.last_name}`;

	const truncate = (str, max, suffix) =>
		str.length < max
			? str
			: `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`;

	const getProfile = async () => {
		try {
			axiosInstance.defaults.headers.Authorization = 'Bearer ' + $authStore.authData?.access_token;
			const response = await axiosInstance.get('/api/authentication/profile/');
			$authStore.profile = response?.data?.profile;
			profile = $authStore.profile;
			profile.metamask_id = localStorage.getItem('MetamaskId');
		} catch (error) {}
	};

	const setBackground = async () => {
		try {
			axiosInstance.defaults.headers.Authorization = 'Bearer ' + $authStore.authData?.access_token;
			const response = await axiosInstance.get('/api/authentication/profile/');
			$authStore.profile = response?.data?.profile;
			profile = $authStore.profile;
			profile.metamask_id = localStorage.getItem('MetamaskId');
		} catch (error) {}
	};

	onMount(() => {
		getProfile();
	});
</script>

<div class="container-fluid">
	<div class="row justify-content-center" on:click={setBackground}>
		<img
			src={profile.background}
			class="img-fluid ps-0 pe-0"
			style="height: 300px; background-color: #BDBDBD;"
			alt="..."
		/>
	</div>
	<div style="margin-top: -100px;" class="row justify-content-center ">
		<div class="col-8">
			<div class="row">
				<div class="col-3 text-center">
					<img
						style="width: 200px; height:200px; background-color: #9E9E9E; "
						src={profile.avatar}
						class="img-fluid rounded-circle"
						alt=""
					/>
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
					{#if profile.metamask_id}<p class="text-break mb-2">{profile.metamask_id}</p>{/if}
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
				<div class="col">
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
