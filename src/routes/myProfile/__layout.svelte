<script>
import { authStore } from "../../store.js";

import CompFooter from "../../components/CompFooter.svelte";
import CompNavbar from "../../components/CompNavbar.svelte";
import { onMount } from "svelte";
import axiosInstance from "../../components/axios/axiosApi.js";

const myProfile = {
    login: '',
    email: '',
    firstname: '',
    lastname: '',
    description: '',
    avatar: '',
    background: '',
    instagram: '',
    telegram: '',
    facebook: '',
    metamaskId: '',
}

const truncate = (str, max, suffix) => str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`;

onMount(() => {
    axiosInstance.defaults.headers.Authorization = 'JWT ' + localStorage.getItem('accessToken')
    axiosInstance.get('/account/api/Profile/').then(
        res => {
            let index = res.data.length-1
            let item = res.data[index]
            console.log(item)
            myProfile.firstname = item.first_name
            myProfile.lastname = item.last_name
            myProfile.description = truncate(item.description, 100, '...')
            myProfile.avatar = item.image_avatar
            myProfile.background = item.image_background
            myProfile.instagram = item.instagram
            myProfile.telegram = item.telegram
            myProfile.facebook = item.facebook
        },
        err => {
            console.log(err.response)
        }
    )

    myProfile.metamaskId = localStorage.getItem('MetamaskId')

    axiosInstance.get('/account/users/').then(
        res => {
            let userId = Number(localStorage.getItem('userId'))
            console.log(userId)
            let result = res.data.find(item => item.id === userId)
            myProfile.email = result.email
            myProfile.username = result.username
        },
        err => {
            console.log(err)
        }
    )
})

</script>



<div class="container-fluid">
    <div class="row justify-content-center">
        <img src={myProfile.background} class="img-fluid ps-0 pe-0" style="height: 300px; background-color: #BDBDBD;" alt="..." />
    </div>
    <div style="margin-top: -100px;" class="row justify-content-center ">
        <div class="col-8">
            <div class="row">
                <div class='col-3 text-center'>
                    <img
                    style="width: 200px; height:200px; background-color: #9E9E9E; "
                    src={myProfile.avatar}
                    class="img-fluid rounded-circle"
                    alt=""
                    />
                </div>
                <div class='col d-flex justify-content-lg-between'>
                    <a href="/myProfile/onSale" type="button" class="btn btn-light btn-lg me-2 w-responsive pt-3 pb-3 h-25 align-self-end">On Sale</a>
                    <a href="/myProfile/created" type="button" class="btn btn-light btn-lg me-2 w-responsive pt-3 pb-3 h-25 align-self-end">Created</a>
                    <a href="#" type="button" class="btn btn-light btn-lg me-2 w-responsive pt-3 pb-3 h-25 align-self-end">Bought</a>
                    <a href="#" type="button" class="btn btn-light btn-lg me-2 w-responsive pt-3 pb-3 h-25 align-self-end">Favorites</a>
                    <a href="#" type="button" class="btn btn-light btn-lg w-responsive pt-3 pb-3 h-25 align-self-end">Following</a>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-3 text-center now ps-3 pe-3">
                    <h4 class="mb-2">{myProfile.firstname + ' ' + myProfile.lastname}</h4>
                    <p class="text-break mb-2"> {myProfile.metamaskId}</p>
                    <p class="mb-2">{myProfile.email}</p>
                    <p class="mb-2">{myProfile.description}</p>
                    <div class="mt-3 mb-3">
                        <a href={myProfile.instagram}> <i class="fab fa-instagram fa-2x me-3"></i> </a>
                        <a href={myProfile.telegram}> <i class="fab fa-telegram-plane fa-2x me-3"></i> </a>
                        <a href={myProfile.facebook}> <i class="fab fa-facebook fa-2x"></i> </a>
                    </div>
                    <a href="/myProfile/editProfile" type="button" class="btn btn-primary btn-lg">Edit profile</a>
                </div>
                <div class="col">
                    <slot>
                        
                    </slot>
                </div>
            </div>
        </div>
    </div>
</div>


<style>
    img {
        object-fit: cover;
    }

    i {
        color:#DED4DA;
    }
    
</style>