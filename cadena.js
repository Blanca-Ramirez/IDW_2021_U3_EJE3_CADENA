function analizarCadena(cadena) {
  var mensaje = "Cadena: " + '"' + cadena + '"' + "\n";

  // ------------/ Palindromo /-----------------------

  // Eliminamos los espacios en blanco
  cadena.replace(/ /g, "");

  // Revisamos si se lee igual de los dos lados

  var nuevaCadena = cadena.toLowerCase().match(/[a-z]/gi).reverse();

  if (nuevaCadena.join("") === nuevaCadena.reverse().join("")) {
    mensaje += "-> La cadena es un palindromo\n";
  } else {
    mensaje += "-> La cadena no es un palindromo\n";
  }

  // ------------/ No. Palabras /-----------------------

  // Quita espacios al inicio y al final
  cadena.replace(/(^\s*)|(\s*$)/gi, "");
  // Quita espacios de más
  cadena.replace(/[ ]{2,}/gi, " ");
  // Excluye los saltos de linea
  cadena.replace(/\n /, "\n");

  mensaje += "-> Palabras: " + cadena.split(" ").length + "\n";

  var numLetras = 0;

  // ------------/ No. Letras /-----------------------

  // Pasa un arreglo de caracteres para validar
  const letras = Array.from(cadena);

  // Recibe el arreglo de caracteres y aumenta el contador si es una letra
  for (let i = 0; i < letras.length; i++) {
    if (letras[i].match(/[a-z]/i)) {
      numLetras++;
    }
  }
  mensaje += "-> Letras: " + numLetras + "\n";

  // ------------/ No. Vocales /-----------------------

  var numVocales = 0;

  // Recibe el arreglo de caracteres y aumenta el contador si es una letra
  for (let i = 0; i < letras.length; i++) {
    if (letras[i].match(/[aeiou]/i)) {
      numVocales++;
    }
  }
  mensaje += "-> Vocales: " + numVocales + "\n";

  // ------------/ No. Consonantes /-----------------------

  var numConsonantes = 0;

  // Recibe el arreglo de caracteres y aumenta el contador si es una letra
  for (let i = 0; i < letras.length; i++) {
    if (letras[i].match(/[a-z]/i)) {
      if (!letras[i].match(/[aeiou]/i)) {
        numConsonantes++;
      }
    }
  }
  mensaje += "-> Consonantes: " + numConsonantes;

  return mensaje;
}

module.exports.analizarCadena = analizarCadena;
