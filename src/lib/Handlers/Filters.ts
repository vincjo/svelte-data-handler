
import type Context from '$lib/Context'
import type { Writable } from 'svelte/store'

export default class Filters
{
    public localFilters: Writable<any[]>

    constructor(context: Context)
    {
        this.localFilters = context.localFilters
    }

    public set(value: string, key: Function | string): void
    {
        const fn: Function = this.getFilterFunction(key)
        this.localFilters.update(store => {
            const filter = { key: fn, value: value } 
            store = store.filter(item => { return item.fn && item.fn.toString() !== fn.toString() && item.value.length > 0 })
            store.push(filter)
            return store
        })
    }

    public remove(): void
    {
        this.localFilters.update(store => store = [])
    }

    private getFilterFunction(key: Function | string): Function
    {
        if (typeof (key) === 'string') {
            return (item:any) => item[key]
        }
        return key
    }
}