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
//const transferir = document.getElementById("transfer");
//const pagar = document.getElementById("pay");
const inicio = document.getElementById("home");

inicio.addEventListener("click", function() {
    loaderAndRedirect({ url: '../pages/inicio.html' });
})


//Consulta saldo
const consulta = document.getElementById("balanceButtom");//vinculacion botom consulta saldo
const showBalance = document.getElementById("balanceSpace"); // vinculacion espacio muestra saldo

consulta.addEventListener("click", saldo); // muestra el saldo del cliente

function saldo (){
    const balance = localStorage.getItem('saldo');
    if (balance !== null && balance !== undefined) {
    showBalance.textContent = "$" + ` ${balance}`; // insercion saldo en card de consulta saldo
    }
    return parseFloat(balance);
}


//Operacion
const confirmar = document.getElementById("introduceAmount"); //vincular boton del formulario
const maxBalance = 990;
const minBalance = 10;

confirmar.addEventListener("submit", function(event){
    event.preventDefault(); //previene que se actualice el formulario
    validate ();
});

function validate () {
    //event.preventDefault(); //previene que se actualice el formulario
    const amount = document.getElementById("amount").value; //traer monto de la transaccion
    const monto = parseFloat(amount); // lo convierte en numero
    const add = saldo + monto; // operacion
    if (add < maxBalance /*&& saldo - amount >= topeMin*/) { //validacion
        //const x = add;//para almacenar el saldo
        alert("Transacción exitosa");
    } else {
        alert(" Transaccion errada. Excede los topes autorizados para la cuenta");
    }
}



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