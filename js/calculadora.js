var cifra = "";
var acumulado = 0;

function calculadora(boton) {

  var nodos = document.getElementsByClassName('display');
  var nodo = nodos[0].firstChild;

  switch(boton) {
    case 'C':
      // En el caso de pulsar en limpiar, deja en blanco el display.
      nodo.nodeValue = "";
      break;

    case '=':
      // Esta variable va a guardar el resultado de la operación en pantalla.
      var resultado = eval(nodo.nodeValue);
      
      // Y aquí vamos a mostrarlo en el display.
      nodo.nodeValue = resultado;
      break;

    default:
      // De lo contrario, va a recoger los números que vayamos pulsando.
      nodo.nodeValue = nodo.nodeValue + boton;
      break;
  }
}