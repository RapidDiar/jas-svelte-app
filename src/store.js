import { writable } from 'svelte/store';

export const authStore = writable({
	isLogin: false,
	error: false,
	metamaskID: '',
	authData: {
		access_token: null,
		refresh_token: null,
		user: null
	}
});
