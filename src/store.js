import { writable } from 'svelte/store';

export const authStore = writable({
	isLogin: false,
	error: false
});
