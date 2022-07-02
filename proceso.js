let decimal = parseFloat(prompt("Ingrese el numero decimal"))

//DECIMAL A BINARIO
let decimalBinario = decimal.toString(2);
document.write("El numero Binario es: " + decimalBinario  + "<br>" + "<hr>");

//DECIMAL A OCTAL
let decimalOctal = decimal.toString(8);
document.write("El numero octal es: " + decimalOctal  + "<br>" + "<hr>");

//DECIMAL A OCTAL
let decimaHexa = decimal.toString(16);
document.write("El numero Hexa es: " + decimaHexa  + "<br>" + "<hr>");