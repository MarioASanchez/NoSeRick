document.querySelector("#formulario").addEventListener("submit",(ev)=> {
    ev.preventDefault();
    
    let nombre = document.querySelector("#nombre").value;
    //URL Search Params
    const url = new URL("https://rickandmortyapi.com/api/character");
    url.searchParams.set("name",nombre);

    fetch(url)
        .then(datatype=>datatype.json())
        .then(response => {
             console.log(response.results);
             let salida = "";
                            
             for (const elemento of response.results) {
                salida += `<div>
                <h2>${elemento.name}</h2>
                <h3>${elemento.status}</h3>
                <h4>${elemento.species}</h4>
                <img src="${elemento.image}">
                </div>`;
             }
             document.querySelector("#pintar").innerHTML = salida;

         });
});