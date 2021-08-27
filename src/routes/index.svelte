<script>
	import MainCardItem from '../components/MainPage/MainCardItem.svelte';
	import MainGuide from '../components/MainPage/MainGuide.svelte';
	import axiosInstance from '../components/axios/axiosApi';
	import { onMount } from 'svelte';
	import { authStore } from '../store';
	import MainCard from '../components/MainPage/MainCard.svelte';

	import translations from '../translations';
	import { dict, t } from '../i18n';

	$: dict.set(translations);

	let isLogin = $authStore.isLogin;
	let dataCard = [];
	let userData;
	let promise = getNft();

	async function getToken(refreshToken) {
		await axiosInstance.post('/api/authentication/token/refresh/', { refresh: refreshToken }).then(
			(res) => {
				$authStore.isLogin = true;
				console.log(res);
				localStorage.setItem('jas-auth-data', JSON.stringify(res.data));
			},
			(err) => {
				$authStore.isLogin = false;
				console.log(err.response);
				localStorage.setItem('userData', '');
				localStorage.setItem('MetamaskId', '');
			}
		);
	}

	async function getNft() {
		try {
			let res = await axiosInstance.get('/api/nft/?page_size=100');
			let data = [...res.data.results];
			return data;
		} catch (err) {
			console.log(err.response);
		}
	}

	onMount(async () => {
		if (localStorage.getItem('jas-auth-data')) {
			userData = JSON.parse(localStorage.getItem('jas-auth-data'));
			await getToken(userData.refresh_token);
		} else {
			$authStore.isLogin = false;
		}
		dataCard = await getNft();
		console.log(dataCard.length);
	});

	let count = 1;

	function scrollDown() {
		count += 1;
		if (count > 4) {
			count = 4;
		}
		console.log(count);
	}
	function scrollUp() {
		count -= 1;
		if (count < 1) {
			count = 1;
		}
		console.log(count);
	}
</script>

<div id="carouselBasicExample" class="carousel slide carousel-fade" data-mdb-ride="carousel">
	<!-- Indicators -->
	<div class="carousel-indicators">
		<button
			type="button"
			data-mdb-target="#carouselBasicExample"
			data-mdb-slide-to="0"
			class="active"
			aria-current="true"
			aria-label="Slide 1"
		/>
		<button
			type="button"
			data-mdb-target="#carouselBasicExample"
			data-mdb-slide-to="1"
			aria-label="Slide 2"
		/>
		<button
			type="button"
			data-mdb-target="#carouselBasicExample"
			data-mdb-slide-to="2"
			aria-label="Slide 3"
		/>
	</div>

	<!-- Inner -->
	<div class="carousel-inner">
		<!-- Single item -->
		<div class="carousel-item active ">
			<img
				src="https://sun9-43.userapi.com/impg/tPa-Y_ouqdQj2AkYeBj7KjIWiozJYKLSqjxlXg/0QW2vBaJtn4.jpg?size=1320x583&quality=96&sign=0c2018167b584be415d704a4e455254f&type=album"
				class="d-block w-100"
				style="filter: brightness(0.5);"
				alt="..."
			/>
			<div class="carousel-caption align-items-center flex-column p-4" style="color: gold;">
				<h2>The Art Gallery</h2>
				<!-- <h2>Gallery</h2> -->
			</div>
		</div>

		<!-- Single item -->
		<div class="carousel-item">
			<img
				src="https://sun9-33.userapi.com/impg/8Wi6wQPiAIpnIfrjxzxGVjyFf5wihvVeWMRLqg/fMrZYhTuXN0.jpg?size=1320x583&quality=96&sign=5853107b15b56527f14de4df79916211&type=album"
				class="d-block w-100"
				style="filter: brightness(0.5);"
				alt="..."
			/>
			<div class="carousel-caption d-none d-md-block" style="color: gold;">
				<h2>The most unique art objects Can buy here</h2>
			</div>
		</div>

		<!-- Single item -->
		<div class="carousel-item">
			<img
				src="https://sun9-15.userapi.com/impg/xm_4iGPJ8mEd1SZ6M1QqX3WDZPvrdOxOOkBWKQ/Aw7inByw0HI.jpg?size=1320x583&quality=96&sign=9f843656e46904b5ff72d7aa2c5f06e7&type=album"
				class="d-block w-100"
				style="filter: brightness(0.5);"
				alt="..."
			/>
			<div class="carousel-caption d-none d-md-block" style="color: gold;">
				<h2>Art objects with property rights</h2>
			</div>
		</div>
	</div>
	<!-- Inner -->

	<!-- Controls -->
	<button
		class="carousel-control-prev"
		type="button"
		data-mdb-target="#carouselBasicExample"
		data-mdb-slide="prev"
	>
		<span class="carousel-control-prev-icon" aria-hidden="true" />
		<span class="visually-hidden">Previous</span>
	</button>
	<button
		class="carousel-control-next"
		type="button"
		data-mdb-target="#carouselBasicExample"
		data-mdb-slide="next"
	>
		<span class="carousel-control-next-icon" aria-hidden="true" />
		<span class="visually-hidden">Next</span>
	</button>
