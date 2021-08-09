<script>
import { onMount } from "svelte";

import { authStore } from "../store";

onMount(() => {
  if (localStorage.getItem('accessToken') == '') {
    $authStore.isLogin = false
  }
  else {
    $authStore.isLogin = true
  }
})

const onLogout = () => {
  $authStore.isLogin = false
  console.log($authStore.isLogin)
  localStorage.setItem('accessToken','')
  localStorage.setItem('refreshToken','')
  localStorage.setItem('userId','')
  location.reload()
}
</script>

<nav class="navbar navbar-light bg-light shadow-5">
  <div class="container-fluid ps-3 pe-3">
    <a class="navbar-brand" href="/">
      Photo
    </a>

    <div class="input-group w-50">
      <span class="input-group-text border-1 border-end-0" id="search-addon"><i class="fas fa-search"></i></span>
      <input type="search" class="form-control border-start-0" placeholder="Search" aria-label="Search"
        aria-describedby="search-addon" />
    </div>
  
    <div class="d-flex align-items-center">
        <button href="#" class="btn btn-link px-3 me-2">
          Marketplace
        </button>

        {#if $authStore.isLogin} 

          <a
        class="dropdown-toggle d-flex align-items-center hidden-arrow"
        href="#"
        id="navbarDropdownMenuLink"
        role="button"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="https://mdbootstrap.com/img/new/avatars/2.jpg"
          class="rounded-circle"
          height="25"
          alt=""
          loading="lazy"
        />
      </a>
      <ul
        class="dropdown-menu dropdown-menu-end"
        aria-labelledby="navbarDropdownMenuLink"
      >
        <li>
          <a class="dropdown-item" href="#">My profile</a>
        </li>
        <li>
          <a class="dropdown-item" href="/addNft">Add NFT</a>
        </li>
        <li>
          <a class="dropdown-item" href="/metamask">Connect Metamask</a>
        </li>
        <li>
          <button class="dropdown-item" on:click={onLogout}>Logout</button>
        </li>
      </ul>

      {:else}

      <a type="button" class="btn btn-link px-3 me-2" href="/auth">
          Login
      </a>
        <a type="button" class="btn btn-primary" href="/auth">
          Sign up
        </a>

      {/if}
        
    </div>
  </div>
</nav>


<style>

</style>