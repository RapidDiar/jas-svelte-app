<script>
	let content = [
		{
			icon: '/src/assets/MainImage/MainGuideIcons/register.svg',
			title: 'Register on kazpatent.kz',
			text:
				'You need to register on the website kazpatent.kz and apply for the authorship of the painting'
		},
		{
			icon: '/src/assets/MainImage/MainGuideIcons/wallet.svg',
			title: 'Connect Metamask',
			text: 'Log in to your account and connect to the Metamask wallet located in the Profile'
		},
		{
			icon: '/src/assets/MainImage/MainGuideIcons/upload.svg',
			title: 'Upload image',
			text:
				'Upload your work, add a title and description, and customize your NFTs with properties, stats, and unlockable content.'
		},
		{
			icon: '/src/assets/MainImage/MainGuideIcons/list.svg',
			title: 'List them for sale',
			text:
				'Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs.'
		}
	];
</script>

<div class="row row-cols-1 row-cols-4 g-4 pt-3">
	{#each content as item}
		<div class="col px-4">
			<div class="card shadow-0 align-items-center">
				<div>
					<img src={item.icon} alt="" class="img-fluid p-3" />
				</div>
				<div class="card-body text-center">
					<h5 class="mb-2">{item.title}</h5>
					<p class="m-0 text-justify">
						{item.text}
					</p>
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	p {
		text-align: justify;
	}

	img {
		width: 100px;
	}
</style>
