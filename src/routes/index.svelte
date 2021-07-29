<script>
import MainBackImg from "../components/MainPage/MainBackImg.svelte";
import CompNavbar from "../components/CompNavbar.svelte";
import MainCardItem from "../components/MainPage/MainCardItem.svelte";
import CompFooter from "../components/CompFooter.svelte";
import MainAboutNft from "../components/MainPage/MainAboutNft.svelte";
import MainGuide from "../components/MainPage/MainGuide.svelte";

</script>

<svelte:head>
    <title>Index</title>
</svelte:head>

<CompNavbar/>
<!-- <MainBackImg/> -->

<div class="container-fluid"> 
  <!--START Section 1 -->
  <div class=" row justify-content-center mt-5 mb-5">
    <div class="col-4 text-center align-self-center">
      <h1 class="mb-5">Discover, collect, and sell extraordinary NFTs</h1>
      <button type="button" class="btn btn-primary btn-lg me-5 col-4">Explore</button>
      <button type="button" class="btn btn-primary btn-lg col-4">Create</button>
    </div>
    <div class="col-4">
      <!--START Card 1  -->
      <div class="card">
        <img src="https://images.ctfassets.net/rporu91m20dc/48FOwmEHJwz03qpd42nzwr/1a287846478a7fc8dcc47754baa85cdd/doom_eternal_bg_date_m_n_launch.jpg?q=70" class="card-img-top" style="height: 500px; object-fit:cover;  "/>
        <div class="card-body">
          <div class="container">
            <div class="row">
              <div class="col">
                <h5 class="card-title">Tron</h5>
              </div>
              <div class="col text-end">
                <p class="card-text mb-1">Price:</p>
                <p class="card-text mb-1">0.10 ETH</p> 
                <p class="card-text mb-1">tron</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        <MainCardItem/>
        <MainCardItem/>
        <MainCardItem/>
        <MainCardItem/>
        <MainCardItem/>
        <MainCardItem/>
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
      <MainCardItem/>
      <MainCardItem/>
      <MainCardItem/>
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

<CompFooter/>

<style>
.cardImageContainer {
  height: 220px;
}

</style>
