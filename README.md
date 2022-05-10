<div align="center">
	<img align="center" src="./static/logo.svg" alt="logo" width="172"/>
	<p align="center">
		<h1 align="center" style="font-size:32px;margin:0;border:none;">svelte-data-handler</h1>
		<img src="https://img.shields.io/npm/v/@vincjo/svelte-data-handler?color=%23205375" alt="npm version"/>
		<img src="https://img.shields.io/github/license/vincjo/svelte-data-handler?color=205375" alt="license"/>
	</p>
</div>

<br><br>

# Abstract
**DataHandler** is a class containing a set of Svelte stores handled by a small layer of logic. This allows to easily manipulate a dataset **sorting**, **filtering** and **paging**.

<br>


# Install
````apache
npm i -D @vincjo/svelte-data-handler
````

<br>

# Methods

````ts
import { DataHandler } from '@vincjo/svelte-data-handler'


const dataHandler = new DataHandler(myJSON, { itemsPerPage: 50 })

/********************
 *                  *
 *      Items       *
 *                  *
 ********************/

/* Get a readable store of sorted, filtered & paginated data */
dataHandler.getItems(): Readable<any[]>

/* Get the number of items as a readable store (total + displayed) */
dataHandler.getItemsCount(): Readable<{ total: number; start: number; end: number; }>

/* Sort items by key  (keyName) */
dataHandler.sortAsc( 'firstname': string): void
dataHandler.sortDesc('firstname': string): void

/* Sort items using a function */
dataHandler.sortAsc(  (item)  => { 
    return `${item.firstname} ${item.lastname}` 
}): void

dataHandler.sortDesc( (item)  => {
    return `${item.firstname} ${item.lastname}` 
}): void

/* Function global search (searchValue) */
dataHandler.search('Dupont'): void

/* Programmatically destroy the global search */
dataHandler.clearSearch(): void

/* Filter data by key (filterValue, keyName) */
dataHandler.filter('Jean', 'firstname'): void

/* Filter data by using a function (filterValue, fn(item) ) */
dataHandler.filter( 'Jean Dupont', (item) => {
    return `${item.firstname} ${item.lastname}`
})

/* Remove all the filters */
dataHandler.clearFilters(): void

/* Changing the dataset */
dataHandler.set(myOtherJSON: any[]): void




/********************
 *                  *
 *      Pages       *
 *                  *
 ********************/

/* Get pages as an array of object */
const pages = dataHandler.getPages(): Readable<{ index: number; value: number }[]>
console.log( $pages )

/* get the current total number of pages */
dataHandler.getPageCount(): Readable<number> 

/* Get the current page */
dataHandler.getPageNumber(): Readable<number>

/* Navigate */
dataHandler.setPage(24): void
dataHandler.setPage('previous'): void
dataHandler.setPage('next'): void




/********************
 *                  *
 *      Event       *
 *                  *
 ********************/

/* Get a store that increments each time the data is updated */
const triggerChange = dataHandler.getTriggerChange(): Writable<number>

$: $triggerChange, scrollTop()

const scrollTop = () => {
	if (element) {
		element.scrollTop = 0
	}
}




/********************
 *                  *
 *      Params      *
 *                  *
 ********************/

/* Update number of items per pages, can be set to "null" */
const dataHandler.updateParams({ itemsPerPage: 100 }): void

/* Set no pagination */
const dataHandler.updateParams(): void

````