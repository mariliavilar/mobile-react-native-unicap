//step04 - 'react-query' - [api.js] - Create a new file to api

//step05 - 'react-query' - [api.js] - Create a function to load the api items/values
export const loadItems = (urlApi) => () =>
    fetch(urlApi, {
        method: 'POST'
    }).then((res) => res.json());