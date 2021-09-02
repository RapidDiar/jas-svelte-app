<script>
	import { host } from '../../host';

	export let data = {
		image: 'https://www.mandlpaints.com/wp-content/uploads/2018/09/Lead-Gray-600x600.jpg',
		user: {
			username: 'Name',
			email: 'name@mail.com'
		}
	};

	console.log(data);
</script>

<div class="col">
	<div class="card shadow-0 align-items-center bgColor">
		<img src={host + data.image} class="card-img-top rounded-circle" alt="..." />
		<div class="card-body text-center">
			<p class="m-0">{data.user.username}</p>
			<p class="m-0"><stong>{data.user.email}</stong></p>
		</div>
	</div>
</div>

<style>
	img {
		width: 200px;
		height: 200px;
	}

	.bgColor {
		background-color: #fff0;
	}
</style>
