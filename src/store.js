import { writable } from 'svelte/store';

export const authStore = writable({
	isLogin: false,
	error: false,
	metamaskID: '',
	authData: {
		access_token: null,
		refresh_token: null,
		user: null,
		access_token_expiration: null
	},
	profile: {
		avatar: null,
		background: null,
		description: null,
		facebook: null,
		first_name: null,
		instagram: null,
		last_name: null,
		telegram: null,
	}
});
