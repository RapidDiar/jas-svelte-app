<script>
import CompFooter from "../components/CompFooter.svelte";
import CompNavbar from "../components/CompNavbar.svelte";

    import FilePond, { registerPlugin, supported } from 'svelte-filepond';
    import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
    import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
    registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

    let pond;
    let name = 'filepond';

    function handleInit() {
        console.log('FilePond has initialised');
    }

    function handleAddFile(err, fileItem) {
        console.log('A file has been added', fileItem.file);
    }

</script>
<CompNavbar/>
    <div class="container-fluid">
        <div class="row justify-content-center mt-5 mb-5">
            <div class="col-4 text-center">
                <h1>CHANGES SAVED</h1>
            </div>
        </div>
        <form>

            <!-- START SECTION 1 -->

            <div class="row justify-content-center">
                <div class="col-6">
                    <div class="card shadow-custom">
                        <div class="card-body">
                            <h1>Image</h1>
                            <p>Download image</p>
                        </div>
                        <div class="card-body align-self-center col-6">
                            <FilePond allowMultiple={false} max-files={1} instantUpload={true} oninit={handleInit} onaddfile={handleAddFile}/>
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
                                      <input type="text" class="form-control mb-3" placeholder="Title" />
                                      <input type="number" class="form-control mb-3" placeholder="Price" />
                                      <input type="text" class="form-control mb-3" placeholder="Tags" />
                                </div>
                                <div class="col">
                                    <textarea class="form-control h-100" placeholder="Description"></textarea>
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
                                <span class="input-group-text col-2" id="basic-addon3">facebook.com/</span>
                                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text col-2" id="basic-addon3">instagram.com/</span>
                                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text col-2" id="basic-addon3">t.me/</span>
                                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
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


<CompFooter/>

<style global>
    @import 'filepond/dist/filepond.css';
    @import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
</style>