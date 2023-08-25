
let[boton] = $('#boton'); //Extraer el botón de html por destucturing:
let[search] = $('#search'); //Extraer el botón de html por destructuring;
let[deleteBoton] = $('#delete') // Destructuring del boton <button id='delete'>Delete</button>
let url = 'http://localhost:5000/amigos';//se guarda en una variable la url pq se repite en varios lugares.

let listaAmigos = (response) => {
    let [lista] = $('#lista') //extraer el id de  <ul id='lista'>
    lista.innerText = "" //Limpiar la lista, similar a empty.

    response.forEach((amigo) => { //recorrer cada amigo con for each. Response es un array
    const nuevaLista = document.createElement('li')  // crear una li por cada amigo
    nuevaLista.textContent = amigo.name; // Agregar el nombre de los amigos
    lista.appendChild(nuevaLista); // A la lista agregamos nuevaLista 
    
});
}
//Nota: limpiar la lista cuando se vuelva a hacer click en el botón ver amigos.
let mostrarAmigos = () => {
    $('#lista').empty(); // frena que se duplique la lista de amigos, con empty(método) se debe aplicar directamente el Jquery

    $.get(url, listaAmigos) //se hace la petición.
}
let buscarAmigo = () => {
    let [input] = $('#input')//extraer el input
    let id = input.value //accedo a lo que se escriba en el recuadro a lado del botón buscar y es un número
    input.value = "";

    $.get(`${url}/${id}`, (response)=>  {//Si le paso una constante usar backticks. Concateno la barra y el número del id. En este caso response es un objeto.
        let [amigo] = $('#amigo'); //Necesito extraer amigo para acceder a sus propiedas 
        amigo.innerHTML = response.name // inserta el nombre del amigo.

    })
    }
    let deleteAmigo = () => {
        let [inputDelete] = $('#inputDelete');
        let id = inputDelete.value //Accedo al valor de lo q se escriba: 1, 2, 3 etc.


        $.ajax({
                type: 'DELETE',
                url: `${url}/${id}`,
                succes: (response) => listaAmigos(response)
            })
        
        }

boton.addEventListener('click', mostrarAmigos) //se hace click y se llama a mostrar amigos.
search.addEventListener('click', buscarAmigo)//El callback busca un amigo
deleteBoton.addEventListener('click', deleteAmigo)//El callback borra un amigo

//TAREA 1. Extraer el botón de ver amigos
 //TAREA 2. Primero necesito al botón search
 //TAREA 3. Primero necesito el botón delete

 //Ordenando el código.
 // 1. CONSTANTES
 // 2. FUNCIONES
 // 3. EVENTOS