// Definir la URL de los cronogramas
const cronogramaUrl = "https://psicologia.aulavirtual.unc.edu.ar/pluginfile.php/35319/mod_label/intro/CRONOGRAMA%202025%20Pedagog%C3%ADa.png";

// Avatar del chatbot
const avatarUrl = "ruta/a/tu/avatar.png"; // Cambia esta URL con la ruta de tu avatar

// Respuestas del chatbot
const respuestas = {
  saludo: "¡Hola! Soy Pepe, el chatbot de la Cátedra de Pedagogía de la Facultad de Psicología de la UNC.",
  clasesTeoricas: "En esta cátedra no contamos con clases teóricas propiamente dichas, sino que ofrecemos a lxs estudiantes una serie de dispositivos pedagógicos...",
  comisionesTP: "Los encuentros de Trabajos Prácticos se desarrollan mensualmente...",
  examenes: "Los parciales se rinden en los horarios de las comisiones de trabajos prácticos...",
  condicionesCursado: "Las condiciones de cursado son:\n- Estudiantes Regulares: Asistir a los tres trabajos prácticos...",
  requisitosRegularizar: "Para regularizar como estudiante regular se requiere el cumplimiento mínimo...",
  requisitosPromocionar: "Para ser estudiante promocional se requiere cumplir con las condiciones mínimas...",
  requisitosLibre: "Para rendir como estudiante libre, debes realizar el trámite de acceso...",
  recuperarParcialAprobado: "Puedes recuperar un parcial aprobado (con calificación 4, 5 o 6)...",
  recuperarParcialDesaprobado: "Se puede recuperar un parcial aprobado...",
  recuperarParcialAusente: "Puedes recuperar un parcial ausente...",
  diferenciaDispositivos: "Los espacios de Seminario-Taller son encuentros similares a las clásicas clases teóricas...",
  bibliografiaMaterial: "Todo el material está disponible en la pestaña 'Materiales Bibliográficos'.",
  materialesParciales: "El material de los exámenes está desglosado en la pestaña 'Parciales'.",
  materialesTP: "Todo el material de los Trabajos Prácticos está disponible en la pestaña 'Trabajos Prácticos'.",
  tutorias: "Las tutorías son los siguientes:\n- Tutoría Virtual: Martes 06/05/2025...\n- Tutoría Presencial: Martes 01/07/2025...",
  respuestasNoReconocidas: "Lo siento, no pude entender tu pregunta. ¿Podrías reformularla? Si sigue sin ser comprendida, por favor remite tu consulta al correo electrónico de la cátedra: cpype.unc@gmail.com."
};

// Función para manejar las preguntas y respuestas del chatbot
function obtenerRespuesta(pregunta) {
  // Convertimos la pregunta a minúsculas para hacer una búsqueda más flexible
  pregunta = pregunta.toLowerCase();

  // Respuestas basadas en la pregunta
  if (pregunta.includes("bibliografía") || pregunta.includes("material de estudio")) {
    return "Todo el material está disponible en la pestaña 'Materiales Bibliográficos'. Puedes acceder a ella aquí: <a href='https://psicologia.aulavirtual.unc.edu.ar/course/view.php?id=122&section=2#tabs-tree-start' target='_blank'>Materiales Bibliográficos</a>.";
  } else if (pregunta.includes("parcial") || pregunta.includes("examen")) {
    return "Los detalles sobre los parciales están disponibles en la pestaña 'Parciales'. Puedes acceder a ella aquí: <a href='https://psicologia.aulavirtual.unc.edu.ar/course/view.php?id=122&section=9#tabs-tree-start' target='_blank'>Parciales</a>.";
  } else if (pregunta.includes("trabajo práctico") || pregunta.includes("tp")) {
    return "El material de los trabajos prácticos está disponible en la pestaña 'Trabajos Prácticos'. Puedes acceder a ella aquí: <a href='https://psicologia.aulavirtual.unc.edu.ar/course/view.php?id=122&section=5#tabs-tree-start' target='_blank'>Trabajos Prácticos</a>.";
  } else if (pregunta.includes("tutoría") || pregunta.includes("tutorías")) {
    return respuestas.tutorias;
  } else if (pregunta.includes("fecha") || pregunta.includes("cuándo")) {
    return obtenerFecha();
  } else {
    return respuestas.respuestasNoReconocidas;
  }
}

// Función para devolver la fecha correspondiente a los eventos
function obtenerFecha() {
  const hoy = new Date();
  const fecha = hoy.getDate();
  const mes = hoy.getMonth() + 1; // Mes es indexado desde 0
  const año = hoy.getFullYear();

  // Comprobar la fecha actual y devolver el próximo evento
  if (mes === 4 && fecha >= 1 && fecha <= 30) {
    return "El próximo seminario-taller es el Martes 01/04/2025 a las 16:00hs. Tema: 'El oficio de enseñar. Identidad profesional docente.' Prof. Mónica Fornasari.";
  } else if (mes === 5) {
    return "El próximo parcial es el Martes 13/05/2025 a las 12:00, 14:00 y 18:00hs.";
  } else if (mes === 6) {
    return "El próximo seminario-taller es el Martes 03/06/2025 a las 16:00hs. Tema: 'Contrato Educativo. La tríada docente/estudiante/conocimiento.' Prof. Mónica Fornasari.";
  } else {
    return "No se encontró un evento próximo en el cronograma para esta fecha.";
  }
}
