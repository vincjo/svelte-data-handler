<script lang="ts">
    import type DataHandler from '$lib/DataHandler'

    export let dataHandler: DataHandler
    export let key: { name: string; value: string | ( (item: any) => string ) }

    let sorted: string | null = null
    
    const sort = () => {
        if (sorted === null || sorted === 'desc') {
            dataHandler.sortAsc(key.value)
            sorted = 'asc'
        }
        else if (sorted === 'asc') {
            dataHandler.sortDesc(key.value)
            sorted = 'desc'
        }
    }

</script>

<button class="{sorted}" on:click={() => sort()}>
    <b>Sort '{key.name}'</b>
    <span>
		{#if sorted === 'asc'}
		&#8593;
		{:else if sorted === 'desc'}
		&#8595;
		{:else}
		&#8596;
		{/if}
	</span>
</button>


<style>
    button{margin:8px 0 0 0;display:flex;justify-content:space-between;align-items:center;background:var(--secondary);border:none;height:32px;width:240px;user-select:none;padding:0 16px;border-radius:2px;color:#fafafa;transition:all,0.2s;}
	button:focus{outline:2px solid var(--tertiary);}
	button b{font-weight:normal;}
	button span{font-size:18px;color:#fff;font-weight:bold;}

</style>