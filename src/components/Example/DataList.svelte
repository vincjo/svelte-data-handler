<script>
    export let dataHandler

    const items = dataHandler.getItems()
</script>

<ul class="parent thin-scrollbar">
    <li>
        {#each $items as item}
        <ul class="z-depth-1">
            <li><span>Name:     </span> {item.first_name} {item.last_name}</li>
            <li><span>Email: 	</span> {item.email}</li>
            <li><span>Country: 	</span> {item.country}</li>
        </ul>
        {/each}
    </li>
</ul>

<style>
    ul{list-style-type: none;margin:0;padding:0;}
	ul.parent{height:480px;width:440px;position:relative;overflow-y: auto;border:4px solid #eee;border-radius:8px 8px 0 0;background:#f5f5f5;border-bottom:2px solid #bdbdbd;margin-bottom:8px;}
	ul.parent ul{padding:8px 16px;border-radius:4px;margin:8px 32px;border:1px solid #eee;background:#fff;}
	ul.parent ul li{display:flex;justify-content: flex-start;align-items: center;line-height:18px;color:var(--secondary)}
	ul.parent ul li span{width:72px;color:var(--priamry)}
</style>