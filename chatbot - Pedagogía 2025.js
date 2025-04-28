// chatbot.js

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
      "🧠 Puedes preguntarme, por ejemplo:\n- ¿Qué necesito para promocionar?\n- ¿Qué necesito para regularizar?\n- ¿Cuándo es el primer parcial?\n- ¿Qué fechas son los trabajos prácticos?\n- ¿Dónde encuentro la bibliografía?"
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
    keywords: ["parciales", "fecha parcial", "examen parcial"], 
    responses: [
      "📝 PARCIALES:\n- Primer Parcial: Martes 13 de mayo.\n- Segundo Parcial: Martes 17 de junio.\n- Recuperatorio: Jueves 4 de julio."
    ]
  },
  { 
    keywords: ["trabajo práctico", "trabajos prácticos", "tp"], 
    responses: [
      "🛠️ TRABAJOS PRÁCTICOS:\n- Primer TP: 15 de abril.\n- Segundo TP: 27 de mayo.\n- Tercer TP: 24 de junio."
    ]
  },
  { 
    keywords: ["bibliografía", "material de estudio", "dónde está el material"], 
    responses: [
      "📚 Todo el material está disponible en:\n- <a href='https://psicologia.aulavirtual.unc.edu.ar/course/view.php?id=122&section=2#tabs-tree-start' target='_blank'>Materiales Bibliográficos</a>\n- <a href='https://psicologia.aulavirtual.unc.edu.ar/course/view.php?id=122&section=9#tabs-tree-start' target='_blank'>Parciales</a>\n- <a href='https://psicologia.aulavirtual.unc.edu.ar/course/view.php?id=122&section=5#tabs-tree-start' target='_blank'>Trabajos Prácticos</a>"
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