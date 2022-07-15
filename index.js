let listLink = [];
menu();

function menu() {
  let option = prompt(`Elija una opcion:
        i = ingresar
        ls = listar
        q = salir`);

  while (option !== "q") {
    if (option && option === "i") {
      addLink();
    } else if (option === "ls") {
      showListLink();
    } else alert("Ingrese una opcion valida");
    menu();
  }
}

function addLink() {
  let newLink = prompt("Ingrese link: ");
  listLink.push(newLink);
  alert(`Ud. ingresó el siguiente link: ${newLink}`);

  let keepAdding = confirm("Desea ingresar otro link?");
  keepAdding ? addLink() : menu();
}

function showListLink() {
  alert(
    "La lista de links al momento contiene:\n**************************************\n" +
      listLink.join("\n")
  );
  menu();
}
