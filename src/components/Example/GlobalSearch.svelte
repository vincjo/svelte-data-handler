<script lang="ts">
    import type DataHandler from '$lib/DataHandler'

    export let dataHandler: DataHandler

    let inputValue = ''

    const search = () => {
        dataHandler.search(inputValue)
    }

</script>

<input 
    bind:value={inputValue} 
    placeholder="Search..." 
    on:input={() => search()}
/>

<style>
	input{margin:8px 0;padding:8px;border:2px solid #e0e0e0;border-radius:4px;width:240px;transition:all,0.2s;}
    input:focus{outline:2px solid var(--tertiary);}
</style>