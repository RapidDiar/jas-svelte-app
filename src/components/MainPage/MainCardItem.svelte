  <script>

export let data = {
  image: "https://mdbootstrap.com/img/new/standard/city/041.jpg",
  title: 'Tron',
  price: '0.10',
  tags: 'tron'
}

  </script>
  
  <div class="col">
    <div class="card h-100">
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
                <p class="card-text mb-1">Price:</p>
                <p class="card-text mb-1"> ETH {data.price}</p> 
                <p class="card-text mb-1">{data.tags}</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>