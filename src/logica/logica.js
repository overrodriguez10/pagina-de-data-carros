const vistaInicio = document.getElementById("vista-inicio");
const vistaDetalle = document.getElementById("vista-detalle");

const nombre = document.getElementById("val-nombre");
const marca = document.getElementById("val-marca");
const anio = document.getElementById("val-anio");
const precio = document.getElementById("val-precio");
const color = document.getElementById("val-color");
const potencia = document.getElementById("val-potencia");
const velocidad = document.getElementById("val-velocidad");
const combustible = document.getElementById("val-combustible");

const imagen = document.getElementById("carro-img");
const titulo = document.getElementById("categoria-titulo");

const btnSiguiente = document.getElementById("btn-siguiente");
const btnInicio = document.getElementById("btn-inicio");


const botones = {
    carrera: document.getElementById("btn-carrera"),
    clasico: document.getElementById("btn-clasico"),
    todoterreno: document.getElementById("btn-todoterreno"),
    deportivo: document.getElementById("btn-deportivo"),
    lujo: document.getElementById("btn-lujo"),
    familiar: document.getElementById("btn-familiar"),
    electrico: document.getElementById("btn-electrico")
};

let listaCarros = [];
let indiceActual = 0;


function cargarCategoria(tipo){

    fetch(`https://api-carros-y4vh.onrender.com/carros/tipo/${tipo}`)
    .then(res => res.json())
    .then(data => {

        listaCarros = data;
        indiceActual = 0;

        titulo.textContent = tipo.charAt(0).toUpperCase() + tipo.slice(1);

        mostrarCarro();

        vistaInicio.style.display = "none";
        vistaDetalle.style.display = "block";
    })
}


for(let tipo in botones){
    botones[tipo].addEventListener("click", function(){
        cargarCategoria(tipo);
    });
}


btnSiguiente.addEventListener("click", function(){

    indiceActual++;

    if(indiceActual >= listaCarros.length){
        indiceActual = 0;
    }

    mostrarCarro();
});


function mostrarCarro(){

    let carro = listaCarros[indiceActual];

    nombre.textContent = carro.nombre;
    marca.textContent = carro.marca;
    anio.textContent = carro.año;
    precio.textContent = carro.precio;
    color.textContent = carro.color;
    potencia.textContent = carro.potencia;
    velocidad.textContent = carro.velocidadMax;
    combustible.textContent = carro.combustible;

    imagen.src = carro.imagen;
}


btnInicio.addEventListener("click", function(){
    vistaDetalle.style.display = "none";
    vistaInicio.style.display = "block";
});