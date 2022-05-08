<script lang="ts">
    import type DataHandler from '$lib/DataHandler'

    export let dataHandler: DataHandler

    const filter = (target: any, key: ( (item: any) => string ) | string) => {
        dataHandler.filter(target.value, key)
    }

</script>

<input placeholder="Filter on 'email'..."        on:input={(e) => filter(e.target, 'email')} />
<input placeholder="Filter on 'country'..."      on:input={(e) => filter(e.target, 'country')} />

<input 
    placeholder="Filter on 'first_name' + 'last_name'..."   
    on:input={(e) => filter( e.target, item => { 
            return item.first_name + ' ' + item.last_name 
        })
    } 
/>
<style>
	input{display:block;margin:8px 0;padding:8px;border:2px solid #e0e0e0;border-radius:4px;width:240px;transition:all,0.2s;}
    input:focus{outline:2px solid var(--tertiary);}
</style>