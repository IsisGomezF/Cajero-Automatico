const accounts = [
    { name: "Josefa", password: 1234, saldo:100},
    { name: "Cleto", password: "1234", saldo: 359},
    { name: "Estrella", password: "1234", saldo: 39},
    { name: "Chepe", password:"1234", saldo: 200},
];

//Interaccion con las opciones añadir o retirar
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

const options = document.getElementById("options") // vincula campo de opciones

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