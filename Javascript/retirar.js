//Pagina de inicio personalizada
const userName = document.getElementById("userName");//Trae el nombre al espacion asignado

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

function saldo () {
    const balance = localStorage.getItem('saldo');
    if (balance !== null && balance !== undefined) {
    showBalance.textContent = "$" + ` ${balance}`; // insercion saldo en card de consulta saldo
    }
    return parseFloat(balance);
}

consulta.addEventListener("click", saldo); // muestra el saldo del cliente

//Operacion
const confirmar = document.getElementById("introduceAmount"); //vincular boton del formulario
const maxBalance = 990;
const minBalance = 10;

confirmar.addEventListener("submit", function(event){
    event.preventDefault(); //previene que se actualice el formulario
    validate ();
});

function validate () {
    const amount = document.getElementById("amount").value; //traer monto de la transaccion
    const monto = parseFloat(amount); // lo convierte en numero
    const balanceInit = saldo ()
    const less = balanceInit - monto; // operacion
    if (less > minBalance /*&& saldo - amount >= topeMin*/) { //validacion
        // Actualiza el nuevo saldo en el localStorage si es necesario
        localStorage.setItem("saldo", less.toString());
        // Actualiza el saldo mostrado en la página
        saldo();
        alert("Transacción exitosa. Se retiraron $" + amount + " a la cuenta.");
    } else {
        alert("Transaccion declinada. El saldo de la cuenta no puede ser inferior a $" + minBalance);
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

//Salida segura
const salida = document.getElementById("close")

function out (){
    localStorage.removeItem('name');//Borra el name
    localStorage.removeItem('saldo');//Borra el saldo
    window.location.href = '../style/index.html';
};

salida.addEventListener("click", out);