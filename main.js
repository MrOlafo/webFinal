const URL = "https://products-catalog-8e792.firebaseio.com/set-1.json";

fetchData();

function fetchData(){
 
  var request = new XMLHttpRequest();
  request.open('GET', URL, true);

  request.onload = function() {
    const OK = 200;
    
    if (request.status !== OK) {
      document.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
      return;
    }
    var remoteProducts = JSON.parse(request.responseText);

    remoteProducts.forEach(element => {
      products.push(element);
    });
    loadDataGrid();
  };
  request.send();
}
