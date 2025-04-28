const keywordResponses = [
  { 
    keywords: ["hola", "buenas", "saludos"], 
    responses: [
      getDynamicGreeting(), 
      "¡Hola! 😊 ¿Sobre qué tema te gustaría consultar? Te puedo ayudar con cursado, parciales, trabajos prácticos o materiales."
    ]
  },
  { 
    keywords: ["preguntas sugeridas", "qué puedo preguntar", "ayuda"], 
    responses: [
      "🧠 Puedes preguntarme, por ejemplo:\n- ¿Cuándo es el próximo parcial?\n- ¿Qué textos entran en el parcial?\n- ¿Qué textos entran en el siguiente trabajo práctico?"
    ]
  },
  { 
    keywords: ["cursado", "condiciones", "promocionales", "regulares", "libres"], 
    responses: [
      "📚 Condiciones de cursado:\n- PROMOCIONALES: 80% de asistencia (Aula-Taller, Tutorías, Conversatorios, Trabajos Prácticos), 3 TP aprobados con promedio 7, parciales promediando 7, trabajo final.\n- REGULARES: Aprobar 2 parciales (mínimo 4 puntos) y 3 Trabajos Prácticos entregados (mínimo 2 aprobados con 4 puntos).\n- LIBRES: Presentar propuesta creativa + evaluación escrita + defensa."
    ]
  },
  { 
    keywords: ["aula taller", "seminarios", "obligatorios", "fechas talleres", "fechas seminarios"], 
    responses: [
      "📅 Fechas de espacios obligatorios para promocionar:\n- Seminarios y Talleres:\n  * 1/4 - El Oficio de Enseñar\n  * 8/4 - Paradigmas Educativos\n  * 15/4 - Enfoques Digitales\n  * 22/4 - Acto Educativo\n  * 29/4 - Alfabetización Académica\n  * 6/5 - Inteligencia Artificial\n  * 27/5 - Conversatorio sobre profesión docente\n  * 3/6 - Contrato Educativo\n  * 10/6 - Protagonismo estudiantil\n  * 24/6 - Evaluación Emancipadora"
    ]
  },
  { 
    keywords: ["regularizar", "regular", "condiciones regular"], 
    responses: [
      "📚 Para REGULARIZAR:\n- Asistir y entregar los 3 Trabajos Prácticos.\n- Aprobar 2 exámenes parciales (mínimo 4 puntos cada uno)."
    ]
  },
  { 
    keywords: ["parciales", "fecha parcial", "examen parcial", "próximo parcial"], 
    responses: [
      getNextPartialDate()
    ]
  },
  { 
    keywords: ["trabajo práctico", "trabajos prácticos", "tp", "próximo tp", "siguiente tp"], 
    responses: [
      "🛠️ El siguiente trabajo práctico se detalla en la sección correspondiente del aula virtual. Puedes verlo aquí: <a href='https://psicologia.aulavirtual.unc.edu.ar/course/view.php?id=122&section=5#tabs-tree-start' target='_blank'>Trabajos Prácticos</a>"
    ]
  },
  { 
    keywords: ["bibliografía", "material de estudio", "dónde está el material", "textos del parcial"], 
    responses: [
      "📚 La bibliografía para los parciales está disponible aquí: <a href='https://psicologia.aulavirtual.unc.edu.ar/course/view.php?id=122&section=9#tabs-tree-start' target='_blank'>Parciales</a>"
    ]
  },
  { 
    keywords: ["correo", "contacto", "consultas"], 
    responses: [
      "📬 Para consultas específicas, escribí a: cpype.unc@gmail.com"
    ]
  }
];

const defaultResponses = [
  "🤔 No tengo esa información precisa. Por favor, enviá tu consulta a nuestro correo oficial: cpype.unc@gmail.com",
  "📩 Esa pregunta es mejor tratarla directamente por correo: cpype.unc@gmail.com",
  "ℹ️ Te sugiero escribir a cpype.unc@gmail.com para resolver esa duda específica."
];

// Función para obtener la fecha del próximo parcial
function getNextPartialDate() {
  const currentDate = new Date();
  const partialDates = [
    { name: "Primer Parcial", date: new Date("2025-05-13") },
    { name: "Segundo Parcial", date: new Date("2025-06-17") },
    { name: "Recuperatorio", date: new Date("2025-07-04") }
  ];

  let nextPartial = null;
  for (let i = 0; i < partialDates.length; i++) {
    if (partialDates[i].date > currentDate) {
      nextPartial = partialDates[i];
      break;
    }
  }

  if (nextPartial) {
    return `📝 El próximo parcial es el ${nextPartial.name} el ${nextPartial.date.toLocaleDateString()}.`;
  } else {
    return "📅 No hay más parciales programados en esta materia.";
  }
}

function sendMessage() {
    let userText = document.getElementById("userinput").value.trim();
    if (userText === "") return;
    
    appendMessage(userText, "user");
    
    let botReply = getBotResponse(userText.toLowerCase());
    setTimeout(() => {
        appendMessage(botReply, "bot");
    }, 500);
    
    document.getElementById("userinput").value = "";
}

function appendMessage(text, sender) {
    let chatlog = document.getElementById("chatlog");
    let messageWrapper = document.createElement("div");
    messageWrapper.style.display = "flex";
    messageWrapper.style.marginBottom = "10px";
    messageWrapper.style.alignItems = "flex-end";

    let bubble = document.createElement("div");
    bubble.style.maxWidth = "70%";
    bubble.style.padding = "8px 12px";
    bubble.style.borderRadius = "15px";
    bubble.style.wordBreak = "break-word";

    if (sender === "user") {
        bubble.style.background = "#DCF8C6";
        bubble.style.marginLeft = "auto";
        messageWrapper.style.justifyContent = "flex-end";
        bubble.innerText = text;
        messageWrapper.appendChild(bubble);
    } else {
        let avatar = document.createElement("img");
        avatar.src = "https://cdn-icons-png.flaticon.com/512/4712/4712104.png"; 
        avatar.style.width = "30px";
        avatar.style.height = "30px";
        avatar.style.borderRadius = "50%";
        avatar.style.marginRight = "8px";
        
        bubble.style.background = "#ffffff";
        bubble.innerHTML = text; // Para que funcionen los links
        
        messageWrapper.appendChild(avatar);
        messageWrapper.appendChild(bubble);
    }

    chatlog.appendChild(messageWrapper);
    chatlog.scrollTop = chatlog.scrollHeight;
}

function getBotResponse(userInput) {
    for (let entry of keywordResponses) {
        for (let keyword of entry.keywords) {
            if (userInput.includes(keyword)) {
                return randomChoice(entry.responses);
            }
        }
    }
    return randomChoice(defaultResponses);
}

function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getDynamicGreeting() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
        return "¡Buenos días! ☀️ ¿Listo para aprender?";
    } else if (hour >= 12 && hour < 18) {
        return "¡Buenas tardes! 🌞 ¿Cómo puedo ayudarte?";
    } else {
        return "¡Buenas noches! 🌙 ¿Qué consulta tenés sobre el cursado?";
    }
}
