  <script>

    import { goto } from "$app/navigation";
import { nftStore } from "../../nftStore";

export let data = {
  image: "https://mdbootstrap.com/img/new/standard/city/041.jpg",
  title: 'Tron',
  price: '0.10',
  tags: 'tron'
}

    const goToPage = () => {
      nftStore.set(data)
      goto('/nftItem')
    }

  </script>
  
  <div class="col">
    <div class="card h-100 hover-shadow" on:click={goToPage}>
      <img
        src={data.image}
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <div class="container">
            <div class="row">
              <div class="col">
                <h5 class="card-title">{data.title}</h5>
              </div>
              <div class="col text-end">
                <p class="card-text mb-1">Praice:</p>
                <p class="card-text mb-1"> ETH {data.price}</p> 
                <p class="card-text mb-1">{data.tags}</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>


<style>

  img {
    height: 230px;
    object-fit: cover;
  }
  
</style>