</div>

<!-- START Section-2 -->
<div class="row justify-content-center mb-4">
	<div class="col-8">
		<h3
			class="pop_title"
			style="font-family: 'Open Sans'; font-size:28px; font-weight: bold; margin-top:30px"
		>
			{$t('main.title.pop')}
		</h3>
	</div>
</div>
<div class="row justify-content-center mb-4">
	<div class="col-8">
		<!--START Card 2  -->
		<div class="row row-cols-1 row-cols-md-3 g-4">
			{#await promise}
				<MainCardItem />
			{:then data}
				{#each { length: 6 } as _, index}
					<MainCardItem data={dataCard[index]} />
				{/each}
			{/await}
		</div>
		<!--END Card 2-->
	</div>
</div>
<!-- END Section-2 -->

<!-- <MainBackImg/> -->

<div class="container-fluid">
	<!--START Section 1 -->
	<div class="section1 row justify-content-center mt-5 mb-5">
		<div class="subsection1 col-4 text-center align-self-center">
			<h4 style="font-family: 'Open Sans'; font-size:14px; font-weight: bold;">
				{$t('main.title.subtitle')}
			</h4>
			<h3 class="mb-5" style="font-family: 'Open Sans'; font-size:32px; font-weight: bold;">
				{$t('main.title.title')}
			</h3>
			<a
				href={isLogin ? '/addNft' : '/auth'}
				type="button"
				class="btn btn-primary btn-lg me-5 col-4"
				style="color:black; background-color: gold;">{$t('main.button.create')}</a
			>
			<a href="/marketplace" type="button" class="btn btn-primary btn-lg col-4"
				>{$t('main.button.explore')}</a
			>
		</div>
		<div class="subsection2 col-4">
			<!--START Card 1  -->
			{#await promise}
				<div
					class="shadow-1 d-flex align-items-center justify-content-center"
					style="height: 620.327px"
				>
					<div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
						<span class="visually-hidden">Loading...</span>
					</div>
				</div>
			{:then data}
				<MainCard data={data[Math.floor(Math.random() * data.length)]} />
				<!-- <MainCard data={data[0]} /> -->
			{/await}

			<!--END Card 1-->
		</div>
	</div>
	<!-- END Section-1 -->

	<!-- START Section-2 -->
	<div class="row justify-content-center mb-4">
		<div class="col-8">
			<h3 style="font-family: 'Open Sans'; font-size:28px; font-weight: bold;">
				{$t('navbar.button_marketplace')}
			</h3>
		</div>
	</div>
	<div class="row justify-content-center mb-4">
		<div class="col-8">
			<!--START Card 2  -->
			<div class="row row-cols-1 row-cols-md-3 g-4">
				{#each { length: 6 } as _, index}
					{#if dataCard[index] === undefined}
						<MainCardItem />
					{:else}
						<MainCardItem data={dataCard[index]} />
					{/if}
				{/each}
			</div>
			<!--END Card 2-->
		</div>
	</div>
	<div class="row justify-content-center mb-4">
		<div class="col-2">
			<a href="/marketplace" class="btn btn-primary btn-lg btn-block mb-4" style="color:white"
				>{$t('main.button.load')}</a
			>
		</div>
	</div>
	<!-- END Section-2 -->

	<!-- START Section-3 -->
	<div class="row justify-content-center mb-5 mt-5">
		<div class="col-8">
			<h3 class="nft_title" style="font-family: 'Open Sans'; font-size:28px; font-weight: bold;">
				{$t('main.title.nft')}
			</h3>
		</div>
	</div>
	<div class="container">
		<div class="card shadow-custom">
			<div class="row justify-content-center mb-4">
				<div class="col-2">
					<div class="row justify-content-center mb-4">
						<i on:click={scrollUp} class="fas fa-caret-up" style="font-size:50px; color:gold" />

						<!-- <i class="fas fa-caret-down"></i> -->
					</div>
					<div class="row justify-content-center mb-4">
						<i on:click={scrollDown} class="fas fa-caret-down" style="font-size:50px; color:gold" />
					</div>
				</div>

				<div class="col-7 main_cards">
					<div class="info_cards">
						{#if count === 1}
							<div class="card-body">
								<h5
									class="card-title"
									style="font-family: 'Open Sans'; font-size:24  px; font-weight: bold;"
								>
									{$t('main.nft.subtitle.marketplace')}
								</h5>
								<p
									class="card-text mt-4 mb-4"
									style="font-family: 'Open Sans'; font-size:14px; font-weight: regular;"
								>
									{$t('main.nft.text.marketplace')}
								</p>
							</div>
						{/if}
						{#if count === 2}
							<div class="card-body">
								<h5
									class="card-title"
									style="font-family: 'Open Sans'; font-size:24  px; font-weight: bold;"
								>
									{$t('main.nft.subtitle.deposit')}
								</h5>
								<p
									class="card-text mt-4 mb-4"
									style="font-family: 'Open Sans'; font-size:14px; font-weight: regular;"
								>
									{$t('main.nft.text.deposit')}
								</p>
							</div>
						{/if}
						{#if count === 3}
							<div class="card-body">
								<h5
									class="card-title"
									style="font-family: 'Open Sans'; font-size:24  px; font-weight: bold;"
								>
									{$t('main.nft.subtitle.cryptocurrencies')}
								</h5>
								<p
									class="card-text mt-4 mb-4"
									style="font-family: 'Open Sans'; font-size:14px; font-weight: regular;"
								>
									{$t('main.nft.text.cryptocurrencies')}
								</p>
							</div>
						{/if}
						{#if count === 4}
							<div class="card-body">
								<h5
									class="card-title"
									style="font-family: 'Open Sans'; font-size:24  px; font-weight: bold;"
								>
									{$t('main.nft.subtitle.add')}
								</h5>
								<p
									class="card-text mt-4 mb-4"
									style="font-family: 'Open Sans'; font-size:14px; font-weight: regular;"
								>
									{$t('main.nft.text.add')}
								</p>
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- END Section-3 -->

	<!-- START Section-4 -->
	<div class="row justify-content-center mb-5 mt-5">
		<div class="gallery_title col-8">
			<h3 style="font-family: 'Open Sans'; font-size:28px; font-weight: bold;">
				{$t('main.title.gallery')}
			</h3>
		</div>
	</div>
	<div class="row justify-content-center mb-4">
		<div class="col-8 mt-3 mb-3">
			<div class="row">
				<MainGuide />
			</div>
		</div>
	</div>
	<!-- END Section-4 -->

	<!-- START Section-5 -->
	<div class="row justify-content-center mb-4">
		<div class="col-8">
			<h3
				class="aboutus_title"
				style="font-family: 'Open Sans'; font-size:28px; font-weight: bold;"
			>
				About us
			</h3>
		</div>
	</div>
	<div class="container" style="margin-bottom:100px">
		<div class="bottom_cards row justify-content-center mb-4">
			<div class="card_main col-3">
				<div class="card" style="width: 18rem">
					<i class="far fa-lightbulb" style="font-size: 50px; color:gold; align-self: center" />
					<div class="card-body">
						<h5
							class="card-title"
							style="text-align: center; font-family: 'Open Sans'; font-size:18px; font-weight: meduim; color:rgb(0, 0, 0, 0.7)"
						>
							Creativity
						</h5>
					</div>
				</div>
			</div>
			<div class="card_main col-3">
				<div class="card" style="width: 18rem;">
					<i class="fas fa-shield-alt" style="font-size: 50px; color:gold; align-self: center" />
					<div class="card-body">
						<h5
							class="card-title"
							style="text-align: center;font-family: 'Open Sans'; font-size:18px; font-weight: meduim; color:rgb(0, 0, 0, 0.7)"
						>
							Reliability
						</h5>
					</div>
				</div>
			</div>
			<div class="card_main col-3">
				<div class="card" style="width: 18rem;">
					<i class="fas fa-fingerprint" style="font-size: 50px; color:gold; align-self: center" />
					<div class="card-body">
						<h5
							class="card-title"
							style="text-align: center; font-family: 'Open Sans'; font-size:18px; font-weight: meduim; color:rgb(0, 0, 0, 0.7)"
						>
							Unique
						</h5>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- END Section-5 -->
</div>

<style>
	.cardImageContainer {
		height: 220px;
	}

	.carousel-caption {
		top: 40%;
		bottom: auto;
	}

	.carousel-caption h2 {
		font-size: 75px;
		text-transform: uppercase;
		letter-spacing: 3px;
		font-weight: 600;
		font-family: 'Orbitron', sans-serif;
	}
	.info_cards {
		height: auto;
		scroll-behavior: smooth;
	}
	.main_cards {
		max-height: 146px;
		overflow: scroll;
		scroll-behavior: smooth;
	}
	.main_cards::-webkit-scrollbar {
		display: none; /* Safari and Chrome */
	}
	@media screen and (max-width: 579px) {
		.section1 {
			display: flex;
			flex-direction: column;
		}
		.subsection1,
		.subsection2 {
			width: 100%;
		}
		.subsection1 {
			margin-bottom: 5rem;
		}
		.bottom_cards {
			flex-direction: column;
		}
		.aboutus_title {
			text-align: center;
		}
		.card {
			width: 100% !important;
		}
		.card_main {
			width: 100%;
		}
		.gallery_title,
		.pop_title,
		.nft_title {
			text-align: center;
		}
		.carousel {
			padding-top: 97px;
		}
	}
</style>
