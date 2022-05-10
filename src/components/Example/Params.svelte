<script lang="ts">
    import type DataHandler from '$lib/DataHandler'

    export let dataHandler: DataHandler

    let itemsPerPage = [
        { text: '50 items per page',  value: 50  },
        { text: '100 items per page', value: 100 },
        { text: '500 items per page', value: 500 },
        { text: 'No pagination',      value: null },
    ]

    let selected: { text: string, value: number }
    
    const updateParams = () => {
        dataHandler.updateParams({ itemsPerPage: selected.value })
    }

</script>

<select bind:value={selected} on:change={() => updateParams()}>
    {#each itemsPerPage as param}
            <option value={param}> {param.text} </option>
    {/each}
</select>


<style>
    select{margin:8px 0;padding:8px;border:none;border-radius:4px;width:240px;transition:all,0.2s;border:2px solid var(--tertiary)}
	select:focus{outline:2px solid var(--tertiary);border:2px solid var(--secondary)}
    option{height:24px;line-height:24px;}
	/* select b{font-weight:normal;} */
	/* select span{font-size:18px;color:#fff;font-weight:bold;} */
</style>