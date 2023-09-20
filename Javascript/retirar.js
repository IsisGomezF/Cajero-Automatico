//Pagina de inicio personalizada
const userName = document.getElementById("userName");//vinculacion espacio nombre

const nombre = localStorage.getItem('name');
    if (nombre !== null && nombre !== undefined) {
    userName.textContent = `${nombre}`;
}

//Interaccion con las opciones añadir o retirar
const options = document.getElementById("options"); // vincula campo de opciones
const añadir = document.getElementById("add"); // vincular botones de opciones
const retirar = document.getElementById("less");// vincular botones de opciones
const transferir = document.getElementById("transfer");
const pagar = document.getElementById("pay");
const inicio = document.getElementById("home");



inicio.addEventListener("click", function() {
    loaderAndRedirect({ url: '../pages/inicio.html' });
})




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