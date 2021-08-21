<script>
import { nftStore } from "../../nftStore";
import { onMount } from "svelte";

import NftCard from "../../components/CompCard/NftCard.svelte";

let data = nftStore
let item

const getData = () => {
    data.subscribe( value => {
        console.log('value',value)
        item = value
    })
}   

getData()    
   
onMount(()=> {
    
    console.log('data',data)
    console.log(item.title)

})

</script>


<div class="container-fluid">
    <div class="row justify-content-lg-center mt-5 mb-5">
        <div class="col-4 ">
            <NftCard data ={item}/>
        </div>
        <div class="col-4 pt-5">
                <div class="row mb-3">
                    <div class="col">
                        <h1 class="mb-0" >{item.title}</h1>
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
                        {item.price} ETH
                        </button>
                    </div>
                    <div class="col align-self-center ps-1">
                        <p class="mb-0"> <strong> = 4051,44 USD</strong></p>
                    </div>
                </div>
                <div class="row mb-4">
                    <p class="mb-0">{item.description}</p>
                </div>
                <div class="row mb-5">
                    <div class="col">
                        <button type="button" class="btn btn-primary btn-rounded btn-lg">Buy</button>
                    </div>
                </div>
                <div class="row">
                    <p class="mb-0"><small>tags:</small></p>
                    <p class="mb-0">{item.tags}</p>
                </div>
        </div>
    </div>
</div>
