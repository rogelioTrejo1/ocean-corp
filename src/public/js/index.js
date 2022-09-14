window.addEventListener("load", cambiaTextoNosotros);

function cambiaTextoNosotros(texto) {
  var t = texto;
  var p = document.getElementById("texto-nosotros");
  var i = document.getElementById("titulo-nosotros");

  switch (t) {
    case "objetivo":
      i.innerHTML = "Estrategia";
      i.className = "azu";
      p.innerHTML =
        "El objetivo estratégico de Ocean es otorgar los servicios tanto de imprenta offset como de imprenta en grandes cantidades de una forma rápida y eficiente, para ello se tendrán dos secciones que se ocuparán de estos dos tipos de servicios con el fin de que el servicio sea eficiente en tiempo y calidad.";
      break;

    case "vision":
      i.innerHTML = "Visión";
      i.className = "ama";
      p.innerHTML =
        "Nuestra visión es que las personas puedan personalizar los objetos cotidianos con la decoración o estampado adaptado a las preferencias y los gustos del cliente. ";
      break;

    case "mision":
      i.innerHTML = "Misión";
      i.className = "ros";
      p.innerHTML =
        "Otorgar a las personas una versión única de sus objetos y ropa, plasmando diseños personalizados, o bien, prediseñados.";
      break;

    default:
      i.innerHTML = "[...]";
      p.innerHTML = "";
      break;
  }
}

document.addEventListener("click", e => {
  if (e.target.classList.contains("cami")) {
    if (document.getElementById("cami").classList.contains("t-t")) {
      document.getElementById("cami").classList.remove("t-t");
      document.getElementById("cami-l").className += " t-t";
      document.getElementById("cami-l").classList.remove("ani-icono-producto");
      document.getElementById("cami").className += " ani-icono-producto";
    } else {
      document.getElementById("cami").className += " t-t";
      document.getElementById("cami").classList.remove("ani-icono-producto");
      document.getElementById("cami-l").className = "cami ani-icono-producto";
    }
  }

  if (e.target.classList.contains("taza")) {
    if (document.getElementById("taza").classList.contains("t-t")) {
        document.getElementById("taza").classList.remove("t-t");
        document.getElementById("taza-l").className += " t-t";
        document.getElementById("taza-l").classList.remove("ani-icono-producto");
        document.getElementById("taza").className += " ani-icono-producto";
      } else {
        document.getElementById("taza").className += " t-t";
        document.getElementById("taza").classList.remove("ani-icono-producto");
        document.getElementById("taza-l").className = "taza ani-icono-producto";
      }
  }

  if (e.target.classList.contains("gorro")) {
    if (document.getElementById("gorro").classList.contains("t-t")) {
        document.getElementById("gorro").classList.remove("t-t");
        document.getElementById("gorro-l").className += " t-t";
        document.getElementById("gorro-l").classList.remove("ani-icono-producto");
        document.getElementById("gorro").className += " ani-icono-producto";
      } else {
        document.getElementById("gorro").className += " t-t";
        document.getElementById("gorro").classList.remove("ani-icono-producto");
        document.getElementById("gorro-l").className = "gorro ani-icono-producto";
      }
  }

  if (e.target.classList.contains("almo")) {
    if (document.getElementById("almo").classList.contains("t-t")) {
        document.getElementById("almo").classList.remove("t-t");
        document.getElementById("almo-l").className += " t-t";
        document.getElementById("almo-l").classList.remove("ani-icono-producto");
        document.getElementById("almo").className += " ani-icono-producto";
      } else {
        document.getElementById("almo").className += " t-t";
        document.getElementById("almo").classList.remove("ani-icono-producto");
        document.getElementById("almo-l").className = "almo ani-icono-producto";
      }
  }

  if (e.target.classList.contains("agen")) {
    if (document.getElementById("agen").classList.contains("t-t")) {
        document.getElementById("agen").classList.remove("t-t");
        document.getElementById("agen-l").className += " t-t";
        document.getElementById("agen-l").classList.remove("ani-icono-producto");
        document.getElementById("agen").className += " ani-icono-producto";
      } else {
        document.getElementById("agen").className += " t-t";
        document.getElementById("agen").classList.remove("ani-icono-producto");
        document.getElementById("agen-l").className = "agen ani-icono-producto";
      }
  }
});
