<script>
import { onMount } from "svelte";
import CompFooter from "../components/CompFooter.svelte";
import CompNavbar from "../components/CompNavbar.svelte";

let metamask = false

onMount(() => {
    
    if (typeof window.ethereum !== 'undefined') {
    metamask = true
    }
})

async function connectMetamask() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    console.log(account)
}

</script>

<CompNavbar/>
<div class="container" style="height: 570px;">

    <div class="row justify-content-center mt-5 align-content-stretch">
        <div class="col text-center">
            <img src="https://cdn.iconscout.com/icon/free/png-512/metamask-2728406-2261817.png" class="w-25"/>
        </div>
    </div>
    <div class="row justify-content-center mt-5">
        <div class="col text-center">
            <button type="button" class="btn btn-primary btn-lg" on:click={connectMetamask}>Connect wallet</button>
        </div>
    </div>
</div>
<CompFooter/>