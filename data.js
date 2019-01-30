var products = [];

var cart = {};

var amount = 0;

function setCart(productId, quantity){
    if (quantity == 0){
        delete cart[productId]
    }else{
        cart[productId] = {
            product: products[productId],
            quantity 
        };
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

function sumAmount(event){
    let quantity = document.getElementById(event.target.dataset.item);
    let amount = parseInt(quantity.innerText) + 1;
    quantity.innerHTML = amount;
    setCart(event.target.dataset.item.replace('quan', '') ,amount);
}

function resAmount(){
    let quantity = document.getElementById(event.target.dataset.item);
    let amount = parseInt(quantity.innerText) - 1
    if (amount <= 0) {
        amount = 0;
    }
    quantity.innerHTML = amount;
    setCart(event.target.dataset.item.replace('quan', '') ,amount);
}

function createRow(name, price, id){
    var section = document.createElement("section");
    section.innerHTML = `<div class="row"><div class="col-md">${name}</div><div class="col-md">${price}</div><div class="col-sm"><button data-item="quan${id}" class="btn btn-dark" onclick='sumAmount(event)'>Add</button><button data-item="quan${id}" class="btn btn-dark" onclick='resAmount(event)'>Rem</button></div><div class="col-md" id="quan${id}">0</div> `;
    return section;
}

function createCheckoutRow(name, price, quantity, total){
    var section = document.createElement("section");
    section.innerHTML = `<div class="row"><div class="col-md">${name}</div><div class="col-md">${price}</div><div class="col-md">${quantity}</div><div class="col-md">${total}</div> `;
    return section;
}
        
function loadDataGrid() {
    localStorage.setItem('cart', [JSON.stringify({})]);
    var i = 0;
    let dataList = document.getElementById("dataList");
    
    while (i < products.length)
    {
        dataList.appendChild(createRow(products[i].name, products[i].price, i));

        i = i + 1;
    }
}

function clearCart(){
    localStorage.setItem('cart', [JSON.stringify({})]);
}

function loadCheckoutDataGrid() {
    let cart = localStorage.getItem('cart');
    cart = JSON.parse(cart);
    let checkoutDataList = document.getElementById("checkoutDataList");
    if(cart){
        for (const item in cart) {
            checkoutDataList.appendChild(createCheckoutRow(cart[item].product.name, cart[item].product.price, cart[item].quantity, cart[item].product.price * cart[item].quantity));
        }
    }
}

function fetchData() {
    var request = new XMLHttpRequest();
    request.open('GET', '/api/products', true);
    
    request.onload = function() {
      if (request.status !== 200) {
        body.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
        return;
      }
      renderTable(JSON.parse(request.responseText));
    };
    request.onerror = function() {
        body.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
    };
    request.send();
}