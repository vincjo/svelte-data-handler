<script>
    import { url, getPath } from '$utils/page'
    import { fade } from 'svelte/transition'

    const nav = [
        { title: 'Home', path: '/', links: [] },
        { title: 'Example', path: '/example', links: [] },
        // { title: 'Examples', path: '/examples', links: [
        //     {title: 'Complete example', path: '/examples'},
        //     {title: 'Todo list', path: '/examples/todo-list'},
        //     {title: 'Pagination elipse', path: '/examples/pagination-elipse'},
        // ]},
        { title: 'API', path: '/api', links: [] }
    ]
    let current = '/'
</script>

<section>
    <article>
        <a href="{getPath('/')}" on:click={() => current = '/'} >
            <aside transition:fade={{ duration:100 }}>
                <svg id="mdi-iframe-array-outline" width="512" height="512" viewBox="0 0 24 24"><path fill="#F66B0E" d="M21 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H21C22.1 22 23 21.1 23 20V4C23 2.9 22.1 2 21 2M21 20H3V6H21V20M6 8V18H10V16H8V10H10V8H6M16 16H14V18H18V8H14V10H16V16" /></svg>
                <div>
                    <h1>svelte<br>data<br>handler</h1>
                </div>
            </aside>
        </a>
    </article>
   
    {#each nav as item}
    <a on:click={() => current = item.path} href="{getPath(item.path)}">
        <h2 class:active={item.path === current}>
            {item.title}
        </h2>
    </a>
        <!-- {#if item.links.length > 0}
        <ul>
            {#each item.links as link}
            <a href="{getPath(link.path)}">
                <li class:active={$url === link.path}>
                    {link.title}
                </li>
            </a>
            {/each}
        </ul>
        {/if} -->
    {/each}

    <footer>
        <a href="https://github.com/vincjo/svelte-data-handler#readme">
            <svg enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512"><path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" fill="#444"/></svg>
            <div>Github</div>
        </a>
    </footer>

</section>


<style>
    section{position:fixed;top:0;bottom:0;left:0;width:240px;background:var(--hljs);z-index:1;padding:40px 0 0 40px;overflow-y:auto;}

    article{height:88px;}
    aside{display:flex;justify-content:start;margin:0;height:48px;}
	aside h1 {font-size:16px;line-height:15px; text-align:left; font-weight:400; margin: 0;color:var(--tertiary) }
	aside svg {width:48px;height:48px;margin:0 8px;}

    h2{color:#e0e0e0;font-weight:200;margin:8px 0 0 8px;font-size:24px;line-height:40px;transition:all,0.1s;}
    h2:hover{font-weight:400;}
    h2.active{color:var(--primary);font-weight:400;}
    a{text-decoration:none;}
    /* ul{margin:0;list-style-type:none;background:#fff;padding:0 16px 0 0;margin-bottom:24px;} */
    /* ul li{display:block;margin:0;background:#fff;transition:all,0.1s;padding:0;font-size:16px;color:#676778;font-weight:400;line-height:24px;} */
    /* ul li:hover{color:var(--secondary);} */
    /* ul li.active{color:var(--primary);font-weight:bold;} */
    /* ul li.active a {background:#fafafa;} */
    /* ul a{display:block;text-decoration:none;color:inherit;padding:0px 8px;} */

    footer {font-weight:300;padding:0;height:40px;position:absolute;bottom:120px;right:0;left:0;z-index:200;}  
	footer a {display:block;width:104px;margin:0 auto;}
	footer div{color:#444;text-align:center;font-size:24px;}
	footer svg{width:104px;height:104px;}
</style>