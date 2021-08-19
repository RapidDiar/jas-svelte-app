<script>
import { nftStore } from "../../nftStore";
import { onMount } from "svelte";

import NftCard from "../../components/CompCard/NftCard.svelte";

let data

const getData = () => {
    data = $nftStore
}


onMount(()=> {
    getData()
    console.log(data)
})

</script>
<div class="container-fluid">
    <div class="row justify-content-lg-center mt-5 mb-5">
        <div class="col-4 ">
            <NftCard/>
        </div>
        <div class="col-4 pt-5">
                <div class="row mb-3">
                    <div class="col">
                        <h1 class="mb-0" >Title</h1>
                    </div>
                    <div class="col-2 text-end align-self-center">
                         <i class="far fa-heart fa-2x"></i>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-auto pe-1">
                        <button
                        type="button"
                        class="btn btn-outline-primary btn-rounded"
                        data-mdb-ripple-color="dark"
                        >
                        1.5 ETH
                        </button>
                    </div>
                    <div class="col align-self-center ps-1">
                        <p class="mb-0"> <strong> = 4051,44 USD</strong></p>
                    </div>
                </div>
                <div class="row mb-4">
                    <p class="mb-0">Girl with Peaches is a painting by Russian artist Valentin Serov. It was painted in 1887. The painting is on permanent display at the State Tretyakov Gallery in Moscow.</p>
                </div>
                <div class="row mb-5">
                    <div class="col">
                        <button type="button" class="btn btn-primary btn-rounded btn-lg">Buy</button>
                    </div>
                </div>
                <div class="row">
                    <p class="mb-0"><small>tags:</small></p>
                    <p class="mb-0">tretyakov_gallery, Serov</p>
                </div>

        </div>
    </div>
</div>