const accounts = [
    { name: "Josefa", password: 1234, saldo:100},
    { name: "Cleto", password: "1234", saldo: 359},
    { name: "Estrella", password: "1234", saldo: 39},
    { name: "Chepe", password:"1234", saldo: 200},
];

const saldoInicial = accounts.find (accounts.saldo); // No estoy segura de la forma de recorre el arreglo
const topeMax = 990
const topeMin = 10

//Interaccion con las opciones añadir o retirar
const monto = document.getElementById("amount").value;//traer monto de la transaccion
const add = document.getElementById("add"); // vincular botones de opciones
const less = document.getElementById("less");// vincular botones de opciones

function añadir () {
    add.addEventListener("click", function(add){ //deberia tener una nueva variable con el nuevo saldo?
    const saldoNuevo = saldo + monto 
    return add (saldoNuevo)
    } )
}

function retirar () {
    less.addEventListener("click", function (less){
        const saldoNuevo = saldo - monto
        return less (saldoNuevo)
    } )
}

//Interaccion con boton confirmar

const confirmar = document.getElementById("introduceAmount"); //vincular boton del formulario

confirmar.addEventListener("submit", function(confirmar)){//tener en cuenta boton cancelar
    confirmar.preventDefault ();
    if(añadir.addEventListener("click")){
        

    }else if (retirar.addEventListener("click")){

    }
    else{

    }
}



//Interaccion con boton consultar saldo


/*function validate (){
    if( saldo < topeMax){ //podria decirle que guarde el valor en un arreglo manteniendo el signo

    }
}*/


/*const options = document.getElementById("options");

options.addEventListener("submit", function(transation){

}
)*/

/*function add (add){
    return add (saldoInicial + monto)
}*/

/*function less (less){
    return less (saldoInicial - monto)
}*/





