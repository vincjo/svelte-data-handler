<script>
	import DataHandler 		from '$lib/DataHandler'
	import json 			from  '$data/dataset'
	
	import DataList 		from './DataList.svelte'

	import GlobalSearch 	from './GlobalSearch.svelte'
	import Filters 			from './Filters.svelte'
	import Sort 			from './Sort.svelte'
	import ItemCount 		from './ItemCount.svelte'
	import Pagination 		from './Pagination.svelte'
	import Params 			from './Params.svelte'


	const dataHandler = new DataHandler(json, { itemsPerPage: 50 })

</script>

<section>

	<aside>
		<h1>DataList.svelte</h1>
		<DataList {dataHandler}/>		
        <div class="flex">
            <div>
                <Pagination {dataHandler}/>
                <h1>Pagination.svelte</h1>
            </div>
            <div>
                <ItemCount {dataHandler}/>
                <h1 style:text-align="right">ItemCount.svelte</h1>
            </div>
        </div>

	</aside>

	<article>
		<h1>GlobalSearch.svelte</h1>
		<GlobalSearch {dataHandler}/>

		<h1>Filters.svelte</h1>
		<Filters dataHandler={dataHandler}/>
		
		<h1>Sort.svelte (x3)</h1>
		<Sort {dataHandler} key={ { name: 'email'     , value: 'email'     } }/>
		<Sort {dataHandler} key={ { name: 'country'   , value: 'country'   } }/>
		<Sort {dataHandler} key={ { name: 'first_name + last_name', value: item => { return item.first_name + ' ' + item.last_name } } }/>

		<h1>Params.svelte</h1>
		<Params {dataHandler}/>
	</article>

</section>

<style>
	section{display:flex;justify-content:flex-start;align-items:baseline;margin:16px 0;border-radius:8px;padding:16px 0;}

    aside{margin-right:72px;}
    article{margin-right:72px;}
	h1{margin:0;font-size:14px;margin-top:16px;color:var(--primary);font-weight:normal;font-family:Geneva, Verdana, sans-serif;}
	h1:first-child{margin-top:0;}

    div.flex{display:flex;justify-content:space-between;align-items:center;}
    div.flex h1{margin-top:0;}
</style>