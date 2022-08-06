alert("Bienvenido a mi pagina");

var nombre = prompt("Ingrese su nombre");
var apellido = prompt("Ingrese sus apellidos");

alert("Su nombre es: " + nombre + " " + apellido);

var a = prompt("Ingrese el primer valor: ");
var b = prompt("Ingrese el segundo valor: ");
var password = "AgrRkeTz";

function funcionSuma(numero1, numero2) {
    return Number(numero1) + Number(numero2);
}

function funcionResta(numero1, numero2) {
    return Number(numero1) - Number(numero2);
}

alert("La suma es " + funcionSuma(a, b));
alert("La resta es " + funcionResta(a, b));
