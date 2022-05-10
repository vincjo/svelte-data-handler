import Context           from '$lib/Context'
import Items             from '$lib/Handlers/Items'
import Pages             from '$lib/Handlers/Pages'
import GlobalSearch      from '$lib/Handlers/GlobalSearch'
import Filters           from '$lib/Handlers/Filters'

import type { Readable, Writable } from 'svelte/store'

export type params = { itemsPerPage: number | null }

export default class DataHandler
{
    private context      : Context
    private items        : Items
    private pages        : Pages
    private globalSearch : GlobalSearch
    private filters      : Filters

    constructor(data = [] as any[], params: params = { itemsPerPage: null })
    {
        this.context      = new Context(data, params)
        this.items        = new Items(this.context)
        this.pages        = new Pages(this.context)
        this.globalSearch = new GlobalSearch(this.context)
        this.filters      = new Filters(this.context)
    }

    public set(data: any[]): void
    {
        this.context.rawItems.set(data)
    }

    public getItems(): Readable<any[]>
    {
        return this.context.items
    }

    public getItemCount(): Readable<{ total: number; start: number; end: number; }>
    {
        return this.context.itemCount
    }

    public sortAsc(value: Function | string): void
    {
        this.items.sortAsc(value)
    }

    public sortDesc(value: Function | string): void
    {
        this.items.sortDesc(value)
    }

    public search(value: string): void
    {
        this.globalSearch.set(value)
    }

    public clearSearch(): void
    {
        this.globalSearch.remove()
    }

    public filter(value: string, key: ( (item: any) => string | number | boolean ) | string): void
    {
        return this.filters.set(value, key)
    }

    public getPages(): Readable<any[]>
    {
        return this.context.pages
    }

    public getPageCount(): Readable<number>
    {
        return this.context.pageCount
    }

    public getPageNumber(): Readable<number>
    {
        return this.context.pageNumber
    }

    public setPage(value: number | string): void
    {
        switch(value) {
            case 'previous': return this.pages.previous()
            case 'next'    : return this.pages.next()
            default        : return this.pages.goTo(value as number)
        }
    }

    public getTriggerChange(): Writable<number>
    {
        return this.context.triggerChange
    }

    public updateParams(params: params): void
    {
        if (!params) {
            this.context.itemsPerPage.set(null)
        }
        this.context.itemsPerPage.set(params.itemsPerPage)
    }
}