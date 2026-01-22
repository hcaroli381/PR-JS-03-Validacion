const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre").value.trim();
const apellidos = document.querySelector("#apellidos").value.trim();
const email = document.querySelector("#email").value.trim();
const password = document.querySelector("#password").value.trim();
const password2 = document.querySelector("#password2").value.trim();
const edad = document.querySelector("#edad").value.trim();
const condiciones = document.querySelector("#condiciones");
const mensajes = document.querySelector("#mensajes");

formulario.addEventListener('submit', function (event) {

    event.preventDefault();
    
    mensajes.innerHTML = "";
    if (nombre.length < 3 || nombre === "") {
        mensajes.innerHTML += "- El nombre debe tener al menos tres caracteres<br>";
    }
    if (apellidos.length < 3 || apellidos === "") {
        apellidos.innerHTML += "- El nombre debe tener al menos tres caracteres<br>";
    }
    if (edad < 0 || edad > 100) {
        mensajes.innerHTML += "-  La edad tiene que estar entre 0 y 100<br>";
    }
    if (password.length < 6) {
        mensajes.innerHTML += "- La contraseña debe tener al menos 6 caracteres<br>";
    }
    if (password !== password2){
        mensajes.innerHTML += "- Las contraseñas no coinciden";
    }
})