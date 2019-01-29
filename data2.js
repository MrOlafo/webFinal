var products = [];

function createRow(name, price){
    var section = document.createElement("section");
    section.innerHTML = `<div class="row"><div class="col-md">${name}</div><div class="col-md">${price}</div><div class="col-sm"><button class="btn btn-dark" onclick="loadDataGrid()">Add</button>                                   <button class="btn btn-dark" onclick="loadDataGrid()">Rem</button></div><div class="col-md">Quantity</div> `;
    return section;
}
        
function loadDataGrid() {

    var i = 0;
    let dataList = document.getElementById("dataList");
    
    while (i < products.length)
    {
        dataList.appendChild(createRow(products[i].name, products[i].price));

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