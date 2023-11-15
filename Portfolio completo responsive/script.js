//Funcion que selecciona y quita la previamente seleccionada
function seleccionar(link) {
  // Obtén todos los elementos <a> dentro del elemento con ID "links"
  var opciones = document.getElementById("links").getElementsByTagName("a");

  // Desselecciona previamente seleccionados
  for (var i = 0; i < opciones.length; i++) {
    opciones[i].className = "";
  }

  // Selecciona el enlace específico pasado como parámetro
  link.className = "seleccionado";

  // Oculta el menú responsive una vez que se ha seleccionado una opción
  var x = document.getElementById("nav");
  x.className = "";
}
//Funcion que muestra el menu responsive
function responsiveMenu() {
  let x = document.getElementById("nav");
  if (x.className === "") {
    x.className = "responsive";
  } else {
    x.className = "";
  }
}

//Validacion formulario
function validarFormulario() {
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var tema = document.getElementById("tema").value;
  var mensaje = document.getElementById("mensaje").value;
  var warningsContainer = document.getElementById("warnings");
  var successContainer = document.getElementById("success");

  // Limpiar mensajes anteriores
  warningsContainer.innerHTML = "";
  successContainer.innerHTML = "";

  // Validación de longitud mínima del nombre (por ejemplo, al menos 3 caracteres)
  if (nombre.length < 3) {
    mostrarAdvertencia("Nombre debe tener al menos 3 caracteres");
    return false;
  }

  // Validación de la estructura del correo electrónico
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    mostrarAdvertencia("Dirección de correo electrónico no válida");
    return false;
  }

  // Aquí puedes agregar más validaciones según tus necesidades
  if (nombre === "" || tema === "" || mensaje === "") {
    mostrarAdvertencia("Todos los campos son obligatorios");
    return false; // Evita que el formulario se envíe si hay campos vacíos
  }

  // Puedes agregar más validaciones según tus necesidades

  // Simulamos el envío exitoso del formulario
  mostrarExito("¡Mensaje enviado con éxito!");

  return false; // Cambia a true si quieres permitir el envío real del formulario
}

function mostrarAdvertencia(mensaje) {
  var warningElement = document.createElement("div");
  warningElement.className = "error-message";
  warningElement.textContent = mensaje;
  document.getElementById("warnings").appendChild(warningElement);
}

function mostrarExito(mensaje) {
  var successElement = document.createElement("div");
  successElement.className = "success-message";
  successElement.textContent = mensaje;
  document.getElementById("success").appendChild(successElement);
}

//animacion de las barras
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", animateBars);
  animateBars(); // Anima las barras cuando se carga la página

  function animateBars() {
    const skillsContainer = document.getElementById("skills");
    const skillsPosition = skillsContainer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (skillsPosition < windowHeight * 0.50) {
      // Si el contenedor de habilidades está en 50% de la ventana visible, anima las barras
      animateBar("html", 95);
      animateBar("js", 90);
      animateBar("ps", 80);
    }
  }

  function animateBar(barId, percentage) {
    const barElement = document.getElementById(barId);
    barElement.style.width = percentage + "%";
  }
});
