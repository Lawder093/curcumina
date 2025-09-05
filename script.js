const preguntas = [
  "1. En las últimas dos semanas, me he sentido triste la mayor parte del tiempo.",
  "2. He perdido el interés o placer en actividades que antes disfrutaba.",
  "3. Mi sueño ha cambiado drásticamente (duermo mucho más o menos de lo habitual).",
  "4. Me siento cansado o con poca energía casi todos los días.",
  "5. He notado cambios importantes en mi apetito o peso sin proponérmelo.",
  "6. Me siento culpable o inútil con frecuencia.",
  "7. Me resulta difícil concentrarme o tomar decisiones.",
  "8. Me muevo o hablo más lento, o estoy muy inquieto.",
  "9. He tenido pensamientos de que estaría mejor muerto o de lastimarme.",
  "10. Prefiero estar solo y evito interactuar con los demás.",
  "11. Mis amigos o familiares han notado cambios en mi estado de ánimo.",
  "12. Me siento irritable o con cambios de humor repentinos.",
  "13. Me cuesta sentir emociones positivas.",
  "14. Siento ansiedad o nervios constantes.",
  "15. He perdido interés en mi cuidado personal o aspecto físico.",
  "16. Siento que no tengo control sobre mi vida.",
  "17. Me siento desconectado de mi entorno o de mí mismo.",
  "18. Me resulta difícil disfrutar del presente.",
  "19. Me siento vacío o sin propósito.",
  "20. Me cuesta iniciar o terminar tareas cotidianas."
];

let respuestas = [];
let preguntaIndex = 0;

function mostrarPregunta() {
  const contenedor = document.getElementById("question-container");
  contenedor.innerHTML = ""; // Limpia el contenido

  if (preguntaIndex < preguntas.length) {
    const preguntaDiv = document.createElement("div");
    preguntaDiv.classList.add("question");
    preguntaDiv.textContent = preguntas[preguntaIndex];

    const btnVerdadero = document.createElement("button");
    btnVerdadero.textContent = "Verdadero";
    btnVerdadero.onclick = () => guardarRespuesta(true);

    const btnFalso = document.createElement("button");
    btnFalso.textContent = "Falso";
    btnFalso.classList.add("false-btn");
    btnFalso.onclick = () => guardarRespuesta(false);

    preguntaDiv.appendChild(document.createElement("br"));
    preguntaDiv.appendChild(btnVerdadero);
    preguntaDiv.appendChild(btnFalso);

    contenedor.appendChild(preguntaDiv);
  } else {
    contenedor.innerHTML = "<h3>Cuestionario completado.</h3><p>Gracias por responder.</p>";
    console.log("Respuestas:", respuestas);
  }
}

function guardarRespuesta(valor) {
  respuestas.push(valor);
  preguntaIndex++;
  mostrarPregunta();
}

// Inicia con la primera pregunta
mostrarPregunta();