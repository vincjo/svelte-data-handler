<script>
	import { HighlightSvelte } from 'svelte-highlight'
    import typescript from "svelte-highlight/languages/typescript"
    import { 
        initialization,
        getItems,
        getItemCoun,
        sortAsc,
        sortDesc,
        search,
        filter,
        set,
        getPages,
        getPageNumber,
        getPageCount,
        setPage
    } from '$components/Code/ApiCode'
</script>


<h1>API</h1>

<h2 style:margin-top="40px">Initialization</h2>
<aside>
    <div>
        <p>DataHandler is a class. The first parameter is an array of data, JSON[] or JavascriptObject[]. The second parameter, optional, is the number of items per page. If not specified, pagination will be simply ignored.</p>
    </div>
    <article class="code">
        <HighlightSvelte code={initialization} language={typescript}/>
    </article>
</aside>

<br><br>
<h2>Items</h2>
<aside>
    <div>
        <h3>getItems()<span>: Readable{`<any[]>`}</span></h3>
		<p>Return the data as a readable store that can dynamically renders sorted, filtered and paginated items.</p>
	</div>
    <article class="code">
        <HighlightSvelte code={getItems}/>
    </article>
</aside>

<aside>
    <div>
        <h3>getItemCount()<span>: Readable{`<{ total: number; start: number; end: number; }>`}</span></h3>
		<p>Return an object containing the total number of items, start index and end index of items that are displayed into the current page. Each time a filter is applied on data, these numbers will automatically update.</p>
	</div>
    <article class="code">
        <HighlightSvelte language={typescript} code={getItemCoun}/>
    </article>
</aside>


<h2>Sort items in ascending order</h2>
<aside>
    <div>
        <h3>sortAsc(<span><b>keyname</b>: string</span>)<span>: void</span></h3>
		<p>Sort data using 1 object key.</p>
        <h3>sortAsc(<span><b>callback</b>: Function</span>)<span>: void</span></h3>
		<p>Sort data in ascending order using multiple object key. The function must return a value of type String, Boolean or Number.</p>
	</div>
    <article class="code">
        <HighlightSvelte language={typescript} code={sortAsc}/>
    </article>
</aside>

<h2>Sort items in descending order</h2>
<aside>
    <div>
        <h3>sortDesc(<span><b>keyname</b>: string</span>)<span>: void</span></h3>
        <p>Sort data descending using 1 object key.</p>
        <h3>sortDesc(<span><b>callback</b>: Function</span>)<span>: void</span></h3>
        <p>Sort data in descending order using multiple object key. The function must return a value of type String, Boolean or Number.</p>
	</div>
    <article class="code">
        <HighlightSvelte language={typescript} code={sortDesc}/>
    </article>
</aside>

<h2>Global search</h2>
<aside>
    <div>
        <h3>search(<span><b>value</b>: string</span>)<span>: void</span></h3>
        <p>Update $items store with a set of items matching with the search value.</p>
        <h3>clearSearch()<span>: void</span></h3>
        <p>Programmatically reset the global search.</p>
	</div>
    <article class="code">
        <HighlightSvelte language={typescript} code={search}/>
    </article>
</aside>


<h2>Filtering data</h2>
<aside>
    <div>
        <h3>filter(<span><b>value</b>: string, <b>keyname</b>: string</span>)<span>: void</span></h3>
        <p>Filter data using 1 object key, matching with the search value.</p>
        <h3>filter(<span><b>value</b>: string, <b>callback</b>: Function</span>)<span>: void</span></h3>
        <p>Filter data using multiple object key, The function must return a value of type String, Boolean or Number.</p>
        <h3>clearFilters()<span>: void</span></h3>
        <p>Programmatically reset every filters</p>
	</div>
    <article class="code">
        <HighlightSvelte language={typescript} code={filter}/>
    </article>
</aside>


<h2>Changing dataset</h2>
<aside>
    <div>
        <h3>set(<span><b>myData</b>: any[]</span>)<span>: void</span></h3>
        <p>Change dataset without re-instantiating the class</p>
	</div>
    <article class="code">
        <HighlightSvelte language={typescript} code={set}/>
    </article>
</aside>

<h2>Pages</h2>
<aside>
    <div>
        <h3>getPages()<span>: Readable{`<{ index: number; value: number; }[]>`}</span></h3>
        <p>Return an array of object representing the pages, in a readable store. The number of pages dynamically updates based on the number of items.</p>
	</div>
    <article class="code">
        <HighlightSvelte language={typescript} code={getPages}/>
    </article>
</aside>

<aside>
    <div>
        <h3>getPageNumber()<span>: Readable{`<number>`}</span></h3>
		<p>Return the current page number. Each time a filter is applied on data, the page number is set to 1.</p>
	</div>
    <article class="code">
        <HighlightSvelte language={typescript} code={getPageNumber}/>
    </article>
</aside>

<aside>
    <div>
        <h3>getPageCount()<span>: Readable{`<number>`}</span></h3>
		<p>Return the current total number of pages. Each time a filter is applied on data, this number will updates.</p>
	</div>
    <article class="code">
        <HighlightSvelte language={typescript} code={getPageCount}/>
    </article>
</aside>

<h2>Navigation</h2>
<aside>
    <div>
        <h3>setPage(<span><b>value</b>: number | string</span>)<span>: void</span></h3>
        <p>Set the page to a defined number. It is possible to switch to next or previous page, simply by using 'next' and 'previous' values</p>
	</div>
    <article class="code">
        <HighlightSvelte language={typescript} code={setPage}/>
    </article>
</aside>

<style>
    h1{font-size:40px;font-family:Calibri;font-weight:400;margin:16px 0 0 0;}
    h2{font-size:32px;font-family:Calibri;font-weight:400;margin:80px 0 0 0;color:var(--secondary)}
	aside{display:flex;justify-content:space-between;align-items:center;flex-wrap: wrap;margin-bottom:32px;}
    h3{color:var(--secondary);background:#fafafa;padding:4px 8px;;margin:16px 0 0 0;border-radius:8px;font-family:Geneva, Verdana, sans-serif;font-size:13px;width:100%;border:1px solid #bdbdbd;}
    h3 span{font-weight:normal;color:var(--primary);font-size:13px;}
    h3 span b{color:var(--tertiary);}
    p{display:block;width:auto;max-width:400px;font-size:16px;line-height:22px;margin:8px 0;padding-left:8px;}
    b{color:var(--secondary)}
	article{border-radius:8px;padding:4px 8px;margin-right:16px;background:var(--hljs);width:600px;}
</style>