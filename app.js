const nombre = document.querySelector("#nombre").value.trim();
const apellidos = document.querySelector("#apellidos").value.trim();
const edad = document.querySelector("#edad").value.trim();
const email = document.querySelector("#email").value.trim();
const password = document.querySelector("#password").value.trim();
const password2 = document.querySelector("#password2").value.trim();
const formulario = document.querySelector("#formulario");
const mensajes = document.querySelector("#mensajes");
mensajes.className = "error";

let errores = [];

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
});

function validacionNombreApellido(nombreParameter) {
    if (nombreParameter.trim().length < 3) {
        errores.push("El nombre debe tener más de 3 caracteres.")
    };

};


function validacionNombre(validacionNombreApellido(nombre));



let nombre1 = nombre.textContent;
nombre1 = nombre1.trim();
