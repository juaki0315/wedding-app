// Variables globales
const registrationForm = document.getElementById('registrationForm');
const questionnaire = document.getElementById('questionnaire');
const nameInput = document.getElementById('nameInput');
const registerBtn = document.getElementById('registerBtn');
const submitBtn = document.getElementById('submitBtn');

// Comprobar si el usuario ya está registrado
const user = localStorage.getItem('user');
if (user) {
  showQuestionnaire();
} else {
  showRegistrationForm();
}

// Evento para registrar al usuario
registerBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  if (name !== '') {
    localStorage.setItem('user', name);
    showQuestionnaire();
  }
});

// Evento para enviar las respuestas del cuestionario
submitBtn.addEventListener('click', () => {
  // Aquí puedes obtener las respuestas del cuestionario y guardarlas en el backend (por ejemplo, en Firebase)
  alert('¡Gracias por completar el cuestionario!');
});

// Función para mostrar el formulario de registro
function showRegistrationForm() {
  registrationForm.style.display = 'block';
  questionnaire.style.display = 'none';
}

// Función para mostrar el cuestionario
function showQuestionnaire() {
  registrationForm.style.display = 'none';
  questionnaire.style.display = 'block';
}
