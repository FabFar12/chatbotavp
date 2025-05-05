const respuestas = {
  saludo: "¡Hola! Soy el chatbot de la cátedra de Pedagogía de la UNC. ¿En qué puedo ayudarte? Puedo brindarte información sobre condiciones de cursado, fechas de exámenes, materiales de estudio, fechas de exámenes, etc.",
  clasesTeoricas: "En esta cátedra no contamos con clases teóricas propiamente dichas, sino que ofrecemos a lxs estudiantes una serie de dispositivos pedagógicos específicamente diseñados, que asumen la forma de Seminario-Taller, Aula-Taller y Conversatorios. Todos ellos se desarrollan todas las semanas los días martes en el horario de 16.00 a 18.00 hs. ¿Querés información sobre algunas de estos dispositivos pedagógicos?",
  semirario: "Los espacios de Seminario-Taller son encuentros similares a las clásicas clases teóricas que conocen en la Facultad, pero se dictan de una manera diferenciada como dispositivo pedagógico en cuanto a sus objetivos, metodologías y dinámicas.",
  aula: "Los espacios de Aula-Taller son otro tipo de dispositivo pedagógico, una propuesta específica del Equipo de Cátedra que tienen por finalidad profundizar en alguna temática o problemática emergente, porque partimos del convencimiento de que debemos traer a la formación docente a este contexto, de manera situada en este escenario local y regional, en este momento histórico específico.",
  conversatorio: "Los Conversatorios, se tratan de propuestas traídas por docentes invitados con probada y extensa trayectorias profesionales en el contexto educativo local y regional. Se trata de voces actuales y vigentes que nos invitan a pensar y re-pensar lo que sabemos de la educación, y a pensar en clave de a dónde mirar cuando pensamos en el futuro de la educación.",
  comisionesTP: "Los encuentros de Trabajos Prácticos se desarrollan mensualmente, los días martes en distintos horarios. La Comisión 01 (C1) a cargo de la Prof. Marisabel Oviedo se lleva a cabo en el horario de 12.00 a 14.00 hs. en el aula E del módulo nuevo. La Comisión 02 (C2) a cargo de la Prof. Mónica Fornasari se lleva a cabo en el horario de 14.00 a 16.00 hs. en el aula G del módulo nuevo. La Comisión 03 (C3) a cargo del Prof. Fabian Fariña se lleva a cabo en el horario de 18.00 a 20.00 hs. en el aula K1 del módulo nuevo.",
  examenes: "Los exámenes parciales se rinden los días 13 de mayo y 17 de junio, en los horarios de las comisiones de TP. El Recuperatorio se rinde el día VIERNES 04 de julio a las 18:00hs.",
  condicionesCursado: "Todas las especificaciones de cursado se encuentran en el Programa de la cátedra, y encontrarán una síntesis en el archivo de Presentación de la materia. Ambos documentos en la pestaña general del AVP.",
  requisitosRegularizar: "Para regularizar necesitás aprobar los dos parciales con nota mínima de 4 y cumplir con la asistencia del 80% a los encuentros de trabajos prácticos.",
  requisitosPromocionar: "Para promocionar necesitás aprobar ambos parciales con nota mínima de 6 y promedio de 7 o más, asistir al 80% de las clases de aula-taller, conversatorios y encuentros de TPs.",
  requisitosLibre: "Para rendir libre debés inscribirte en el turno correspondiente y aprobar un examen escrito y oral. Toda la información se encuentra disponible en la pestaña Examen LIBRES en el AVP. Para acceder, debes realizar el trámite con la SAE.",
  diferenciaDispositivos: "Los espacios de Seminario-Taller son encuentros similares a las clásicas clases teóricas que conocen en la Facultad, pero se dictan de una manera diferenciada como dispositivo pedagógico en cuanto a sus objetivos, metodologías y dinámicas. Por su parte, los espacios de Aula-Taller son otro tipo de dispositivo pedagógico, una propuesta específica del Equipo de Cátedra que tienen por finalidad profundizar en alguna temática o problemática emergente, porque partimos del convencimiento de que debemos traer a la formación docente a este contexto, de manera situada en este escenario local y regional, en este momento histórico específico. En el caso de los Conversatorios, se trata de propuestas traídas por docentes invitados con probada y extensa trayectorias profesionales en el contexto educativo local y regional. Se trata de voces actuales y vigentes que nos invitan a pensar y re-pensar lo que sabemos de la educación, y a pensar en clave de a dónde mirar cuando pensamos en el futuro de la educación. En todas las propuestas formativas, invitamos a ustedes a pensar, y a poner en movimiento los materiales y contenidos que desde la cátedra les proponemos, no queremos que se queden como insumos inertes, por el contrario, queremos que se constituyan en el combustible que motorice en ustedes no sólo la reflexión, sino también las maneras de pensar las intervenciones profesionales, para que podamos de ese modo avanzar en la dirección de la Innovación Pedagógica. Más allá de las condiciones de cursado, les invitamos a participar activamente de los distintos espacios, aprovecharlos y especialmente disfrutarlos.",
  bibliografiaMaterial: "La bibliografía obligatoria está disponible en el aula virtual. También recomendamos textos complementarios.",
  materialesParciales: "El material de los parciales se encuentra detallado en la pestaña Parciales.",
  materialesTP: "La bibligrafía de los TPs se encuentra detallada en la pestaña de inicio de Trabajos Prácticos.",
  tutorias: "Las tutorías se realizan en los tres turnos (12, 14 y 18hs) de manera virtual, a excepción de la última tutoría obligatoria para promocionales el día 01/07/2025 a las 16:00hs.",
  recuperarParcialAprobado: "Se puede recuperar un parcial APROBADO (con calificación 4, 5 o 6, para alcanzar al promedio requerido de nota mínima de 6 y promedio de 7). Si faltaste sin justificar la inasistencia o desaprobaste un parcial, seguís el camino a quedar como estudiante regular, pero no te desanimes, que acá estamos para aprender, así que te invitamos a seguir participando de todas las propuestas de seminarios, aulas taller y conversatorios. Recordá que una calificación NO TE DEFINE, y que tu calidad profesional estará dada por tu compromiso, tu esfuerzo y tus posiciones ético-técnicas.",
  recuperarParcialDesaprobado: "Podés recuperar un parcial si lo desaprobaste, pero solo una vez y es para alcanzar la condición de REGULAR.",
  recuperarParcialAusente: "Si estuviste ausente y no justificaste la inasistencia, podés rendir el parcial en la instancia de recuperación para alcanzar la REGULARIDAD. Por el contrario, si justificaste la inasistencia con el trámite de la SAE por los medios correspondientes, se habilita la instancia especial de rendir el parcial en la fecha de REPROGRAMACIÓN, que es el martes 01 de julio A LAS 18:00 hs. Sea cual sea tu caso, te invitamos a seguir participando de todas las propuestas de seminarios, aulas taller y conversatorios. Recordá que una calificación NO TE DEFINE, y que tu calidad profesional estará dada por tu compromiso, tu esfuerzo y tus posiciones ético-técnicas.",
  respuestasNoReconocidas: "No tengo esa información. Podés escribir a pedagogia@unc.edu.ar para consultas específicas."
};

