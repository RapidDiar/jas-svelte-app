<script>
	import { goto } from '$app/navigation';

	import { host } from '../../host';

	export let data = {
		id: 2,
		image: 'https://www.mandlpaints.com/wp-content/uploads/2018/09/Lead-Gray-600x600.jpg'
	};
</script>

<div class="col">
	<div class="card p-2 shadow-0" on:click={() => goto(`/nftItem/${data.id}`)}>
		<img src={host + data.image} class="card-img-top rounded-5" alt="..." />
		<div class="card-body text-center p-0 pt-2">
			<p class="m-0"><strong>{data.name}</strong></p>
		</div>
	</div>
</div>

<style>
	img {
		height: 230px;
		object-fit: cover;
	}
</style>
