<script>
	import { authStore } from '../store';
	import translations from '../translations';
	import { dict, locale, t } from '../i18n';
	import { goto } from '$app/navigation';
	import AutoComplete from 'simple-svelte-autocomplete';
	import axiosInstance from './axios/axiosApi';
	import { onMount } from 'svelte';
	import { host } from '../host';
	import { page } from '$app/stores';

	let profile = $authStore.profile;
	let store = authStore;
	let storeContent;
	let subscribeStore = store.subscribe((item) => (storeContent = item));

	$: languages = Object.keys(translations);
	$: dict.set(translations);
	$: outerWidth = 0;
	$: isLogin = $authStore.isLogin;

	const setLocale = (event) => {
		$locale = event.target.value;
		localStorage.setItem('jas-locale', $locale);
	};

	const getProfile = async () => {
		try {
			let userData = JSON.parse(localStorage.getItem('jas-auth-data'));
			axiosInstance.defaults.headers.Authorization = 'Bearer ' + userData.access_token;
			const response = await axiosInstance.get('/api/authentication/profile/');
			$authStore.profile = response?.data?.profile;
			profile = $authStore.profile;
			profile.metamask_id = localStorage.getItem('MetamaskId');
		} catch (error) {}
	};

	const onLogout = () => {
		$authStore.isLogin = false;
		localStorage.removeItem('jas-auth-data');
		localStorage.removeItem('metamaskID');
		if ($page.path.search('/myProfile') == 0 || $page.path.search('/addNft') == 0) {
			goto('/');
		}
	};

	let items;

	let selectedDataObject;
	let selectedDataValue;

	const getNft = async () => {
		try {
			let response = await axiosInstance.get('/api/nft/?page_size=100');
			let data = response.data.results;
			return data;
		} catch (error) {}
	};

	let promise = getNft();

	onMount(async () => {
		items = await getNft();
		await getProfile();
	});
</script>

<nav class="navbar navbar-primary bg-primary py-0 px-4">
	<div class="container-fluid">
		<div class="col-lg-2 col-md-auto">
			<a class="navbar-brand text-light" href="/"
				><img src="/src/assets/Logo2.png" alt="" width="140px" /></a
			>
		</div>
		<div class="col-4">
			<form>
				<div class="input-group">
					<span class="input-group-text border-end-0 text-light border-light "
						><i class="fas fa-search" /></span
					>
					{#await promise}
						<AutoComplete className="form-control p-0" />
					{:then data}
						<AutoComplete
							className="form-control px-0 pt-0 bg-primary border-start-0 border-light"
							inputClassName="autocompleteInput form-control bg-primary border-0 text-light "
							{items}
							bind:selectedItem={selectedDataObject}
							bind:value={selectedDataValue}
							labelFieldName="name"
							valueFieldName="id"
							maxItemsToShowInList="5"
							minCharactersToSearch={2}
							keywordsFunction={(data) => data.name + ' ' + data.user.username}
							onChange={() =>
								selectedDataObject
									? goto(`nftItem/${selectedDataObject.id}`, { replaceState: true })
									: console.log(selectedDataObject?.id)}
						/>
					{:catch error}
						<input type="text" class="form-control" placeholder="Username" />
					{/await}
				</div>
			</form>
		</div>
		<div class="col navbar-nav d-flex flex-lg-row justify-content-end align-items-center">
			<a class="navItem px-3 mx-3 text-light py-4" href="/marketplace">Marketplace</a>
			<a class="navItem px-3 mx-3 text-light py-4" href="#">FAQ</a>
			<a class="navItem px-3 mx-3 text-light py-4" href="#">Stats</a>
			<a
				class="navItem px-3 mx-3 text-light py-4"
				href="https://newcab.kazpatent.kz/"
				target="_blank">Author Rights</a
			>
			{#if isLogin}
				<a
					class="navItem px-3 mx-3 text-light py-4 dropdown-toggle d-flex align-items-center hidden-arrow"
					href="#"
					id="navbarDropdownMenuLink"
					role="button"
					data-mdb-toggle="dropdown"
					aria-expanded="false"
				>
					<img
						src={host + storeContent.profile.avatar}
						class="rounded-circle"
						width="30"
						height="30"
						alt=""
						loading="lazy"
					/>
				</a>
				<ul class="dropdown-menu dropdown-menu-end me-5" aria-labelledby="navbarDropdownMenuLink">
					<li>
						<a class="dropdown-item" href="/myProfile/onSale">My profile</a>
					</li>
					<li>
						<a class="dropdown-item" href="/addNft">Add NFT</a>
					</li>
					<li>
						<a class="dropdown-item" href="/metamask">Connect Metamask</a>
					</li>
					<li>
						<a class="dropdown-item" href=" " on:click={onLogout}>Logout</a>
					</li>
				</ul>
			{:else}
				<a class="navItem px-3 mx-3 text-light py-4" href="/auth">Sign In</a>
			{/if}
			<select class="navSelect border-0 px-3 ms-3 text-light bg-primary">
				<option selected value="ru">RU</option>
				<option value="en">EN</option>
				<option value="kz">KZ</option>
			</select>
		</div>
	</div>
</nav>

<style>
	img {
		object-fit: cover;
	}
	.navSelect {
		appearance: none;
	}

	.navSelect:active {
		border: 0px;
	}

	.navSelect:focus {
		outline: none;
	}

	input::placeholder {
		color: #fff;
	}

	.autocomplete {
		border-end-end-radius: 50px;
		border-start-end-radius: 50px;
	}

	.autocomplete-list {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
		margin-top: 5px;
	}

	span {
		border-start-start-radius: 50px;
		border-end-start-radius: 50px;
	}

	.navItem {
		border-bottom: 4px solid #1266f1;
	}

	.navItem:hover {
		border-bottom: 4px solid #fff;
	}
</style>
