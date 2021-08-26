<script>
import { goto } from "$app/navigation";
import { nftStore } from "../../nftStore";

const port = 'http://127.0.0.1:8000/'

export let data = {}

let defaultData = {
  id: 1,
  image: "https://images.ctfassets.net/rporu91m20dc/48FOwmEHJwz03qpd42nzwr/1a287846478a7fc8dcc47754baa85cdd/doom_eternal_bg_date_m_n_launch.jpg?q=70",
  name: 'Tron',
  price: '0.10',
  author: 'tron'
}

const goToPage = () => {
  nftStore.set(data)
  goto(`/nftItem/${data.id}`)
}


</script>
      <div class="card hover-shadow" on:click={goToPage}>
        <img src={data ? port + data.image : defaultData.image} class="card-img-top" style="height: 500px; object-fit:cover;  "/>
        <div class="card-body">
          <div class="container">
            <div class="row">
              <div class="col">
                <h5 class="card-title">{data ? data.name : defaultData.name}</h5>
              </div>
              <div class="col text-end">
                <p class="card-text mb-1">Price:</p>
                <p class="card-text mb-1">{data ? data.price : defaultData.price} ETH</p> 
                <p class="card-text mb-1">{ data ? data.user.username : defaultData.author}</p>
              </div>
            </div>
          </div>
        </div>
      </div>