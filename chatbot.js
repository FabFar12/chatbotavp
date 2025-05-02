// chatbot.js

// Definir la URL de los cronogramas
const cronogramaUrl = "https://psicologia.aulavirtual.unc.edu.ar/pluginfile.php/35319/mod_label/intro/CRONOGRAMA%202025%20Pedagog%C3%ADa.png";

// Avatar del chatbot
const avatarUrl = "ruta/a/tu/avatar.png"; // Cambia esta URL con la ruta de tu avatar

// Respuestas del chatbot
const respuestas = {
  saludo: "¡Hola! Soy Pepe, el chatbot de la Cátedra de Pedagogía de la Facultad de Psicología de la UNC.",
  
  clasesTeoricas: "En esta cátedra no contamos con clases teóricas propiamente dichas, sino que ofrecemos a lxs estudiantes una serie de dispositivos pedagógicos específicamente diseñados, que asumen la forma de Seminario-Taller, Aula-Taller y Conversatorios. Todos ellos se desarrollan todas las semanas los días martes en el horario de 16.00 a 18.00 hs. Puedes revisar el Cronograma [aquí](https://psicologia.aulavirtual.unc.edu.ar/pluginfile.php/35319/mod_label/intro/CRONOGRAMA%202025%20Pedagog%C3%ADa.png). Si deseas información más detallada sobre alguno de estos dispositivos pedagógicos, por favor especifica cuál quieres conocer.",
  
  comisionesTP: "Los encuentros de Trabajos Prácticos se desarrollan mensualmente, los días martes en distintos horarios.\n\nLa Comisión 01 (C1) a cargo de la Prof. Marisabel Oviedo se lleva a cabo en el horario de 12.00 a 14.00 hs. en el aula E del módulo nuevo.\nLa Comisión 02 (C2) a cargo de la Prof. Mónica Fornasari se lleva a cabo en el horario de 14.00 a 16.00 hs. en el aula G del módulo nuevo.\nLa Comisión 03 (C3) a cargo del Prof. Fabian Fariña se lleva a cabo en el horario de 18.00 a 20.00 hs. en el aula K1 del módulo nuevo.",
  
  examenes: "Los parciales se rinden en los horarios de las comisiones de trabajos prácticos (C1: 12.00hs.; C2: 14.00hs.; y C3: 18.00hs., según corresponda), a excepción de la Reprogramación y el Recuperatorio que se rinden a las 18:00 hs., y el recuperatorio por una cuestión de agenda del cuatrimestre se realiza un día VIERNES.",

  condicionesCursado: "Las condiciones de cursado son:\n- Estudiantes Regulares: Asistir a los tres trabajos prácticos (uno por mes) y entregarlos en tiempo y forma.\n- Estudiantes Promocionales: Cumplir con la asistencia y las entregas, y además participar activamente en los dispositivos pedagógicos.\n- Estudiantes Libres: Seguir el proceso administrativo y rendir los exámenes según los requerimientos.",
  
  requisitosRegularizar: "Para regularizar como estudiante regular se requiere el cumplimiento mínimo de asistir a los tres trabajos prácticos (uno por mes) y entregarlos en el tiempo establecido. Las fechas de los encuentros en los horarios de cada Comisión son TP1: 15 de abril; TP2: 27 de mayo; y TP3: 24 de junio.",
  
  requisitosPromocionar: "Para ser estudiante promocional se requiere cumplir con las condiciones mínimas de la materia y también profundizar en la participación y el compromiso. La condición de promocional está pensada para ir un ‘poco más allá’ del mínimo. Aquí nosotros ponemos el piso, pero al techo lo definís vos.",
  
  requisitosLibre: "Para rendir como estudiante libre, debes realizar el trámite de acceso con la Secretaría de Asuntos Estudiantiles al correo sae@psicologia.unc.edu.ar. Toda la información para rendir en condición de libre se encuentra disponible en la pestaña 'Examen LIBRE'. [Aquí está el enlace directo](https://psicologia.aulavirtual.unc.edu.ar/course/view.php?id=122&section=12#tabs-tree-start).",
  
  recuperarParcialAprobado: "Puedes recuperar un parcial aprobado (con calificación 4, 5 o 6) para alcanzar el promedio requerido de 6 y promedio general de 7.",
  
  recuperarParcialDesaprobado: "Se puede recuperar un parcial aprobado (con calificación 4, 5 o 6) para alcanzar el promedio requerido de 6 y promedio de 7. Si faltaste sin justificar o desaprobaste un parcial, debes seguir el camino para ser estudiante regular, pero no te desanimes, seguimos aprendiendo juntos.",
  
  recuperarParcialAusente: "Puedes recuperar un parcial ausente sólo si has justificado la inasistencia a través de la SAE. La fecha de reprogramación es el martes 01 de julio A LAS 18:00 hs. (Reprogramación). Si no justificas, seguirás el camino regular para ser estudiante regular.",
  
  diferenciaDispositivos: "Los espacios de Seminario-Taller son encuentros similares a las clásicas clases teóricas, pero se dictan con objetivos, metodologías y dinámicas diferenciadas.\n\nLos Aula-Taller se enfocan en temáticas emergentes y buscan situar la formación docente en un contexto local y regional.\n\nLos Conversatorios son espacios con docentes invitados que nos invitan a pensar la educación a través de sus trayectorias profesionales.",
  
  bibliografiaMaterial: "Todo el material está disponible en la pestaña 'Materiales Bibliográficos'. [Consulta los materiales aquí](https://psicologia.aulavirtual.unc.edu.ar/course/view.php?id=122&section=2#tabs-tree-start). Para más detalles, puedes revisar el 'Programa de Pedagogía 2025' [aquí](https://psicologia.aulavirtual.unc.edu.ar/mod/resource/view.php?id=18486).",
  
  materialesParciales: "El material de los exámenes está desglosado en la pestaña 'Parciales'. [Consulta los materiales aquí](https://psicologia.aulavirtual.unc.edu.ar/course/view.php?id=122&section=9#tabs-tree-start). Además, todo el material de la materia está disponible en la pestaña 'Materiales Bibliográficos'. [Revisa los materiales aquí](https://psicologia.aulavirtual.unc.edu.ar/course/view.php?id=122&section=2#tabs-tree-start).",
  
  materialesTP: "Todo el material de los Trabajos Prácticos está disponible en la pestaña 'Trabajos Prácticos'. [Consulta los materiales aquí](https://psicologia.aulavirtual.unc.edu.ar/course/view.php?id=122&section=5#tabs-tree-start). Además, puedes acceder a la pestaña 'Materiales Bibliográficos' para revisar todo el material de la materia [aquí](https://psicologia.aulavirtual.unc.edu.ar/course/view.php?id=122&section=2#tabs-tree-start).",

  fechas: {
    seminarios: [
      "Martes 01/04/2025 16.00hs. - El oficio de enseñar. Identidad profesional docente. (Prof. Mónica Fornasari)",
      "Martes 08/04/2025 16.00hs. - Paradigmas y Enfoques Educativos. (Prof. Mónica Fornasari)",
      "Martes 22/04/2025 16.00hs. - Acto Educativo. Educación, Psicología y Pedagogía. (Prof. Mónica Fornasari)",
      "Martes 03/06/2025 16.00hs. - Contrato Educativo. La tríada docente/estudiante/conocimiento. (Prof. Mónica Fornasari)"
    ],
    aulasTaller: [
      "Martes 15/04/2025 16.00hs. - Enfoques Digitales y Tecnoculturales. (Prof. Fabian Fariña)",
      "Martes 29/04/2025 16.00hs. - La Alfabetización Académica en los procesos de escritura universitaria. (Prof. Marisabel Oviedo)",
      "Martes 06/05/2025 16.00hs. - La Inteligencia Artificial en los procesos educativos. (Prof. Fabian Fariña)",
      "Martes 24/06/2025 16.00hs. - Dispositivos de Evaluación. Emancipación y praxis sociopedagógicas. (Prof. Gabriela González Brizuela)"
    ],
    conversatorios: [
      "Martes 27/05/2025 16.00hs. - La profesión docente. Relatos de Experiencias y Prácticas Educativas. (Lic. Susana Aselles)",
      "Martes 10/06/2025 16.00hs. - Sujeto epistémico, protagonismo estudiantil y formación docente. (Mgter. Horacio Maldonado)"
    ],
    parciales: [
      "PRIMER PARCIAL: Martes 13/05/2025 (12:00, 14:00 y 18:00hs.)",
      "SEGUNDO PARCIAL: Martes 17/06/2025 (12:00, 14:00 y 18:00hs.)",
      "REPROGRAMACIÓN: Martes 01/07/2025 18:00hs. (Reprogramación)",
      "RECUPERATORIO: Viernes 04/07/2025 18:00hs. (Recuperatorio)"
    ],
    trabajosPracticos: [
      "TP1: Martes 15/04/2025 (12:00, 14:00 y 18:00hs.)",
      "TP2: Martes 27/05/2025 (12:00, 14:00 y 18:00hs.)",
      "TP3: Martes 24/06/2025 (12:00, 14:00 y 18:00hs.)",
      "RECUPERATORIO: Martes 01/07/2025 (18:00hs.)"
    ],
    tutorias: [
      "Tutoría Virtual: Martes 06/05/2025 (Horarios según Comisión)",
      "Tutoría Virtual: Martes 10/06/2025 (Horarios según Comisión)",
      "Tutoría Presencial: Martes 01/07/2025 16.00hs. (A cargo de la Prof. Melisa Vázquez)"
    ]
  },

  respuestasNoReconocidas: "Lo siento, no pude entender tu pregunta. ¿Podrías reformularla? Si sigue sin ser comprendida, por favor remite tu consulta al correo electrónico de la cátedra: cpype.unc@gmail.com, y te responderemos a la brevedad."
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
  } else if (pregunta.includes("fecha") || pregunta.includes("cuándo")) {
    return obtenerFecha();
  } else {
    return "Lo siento, no entendí la pregunta. Por favor, reformula tu consulta o envíala al correo de la cátedra: <a href='mailto:cpype.unc@gmail.com'>cpype.unc@gmail.com</a>.";
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
