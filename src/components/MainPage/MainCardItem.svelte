  <script>
import { goto } from "$app/navigation";
import { nftStore } from "../../nftStore";


const port = 'http://127.0.0.1:8000/'
export let data

let defaultData = {
  image: "https://mdbootstrap.com/img/new/standard/city/041.jpg",
  name: 'Tron',
  price: '0.10',
  author: 'username'
}


  const goToPage = () => {
    nftStore.set(data)
    goto(`/nftItem/${data.id}`)
  }

  </script>
  
  <div class="col">
    <div class="card h-100 hover-shadow" on:click={goToPage}>
      <div class="bg-image hover-zoom">
        <img
          src={data ? port + data.image : defaultData.image}
          class="card-img-top"
          alt="..."
        />
      </div>
      <div class="card-body">
        <div class="container">
            <div class="row">
              <div class="col">
                <h5 class="card-title">{data ? data.name : defaultData.name}</h5>
              </div>
              <div class="col text-end">
                <p class="card-text mb-1">Price:</p>
                <p class="card-text mb-1"> ETH {data ? data.price : defaultData.price}</p> 
                <p class="card-text mb-1">{data? data.user.username : defaultData.author}</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>

<style>

  img {
    height: 250px;
    object-fit: cover;
  }
  
</style>