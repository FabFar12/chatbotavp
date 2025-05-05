const respuestas = {
  saludo: "¡Hola! Soy el chatbot de la cátedra de Pedagogía. ¿En qué puedo ayudarte?",
  clasesTeoricas: "Las clases teóricas se dictan los días miércoles de 10 a 13 hs en el aula 5.",
  comisionesTP: "Las comisiones de trabajo práctico se asignan en el primer encuentro y se organizan por orden alfabético.",
  examenes: "Los exámenes parciales se rinden en las semanas 8 y 14. El examen final es oral y presencial.",
  condicionesCursado: "Para cursar necesitás asistir al 80% de los trabajos prácticos y aprobar los parciales.",
  requisitosRegularizar: "Para regularizar necesitás aprobar los dos parciales con nota mínima de 4 y cumplir con la asistencia.",
  requisitosPromocionar: "Para promocionar necesitás aprobar ambos parciales con 7 o más, asistir al 80% de las clases y aprobar un coloquio integrador.",
  requisitosLibre: "Para rendir libre debés inscribirte en el turno correspondiente y aprobar un examen escrito y oral.",
  diferenciaDispositivos: "Los dispositivos pedagógicos incluyen seminarios, talleres y grupos de estudio. Cada uno tiene una dinámica distinta.",
  bibliografiaMaterial: "La bibliografía obligatoria está disponible en el aula virtual y en fotocopiadora. También recomendamos textos complementarios.",
  materialesParciales: "Para los parciales necesitás estudiar la bibliografía obligatoria y las presentaciones de clase.",
  materialesTP: "Para los trabajos prácticos se usan guías que se entregan en clase y se suben al aula virtual.",
  tutorias: "Las tutorías se realizan los martes de 14 a 16 hs en el aula 2 o por Zoom con turno previo.",
  recuperarParcialAprobado: "Si aprobaste el parcial, no necesitás recuperarlo.",
  recuperarParcialDesaprobado: "Podés recuperar un parcial si lo desaprobaste, pero solo una vez.",
  recuperarParcialAusente: "Si estuviste ausente, podés rendir el parcial en la instancia de recuperación.",
  respuestasNoReconocidas: "No tengo esa información. Podés escribir a pedagogia@unc.edu.ar para consultas específicas."
};

function obtenerRespuesta(pregunta) {
  pregunta = pregunta.toLowerCase();

  if (pregunta.includes("hola") || pregunta.includes("buenas") || pregunta.includes("saludos")) {
    return respuestas.saludo;
  } else if (pregunta.includes("clases teóricas")) {
    return respuestas.clasesTeoricas;
  } else if (pregunta.includes("comisiones") || pregunta.includes("tp") || pregunta.includes("trabajo práctico")) {
    return respuestas.comisionesTP;
  } else if (pregunta.includes("parcial") && pregunta.includes("recuperar")) {
    if (pregunta.includes("aprobado")) return respuestas.recuperarParcialAprobado;
    if (pregunta.includes("desaprobado")) return respuestas.recuperarParcialDesaprobado;
    if (pregunta.includes("ausente")) return respuestas.recuperarParcialAusente;
    return "Podés recuperar un parcial si lo desaprobaste o si estuviste ausente.";
  } else if (pregunta.includes("parcial") || pregunta.includes("examen")) {
    return respuestas.examenes;
  } else if (pregunta.includes("condiciones de cursado")) {
    return respuestas.condicionesCursado;
  } else if (pregunta.includes("regular") && pregunta.includes("requisito")) {
    return respuestas.requisitosRegularizar;
  } else if (pregunta.includes("promocion") || pregunta.includes("promocionar")) {
    return respuestas.requisitosPromocionar;
  } else if (pregunta.includes("libre")) {
    return respuestas.requisitosLibre;
  } else if (pregunta.includes("dispositivo") || pregunta.includes("seminario") || pregunta.includes("taller")) {
    return respuestas.diferenciaDispositivos;
  } else if (pregunta.includes("bibliografía") || pregunta.includes("material de estudio")) {
    return respuestas.bibliografiaMaterial;
  } else if (pregunta.includes("material") && pregunta.includes("parcial")) {
    return respuestas.materialesParciales;
  } else if (pregunta.includes("material") && (pregunta.includes("tp") || pregunta.includes("trabajo práctico"))) {
    return respuestas.materialesTP;
  } else if (pregunta.includes("tutoría") || pregunta.includes("tutorías")) {
    return respuestas.tutorias;
  } else {
    return respuestas.respuestasNoReconocidas;
  }
}

function mostrarMensaje(texto, clase) {
  const chat = document.getElementById("chat");
  const mensaje = document.createElement("div");
  mensaje.className = clase;
  mensaje.innerText = texto;
  chat.appendChild(mensaje);
  chat.scrollTop = chat.scrollHeight;
}

function enviarMensaje() {
  const input = document.getElementById("input");
  const pregunta = input.value.trim();
  if (pregunta === "") return;

  mostrarMensaje("👤 " + pregunta, "usuario");
  const respuesta = obtenerRespuesta(pregunta);
  mostrarMensaje("🤖 " + respuesta, "bot");

  input.value = "";
}

// Soporte para tecla Enter
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input");
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      enviarMensaje();
    }
  });

  const boton = document.getElementById("enviar");
  boton.addEventListener("click", enviarMensaje);
});
