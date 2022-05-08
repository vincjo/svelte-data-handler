<script>
	import DataHandler 		from '$lib/DataHandler'
	import json 			from  '$data/dataset'
	
	import DataList 		from './DataList.svelte'
	import GlobalSearch 	from './GlobalSearch.svelte'
	import Filters 			from './Filters.svelte'
	import Sort 			from './Sort.svelte'
	import ItemCount 		from './ItemCount.svelte'
	import Pagination 		from './Pagination.svelte'


	const dataHandler = new DataHandler(json, { itemsPerPage: 50 })

</script>

<section class="z-depth-2">

	<article>
		<h1>GlobalSearch.svelte</h1>
		<GlobalSearch dataHandler={dataHandler}/>

		<h1>Filters.svelte</h1>
		<Filters dataHandler={dataHandler}/>
		
		<h1>Sort.svelte (x4)</h1>
		<Sort dataHandler={dataHandler} key={'first_name'}/>
		<Sort dataHandler={dataHandler} key={'last_name'}/>
		<Sort dataHandler={dataHandler} key={'email'}/>
		<Sort dataHandler={dataHandler} key={'country'}/>

		<h1>ItemCount.svelte</h1>
		<ItemCount dataHandler={dataHandler}/>

		<h1>Pagination.svelte</h1>
		<Pagination dataHandler={dataHandler}/>
	</article>

	<aside>
		<h1>DataList.svelte</h1>
		<DataList dataHandler={dataHandler}/>
	</aside>
</section>

<style>
	section{display:flex;justify-content:space-between;align-items:baseline;background:#fff;margin:16px;border-radius:8px;padding:16px 8%;}
	h1{margin:0;font-size:14px;margin-top:16px;color:var(--tertiary);font-weight:normal;font-family:Geneva, Verdana, sans-serif;}
	h1:first-child{margin-top:0;}
</style>