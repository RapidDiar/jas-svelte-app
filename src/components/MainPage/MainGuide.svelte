<script>
	import { t, dict } from '../../i18n';
</script>

<div class="row row-cols-1 row-cols-4 g-4 pt-3">
	<div class="col px-4">
		<div class="card shadow-0 align-items-center">
			<div>
				<img src="/src/assets/MainImage/MainGuideIcons/register.svg" alt="" class="img-fluid p-3" />
			</div>
			<div class="card-body text-center">
				<h5 class="mb-2">{$t('main.nft.subtitle.register')}</h5>
				<p class="m-0 text-justify">
					{$t('main.nft.text.register')}
				</p>
			</div>
		</div>
	</div>

	<div class="col px-4">
		<div class="card shadow-0 align-items-center">
			<div>
				<img src="/src/assets/MainImage/MainGuideIcons/wallet.svg" alt="" class="img-fluid p-3" />
			</div>
			<div class="card-body text-center">
				<h5 class="mb-2">{$t('main.nft.subtitle.connect')}</h5>
				<p class="m-0 text-justify">
					{$t('main.nft.text.connect')}
				</p>
			</div>
		</div>
	</div>

	<div class="col px-4">
		<div class="card shadow-0 align-items-center">
			<div>
				<img src="/src/assets/MainImage/MainGuideIcons/upload.svg" alt="" class="img-fluid p-3" />
			</div>
			<div class="card-body text-center">
				<h5 class="mb-2">{$t('main.nft.subtitle.upload')}</h5>
				<p class="m-0 text-justify">
					{$t('main.nft.text.upload')}
				</p>
			</div>
		</div>
	</div>

	<div class="col px-4">
		<div class="card shadow-0 align-items-center">
			<div>
				<img src="/src/assets/MainImage/MainGuideIcons/list.svg" alt="" class="img-fluid p-3" />
			</div>
			<div class="card-body text-center">
				<h5 class="mb-2">{$t('main.nft.subtitle.list')}</h5>
				<p class="m-0 text-justify">
					{$t('main.nft.text.list')}
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	p {
		text-align: justify;
	}

	img {
		width: 100px;
	}
</style>
