<script>
import axiosInstance from "../../components/axios/axiosApi";

import { onMount } from "svelte";

import CompCard from "../../components/CompCard/CompCard.svelte"

let data = []

let filterVisible = false

let filter = {
    recentlyAdd: false,
    sortBy: '',
    maxPrice: null,
    minPrice: null,
}

const getData = () => {
    axiosInstance('/account/nft-list/').then(
        res => {
            console.log(res)
            data = [...res.data]
        },
        err => {
            console.log(err.response)
        }
    )
}





onMount(()=> {
    getData()
    
})

const onFilter = () => {
    if (filter.recentlyAdd) {
        data = [...data]
        data.reverse()
    } else {
        data = [...data]
        data.reverse()
    }
}

const activateFilter = () => {
    filterVisible = !filterVisible
}

</script>

<div class="container-fluid">
    <div class="row justify-content-lg-center mt-4">
        <div class="col-8">
            <div class="row">
                <div class="col-3">
                    <button type="button" class="btn btn-primary btn-lg h-100 w-100 " on:click={activateFilter}>Filter</button>
                </div>
                <div class="col d-flex justify-content-lg-end">
                    <select class="custom-select p-2 col-3 me-5" bind:value={filter.recentlyAdd} on:change={onFilter}>
                        <option selected value="">Recently added</option>
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                        <option value="3">Three</option>
                    </select>
                    <select class="custom-select p-2 col-3 me-5">
                        <option selected>All items</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <select class="custom-select p-2 col-3">
                        <option selected>Sort by</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
            {#if filterVisible}
            <div class="row mt-4">
                <div class="col">
                    <div class="row">
                        <h4>Price</h4>
                    </div>
                    <div class="row">
                        <select class="custom-select p-2 col-8 ms-2">
                        <option selected>Sort by</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div class="col">
                    <div class="row">
                        <h4>Author</h4>
                    </div>
                    <div class="row">
                        <select class="custom-select p-2 col-8 ms-2">
                        <option selected>Sort by</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div class="col">
                    <div class="row">
                        <h4 class="w-100">Price range</h4>
                    </div>  
                    <div class="row">
                        <div class="input-group input-group-lg w-50">
                            <input type="text" class="form-control" placeholder=""/>
                        </div>
                        <div class="input-group input-group-lg w-50">
                            <input type="text" class="form-control" />
                        </div>  
                    </div>          
                </div>   
            </div>
            {/if}
            <div class="row mt-4">
                <p> 10 501 results</p>
            </div>

            <div class="row row-cols-1 row-cols-md-4 g-4">
                {#each data as item }
                    <CompCard data={item}/>
                {/each}
            </div>
        </div>
    </div>
</div>