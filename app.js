// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    //console.log(nombreAmigo);

    if(nombreAmigo === ''){
        alert('Agregue un nombre válido');
    }else{
        amigos.push(nombreAmigo);
        document.getElementById('amigo').value = '';
        console.log(amigos);
        actualizarListaAmigos(nombreAmigo);
    }
}


function actualizarListaAmigos(nombreAmigo){
    let listaAmigos = document.getElementById('listaAmigos');
    const li = document.createElement('li');
    li.textContent = nombreAmigo;
    listaAmigos.appendChild(li);
}

function sortearAmigo(){
    if (amigos.length == 0){
        alert('No se agregó ningún amigo');
    }
    else{
        let indiceAleatorio = generarNumeroAleatorio();
        console.log(indiceAleatorio);
        console.log(amigos[indiceAleatorio]);
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = 'tu amigo secreto aleatorio es:' + amigos[indiceAleatorio];
        borrarListaAmigos();
    }
}

function generarNumeroAleatorio(){
    return Math.floor(Math.random() * amigos.length);
}

function borrarListaAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos = [];
}

