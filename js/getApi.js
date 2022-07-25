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
`header ${ isLargeScreen() ? '' :
  `icon-${item.isCollapsed ? 'expander' : 'collapser'}` }`
getApi ()
    .then((data) => {
        const htmls = data.map(product => {
            return `
            <div class="product__item">
            ${product.status} ? <div class="pro__new">
            <p>NEW</p>
            </div> :
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
        </div> 
                 
        `
        }) 
        const listProduct = document.querySelector('.products__list')
        listProduct.innerHTML = htmls.join('')
    })