<script>
import { onMount } from "svelte";
import { authStore } from '../../store.js';
import axiosInstance from '../../components/axios/axiosApiMedia';
import CompCard from "../../components/CompCard/CompCard.svelte";
import axiosApiMedia from '../../components/axios/axiosApiMedia';
let items = []
let profile = $authStore.profile;
const getData = () => {
    console.log($authStore.authData);
    axiosInstance.defaults.headers.Authorization = 'Bearer ' + $authStore.authData?.access_token;
    axiosApiMedia.get('/api/nft/').then(
        res => {
            console.log(res.data.results)
            items = [...res.data.results]
            // res.data.map(item => {
            //     console.log(item)
            //     items.push(item)
            // })
            items.reverse()
            console.log(items)
        },
        err => {
            console.log(err.response)
        }  
    )    
}

onMount(()=> {
    getData()
})



</script>

<div class="row row-cols-1 row-cols-md-3 g-4">
    {#each items.reverse() as item }
        <CompCard data={item}/>
    {/each}
</div>