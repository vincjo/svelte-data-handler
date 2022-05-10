<script lang="ts">
    export let dataHandler

    let element: HTMLElement | null

    const items = dataHandler.getItems()

    const triggerChange = dataHandler.getTriggerChange()
    
    $: $triggerChange, scrollTop()
    
    const scrollTop = () => {
        if (element) {
            element.scrollTop = 0
        }
    }

</script>

<ul class="parent thin-scrollbar" bind:this={element}>
    <li>
        {#each $items as item}
        <ul class="z-depth-1">
            <li><span>First name </span> {item.first_name}</li>
            <li><span>Last name  </span>  {item.last_name}</li>
            <li><span>Email 	 </span> {item.email}</li>
            <li><span>Country 	 </span> {item.country}</li>
        </ul>
        {/each}
    </li>
</ul>

<style>
    ul{list-style-type: none;margin:0;padding:0;}
	ul.parent{height:480px;width:440px;position:relative;overflow-y: auto;border:4px solid #eee;border-radius:8px 8px 0 0;background:#f5f5f5;border-bottom:2px solid #bdbdbd;margin-bottom:8px;}
	ul.parent ul{padding:8px 16px;border-radius:4px;margin:12px 32px;border:1px solid #e0e0e0;background:#fff;}
	ul.parent ul li{display:flex;justify-content: flex-start;align-items: center;line-height:18px;color:var(--priamry);font-family:Geneva, Verdana, sans-serif;}
	ul.parent ul li span{width:80px;color:var(--secondary);font-size:13px;font-family:Helvetica, sans-serif;}
</style>