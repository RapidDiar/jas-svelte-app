<script>
	import CompFooter from '../components/CompFooter.svelte';
	import CompNavbar from '../components/CompNavbar.svelte';
	import { authStore } from '../store.js';
	import axiosInstance from '../components/axios/axiosApi';
	import FilePond, { registerPlugin, supported } from 'svelte-filepond';
	import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
	import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import axiosApiMedia from '../components/axios/axiosApiMedia';

	import translations from '../translations';
	import { dict, t } from '../i18n';
	let profile = $authStore.profile;
	let image;

	$: dict.set(translations);
	let data = {
		name: '',
		image: '',
		title: '',
		price: '',
		tags: '',
		description: '',
		instagram: '',
		telegram: '',
		facebook: '',
		selling_document: '',
		copyright_document: ''
	};
	let name = 'filepond';
	let visible = '';
	registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

	function loadFile(e) {
		data.image = e.target.files[0];
		image = URL.createObjectURL(data.image);
	}

	const onSubmit = () => {
		let userData = JSON.parse(localStorage.getItem('jas-auth-data'));
		axiosApiMedia.defaults.headers.Authorization = 'Bearer ' + userData.access_token;

		console.log(data);
		const form = new FormData();
		form.append('name', data.name);
		form.append('image', data.image);
		form.append('title', data.title);
		form.append('price', data.price);
		form.append('tags', data.tags);
		form.append('description', data.description);
		form.append('instagram', 'https://www.instagram.com/' + data.instagram);
		form.append('telegram', 'https://www.t.me/' + data.telegram);
		form.append('facebook', 'https://www.facebook.com/' + data.facebook);
		form.append('owner', localStorage.getItem('userId'));
		form.append('selling_doc', data.selling_document);
		form.append('author_rights', data.copyright_document);
		// 
		form.append('collection', 1);

		axiosApiMedia.post('/api/nft/', form).then(
			(res) => {
				visible = 'success';
				setTimeout(() => {
					visible = '';
				}, 3000);
				setTimeout(() => {
					goto('/');
				}, 1000);
				console.log(res);
			},
			(err) => {
				console.log(err.response);
				visible = 'error';
				setTimeout(() => {
					visible = '';
				}, 3000);
			}
		);
	};
</script>

