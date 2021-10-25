export const loadItems = (urlApi) => () =>
    fetch(urlApi, {
        method: 'POST'
    }).then((res) => res.json());