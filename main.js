function randInt(max) {
  return Math.floor(Math.random() * max + 1);
}

function generarArrayBidimensional() {
  function generarArray() {
    return [randInt(10), randInt(10), randInt(10)];
  }

  var array = [];
  for (i = randInt(4); i < 10; i++) {
    array.push(generarArray());
  }
  return array;
}

function mostrarArrayBidimensional(arrayBidimensional) {
  function mostrarArray(array) {
    array.forEach(function (elemento) {
      var formatedElemento = (" " + elemento).slice(-2);
      process.stdout.write(`| ${formatedElemento} `);
    });
    console.log("|");
  }

  function mostrarLinea() {
    for (var i = 0; i < 15; i++) {
      process.stdout.write("-");
    }
    console.log("-");
  }

  mostrarLinea();
  arrayBidimensional.forEach(function (array) {
    mostrarArray(array);
    mostrarLinea();
  });
}

mostrarArrayBidimensional(generarArrayBidimensional());
