<script>
import { goto } from "$app/navigation";
import { nftStore } from "../../nftStore";

    export let data = {
        image: "https://images.ctfassets.net/rporu91m20dc/48FOwmEHJwz03qpd42nzwr/1a287846478a7fc8dcc47754baa85cdd/doom_eternal_bg_date_m_n_launch.jpg?q=70",
        title: 'Tron',
        price: '0.10',
        tags: 'tron'
    }

    const goToPage = () => {
      nftStore.set(data)
      goto('/nftItem')
    }


</script>

      <div class="card hover-shadow" on:click={goToPage}>
        <img src={data.image} class="card-img-top" style="height: 500px; object-fit:cover;  "/>
        <div class="card-body">
          <div class="container">
            <div class="row">
              <div class="col">
                <h5 class="card-title">{data.title}</h5>
              </div>
              <div class="col text-end">
                <p class="card-text mb-1">Price:</p>
                <p class="card-text mb-1">{data.price} ETH</p> 
                <p class="card-text mb-1">{data.tags}</p>
              </div>
            </div>
          </div>
        </div>
      </div>