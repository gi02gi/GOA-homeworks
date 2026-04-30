const div = document.querySelector('div')
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        data.forEach(product => {
        div.innerHTML += `
        <div>
            <h3>${product.title}</h3>
            <p>${product.price}$</p>
            <img src="${product.image}" width="100">
        </div>
        `
        })
    })
    .catch(error => {
        console.log('error occured', error)
    })
    .finally(() => {
        console.log('finished succesfully')
    });