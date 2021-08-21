<script>

export let visible = ''

</script> 
    
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