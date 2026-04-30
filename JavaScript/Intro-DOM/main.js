console.log ("HOla mundo desde archivo js");          

let saludo = "Holiiis";
let num = 25;
let num_coma = 6.9;
let existe = true;

console.log ("Variable Saludo" + ": " + saludo + " " + (typeof saludo));
console.log ("Variable Num" + ": " + num + " " + (typeof num));
console.log ("Variable Num Coma" + ": " + num_coma + " " + (typeof num_coma));
console.log ("Variable Existente" + ": " + existe + " " + (typeof existe));

const parrafo = document.getElementById("txt");

parrafo.textContent = "Cambiando texto desde js";

const boton = document.getElementById("btn");
boton.addEventListener("click", () => {
    parrafo.textContent= "Cambiando texto con un boton en Js"
});

document.getElementById("btn-error").addEventListener("click", () => {
    alert("Error 404");
});