var products = [];

var amount = 0

function sumAmount(){

    amount = amount+1

    let amountId = document.getElementById("bed");

    amountId.innerHTML = amount
}

function resAmount(){

    amount = amount-1

    let amountId = document.getElementById("bed");

    if (amount <= 0) {
        amount = 0;
      }

    amountId.innerHTML = amount
}

function createRow(name, price, id, initAmount){
    var section = document.createElement("section");
    section.innerHTML = `<div class="row"><div class="col-md">${name}</div><div class="col-md">${price}</div><div class="col-sm"><button class="btn btn-dark" onclick='sumAmount()'>Add</button><button class="btn btn-dark" onclick='resAmount()'>Rem</button></div><div class="col-md" id="${id}">${initAmount}</div> `;
    return section;
}

function createCheckoutRow(name, price, quantity, total){
    var section = document.createElement("section");
    section.innerHTML = `<div class="row"><div class="col-md">${name}</div><div class="col-md">${price}</div><div class="col-md">${quantity}</div><div class="col-md">${total}</div> `;
    return section;
}
        
function loadDataGrid() {

    var i = 0;
    let dataList = document.getElementById("dataList");
    
    while (i < products.length)
    {
        dataList.appendChild(createRow(products[i].name, products[i].price, products[i].name, 0));

        i = i + 1;
    }
}

function loadCheckoutDataGrid() {

    var i = 0;
    let checkoutDataList = document.getElementById("checkoutDataList");
    
    while (i < products.length)
    {
        //let amountId = document.getElementById(products[i].name)
        // amountId.innerHTML = amount
        checkoutDataList.appendChild(createCheckoutRow(products[i].name, products[i].price,amount, 0));

        i = i + 1;
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