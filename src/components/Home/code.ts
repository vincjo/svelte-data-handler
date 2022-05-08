
export const code = `
<script>
    import DataHandler from "@vincjo/svelte-data-handler"
    import { myJSON } from "./Somewhere/myJSON"

    const dataHandler = new DataHander(myJSON, { itemsPerPage: 50 })
    
    dataHandler.sortDesc('last_name')
    
    const items = dataHandler.getItems()
</script>

<ul>
    {#each $items as item}
        <li>Name : {item.first_name} {item.last_name}</li>
    {/each}
</ul>

`