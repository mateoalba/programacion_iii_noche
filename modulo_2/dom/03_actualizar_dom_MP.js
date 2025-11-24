const mensaje = document.getElementById("mensaje");
mensaje.textContent = "CITA ACTUALIZADA DESDE JS";
mensaje.style.color = "blue";

const link = document.getElementById("link");
link.setAttribute('href', 'https://www.iess.gob.ec/aplicaciones/Citas_Medicas_Chatbot/');
link.classList.add('boton');
link.textContent = "Ir al Portal Médico";
