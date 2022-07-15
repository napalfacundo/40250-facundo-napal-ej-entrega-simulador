let listLink = [];
let option = '';

init();

function init() {
do {
    menu();
    if (option && option === "i") {
      addLink();
    } else if (option === "ls") {
      showListLink();
    } else alert("Ingrese una opcion valida");
  } while (option !== 'q')
}


// Helpers

function menu() {
  option = prompt(`Elija una opcion:
    i = ingresar
    ls = listar
    q = salir`);

    return option
}

function addLink() {
  let newLink = prompt("Ingrese link: ");
  listLink.push(newLink);
  alert(`Ud. ingresó el siguiente link: ${newLink}`);

  let keepAdding = confirm("Desea ingresar otro link?");
  keepAdding ? addLink() : init();
}

function showListLink() {
  alert(
    "La lista de links al momento contiene:\n**************************************\n" +
      listLink.join("\n")
  );
  init();
}
