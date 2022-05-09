
export const initialization = 
`<script>
    import DataHandler from '@vincjo/svelte-data-handler'

    // with pagination :
    const dataHandler = new DataHandler(myData, { itemsPerPage: 50 })

    // without pagination :
    const dataHandler = new DataHandler(myData)
</script>   `

export const getItems = 
`<script>
    const items = dataHandler.getitems()
    console.log( $items )
</script>`

export const getItemCoun = 
`<script>
    const itemCount = dataHandler.getItemCount()
    console.log( $itemCount )
    // { total: 1000, start: 0, end: 49 } 
</script>`

export const sortAsc = 
`<script>
    dataHandler.sortAsc('last_name')

    dataHandler.sortAsc( item => {
        return item.lastname + ' ' + item.firstname
    })
</script> `

export const sortDesc = 
`<script>
    dataHandler.sortDesc('last_name')
    
    dataHandler.sortDesc( item => {
        return item.lastname + ' ' + item.firstname
    })
</script>`

export const search = 
`<script>
    dataHandler.search('Dupont')

    dataHandler.clearSearch()
</script>`

export const filter = 
`<script>
    dataHandler.filter('Jean', 'firstname')

    dataHandler.filter( 'Jean Dupont', (item) => {
        return item.firstname + ' ' + item.lastname
    })

    dataHandler.clearFilters()
</script>`

export const set = 
`<script>
    // change dataset
    dataHandler.set(myData)
</script>`

export const getPages = 
`<script>
    const pages = dataHandler.getPages()

    console.log( $pages )
</script>`

export const getPageNumber = 
`<script>
    const pageNumber = dataHandler.getPageNumber()
    console.log( $pageNumber )
    // 1
</script>`

export const getPageCount = 
`<script>
    const pageCount = dataHandler.getPageCount()
    console.log( $pageCount )
    // 100
</script>`

export const setPage = 
`<script>
    dataHandler.setPage(24)
    // navigate to the 24th page

    dataHandler.setPage('next')
    // navigate to the 25th page

    dataHandler.setPage('previous')
    // navigate to the 24th page
</script>`

export const getTriggerChange = 
`<script>
    export let dataHandler

    let element: HTMLElement | null
    const triggerChange = dataHandler.getTriggerChange()
        
    $: $triggerChange, scrollTop()

    const scrollTop = () => {
        if (element) {
            element.scrollTop = 0
        }
    }
</script>

<div bind:this={element}>

</div>
`
