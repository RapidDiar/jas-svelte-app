<script>
import { onMount } from "svelte";
import axiosInstance from "../../components/axios/axiosApi";
import CompCard from "../../components/CompCard/CompCard.svelte";


let items = []

const getData = () => {
    axiosInstance.defaults.headers.Authorization = 'JWT ' + localStorage.getItem('accessToken')
    axiosInstance.get('/account/api/NFT/').then(
        res => {
            console.log(res.data)
            items = [...res.data]
            // res.data.map(item => {
            //     console.log(item)
            //     items.push(item)
            // })

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
    {#each items as item }
        <CompCard data={item}/>
    {/each}
    
</div>