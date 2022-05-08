<script lang="ts">
    import type DataHandler from '$lib/DataHandler'

    export let dataHandler: DataHandler
	
	const pageNumber = dataHandler.getPageNumber()
	const pageCount = dataHandler.getPageCount()
</script>

<aside>
    <button on:click={() => dataHandler.setPage('previous')}>&laquo;</button>
    <p><b>{$pageNumber}</b> / <b>{$pageCount}</b></p>
    <button on:click={() => dataHandler.setPage('next')}>&raquo;</button>
</aside>


<style>
	p{margin:0;padding:0;}
	p b{color:var(--tertiary)}


	aside{display:flex;justify-content:flex-start;align-items: center;height:40px;}
	aside p{margin:0 8px;}
	aside button{background:#fff;width:40px;border:1px solid #e0e0e0;padding:8px 0;border-radius:4px;text-transform:uppercase;color:var(--secondary);cursor:pointer;transition:all,0.2s;}
	button:focus{outline:2px solid var(--tertiary)}
</style>