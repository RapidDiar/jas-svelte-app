<script>
    import {goto} from "$app/navigation"
    import axiosInstance from '../axios/axiosApi.js'
    import { authStore } from "../../store"
    import jwt_decode from 'jwt-decode'


    if ($authStore.isLogin) {
        goto('/')
    }

    let data = {
        username: '',
        password: '',
    };

    let alert = ''

    let decode = ''

    const onLogin = () =>    {
        console.log(data)
        
        axiosInstance.post('/api/authentication/login/', data).then(
            res => {
                $authStore.error = false
                $authStore.isLogin = true
                console.log(res)
                decode = jwt_decode(res.data.access)
                console.log(decode.user_id)
                localStorage.setItem('userId', decode.user_id)
                localStorage.setItem('accessToken',res.data.access)
                localStorage.setItem('refreshToken',res.data.refresh)
                goto('/')
            },
            err => {

                $authStore.error = true
                alert="Incorrect login or password"
                console.log(err.response)
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

            {#if $authStore.error}

            <h5 class="mb-3 p-1 bg-warning text-white">{alert}</h5>
            {/if}

            <form on:submit|preventDefault={onLogin}>
                <!-- Username input -->
                <div class="input-group mb-3">
                    <span class="input-group-text border-1 border-end-0 bg-light"><i class="fas fa-user-alt"></i></span>
                    <input type="text" class="form-control border-start-0" placeholder="username" bind:value={data.username}/>
                </div>


                <!-- Password input -->
                <div class="input-group mb-3">
                    <span class="input-group-text border-1 border-end-0 bg-light"><i class="fas fa-key"></i></span>
                    <input type="password" placeholder="password" class="form-control border-start-0" bind:value={data.password}/>
                </div>                  

                <!-- Submit button -->
                <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>
            
            </form>
            </div>
