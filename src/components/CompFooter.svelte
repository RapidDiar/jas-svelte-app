<script>
	import translations from '../translations';
	import { dict, locale, t } from '../i18n';

	$: languages = Object.keys(translations);
	$: dict.set(translations);
</script>

<footer class="pt-5 text-light">
	<div class="container-flid imgFooter" />
	<div class="container-fluid bg-primary pb-5">
		<div class="row justify-content-center">
			<div class="col-10">
				<div class="row mb-3">
					<h3>Stay in the loop</h3>
				</div>
				<div class="row pb-5 border-bottom">
					<div class="col align-self-center">
						<p class="m-0">
							Join our mailing list to stay in the loop with our newest feature releases,<br />
							NFT drops, and tips and tricks
						</p>
					</div>
					<div class="col">
						<p class="mb-1 w-auto">Your email address</p>
						<input
							type="text"
							placeholder="Enter your email address here!"
							class="form-control w-50 border-0 px-3 py-2"
						/>
					</div>
				</div>
				<div class="row py-4 border-bottom">
					<div class="col">
						<img src="/src/assets/Logo2.png" alt="" width="140px" />
					</div>
					<div class="col d-flex flex-column">
						<h5 class="mb-3">Company</h5>
						<a href="#">About</a>
						<a href="#">Careers</a>
					</div>
					<div class="col d-flex flex-column">
						<h5 class="mb-3">Recources</h5>
						<a href="#">Help Center</a>
						<a href="#">Partners</a>
						<a href="#">Suggestions</a>
						<a href="#">Discord Community</a>
						<a href="#">Blog</a>
						<a href="#">Docs</a>
						<a href="#">Newsletter</a>
					</div>
					<div class="col">
						<h5>Recources</h5>
						<i class="fab fa-instagram fa-lg p-3  iconsBgcolor text-light me-3" />
						<i class="fab fa-twitter fa-lg p-3 iconsBgcolor text-light me-3" />
						<i class="fab fa-youtube fa-lg p-3 iconsBgcolor text-light me-3" />
						<i class="far fa-envelope fa-lg p-3 iconsBgcolor text-light me-3" />
					</div>
				</div>
				<div class="row">
					<div class="col">
						<p class="m-0">© ArtMarketplace, Inc. 2019.</p>
					</div>
					<div class="col text-end">
						<a class="m-0 me-3">Privacy Policy</a>
						<a class="m-0">Terms of Service</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<section class="d-flex justify-content-center" />
</footer>

<style>
	.iconsBgcolor {
		background-color: #004ac7;
	}

	a {
		color: #ffffff;
		margin-bottom: 5px;
	}

	.imgFooter {
		background-image: url('/src/assets/FooterTopImage/FooterTopImage.svg');
		background-repeat: no-repeat;
		background-position: top;
		background-size: cover;
		height: 110px;
	}
</style>
