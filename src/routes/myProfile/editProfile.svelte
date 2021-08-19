<script>
import axiosInstance from "../../components/axios/axiosApi";
import { onMount } from "svelte";
import CompMessage from "../../components/CompMessage/CompMessage.svelte";
const myProfile = {
    first_name: '',
    last_name: '',
    description: '',
    instagram: '',
    telegram: '',
    facebook: '',
}

let message = ''

onMount(() => {
    axiosInstance.defaults.headers.Authorization = 'JWT ' + localStorage.getItem('accessToken')
    axiosInstance.get('/account/api/Profile/').then(
        res => {
            let index = res.data.length-1
            let item = res.data[index]
            console.log(item)
            myProfile.first_name = item.first_name
            myProfile.last_name = item.last_name
            myProfile.description = item.description
            myProfile.instagram = item.instagram
            myProfile.telegram = item.telegram
            myProfile.facebook = item.facebook
        },
        err => {
            console.log(err.response)
        }
    ) 
})

const postProfile = () => {
    console.log(myProfile.firstname)
    axiosInstance.post('/account/api/Profile/',myProfile).then(
        res => {
            message = 'success'
            setTimeout(() => {
                message = ''
                console.log(message)
            }, 3000)
            console.log(res)
        },
        err => {
            message = 'error'
                setTimeout(() => {
                    message = ''
                }, 3000)
            console.log(err.response)
        }
    )
}

</script>



<form on:submit|preventDefault = {postProfile}>
    <div class="row">
        <div class="col pe-5">
            <h2 class="mb-3">Account Info</h2>
            <p class="mb-2"><strong>First Name</strong></p>
            <input type="text" class="p-2 mb-3 w-100" placeholder="Enter your first name" bind:value={myProfile.first_name}/>
            <p class="mb-2"><strong>Last Name</strong></p>
            <input type="text" class="p-2 mb-3 w-100" placeholder="Enter your last name" bind:value={myProfile.last_name} />
            <p class="mb-2"><strong>Bio</strong></p>
            <textarea id="textAreaExample" rows="5" class="p-2 w-100" bind:value={myProfile.description}></textarea>
        </div>

        <div class="col ps-5">
            <h2 class="mb-0">Social media</h2>
            <div class="input-group input-group-lg mt-5 mb-3">
                <span class="input-group-text border-0"><i class="fab fa-twitter fa-2x"></i></span>
                <input type="text" class="form-control rounded" placeholder="Facebook username" bind:value={myProfile.facebook} />
            </div>
            <div class="input-group input-group-lg mb-3">
                <span class="input-group-text border-0" id="search-addon"><i class="fab fa-instagram fa-2x"></i></span>
                <input type="text" class="form-control rounded" placeholder="Instagram username" bind:value={myProfile.instagram}/>
            </div>
            <div class="input-group input-group-lg mb-3">
                <span class="input-group-text border-0" id="search-addon"><i class="fab fa-telegram-plane fa-2x"></i></span>
                <input type="text" class="form-control rounded" placeholder="Telegram username" bind:value={myProfile.telegram}/>
            </div>
        </div>
    </div>
    <div class="row justify-content-lg-center mt-5">
        <button type="submit" class="btn btn-primary btn-lg col-2">Save</button>
    </div>
        
</form> 


    {#if message == 'success'}
    <div class="toast-container position-fixed p-1 top-0 start-50 translate-middle-x bg-success text-light w-25 mt-4" transition:fly={{y: -10, duration: 200}}>
        <div class="toast-header bg-success text-light p-2 mb-0">
            <strong class="me-auto">Message</strong>
        </div>
        <div class="toast-body p-2">
            Successfully added
        </div>
    </div>
    {:else if message == 'error'} 
    <div class="toast-container position-fixed p-1 top-0 start-50 translate-middle-x bg-danger text-light w-25 mt-4" transition:fly={{y: -10, duration: 200}}>
        <div class="toast-header bg-danger text-light p-2 mb-0">
            <strong class="me-auto">Message</strong>
        </div>
        <div class="toast-body p-2">
            Something went wrong
        </div>
    </div>
    {/if}


<style>
    input, textarea {
        border: 1px solid #DAD0D0;
        border-radius: 4px;
    }

    i {
        color: #DED4DA;
    }

</style>