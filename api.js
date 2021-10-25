export const loadItems = (urlApi) => () =>
    fetch(urlApi, {
        method: 'POST'
    }).then((res) => res.json());

    // fetch(URL, {
    //     method: 'POST'
    // }).then(response => response.json())
    // .then(json => { this.setState({json}); });