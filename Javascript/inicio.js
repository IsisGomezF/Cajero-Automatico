//Pagina de inicio personalizada
const userName = document.getElementById("userName");//vinculacion espacio nombre

const nombre = localStorage.getItem('name');
    if (nombre !== null && nombre !== undefined) {
    userName.textContent = `${nombre}`; // insercion nombre personalizado
}

//Consulta saldo
const consulta = document.getElementById("balanceButtom");//vinculacion botom consulta saldo
const showBalance = document.getElementById("balanceSpace"); // vinculacion espacio muestra saldo

consulta.addEventListener("click", saldo); // muestra el saldo del cliente

function saldo (){
    const saldo = localStorage.getItem('saldo');
    if (saldo !== null && saldo !== undefined) {
    showBalance.textContent = "$" + ` ${saldo}`; // insercion saldo
}
}



//Interaccion con las opciones añadir o retirar
const options = document.getElementById("options"); // vincula campo de opciones
const añadir = document.getElementById("add"); // vincular botones de opciones
const retirar = document.getElementById("less");// vincular botones de opciones
const transferir = document.getElementById("transfer");
const pagar = document.getElementById("pay");


añadir.addEventListener("click", function() {
    loaderAndRedirect({ url: '../pages/añadir.html' });
})

retirar.addEventListener("click", function() {
    loaderAndRedirect({ url: '../pages/retirar.html' });
})

/*añadir.addEventListener("click", function() {
    loaderAndRedirect({ url: '../pages/añadir.html' });
})

añadir.addEventListener("click", function() {
    loaderAndRedirect({ url: '../pages/añadir.html' });
})*/


// Redirecionar

function loaderAndRedirect({ url }) {
    showLoader(); // Muestra el loader al cargar la pág
    setTimeout(() => {
        hideLoader(); // Oculta el loader
        options.click(); // Cuando hace click sobre opciones
        window.location.href = url; // Redirige a la página correspondiente
    }, 3000);
}

//Loader 
function showLoader() {
    document.querySelector('#loader').classList.remove('d-none');
    document.querySelector('#loader').classList.add('overlay');
}

function hideLoader() {
    document.querySelector('#loader').classList.add('d-none');
}

//Salida segura
const salida = document.getElementById("close")

function out (){
    localStorage.removeItem('name');//Borra el name
    localStorage.removeItem('saldo');//Borra el saldo
    window.location.href = '../style/index.html';
};

salida.addEventListener("click", out);