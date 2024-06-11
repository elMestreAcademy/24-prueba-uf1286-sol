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
    var temporal = "";
    array.forEach(function (elemento) {
      var formatedElemento = (" " + elemento).slice(-2);
      temporal += ("<td>" + elemento + "</td>")
    });
    console.log("|");

    return temporal
  }


  document.getElementById("table").innerHTML += "<tr>";
  arrayBidimensional.forEach(function (array) {
    document.getElementById("table").innerHTML += "<tr>";
    document.getElementById("table").innerHTML += mostrarArray(array); 
    document.getElementById("table").innerHTML += "</tr>";

  });
  document.getElementById("table").innerHTML += "</tr>";
}

mostrarArrayBidimensional(generarArrayBidimensional());
