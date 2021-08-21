<script>
import { onMount } from "svelte";

import { authStore } from "../store";

import translations from "../translations";
import { dict, locale, t } from '../i18n';

  $: languages = Object.keys(translations);
  $: dict.set(translations);

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
  localStorage.setItem('metamaskID','')
  // location.reload()
}

</script>

<nav class="navbar navbar-light bg-light shadow-5">
  <div class="container-fluid ps-3 pe-3">
    <a class="navbar-brand" href="/" style="font-family: 'Open Sans'; font-size:22px; font-weight: medium; color:rgb(0, 0, 0, 0.75);">
      ArtMarketplace
    </a>

 <div class="input-group w-50">
      <span class="input-group-text border-1 border-end-0" id="search-addon"><i class="fas fa-search"></i></span>
      <input type="search" class="form-control border-start-0" placeholder= {$t('navbar.input_search')} aria-label="Search"
        aria-describedby="search-addon" style="font-family: 'Open Sans'; font-size:16px; font-weight: meduim; color:rgb(0, 0, 0);"/>
    </div>
  
    <div class="d-flex align-items-center">
        <a href="/marketplace" class="btn btn-link px-3 me-2" style="color: black; font-family: 'Open Sans'; font-size:12px; font-weight: meduim; color:rgb(0, 0, 0);">
          {$t('navbar.button_marketplace')}
        </a>

        <div class="d-flex align-items-center">
          <a href="https://newcab.kazpatent.kz/" class="btn btn-link px-3 me-2" style="color:black; font-family: 'Open Sans'; font-size:12px; font-weight: meduim; color:rgb(0, 0, 0);">Author Rights</a>
        
    <div class="d-flex align-items-center">
      {#if $authStore.isLogin} 
        <a href="/addNft" class="btn btn-link px- me-2" style="background-color: gold; color: black; font-family: 'Open Sans'; font-size:12px; font-weight: meduim; color:rgb(0, 0, 0);">
          {$t('main.button.create')}
        </a>
        {:else}
        <a href="/auth" class="btn btn-link px- me-2" style="background-color: gold; color: black; font-family: 'Open Sans'; font-size:12px; font-weight: meduim; color:rgb(0, 0, 0);">
          {$t('main.button.create')}
        </a>
      {/if}

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
          <a class="dropdown-item" href="/myProfile/onSale" style="font-family: 'Open Sans'; font-size:12px; font-weight: meduim;">{$t('navbar.button_profile')}</a>
        </li>
        <li>
          <a class="dropdown-item" href="/addNft" style="font-family: 'Open Sans'; font-size:12px; font-weight: meduim;">{$t('navbar.li_add')}</a>
        </li>
        <li>
          {#if $authStore.metamaskID === ''}
            <a class="dropdown-item" href="/metamask" style="font-family: 'Open Sans'; font-size:12px; font-weight: meduim;">{$t('navbar.li_metamask')}</a>
          {:else}
            <a class="dropdown-item" style="font-family: 'Open Sans'; font-size:12px; font-weight: meduim;" href="#">{$authStore.metamaskID}</a>
          {/if}
        </li>
        <li>
          <button class="dropdown-item" on:click={onLogout} style="font-family: 'Open Sans'; font-size:12px; font-weight: meduim;">{$t('navbar.li_logout')}</button>
        </li>
      </ul>

      {:else}

        <a type="button" class="btn btn-primary text-nowrap" style="background-color: black; font-family: 'Open Sans'; font-size:12px; font-weight: meduim; color: white;" href="/auth">
          {$t('navbar.button_signin')}
        </a>

      {/if}

            <select bind:value={$locale} class="form-select ms-3" style="border:honeydew; font-family: 'Open Sans'; font-size:16px; font-weight: meduim; color:rgb(0, 0, 0);">
        {#each languages as lang}
          <option  value={lang}>
            {lang}
          </option>
        {/each}
      </select>
        
    </div>
  </div>
</nav>


<style>

</style>