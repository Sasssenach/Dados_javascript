//colocando todas las imagenes en un arreglo
const lados = ["./img/lado1.png", "./img/lado2.png", "./img/lado3.png", "./img/lado4.png", "./img/lado5.png", "./img/lado6.png",]

//llamando la funcion del botón para cambiar caras
function cambiarDados() {

    // seteando todas mis variables
    let numaleatorio1 = parseInt(((Math.random() * 6) + 1));
    let numaleatorio2 = parseInt(((Math.random() * 6) + 1));
    let numaleatorio3 = parseInt(((Math.random() * 6) + 1));
    let dado1 = document.getElementById("dado1");
    let dado2 = document.getElementById("dado2");
    let dado3 = document.getElementById("dado3");
    let mostrar = document.getElementById("puntos");


    dado1.src = lados[numaleatorio1 - 1];
    dado2.src = lados[numaleatorio2 - 1];
    dado3.src = lados[numaleatorio3 - 1];

    let sumNumAlt = numaleatorio1 + numaleatorio2 + numaleatorio3;
    mostrar.innerHTML = "Puntos: " + sumNumAlt;

} 
(cambiarDados)();

//funcion cambiar distribucion de dados
function cambiarDistribucion() {
let posicion = document.getElementById("caras");

//por no saber usar la doble igualdad me llevó casi 4 horas ver como cambiar la distribución X'd
if(posicion.style.flexDirection =="row"){
    posicion.style.justifyContent ='center';
    posicion.style.margin ='0px auto';
    posicion.style.flexDirection ='column'; 
}else{
    posicion.style.flexDirection ="row";
    posicion.style.justifyContent ='center';
    
}
};
