const API_SEARCH = "https://images-api.nasa.gov/search?q="; 

let btn = document.getElementById("btnBuscar")

//Función para barra navegación
const buscador = document.getElementById('inputBuscar');
const contenedor = document.getElementById('contenedor');

btn.addEventListener('click', () => {
  let searchText = buscador.value.toLowerCase();
    fetch(API_SEARCH+searchText)
  .then(response => response.json())
  .then(data => {
    showNasaList(data.collection)})  
});





function showNasaList(array){
    let info = array.items;
    let htmlContentToAppend = "";

    for(let i = 0; i < info.length; i++){ 
        let  article = info[i];
        htmlContentToAppend += 
        `<div class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col-3">
                <img src=" ${article.links[0].href} " alt="product image" class="img-thumbnail">
            </div>
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <div class="mb-1">
                    <h4>`+ article.data[0].title +`</h4>
                    <p> `+ article.data[0].description +`</p> 
                    </div>
                    <small class="text-muted">` + article.data[0].date_created + ` artículos</small> 
                </div>
            </div>
        </div>
    </div>
    `
        
        contenedor.innerHTML = htmlContentToAppend; 
    }
}


/* let getJSONData = function(url){
    let result = {};
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response;
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        return result;
    });
 */