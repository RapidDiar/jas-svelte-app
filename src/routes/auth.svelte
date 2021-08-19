<script>
import AuthRegisterForm from "../components/AuthPage/AuthRegisterForm.svelte";
import AuthLoginForm from "../components/AuthPage/AuthLoginForm.svelte";
import CompNavbar from "../components/CompNavbar.svelte";

</script>
<svelte:head>
    <title>Auth</title>
</svelte:head>


<div class="container-fluid">
    <div style="height: 800px" class="row justify-content-center align-items-center w-100">
        <div style="background-color: rgba(0, 0, 0, 0.1)" class="col-4 pt-5 pe-3 pb-5 ps-3 w-25">
            <!--START SECTION 1 -->

            <!-- Pills navs -->
            <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
            <li class="nav-item" role="presentation">
                <a
                class="nav-link active"
                id="tab-login"
                data-mdb-toggle="pill"
                href="#pills-login"
                role="tab"
                aria-controls="pills-login"
                aria-selected="true"
                >Login</a
                >
            </li>
            <li class="nav-item" role="presentation">
                <a
                class="nav-link"
                id="tab-register"
                data-mdb-toggle="pill"
                href="#pills-register"
                role="tab"
                aria-controls="pills-register"
                aria-selected="false"
                >Register</a
                >
            </li>
            </ul>
            <!-- Pills navs -->

            <!-- Pills content -->
                        <div class="tab-content">
            <AuthLoginForm/>
            <AuthRegisterForm/>
            </div>
            <!-- Pills content -->

            <!--END SECTION 1 -->
        </div>
    </div>
</div>