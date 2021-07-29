<script>

    import { onMount } from 'svelte'
    import axios from 'axios'


    let username = ''

    let data = {
        username: '',
        password: '',
    };

    const postRequest = () =>    {
        console.log(username)

        console.log(data.username)

        axios.post('http://10.0.10.49:8000/api/token/', data).then(
            res => {
                console.log(res)
            },
            err => {
                console.log(err)
            }
        )
    };



</script>
            <div
                class="tab-pane fade show active"
                id="pills-login"
                role="tabpanel"
                aria-labelledby="tab-login"
            >

            <form>
                <!-- Username input -->
                <div class="input-group mb-3">
                    <span class="input-group-text border-1 border-end-0 bg-light"><i class="fas fa-user-alt"></i></span>
                    <input type="text" class="form-control border-start-0" placeholder="username" bind:value={username}/>
                </div>


                <!-- Password input -->
                <div class="input-group mb-3">
                    <span class="input-group-text border-1 border-end-0 bg-light"><i class="fas fa-key"></i></span>
                    <input type="password" placeholder="password" class="form-control border-start-0" bind:value={data.password}/>
                </div>                  

                <!-- Submit button -->
                <button on:click={postRequest} type="button" class="btn btn-primary btn-block mb-4">Sign in</button>
            
            </form>
            </div>
