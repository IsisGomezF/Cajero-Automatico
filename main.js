const accounts = [
    { name: "Josefa", password: 1234, saldo: 1000000},
    { name: "Cleto", password: "1234", saldo: 356900},
    { name: "Estrella", password: "1234", saldo: 356900},
    { name: "Chepe", password:"1234", saldo: 356900},
];

//Referencia formulario con ID
const loginForm = document.getElementById('loginForm');

//Proceso para validar datos e ingresar a la pagina principal
loginForm.addEventListener('submit', function(event){
    event.preventDefault (); //Previene que se actualice la pagina
    //Validacion de datos
    if(loginForm.checkValidity()){
        if(validateDates(loginForm)){
            alert ("Correcto");
            /*loaderAndRedirect({url:'../inicio.html'});//Redirecciona a la pagina principal*/
        }
        else{
            alert("Usuario o contraseña inválidos");
        }
    }
    else{
        event.stopPropagation(); // Evita que se propague el evento de validación
    }
}
);

//obtener los datos del formulario
const usuario = document.getElementById("name").value;
const clave = document.getElementById("password").value;

//validacion de credenciales
function validateDates (){ // que pasa si no le doy parametros?
    return accounts.some ((accounts) => accounts.name === usuario && accounts.password === clave);
}

//Redirecionar
function loaderAndRedirect({ url }) {
    showLoader(); // Muestra el loader al cargar la página
    setTimeout(() => {
        hideLoader(); // Oculta el loader
        loginForm.submit(); // Envía el formulario si las credenciales son válidas
        window.location.href = url; // Redirige a la página de inicio
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

//Guarda la credencial
function saveToLocalStorage({ userName, userPassword }) {
    const { value: user } = userName;
    const { value: pass } = userPassword;
    const acc = accounts.find(acc => acc.name === usuario && acc.password === clave);

    // Guarda los valores en el almacenamiento local
    for (prop in acc) {
        localStorage.setItem(prop, acc[prop]);
    }
}