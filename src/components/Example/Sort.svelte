<script lang="ts">
    import type DataHandler from '$lib/DataHandler'

    export let dataHandler: DataHandler
    export let key: { name: string; value: string | ( (item: any) => string ) }

    let sorted: string | null = null
    
    const sort = () => {
        if (sorted === null || sorted === 'desc') {
            dataHandler.sortAsc(key.value)
            sorted = 'asc'
        }
        else if (sorted === 'asc') {
            dataHandler.sortDesc(key.value)
            sorted = 'desc'
        }
    }

</script>

<p class="{sorted}" on:click={() => sort()}>
    <b>{key.name}</b>
    <span/>
</p>


<style>
    p{margin:8px 0 0 0;display:flex;justify-content:space-between;align-items:center;height:32px;width:240px;user-select:none;border-bottom:1px solid #e0e0e0;background:#fff;padding:0 8px 0 16px;border-radius:2px;}
	p b{font-weight:normal;}

	span {
		padding-right: 16px;
		position: relative;
	}
	span:before,
	span:after {
		border: 4px solid transparent;
		content: '';
		display: block;
		height: 0;
		right: 0;
		top: 50%;
		position: absolute;
		width: 0;
	}
	span:before {
		border-bottom-color: #bdbdbd;
		margin-top: -9px;
	}
	span:after {
		border-top-color: #bdbdbd;
		margin-top: 1px;
	}
	p.asc span:before {
		border-bottom-color: #616161;
	}
	p.desc span:after {
		border-top-color: #616161;
	}

</style>