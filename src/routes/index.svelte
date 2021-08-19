<script>
import CompNavbar from "../components/CompNavbar.svelte";
import MainCardItem from "../components/MainPage/MainCardItem.svelte";
import CompFooter from "../components/CompFooter.svelte";
import MainAboutNft from "../components/MainPage/MainAboutNft.svelte";
import MainGuide from "../components/MainPage/MainGuide.svelte";
import axiosInstance from "../components/axios/axiosApi";
import {onMount} from 'svelte'
import { authStore } from "../store";
import MainCard from "../components/MainPage/MainCard.svelte";

let dataCard = []

const getToken = () => {
      axiosInstance.post('/api/token/refresh/', {refresh :localStorage.getItem('refreshToken')}).then(
    res => {
      $authStore.isLogin = true
      console.log(res)
      localStorage.setItem('accessToken', res.data.access)
    },
    err => {
      console.log(err.response)
      localStorage.setItem('accessToken', '')
      localStorage.setItem('refreshToken', '')
      localStorage.setItem('userId', '')
    })
}

const getNft = () => {
  axiosInstance.get('/account/nft-list/').then(
        res=> {
          console.log(res)
          dataCard = [...res.data]
        },
        err=> {
          console.log(err.response)
        }
      )
}

onMount(()=> {
  console.log(localStorage)
  getToken()
  getNft()
})

</script>

<svelte:head>
    <title>Index</title>
</svelte:head>


<!-- <MainBackImg/> -->

<div class="container-fluid"> 
  <!--START Section 1 -->
  <div class=" row justify-content-center mt-5 mb-5">
    <div class="col-4 text-center align-self-center">
      <h1 class="mb-5">Discover, collect, and sell extraordinary NFTs</h1>
      <a href='/marketplace'class="btn btn-primary btn-lg me-5 col-4">Explore</a>
      <a href={$authStore.isLogin ? '/addNft' : '/auth'} class="btn btn-primary btn-lg col-4">Create</a>
    </div>
    <div class="col-4">
      <!--START Card 1  -->
        <MainCard data = {dataCard[Math.floor(Math.random() * dataCard.length)]}/>
      <!--END Card 1-->
    </div>
  </div>
  <!-- END Section-1 -->
  
  <!-- START Section-2 -->
  <div class="row justify-content-center mb-4">
    <div class="col-8">
      <h2>Popular</h2>
    </div>
  </div>
  <div class="row justify-content-center mb-4">
    <div class="col-8">
      <!--START Card 2  -->
      <div class="row row-cols-1 row-cols-md-3 g-4">
          {#each {length: 6} as _ ,index}
          {#if dataCard[index] === undefined }
            <MainCardItem/>
          {:else}
            <MainCardItem data={dataCard[index]}/>
          {/if}
          {/each}
      </div>
      <!--END Card 2-->
    </div>
  </div>
  <!-- END Section-2 -->

<!-- START Section-3 -->
  <div class="row justify-content-center mb-4">
    <div class="col-8">
      <h2>New</h2>
    </div>
  </div>
  <div class="row justify-content-center mb-4">
    <div class="col-8">
      <!--START Card 3  -->
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {#each {length: 3} as _ , index}
          {#if dataCard[index] === undefined}
            <MainCardItem/>
          {:else}
            <MainCardItem data={dataCard[index]}/>
          {/if}
        {/each}
      </div>
      <!--END Card 3-->
    </div>
  </div>
<!-- END Section-3 -->
      
<!-- START Section-4 -->
  <div class="row justify-content-center mb-5 mt-5">
    <div class="col-8">
      <h1>Beginner's Guide</h1>
    </div>
  </div>
  <div class="row justify-content-center mb-4">
    <div class="col-8 mt-3 mb-3">
      <div class="row">
        <MainGuide/>
      </div>
    </div>
  </div>
<!-- END Section-4 -->

<!-- START Section-5 -->
  <div class="row justify-content-center mb-5 mt-5">
    <div class="col-8">
      <h1>What is NFT?</h1>
    </div>
  </div>
  <div class="row justify-content-center mb-4">
    <div class="col-8">
      <div class="row row-cols-1 row-cols-md-2 g-4">
          <MainAboutNft/>
      </div>
    </div>
  </div>
<!-- END Section-5 -->

</div>

// <CompFooter/>

<style>
.cardImageContainer {
  height: 220px;
}

</style>
