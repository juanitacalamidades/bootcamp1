/*Crear un programa que muestre el valor de sumar todos 
los números desde 1 hasta el número que introduzca el usuario. 
Por ejemplo si introduce el 8 debería mostrar 36 (1 + 2+ 3+ 4+ 5+ 6+ 7+ 8). */

let numero = parseInt(window.prompt("Escribe un número"));
let suma = 0;


for(let i = 0; i<=numero; i++){
   suma += i;

}
window.alert("La suma de los anteriores es " + suma);


