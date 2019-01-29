var products = [];

//var names = [];

// students.forEach(student => {
//     names.push(student.name);
// });

// function calculateAverage(){

//     var average = 0;
//     students.forEach(student => {
//         average = average + student.score;
//     });
//     average = average / students.length;

//     return average;
// }


var amount = 0

function sumAmount(){
    amount=amount+1
}

function loadDataGrid() {

    var i = 0;
    let dataList = document.getElementById("dataList");
    
    while (i < products.length)
    {
        var listItem = document.createElement("section");
        listItem.classList.add("row");

        var name = document.createElement("div");
        name.classList.add("col-sm");
        name.innerText =  products[i].name;

        var price = document.createElement("div");
        price.classList.add("col-sm");
        price.classList.add("max-width:25%");
        price.innerText =  products[i].price;

        // var buttons = document.createElement("div");
       
        // buttons.classList.add("col-sm");

        // var buttonAdd = document.createElement("button");
        // buttonAdd.classList.add("btn","btn-dark");
        // buttonAdd.classList.add("onclick","loadDataGrid()");
        // buttonAdd.innerText =  "Add";

        // var buttonRem = document.createElement("button");
        // buttonRem.classList.add("btn","btn-dark");
        // buttonRem.classList.add("onclick","loadDataGrid()");
        // buttonRem.innerText =  "Rem";

        var buttonAdd = document.createElement("div");
        buttonAdd.classList.add("id",products[i].name)
        buttonAdd.classList.add("col-sm");
        buttonAdd.classList.add("button");
        buttonAdd.classList.add("btn","btn-dark");
        buttonAdd.classList.add("cargar_pagina()");
        buttonAdd.innerText =  "Add to cart";

        // var buttonRem = document.createElement("div");
        // buttonRem.classList.add("col-sm");
        // buttonRem.classList.add("button");
        // //buttonRem.classList.add("btn","btn-dark");
        // buttonRem.classList.add("onclick","loadDataGrid()");
        // buttonRem.innerText =  "Rem";

        var counter = document.createElement("div");
        counter.classList.add("col-sm");
        counter.innerText =  amount;

        console.log(products[i]);

        dataList.appendChild(listItem);

        listItem.appendChild(name);
        listItem.appendChild(price);
        // listItem.appendChild(buttons);
        listItem.appendChild(buttonAdd);
        //listItem.appendChild(buttonRem);
        listItem.appendChild(counter);

        i = i + 1; // Alternatively, use i++;

        // Other ways:
        // i += 2;
        // i += 3;
    }
}

// function displayAverage()
// {
//     var resultSection = document.getElementById("resultSection");
//     var paragraph = document.createElement("p");
//     paragraph.classList.add("badge"); // 2) Bootstrap classes
//     paragraph.classList.add("badge-info");

//     paragraph.innerText = "Average: " + calculateAverage();
    
//     resultSection.appendChild(paragraph);
// }

// function refreshScores(){
//     let dataList = document.getElementById("dataList");

//     while (dataList.childElementCount > 1){
//         dataList.removeChild(dataList.lastChild);
//     }
//     loadDataGrid();
// }

// function myReplacer(name, val) {
//     if (typeof val === 'string') {
//         return val.toString().toUpperCase();  
//      } else {
//         return val; // return as is
//     }
// };

// Old-way of loading data (ol). No longer used
// function loadData(){

//     var i = 0;
//     let dataList = document.getElementById("dataList");
    
//     while (i < students.length)
//     {
//         var listItem = document.createElement("li");
        
//         console.log(students[i]);
//         listItem.innerText = students[i].name;

//         dataList.appendChild(listItem);
//         i = i + 1; // Alternatively, use i++;

//         // Other ways:
//         // i += 2;
//         // i += 3;
//     }
// }

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