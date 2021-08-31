<script>
	import { onMount } from 'svelte';
	import detectEthereumProvider from '@metamask/detect-provider';
	import { authStore } from '../store';

	let metamask = 'none';
	let currentAccount = null;

	async function detectMetamask() {
		const provider = await detectEthereumProvider();

		if (provider) {
			startApp(provider);
			metamask = 'installed';
		} else {
			console.log('Please install MetaMask!');
		}

		function startApp(provider) {
			if (provider !== window.ethereum) {
				console.error('Do you have multiple wallets installed?');
			}
		}

		ethereum
			.request({ method: 'eth_accounts' })
			.then(handleAccountsChanged)
			.catch((err) => {
				console.error(err);
			});

		ethereum.on('accountsChanged', handleAccountsChanged);

		function handleAccountsChanged(accounts) {
			if (accounts.length === 0) {
				console.log('Please connect to MetaMask.');
			} else if (accounts[0] !== currentAccount) {
				metamask = 'connected';
				currentAccount = accounts[0];
				localStorage.setItem('MetamaskId', currentAccount);
				console.log(currentAccount);
				$authStore.metamaskID = currentAccount;
			}
		}
	}

	onMount(() => {
		detectMetamask();
	});

	async function connectMetamask() {
		const accounts = await ethereum.request({ method: 'eth_requestAccounts' }).catch((err) => {
			console.log(err.message);
			message = err.message;
		});

		ethereum
			.request({ method: 'eth_accounts' })
			.then(handleAccountsChanged)
			.catch((err) => {
				console.error(err);
			});

		ethereum.on('accountsChanged', handleAccountsChanged);

		function handleAccountsChanged(accounts) {
			if (accounts.length === 0) {
				console.log('Please connect to MetaMask.');
			} else if (accounts[0] !== currentAccount) {
				currentAccount = accounts[0];
				localStorage.setItem('MetamaskId', currentAccount);
			}
		}

		if (currentAccount !== null) {
			metamask = 'connected';
		}
	}
</script>

<div class="container" style="height: 570px;">
	<div class="row justify-content-center mt-5 align-content-stretch">
		<div class="col text-center">
			<img
				src="https://cdn.iconscout.com/icon/free/png-512/metamask-2728406-2261817.png"
				class="w-25"
			/>
		</div>
	</div>
	<div class="row justify-content-center mt-5">
		<div class="col text-center">
			{#if metamask === 'none'}
				<h1>Metamask not installed</h1>
				<a
					class="btn btn-primary mt-3"
					href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
					>Metamask for Chrome</a
				>
			{:else if metamask === 'installed'}
				<h1>Metamask installed</h1>
				<button type="button" class="btn btn-primary btn-lg" on:click={connectMetamask}
					>Connect wallet</button
				>
			{:else if metamask === 'connected'}
				<h1>Metamask сonnected</h1>
				<p>
					Wallet address <a href="https://rinkeby.etherscan.io/address/{currentAccount}">
						{currentAccount}
					</a>
				</p>
			{/if}

			<!-- {#if message !== ''}
                <h5 class='mt-4'>{message}</h5>
            {/if} -->
		</div>
	</div>
</div>
