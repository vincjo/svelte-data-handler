<script>
	import { HighlightSvelte, Highlight } from 'svelte-highlight'
	import { typescript } from 'svelte-highlight/languages'
	import { code } from '$components/Code/HomeCode'
</script>

<section>
	<aside>
		<div class="text">
			<h1>DataHandler</h1>
			<p><b>DataHandler</b> is a class containing a set of Svelte stores handled by a small layer of logic. This allows to easily manipulate a dataset <b>sorting</b>, <b>filtering</b> and <b>paging</b>.</p>
			<p>DataHandler class provides <b>Typescript</b> support.</p>
			<p>The objective is to speed up and improve the creation of components such as datatables. But any Svelte component can use this abstraction if it needs to sort/filter/paginate objects.</p>
			<div class="install">
				<Highlight code={"npm install -D @vincjo/svelte-data-handler"} languages={typescript}/>
			</div>
		</div>
		<article class="code">
			<HighlightSvelte code={code}/>
		</article>
	</aside>
</section>



<style>
	section{max-width:880px;}
    h1{font-size:32px;font-family:Calibri;font-weight:400;margin:16px 0 0 0;}
	aside{display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;}
    p{display:block;max-width:264px;font-size:15px;text-align: justify;}
    b{color:var(--secondary)}
	div.text{margin:0 24px 24px 0;}
	article{border-radius:8px;padding:0 16px;background:var(--hljs);}
	div.install{border-radius:4px;font-size:11px;padding:4px 8px;background:var(--hljs);}
</style>