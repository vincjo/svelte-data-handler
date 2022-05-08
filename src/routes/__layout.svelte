<script>
	import Nav from '$components/Nav.svelte'
  	import highlightCSS from "svelte-highlight/styles/stackoverflow-dark"
</script>

<svelte:head>
	{@html highlightCSS}
	<title>DataHandler | Svelte</title>
	<html lang="en" />
</svelte:head>

<main>
	<Nav/>
	<section class="thin-scrollbar">
		<article>
			<slot/>
		</article>
	</section>
</main>


<style>
	section {position:absolute;left:240px;bottom:0;top:0px;;right:0;padding:0;margin:0;box-sizing:border-box;padding-left:32px;background-color:#eee;overflow-y:auto;} 
	article{min-width:800px;max-width:1600px;padding-bottom:0;margin:40px 24px;}
</style>