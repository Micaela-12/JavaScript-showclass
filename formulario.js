/* presentacion */

class Persona {
  constructor(nombre, funcion) {
    this.nombre = nombre;
    this.funcion = funcion;
  }
};
const Persona1 = new Persona("Mica", "asistente virtual");
alert(`Hola soy` + " " + Persona1.nombre + " " + `tu` + " " + Persona1.funcion + " " + `voy a estar haciendote unas preguntas para completar este formulario de contratacion!`);
/* tipo de evento que se realizara */

Swal.fire("Bienvenido al formulario");


function preguntarEvento() {
  let evento = prompt("Empecemos,¿Que evento se realizara?");
  console.log(evento);

  switch (evento) {
    case "casamiento":
      alert("Buenisimo el evento sera un casamiento")
      break;
    case "15":
      alert("Buenisimo el evento sera un 15")
      break;
    case "coorporativo":
      alert("Buenisimo el evento sera un coorporativo")
      break;
    case "cumpleaños":
      alert("Buenisimo el evento sera un cumpleaños")
      break;
    default:
      alert(`Buenisimo el evento sera` + " " + evento);
      break;
  };
}
preguntarEvento()

/* preguntas de formulario */

function enviar() {
  var nombreFomulario = document.getElementById("nombreFormulario").value;
  var fechaFormulario = document.getElementById("fechaFormulario").value;
  var direccionFormulario = document.getElementById("direccionFormulario").value;
  var mailFormulario = document.getElementById("mailFormulario").value;
  var horarioFormulario = document.getElementById("horarioFormulario").value;
  var numeroFormulario = document.getElementById("numeroFormulario").value;

  console.log(nombreFomulario + fechaFormulario + direccionFormulario + mailFormulario + showFormulario + horarioFormulario + numeroFormulario);
  
  Swal.fire({
    title: '¿Deseas enviar el formulario?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'si',
    denyButtonText: `no`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Formulario enviado, nos comunicamos a la brevedad con vos al"+ " " + numeroFormulario)
    } else if (result.isDenied) {
      Swal.fire("Formulario no enviado", '', 'info')
    }
  })
};
function chequear() {
  var showFormulario = document.getElementById("showFormulario").value;
  if (showFormulario != "") {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Show disponible',
      showConfirmButton: false,
      timer: 1500
    })
  } else {
    if (showFormulario == "") {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'No encontramos el show que deseas',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
  console.log(showFormulario);
}
function si() {
  const showsDisponibles = ["robotLed", "batucada", "show Mixer", "cantantes", "bailarines"];
  const copiaShows = showsDisponibles.slice(1, 4);
  copiaShows.push("entradas especiales, bailarines");
  Swal.fire({
    title: '¿Como deseas la propuesta?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'simple',
    denyButtonText: `completa`,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Nuetra sugerencia para tu evento son estos shows:" + " " + showsDisponibles)
    } else if (result.isDenied) {
      Swal.fire("tenemos una propuesta mas completa, tambien:" + " " + copiaShows)
    }
  })
};
/* shows de showclass */
const productos = [
  { nombre: `robotLed`, precio: 7500 },
  { nombre: `batucada`, precio: 19000 },
  { nombre: `Show Mixer`, precio: 32000 },
  { nombre: `cantante`, precio: 20000 },
  { nombre: `entrada epeciales`, precio: 22000 },
  { nombre: `bailarines`, precio: 20000 },
];