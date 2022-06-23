/* reinicio de pagina */
setTimeout(() => {
    sessionStorage.clear()
    window.location.reload()
}, 320000);

/* DOM */
for (const producto of productos) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `
    <p> producto: ${producto.nombre}</p>
    <b> $ ${producto.precio}</b>`;
    document.body.append(contenedor);
}
let titulo = document.getElementById("titulo");
titulo.innerHTML = "Completa el formulario:";
let agregado = document.createElement("titulo");
agregado.innerHTML = "<h3> Muchas gracias! </h3>";
document.body.append(agregado);



/*eventoos */

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target.children[0].value);
});

let input = document.getElementById("fechaFormulario");
input.addEventListener("change", () => {
    console.log("cambiaste");
});

let nombre = document.getElementById("nombreFormulario");
nombre.addEventListener("nombreFormulario", () => {
    let filtro = nombre.value;
    (console.log(nombre.value));
});

/* operadores avenzados */
const showrobot = {
    nombre: "robot led",
    precio: 7500
};
let showrobot2 = {
    ...showrobot, precio: 8000
};
console.log(showrobot2 || "no hay productos");

const and = nombre != "mica" && true
console.log(and);

/* fetch */

document.getElementById('jsonBtn').addEventListener('click', cargarJSON);

function cargarJSON() {
    fetch('data.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let html = '';
            data.forEach(function (salon) {
                html += `
  <li>${salon.nombre}, ${salon.lugar}</li>
  `;
            })
            document.getElementById('resultado').innerHTML = html;
        })

};

/* manejo de JSON*/
document.getElementById('local').addEventListener('click', obtenerLocal);

function obtenerLocal() {
    if (JSON.parse(localStorage.getItem("duracion"))) {
        let duracion = JSON.parse(localStorage.getItem("duracion"));
        console.log(duracion);
        Swal.fire({
            position: 'top-end',
            title: (JSON.stringify(duracion)),
            showConfirmButton: false,
            timer: 1500
        })
    } else {
        console.log("no hay entradas en el local storage");
    }
};
guardar_local();
function guardar_local() {
    let batucada = {
        precioBatu: 7500,
        duracion: "35 minutos",
        accesorios: "cuadro de selfie, bandera gigante"
    }
    localStorage.setItem("duracion", JSON.stringify(batucada));
};