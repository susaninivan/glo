const getData = function () {

    return fetch('https://test-1b828-default-rtdb.firebaseio.com/goods.json')
        .then((response) => {
            return response.json();

        })
}





export default getData