<div class="container mt-5">
	<div class="row">
		<div class="col-7">
			<form on:submit|preventDefault={onSubmit}>
				<!-- START SECTION 1 -->
				<div class="row">
					<div class="col">
						<div class="card shadow-custom">
							<div class="card-body">
								<h3>{$t('addNft.title.image')}</h3>
								<p>{$t('addNft.text.text_image')}</p>
							</div>
							<div class="card-body align-self-center col-6">
								<!-- <FilePond
									{name}
									allowMultiple={false}
									max-files={1}
									instantUpload={true}
									
                                    
								/> -->
								<input bind:value={data.image} accept="image/*" type="file" on:change={loadFile} />
							</div>
						</div>
					</div>

					<!-- END SECTION 1 -->

					<!-- START SECTION 2 -->

					<div class="row mt-5">
						<div class="col">
							<div class="card">
								<div class="card-body">
									<h3 class="card-title">{$t('addNft.title.information')}</h3>
									<p>{$t('addNft.text.text_information')}</p>
								</div>
								<div class="card-body">
									<div class="row">
										<div class="col">
											<input
												type="text"
												class="form-control mb-3"
												placeholder={$t('addNft.form_text.title')}
												bind:value={data.name}
											/>
											<input
												type="number"
												class="form-control mb-3"
												placeholder={$t('addNft.form_text.price')}
												bind:value={data.price}
											/>
											<input
												type="text"
												class="form-control mb-3"
												placeholder={$t('addNft.form_text.tags')}
												bind:value={data.tags}
											/>
										</div>
										<div class="col">
											<textarea
												class="form-control h-100"
												placeholder={$t('addNft.form_text.description')}
												bind:value={data.description}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- END SECTION 2 -->

					<!-- START SECTION 3 -->

					<div class="row mt-5">
						<div class="col">
							<div class="card">
								<div class="card-body">
									<h3 class="card-title">{$t('addNft.title.links')}</h3>
									<p>{$t('addNft.text.text_links')}</p>
								</div>

								<div class="card-body">
									<div class="row">
										<div class="col-8">
											<div class="input-group mb-3">
												<i
													class="fab fa-facebook "
													style="width:30px; height:15px; align-self:center; color:rgb(222, 212, 218, 3.5);"
												/>
												<input
													type="text"
													class="form-control"
													placeholder={$t('addNft.form_text.social_media')}
													aria-describedby="basic-addon3"
													bind:value={data.facebook}
												/>
											</div>
											<div class="input-group mb-3">
												<i
													class="fab fa-instagram"
													style="width:30px; height:15px; align-self:center; color:rgb(222, 212, 218, 3.5);"
												/>
												<input
													type="text"
													class="form-control"
													placeholder={$t('addNft.form_text.social_media')}
													aria-describedby="basic-addon3"
													bind:value={data.instagram}
												/>
											</div>
											<div class="input-group mb-3">
												<i
													class="fab fa-telegram"
													style="width:30px; height:15px; align-self:center; color:rgb(222, 212, 218, 3.5);"
												/>
												<input
													type="text"
													class="form-control"
													placeholder={$t('addNft.form_text.social_media')}
													aria-describedby="basic-addon3"
													bind:value={data.telegram}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="row mt-5">
						<div class="col">
							<div class="card shadow-custom">
								<div class="card-body">
									<h3>Selling document</h3>
									<p>Upload PDF file</p>
								</div>
								<div class="card-body align-self-center col-6">
									<!-- <FilePond
										allowMultiple={true}
										max-files={1}
										instantUpload={true}
                                        bind:value={data.selling_document}
                                    /> -->
									<input
										bind:value={data.selling_document}
										on:change={(e) => {
											data.selling_document = e.target.files[0];
										}}
										type="file"
									/>
								</div>
							</div>
						</div>

						<div class="row mt-5">
							<div class="col">
								<div class="card shadow-custom">
									<div class="card-body">
										<h3>Copyright document</h3>
										<p>Upload PDF file</p>
									</div>
									<div class="card-body align-self-center col-6">
										<!-- <FilePond
                                            allowMultiple={true}
                                            max-files={1}
                                            instantUpload={true}
                                            bind:value={data.copyright_document}
                                        /> -->
										<input
											bind:value={data.copyright_document}
											on:change={(e) => {
												data.copyright_document = e.target.files[0];
											}}
											type="file"
										/>
									</div>
								</div>
							</div>

							<!-- END SECTION 3 -->
							<div class="row justify-content-center mt-5 mb-5">
								<div class="col-4 text-center">
									<button type="submit" class="btn btn-primary btn-lg"
										>{$t('addNft.button_text.save')}</button
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>

		<!-- Preview Section (Afted delete)-->
		<div class="col ">
			<div class="card shadow-custom" style="width: 400px; height:fit-content">
				<div class="card" style="width: 400px; height:fit-content">
					<div class="container">
						<div class="row">
							<div class="col-12">
								<h4>{$t('addNft.text.card')}</h4>
							</div>
						</div>
					</div>
					<!-- {#if data.image} -->
					<img src={image} style="height: 350px; object-fit:cover " class="card-img-top" alt="" />
					<!-- {:else}
						<img
							src="https://sun9-15.userapi.com/impg/xm_4iGPJ8mEd1SZ6M1QqX3WDZPvrdOxOOkBWKQ/Aw7inByw0HI.jpg?size=1320x583&quality=96&sign=9f843656e46904b5ff72d7aa2c5f06e7&type=album"
							style="height: 350px; object-fit:cover "
							class="card-img-top"
							alt=""
						/>
					{/if} -->
					<div class="card-body ">
						<div class="container">
							<div class="col">
								<div class="row">
									<div class="col-8">
										<h5 class="card-title">Title:</h5>
										<h5 class="card-title">{data.title}</h5>
										<h5 class="card-title">Tag:</h5>
										<h5 class="card-tag">#{data.tags}</h5>
									</div>
									<div class="col text-end">
										<p class="card-text mb-1">{$t('main.card.price')}</p>
										<div class="row">
											<div class="col">
												<i class="fab fa-ethereum" style="color: black;" />
											</div>
											<div class="col">
												<h5 class="card-text mb-1">{data.price}</h5>
											</div>
										</div>
									</div>
								</div>
								<div class="row">
									<h5>Description:</h5>
									<h5>{data.description}</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

{#if visible == 'success'}
	<div
		class="toast-container position-fixed p-1 top-0 start-50 translate-middle-x bg-success text-light w-25 mt-4"
		transition:fly={{ y: -10, duration: 200 }}
	>
		<div class="toast-header bg-success text-light p-2 mb-0">
			<strong class="me-auto">Message</strong>
		</div>
		<div class="toast-body p-2">Successfully added</div>
	</div>
{:else if visible == 'error'}
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

<style global>
	@import 'filepond/dist/filepond.css';
	@import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
</style>