function obtenerRespuesta(pregunta) {
  pregunta = pregunta.toLowerCase();

  if (pregunta.includes("hola") || pregunta.includes("buenas") || pregunta.includes("saludos")) {
    return respuestas.saludo;
  } else if (pregunta.includes("clases teóricas")) {
    return respuestas.clasesTeoricas;
  } else if (pregunta.includes("seminario")) {
    return respuestas.seminario;
  } else if (pregunta.includes("aula")) {
    return respuestas.aula;
  } else if (pregunta.includes("conversatorio")) {
    return respuestas.conversatorio;
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
  } else if (pregunta.includes("regular") || pregunta.includes("requisito") || pregunta.includes("regularizar")) {
    return respuestas.requisitosRegularizar;
  } else if (pregunta.includes("promocion") || pregunta.includes("promocionar")) {
    return respuestas.requisitosPromocionar;
  } else if (pregunta.includes("libre")) {
    return respuestas.requisitosLibre;
  } else if (pregunta.includes("dispositivo") || pregunta.includes("seminario") || pregunta.includes("taller")) {
    return respuestas.diferenciaDispositivos;
  } else if (pregunta.includes("bibliografía") || pregunta.includes("material de estudio") || pregunta.includes("textos") || pregunta.includes("autores")) {
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
