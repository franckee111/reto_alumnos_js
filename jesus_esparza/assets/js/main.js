alert("Bienvenido a mi pagina");

var nombre = prompt("Ingrese su nombre");
var apellido = prompt("Ingrese sus apellidos");

alert("Su nombre es: " + nombre + " " + apellido);

var number,a = prompt("Ingrese el primer valor: ");
var number,b = prompt("Ingrese el segundo valor: ");
var password = "AgrRkeTz";

function funcionSuma(numero1, numero2) {
    return (numero1 + numero2);
}

function funcionResta(numero1, numero2) {
    return numero1 - numero2;
}

alert("La suma es " + funcionSuma(a, b));
alert("La resta es " + funcionResta(a, b));
