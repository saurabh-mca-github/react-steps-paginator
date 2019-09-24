## Installation

Install `steps-paginator` with [npm](https://www.npmjs.com/):

```
$ npm install steps-paginator
```

## Usage

Its easy to use, You need to provide required pagrams or it will show pagination with default params.

## Params

Name | Type | Default | Description
--- | --- | --- | --- |
`totalItems` | Number | `50` | **Required.** Total count of items which you are going to use pagination
`onPaginate` | Function | | Page change handler. You Receive pageNumber as arg
`page` | Number | `1` | **Required.** Active page
`perPage` | Number | `5` | **Required.** Number of items to be on a page