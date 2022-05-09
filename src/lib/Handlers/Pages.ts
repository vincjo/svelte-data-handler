import type Context from '$lib/Context'
import type { Writable, Readable } from 'svelte/store'

export default class Pages
{
    public pageNumber    : Writable<number>
    public itemCount     : Readable<{ total: number; start: number; end: number; }>
    public itemsPerPage  : Writable<number|null>
    public triggerChange : Writable<number>
    public pages         : Readable<any[]>

    constructor(context: Context)
    {
        this.pageNumber    = context.pageNumber
        this.itemCount     = context.itemCount
        this.itemsPerPage  = context.itemsPerPage
        this.triggerChange = context.triggerChange
        this.pages         = context.pages
    }

    public get(): Readable<any[]>
    {
        return this.pages
    }

    public goTo(number: number): void
    {
        this.pageNumber.update( store => {
            const $rowsPerPage = this.getRowsPerPage()
            if ($rowsPerPage) {
                const $itemsTotal = this.getTotalItemCout()
                if ( number >= 1 && number <= Math.ceil($itemsTotal / $rowsPerPage) ) {
                    store = number
                    this.triggerChange.update( store => { return store + 1 })
                }
            }
            return store
        })
    }

    public previous(): void
    {
        const number = this.getPageNumber() - 1
        this.goTo(number)
    }

    public next(): void
    {
        const number = this.getPageNumber() + 1
        this.goTo(number)
    }



    private getPageNumber(): number
    {
        let value = 1
        this.pageNumber.subscribe(store => value = store)
        return value
    }

    private getTotalItemCout(): number
    {
        let value = 0
        this.itemCount.subscribe(store => value = store.total)
        return value
    }

    private getRowsPerPage(): number|null
    {
        let value = null
        this.itemsPerPage.subscribe(store => value = store)
        return value
    }
}