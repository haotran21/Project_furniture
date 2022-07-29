const getApi = async () => {
    try {
        let response = await fetch('http://localhost:3000/products')
        if (response && response.status !== 200) {
            throw new Error("Something wrong with the status code: " + response.status)
        } // reject response
        let data = await response.json();
        return data; // resolve
    } catch (e) {
        console.log('>>> Error: ' + e.message)
    }
    
} 
getApi ()
    .then((data) => {
        const htmls = data.map(product => {
            return `
            <div class="product__item">
            ${product.status ? `<div class="pro__new">
            <p>NEW</p>
            </div>` : ``} 
                <div class="img__pro">
                <img src="${product.img}" alt="">
                <!-- overlayer  -->
                <div class="overlay">
                    <button class="cart"><i class="fas fa-cart-plus"></i></button>
                    <button><i class="fas fa-eye"></i></button>
                </div>
            </div>
            <div class="title_pro">
                <h5>${product.name}</h5>
                <span>${product.price}</span>
            </div>
        </div>`;
        }) 
        
        const listProduct = document.querySelector('.products__list')
        console.log(listProduct)
        listProduct.innerHTML = htmls.join('')
    })


const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
  let value = params.id_pro; // "some_value"
  console.log(value)