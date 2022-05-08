<script lang="ts">
    import type DataHandler from '$lib/DataHandler'

    export let dataHandler: DataHandler

    
	const itemCount = dataHandler.getItemCount()
</script>

<p>Showing <b>{$itemCount.start + 1}</b> to <b>{$itemCount.end + 1}</b> of <b>{$itemCount.total}</b> entries</p>


<style>
    p{display:block;margin:0;text-align:right;height:40px;line-height:40px;}
	p b{color:var(--tertiary)}
</style>