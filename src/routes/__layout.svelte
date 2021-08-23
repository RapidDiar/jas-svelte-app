<script>
import CompFooter from "../components/CompFooter.svelte";
import CompNavbar from "../components/CompNavbar.svelte";

</script>

<div class="wrapper">
    <CompNavbar/>
    <div class="content">
        <slot>

        </slot>
    </div>
    <CompFooter/>
</div>

<style>
    .wrapper {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 0;
    }
    .content {
        width: 100%;
        flex: auto;
    }
</style>