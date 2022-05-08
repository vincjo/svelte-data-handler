<script>
    import { fade } from 'svelte/transition'
    // import { Highlight, HighlightSvelte } from 'svelte-highlight'
    // import { json } from 'svelte-highlight/languages'  
    let current = 'result' 
</script>

<section in:fade>
    <ul>
        <li class:active={current === 'result'} on:click={() => current = 'result'}>Result</li>
        <li class:active={current === 'code'}   on:click={() => current = 'code'  }>Code</li>
        <li class:active={current === 'data'}   on:click={() => current = 'data'  }>Data</li>
    </ul>
    <article class="thin-scrollbar">
        {#if current === 'result'}
            <div class="result" in:fade={{ duration:200 }}>
                <slot name="result"/>
            </div>
        {:else if current === 'code'}
            <div class="code" in:fade={{ duration:200 }}>
                <slot name="code"/>
            </div>
        {:else}
            <div class="data" in:fade={{ duration:200 }}>
                <slot name="data"/>
            </div>
        {/if}
    </article>
</section>

<style>
    section{background:#f5f5f5;border-radius:8px;}
    ul{list-style-type:none;padding:0;margin:0;display:flex;margin-bottom:8px;background:#fff;padding-bottom:8px;border-bottom:2px solid #eee;}
    li{display:block;font-size:16px;color:#676778;line-height:32px;padding:8px 0 0 0;margin:0 24px 0 16px;font-weight:bold;border-bottom:2px solid transprent;transition:color, 0.1s;cursor:pointer;}
    li.active{color:var(--primary);border-bottom:2px solid var(--primary);}
    article{background:#eee;width:100%;position:relative;overflow:auto;border-radius:8px;}
</style>