<script>
	import { onMount } from 'svelte';

	import { authStore } from '../store';

	import translations from '../translations';
	import { dict, locale, t } from '../i18n';

	$: languages = Object.keys(translations);
	$: dict.set(translations);
	$: outerWidth = 0;
	let open = false;
	onMount(() => {
		if (localStorage.getItem('accessToken') == '') {
			$authStore.isLogin = false;
		} else {
			$authStore.isLogin = true;
		}
	});

	const burgerHandler = () => {
		open = !open;
		let sitebody = document.body;
		open ? sitebody.classList.add('menu-lock') : sitebody.classList.remove('menu-lock');
	};

	const onLogout = () => {
		$authStore.isLogin = false;
		console.log($authStore.isLogin);
		localStorage.setItem('accessToken', '');
		localStorage.setItem('refreshToken', '');
		localStorage.setItem('userId', '');
		localStorage.setItem('metamaskID', '');
		// location.reload()
	};
</script>

<svelte:window bind:outerWidth />

<nav class="navbar navbar-light bg-light shadow-5">
	<div class="header_top container-fluid ps-3 pe-3">
		<div class="mobile-menu">
			{#if outerWidth < 579}
				<div class="d-flex">
					<img src="src/assets/icons/openMobile.svg" on:click={burgerHandler} alt="" />
				</div>
				<div class:openSidebarMenu={open} class:addShadow={open} class="navigation">
					<div class="d-flex justify-content-end">
						<img
							class="mobile_close_menu"
							on:click={burgerHandler}
							src="src/assets/icons/closeMenu.svg"
							alt="close"
						/>
					</div>
					<div class="mobile_links mt-4 d-flex flex-column">
						<div>
							<a href="/marketplace" class="mobile_link">
								{$t('navbar.button_marketplace')}
							</a>
						</div>
						<a href="https://newcab.kazpatent.kz/" class="mobile_link">Author Rights</a>
						<div />
						<div>
							{#if $authStore.isLogin}
								<a href="/addNft" class="mobile_link">
									{$t('main.button.create')}
								</a>
							{:else}
								<a href="/auth" class="mobile_link">
									{$t('main.button.create')}
								</a>
							{/if}
						</div>
						<div>
							{#if $authStore.isLogin}
								<a
									class="dropdown-toggle d-flex align-items-center hidden-arrow"
									href="#"
									id="navbarDropdownMenuLink"
									role="button"
									data-mdb-toggle="dropdown"
									aria-expanded="false"
								>
									<img
										src="https://mdbootstrap.com/img/new/avatars/2.jpg"
										class="rounded-circle"
										height="25"
										alt=""
										loading="lazy"
									/>
								</a>
								<ul
									class="dropdown-menu dropdown-menu-end"
									aria-labelledby="navbarDropdownMenuLink"
								>
									<li>
										<a class="dropdown-item" href="/myProfile/onSale"
											>{$t('navbar.button_profile')}</a
										>
									</li>
									<li>
										<a class="dropdown-item" href="/addNft">{$t('navbar.li_add')}</a>
									</li>
									<li>
										{#if $authStore.metamaskID === ''}
											<a class="dropdown-item" href="/metamask">{$t('navbar.li_metamask')}</a>
										{:else}
											<a class="dropdown-item" href="#">{$authStore.metamaskID}</a>
										{/if}
									</li>
									<li>
										<button class="dropdown-item" on:click={onLogout}
											>{$t('navbar.li_logout')}</button
										>
									</li>
								</ul>
							{:else}
								<a type="button" class="mobile_link" href="/auth">
									{$t('navbar.button_signin')}
								</a>
							{/if}
						</div>
						<div class="d-inline-flex">
							<div>
								<span class="lang_select_title_mobile">Язык</span>
							</div>
							<div class="mobile_lang">
								<select bind:value={$locale} class="form-select ms-3">
									{#each languages as lang}
										<option value={lang}>
											{lang}
										</option>
									{/each}
								</select>
							</div>
						</div>
					</div>
				</div>
			{/if}
			<div class="logo">
				<a
					class="navbar-brand"
					href="/"
					style="font-family: 'Open Sans'; font-size:22px; font-weight: medium; color:rgb(0, 0, 0, 0.75);"
				>
					ArtMarketplace
				</a>
			</div>
		</div>
		<div class="main_search input-group w-50">
			<span class="input-group-text border-1 border-end-0" id="search-addon"
				><i class="fas fa-search" /></span
			>
			<input
				type="search"
				class="form-control border-start-0"
				placeholder={$t('navbar.input_search')}
				aria-label="Search"
				aria-describedby="search-addon"
				style="font-family: 'Open Sans'; font-size:16px; font-weight: meduim; color:rgb(0, 0, 0);"
			/>
		</div>
		{#if outerWidth > 579}
			<div class="d-flex align-items-center">
				<a
					href="/marketplace"
					class="btn btn-link px-3 me-2"
					style="color: black; font-family: 'Open Sans'; font-size:12px; font-weight: meduim; color:rgb(0, 0, 0);"
				>
					{$t('navbar.button_marketplace')}
				</a>

				<div class="d-flex align-items-center">
					<a href="https://newcab.kazpatent.kz/" class="btn btn-link px-3 me-2">Author Rights</a>

					<div class="d-flex align-items-center">
						{#if $authStore.isLogin}
							<a
								href="/addNft"
								class="btn btn-link px- me-2"
								style="background-color: gold; color: black; font-family: 'Open Sans'; font-size:12px; font-weight: meduim; color:rgb(0, 0, 0);"
							>
								{$t('main.button.create')}
							</a>
						{:else}
							<a
								href="/auth"
								class="btn btn-link px- me-2"
								style="background-color: gold; color: black; font-family: 'Open Sans'; font-size:12px; font-weight: meduim; color:rgb(0, 0, 0);"
							>
								{$t('main.button.create')}
							</a>
						{/if}

						{#if $authStore.isLogin}
							<a
								class="dropdown-toggle d-flex align-items-center hidden-arrow"
								href="#"
								id="navbarDropdownMenuLink"
								role="button"
								data-mdb-toggle="dropdown"
								aria-expanded="false"
							>
								<img
									src="https://mdbootstrap.com/img/new/avatars/2.jpg"
									class="rounded-circle"
									height="25"
									alt=""
									loading="lazy"
								/>
							</a>
							<ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
								<li>
									<a
										class="dropdown-item"
										href="/myProfile/onSale"
										style="font-family: 'Open Sans'; font-size:12px; font-weight: meduim;"
										>{$t('navbar.button_profile')}</a
									>
								</li>
								<li>
									<a
										class="dropdown-item"
										href="/addNft"
										style="font-family: 'Open Sans'; font-size:12px; font-weight: meduim;"
										>{$t('navbar.li_add')}</a
									>
								</li>
								<li>
									{#if $authStore.metamaskID === ''}
										<a
											class="dropdown-item"
											href="/metamask"
											style="font-family: 'Open Sans'; font-size:12px; font-weight: meduim;"
											>{$t('navbar.li_metamask')}</a
										>
									{:else}
										<a
											class="dropdown-item"
											style="font-family: 'Open Sans'; font-size:12px; font-weight: meduim;"
											href="#">{$authStore.metamaskID}</a
										>
									{/if}
								</li>
								<li>
									<button
										class="dropdown-item"
										on:click={onLogout}
										style="font-family: 'Open Sans'; font-size:12px; font-weight: meduim;"
										>{$t('navbar.li_logout')}</button
									>
								</li>
							</ul>
						{:else}
							<a
								type="button"
								class="btn btn-primary text-nowrap"
								style="background-color: black; font-family: 'Open Sans'; font-size:12px; font-weight: meduim; color: white;"
								href="/auth"
							>
								{$t('navbar.button_signin')}
							</a>
						{/if}

						<select
							bind:value={$locale}
							class="form-select ms-3"
							style="border:honeydew; font-family: 'Open Sans'; font-size:16px; font-weight: meduim; color:rgb(0, 0, 0);"
						>
							{#each languages as lang}
								<option value={lang}>
									{lang}
								</option>
							{/each}
						</select>
					</div>
				</div>
			</div>
		{/if}
	</div>
</nav>

<style>
	@media screen and (max-width: 579px) {
		.header_top {
			display: flex;
			flex-direction: column;
		}
		.mobile_close_menu {
			padding: 24px 24px 0px 0px;
		}
		.main_search {
			width: 100% !important;
		}
		.navbar {
			flex-wrap: nowrap;
			position: fixed;
			z-index: 4;
			width: 100%;
		}
		.navbar-brand {
			margin-right: 0px;
		}
		.mobile-menu {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			width: 100%;
		}
		.navigation {
			top: 0px;
			width: 70%;
			height: 70%;
			z-index: 5;
			left: -0.25px;
			-webkit-transform: translateX(-100%);
			-ms-transform: translateX(-100%);
			transform: translateX(-100%);
			position: fixed;
			-webkit-flex-wrap: wrap;
			-ms-flex-wrap: wrap;
			flex-wrap: wrap;
			background: white;
			justify-content: unset;
			transition: 0.5s ease;
			overflow-y: scroll;
		}
		.openSidebarMenu {
			-webkit-transform: translateX(0);
			-ms-transform: translateX(0);
			transform: translateX(0);
		}
		:global(.menu-lock) {
			overflow-y: hidden;
		}
		:global(#svelte) {
			overflow-x: hidden;
		}
		.mobile_link, .lang_select_title_mobile {
			color: #202121;
			padding: 12px;
			font-size: 24px;
		}
		.mobile_lang {
			width: 30%;
		}
		.form-select {
			padding-bottom: 0px;
			padding-top: 0px;
		}
		.addShadow {
			-webkit-box-shadow: 200px 100px 0px 275px rgba(0, 0, 0, 0.51);
			box-shadow: 200px 100px 0px 275px rgba(0, 0, 0, 0.51);
			transition: 500ms;
		}
	}

	@media screen and (max-width: 400px) {
		.mobile_link, .lang_select_title_mobile {
			font-size: 18px;
		}
	}
</style>
