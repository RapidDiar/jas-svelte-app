<script>
import CompFooter from "../components/CompFooter.svelte";
import CompNavbar from "../components/CompNavbar.svelte";
import FilePond, { registerPlugin, supported } from 'svelte-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import {fly} from 'svelte/transition'
import { goto } from "$app/navigation";
import axiosApiMedia from "../components/axios/axiosApiMedia";

let data = {
    image: '',
    title: '',
    price: '',
    tags: '',
    description: '',
    instagram: '',
    telegram: '',
    facebook: ''
}

let visible = ''

    registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

    function handleAddFile(err, fileItem) {
        console.log('A file has been added', fileItem.file);
        data.image = fileItem.file
    }

    const onSubmit = () => {
        axiosApiMedia.defaults.headers.Authorization = 'JWT ' + localStorage.getItem('accessToken')  

        console.log(data)
        const form = new FormData()
        form.append('image', data.image, data.image.name)
        form.append('title',data.title)
        form.append('price',data.price)
        form.append('tags',data.tags)
        form.append('description',data.description)
        form.append('instagram','https://www.instagram.com/'+ data.instagram)
        form.append('telegram','https://www.t.me/'+ data.telegram)
        form.append('facebook','https://www.facebook.com/'+ data.facebook)
        form.append('owner', localStorage.getItem('userId'))

        axiosApiMedia.post('/account/api/NFT/', form).then(
            res=> {
                visible = 'success'
                setTimeout(() => {
                    visible = ''
                }, 3000)
                setTimeout(() => {
                    goto('/')
                }, 1000)
                console.log(res)
            },
            err=> {
                console.log(err.response)
                visible = 'error'
                setTimeout(() => {
                    visible = ''
                }, 3000)
            }
        )
    }

</script>

    <div class="container-fluid">
        <div class="row justify-content-center mt-5 mb-5">
            <div class="col-4 text-center">
                <h1>CHANGES SAVED</h1>
            </div>
        </div>
        <form on:submit|preventDefault = {onSubmit}>

            <!-- START SECTION 1 -->

            <div class="row justify-content-center">
                <div class="col-6">
                    <div class="card shadow-custom">
                        <div class="card-body">
                            <h1>Image</h1>
                            <p>Download image</p>
                        </div>
                        <div class="card-body align-self-center col-6">
                            <FilePond allowMultiple={false} max-files={1} instantUpload={true} onaddfile={handleAddFile}/>
                        </div>
                    </div>
                </div>
            </div>

            <!-- END SECTION 1 -->

            <!-- START SECTION 2 -->
       
            <div class="row justify-content-center mt-5">
                <div class="col-6   ">
                    <div class="card">
                        <div class="card-body">
                            <h1 class="card-title"> Information </h1>
                            <p>Add information</p>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                      <input type="text" class="form-control mb-3" placeholder="Title" bind:value={data.title} />
                                      <input type="number" class="form-control mb-3" placeholder="Price" bind:value={data.price} />
                                      <input type="text" class="form-control mb-3" placeholder="Tags" bind:value={data.tags}/>
                                </div>
                                <div class="col">
                                    <textarea class="form-control h-100" placeholder="Description" bind:value={data.description}></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- END SECTION 2 -->

            <!-- START SECTION 3 -->

            <div class="row justify-content-center mt-5">
                <div class="col-6">
                    <div class="card">
                        <div class="card-body">
                            <h1 class="card-title">Links</h1>
                            <p>Add links to social --network</p>
                        </div>

                        <div class="card-body">
                            <div class="input-group mb-3">
                                <span class="input-group-text col-2">facebook.com/</span>
                                <input type="text" class="form-control" aria-describedby="basic-addon3" bind:value={data.facebook} />
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text col-2">instagram.com/</span>
                                <input type="text" class="form-control" aria-describedby="basic-addon3" bind:value={data.instagram} />
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text col-lg-2" >t.me/</span>
                                <input type="text" class="form-control" aria-describedby="basic-addon3" bind:value={data.telegram} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <!-- END SECTION 3 -->
            <div class="row justify-content-center mt-5 mb-5">
                <div class="col-2">
                    <button type="submit" class="btn btn-primary btn-block btn-lg">Save</button>
                </div>
            </div>

        </form>
    </div>

    {#if visible == 'success'}
    <div class="toast-container position-fixed p-1 top-0 start-50 translate-middle-x bg-success text-light w-25 mt-4" transition:fly={{y: -10, duration: 200}}>
        <div class="toast-header bg-success text-light p-2 mb-0">
            <strong class="me-auto">Message</strong>
        </div>
        <div class="toast-body p-2">
            Successfully added
        </div>
    </div>
    {:else if visible == 'error'} 
    <div class="toast-container position-fixed p-1 top-0 start-50 translate-middle-x bg-danger text-light w-25 mt-4" transition:fly={{y: -10, duration: 200}}>
        <div class="toast-header bg-danger text-light p-2 mb-0">
            <strong class="me-auto">Message</strong>
        </div>
        <div class="toast-body p-2">
            Something went wrong
        </div>
    </div>
    {/if}



<style global>
    @import 'filepond/dist/filepond.css';
    @import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
</style>