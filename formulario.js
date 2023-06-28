function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var contrasena = document.getElementById("contrasena").value;
    var confirmarContrasena = document.getElementById("confirmarContrasena").value;
    
    if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
        return false;
    }else if(nombre.length<3){
        alert("El nombre es muy corto.");
        return false;
        }
    
    
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingresa un email válido.");
        return false;
    }
    
    var telefonoRegex = /^\d+$/;
    if (!telefonoRegex.test(telefono)) {
        alert("Por favor, ingresa un teléfono válido.");
        return false;
    }else if(telefono.length<10){
        alert("El telefono es muy corto.");
        return false;
    }
    
    if (contrasena === "") {
        alert("Por favor, ingresa una contraseña.");
        return false;
    }

    if (contrasena.length < 5 ){
        alert("La contraseña es muy corta");
    return false;
    }

    if (contrasena.length > 15 ){
        alert("La contraseña es muy larga");
    return false;
    }
    
    if (contrasena !== confirmarContrasena) {
        alert("Las contraseñas no coinciden.");
        return false;
    }
    
    alert("¡Registro exitoso!");
    return true;
}