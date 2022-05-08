import type Context from '$lib/Context'
import type { Writable } from 'svelte/store'

export default class Items
{
    private rawItems     : Writable<any[]>

    constructor(context: Context)
    {
        this.rawItems    = context.rawItems
    }

    public sort(value: Function | string, direction: string)
    {
        if (direction === 'asc') {
            this.sortAsc(value)
        }
        else if (direction === 'desc') {
            this.sortDesc(value)
        }
    }

    public sortAsc(value: Function | string): void
    {
        const fn = this.getSortFunction(value)
        this.rawItems.update(store => {
            try {
                store.sort( (a, b) => {
                    if ( typeof( fn(b) ) === "boolean" ) {
                        return fn(a) ? 1 : -1
                    } else {
                        return fn(b).localeCompare(fn(a)) 
                    }									
                })
                return store
            } catch (e) {
                return store.sort( (a, b) => parseFloat(fn(b)) - parseFloat(fn(a)))
            }
        })
    }

    public sortDesc(value: Function | string): void
    {
        const fn = this.getSortFunction(value)
        this.rawItems.update(store => {
            try {
                store.sort( (a, b) => {
                    if ( typeof(fn(b) ) === "boolean" ) {
                        return fn(a) ? -1 : 1
                    } else {
                        return fn(a).localeCompare(fn(b)) 
                    }									
                })

                return store					
            } catch (e) {
                return store.sort( (a, b) => parseFloat(fn(a)) - parseFloat(fn(b)))
            }
        })
    }

    private getSortFunction(key: Function | string): Function
    {
        if (typeof (key) === 'string') {
            return (item:any) => item[key]
        }
        return key
    }
}