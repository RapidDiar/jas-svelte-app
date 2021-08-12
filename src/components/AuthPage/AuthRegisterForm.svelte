<script>
    
    import axiosInstance from '../axios/axiosApi.js'

    let data = {
        username: '',
        email: '',
        password: '',
    }

    let message = false
    
    let messageText = ''

    const onRegister = () => {
        console.log(message)
        axiosInstance.post('/account/register/',data).then(
            res => {
                message = true
                messageText = 'Account created successfully!'
                console.log(res)
                console.log(messageText)
            },
            err => {
                message = true
                messageText = err.response.data.username[0]
                console.log(messageText)
                console.log(err.response.data.username[0])
            }
        )
    }    

</script>

            <div
                class="tab-pane fade"
                id="pills-register"
                role="tabpanel"
                aria-labelledby="tab-register"
            >
            {#if message}
            <h5 class="mb-3 p-1 bg-warning text-white">{messageText}</h5>
            {/if}
            
                <form on:submit|preventDefault={onRegister}>

                <!-- Username input -->
                <div class="input-group mb-3">
                    <span class="input-group-text border-1 border-end-0 bg-light"><i class="fas fa-user-alt"></i></span>
                    <input type="text" class="form-control border-start-0" placeholder="username" bind:value={data.username}/>
                </div>

                <!-- Email input -->
                <div class="input-group mb-3">
                    <span class="input-group-text border-1 border-end-0 bg-light"><i class="fas fa-at"></i></span>
                    <input type="email" class="form-control border-start-0" placeholder="email" bind:value={data.email} />
                </div>

                <!-- Password input -->
                <div class="input-group mb-3">
                    <span class="input-group-text border-1 border-end-0 bg-light"><i class="fas fa-key"></i></span>
                    <input type="password" placeholder="password" class="form-control border-start-0" bind:value={data.password}/>
                </div>

                <!-- Submit button -->
                <button type="submit" class="btn btn-primary btn-block mb-3">Register</button>
                
                </form>
            </div>