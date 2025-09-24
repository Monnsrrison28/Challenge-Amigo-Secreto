let amigos = [];
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();
  if (nombre === "") {
    alert("Favor de no dejar campos vacios.");
    return;
  }
  amigos.push(nombre);
  const lista = document.getElementById("listaAmigos");
  const li = document.createElement("nombreAmigo");
  li.textContent = nombre;
  lista.appendChild(li);

  input.value = "";
}
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No ha introducido ningún nombre.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const ganador = amigos[indiceAleatorio];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  const li = document.createElement("li");
  li.textContent = `El amigo secreto es: ${ganador}`;
  resultado.appendChild(li);
}