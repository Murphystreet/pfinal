// Función para mostrar errores en la página con temporizador
const mostrarErrorEnPagina = (mensaje) => {
    const mensajeDiv = document.getElementById("mensaje");
    mensajeDiv.innerText = mensaje;
    mensajeDiv.style.display = "block";
  
    // Ocultar el mensaje después de 3 segundos
    setTimeout(() => {
      mensajeDiv.style.display = "none";
    }, 3000);
  };
  
  // Función para ocultar el mensaje de error en la página
  const ocultarErrorEnPagina = () => {
    const mensajeDiv = document.getElementById("mensaje");
    mensajeDiv.style.display = "none";
  };
  
  // Validación en tiempo real para el campo de usuario
  const validarUsuario = () => {
    const usuarioInput = document.getElementById("username");
    const usuarioValue = usuarioInput.value.trim();
  
    if (usuarioValue === "") {
      mostrarErrorEnPagina("Ingrese un usuario válido");
      return false;
    }
  
    ocultarErrorEnPagina();
    return true;
  };
  
  // Validación en tiempo real para el campo de contraseña
  const validarContraseña = () => {
    const contraseñaInput = document.getElementById("password");
    const contraseñaValue = contraseñaInput.value.trim();
  
    if (contraseñaValue === "") {
      mostrarErrorEnPagina("Ingrese una contraseña válida");
      return false;
    }
  
    ocultarErrorEnPagina();
    return true;
  };
  
  // Función para validar el campo de rol
  const validarRol = () => {
    const rolSelect = document.getElementById("role");
    const rolValue = rolSelect.value;
  
    if (rolValue === "") {
      mostrarErrorEnPagina("Seleccione un rol");
      return false;
    }
  
    ocultarErrorEnPagina();
    return true;
  };
  
  // Función para manejar el envío del formulario
  const mostrarMensaje = (event) => {
    event.preventDefault();
  
    // Validar usuario, contraseña y rol antes de intentar cargar las credenciales
    if (!validarUsuario() || !validarContraseña() || !validarRol()) {
      return;
    }
  
    const usuarioValue = document.getElementById("username").value.trim();
    const contraseñaValue = document.getElementById("password").value.trim();
    const rolValue = document.getElementById("role").value;
  
    // Aquí permitimos cualquier usuario y contraseña
    // Guardar las credenciales en localStorage
    localStorage.setItem('username', usuarioValue);
    localStorage.setItem('role', rolValue);
  
    // Redirigir a la página correspondiente según el rol
    switch (rolValue) {
      case "admin":
        window.location.href = "../html/admin.html";
        break;
      case "rector":
        window.location.href = "../html/rector.html";
        break;
      case "docente":
        window.location.href = "../html/docente.html";
        break;
      case "estudiante":
        window.location.href = "../html/estudiante.html";
        break;
      default:
        mostrarErrorEnPagina("Rol no válido");
    }
  };
  
  // Agregar eventos para la validación en tiempo real
  document.getElementById("username").addEventListener("input", validarUsuario);
  document.getElementById("password").addEventListener("input", validarContraseña);
  document.getElementById("role").addEventListener("change", validarRol);
  
  // Agregar evento al formulario
  document.getElementById("loginForm").addEventListener("submit", mostrarMensaje);
  