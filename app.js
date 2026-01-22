
const formulario = document.querySelector("#formulario");
const mensajes = document.querySelector("#mensajes");
const nombreInput = document.querySelector("#nombre");
const apellidosInput = document.querySelector("#apellidos");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const password2Input = document.querySelector("#password2");
const edadInput = document.querySelector("#edad");
const condicionesInput = document.querySelector("#condiciones");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();


    let errores = [];
    mensajes.innerHTML = "";
    mensajes.className = "mensajes";


    const nombre = nombreInput.value.trim();
    const apellidos = apellidosInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const password2 = password2Input.value;
    const edad = parseInt(edadInput.value);


    if (nombre.length < 3) {
        errores.push("El nombre debe tener al menos 3 caracteres.");
    }
    if (apellidos.length < 3) {
        errores.push("Los apellidos deben tener al menos 3 caracteres.");
    }


    const arroba = email.indexOf("@");
    const punto = email.lastIndexOf(".");
    if (arroba === -1 || punto === -1 || punto < arroba) {
        errores.push("El email no es válido (debe contener @ y un punto posterior).");
    }


    if (password.length < 6) {
        errores.push("La contraseña debe tener al menos 6 caracteres.");
    }
    if (password !== password2) {
        errores.push("Las contraseñas no coinciden.");
    }


    if (edad < 0 || edad > 120) {
        errores.push("La edad debe estar entre 0 y 120");
    }


    if (!condicionesInput.checked) {
        errores.push("Acepta las condiciones para continuar");
    }


    if (errores.length > 0) {

        mensajes.className = "mensajes err";
        mensajes.innerHTML = `<ul>${errores.map(errores => `<li>${errores}</li>`)}</ul>`;
    } else {

        mensajes.className = "mensajes validos";
        mensajes.textContent = "Formulario enviado";

    }
});