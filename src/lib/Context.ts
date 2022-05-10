import { writable, derived } from 'svelte/store'
import type { Writable, Readable } from 'svelte/store'
import type { params } from './DataHandler'

export default class Context
{
    public  itemsPerPage  : Writable<number|null>
    public  pageNumber    : Writable<number>
    public  triggerChange : Writable<number>
    public  globalFilter  : Writable<string|null>
    public  localFilters  : Writable<any[]>
    public  rawItems      : Writable<any[]>
    private filteredItems : Readable<any[]>
    public  items         : Readable<any[]>
    public  itemCount     : Readable<{ total: number; start: number; end: number; }>
    public  pages         : Readable<any[]>
    public  pageCount     : Readable<number>

    constructor(data: any[], params: params)
    {
        this.itemsPerPage   = writable(params.itemsPerPage)
        this.pageNumber     = writable(1)
        this.triggerChange  = writable(0)
        this.globalFilter   = writable(null)
        this.localFilters   = writable([])
        this.rawItems       = writable(data)
        this.filteredItems  = this.createFilteredItems()
        this.items          = this.createPaginatedItems()
        this.itemCount      = this.createItemCount()
        this.pages          = this.createPages()
        this.pageCount      = this.createPageCount()
    }

    private createFilteredItems(): Readable<any[]>
    {
        return derived(
            [this.rawItems, this.globalFilter, this.localFilters],
            ([$rawItems, $globalFilter, $localFilters]) => {

                if ($globalFilter) {
                    $rawItems = $rawItems.filter( item => {
                        return Object.keys(item).some( k => {
                            return item[k].toString().toLowerCase().indexOf($globalFilter.toString().toLowerCase()) > -1
                        })
                    })
                    this.pageNumber.set(1)
                    this.triggerChange.update( store => { return store + 1 }) 
                }

                if ($localFilters.length > 0) {
                    $localFilters.forEach(filter => {
                        return $rawItems = $rawItems.filter( item => filter.key(item).toString().toLowerCase().indexOf(filter.value.toString().toLowerCase()) > -1)
                    })
                    this.pageNumber.set(1)
                    this.triggerChange.update( store => { return store + 1 }) 
                }
                return $rawItems
            } 	
        )
    }

    private createPaginatedItems(): Readable<any[]>
    {
        return derived(
            [this.filteredItems, this.itemsPerPage, this.pageNumber],
            ([$filteredItems, $itemsPerPage, $pageNumber]) => {
                if (!$itemsPerPage) {
                    return $filteredItems
                }
                this.triggerChange.update( store => { return store + 1 }) 
                return $filteredItems.slice( ($pageNumber - 1) * $itemsPerPage, $pageNumber * $itemsPerPage ) 
            }
        ) 
    }

    private createItemCount(): Readable<{ total: number; start: number; end: number; }>
    {
        return derived(
            [this.filteredItems, this.pageNumber, this.itemsPerPage],
            ([$filteredItems, $pageNumber, $itemsPerPage]) => {

                const total = $filteredItems.length

                if (!$itemsPerPage) {
                    return { total:  total, start: 0, end: total - 1 }
                }
                return {
                    total: total,
                    start: $pageNumber * $itemsPerPage - $itemsPerPage,
                    end: Math.min( ($pageNumber * $itemsPerPage), $filteredItems.length) - 1,
                }
            }
        ) 
    }

    private createPages(): Readable<{ index: number; value: number ; }[]>
    {
        return derived(
            [this.itemsPerPage, this.filteredItems],
            ([$itemsPerPage, $filteredItems]) => {
                if (!$itemsPerPage) {
                    return [{ index: 0, value: 1 }]
                }
                const pages = Array.from(
                    Array(Math.ceil($filteredItems.length / $itemsPerPage))
                )
                return pages.map( (item, i) => {
                    return { index: i, value: i + 1 }
                })
            }
        ) 
    }

    private createPageCount(): Readable<number>
    {
        return derived(
            [this.pages],
            ([$pages]) => {
                return $pages.length
            }
        ) 
    }
}