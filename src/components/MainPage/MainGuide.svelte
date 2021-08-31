<script>
	let content = [
		{
			icon: 'far fa-registered',
			title: 'Register on kazpatent.kz',
			text:
				'You need to register on the website kazpatent.kz and apply for the authorship of the painting'
		},
		{
			icon: 'fas fa-wallet',
			title: 'Connect Metamask',
			text: 'Log in to your account and connect to the Metamask wallet located in the Profile'
		},
		{
			icon: 'far fa-image',
			title: 'Upload image',
			text:
				'Upload your work, add a title and description, and customize your NFTs with properties, stats, and unlockable content.'
		},
		{
			icon: 'fas fa-dollar-sign',
			title: 'List them for sale',
			text:
				'Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs.'
		}
	];
</script>

<div class="row row-cols-1 row-cols-4 g-4 pt-3">
	{#each content as item}
		<div class="col px-4">
			<div class="card shadow-0">
				<i class={`${item.icon} fa-4x align-self-center`} />
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
</style>
