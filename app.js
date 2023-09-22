import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const conf_pass = document.getElementById("confirm_password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
// Importa la biblioteca de Firebase y configúrala con tus propios datos
const firebaseConfig = {
    apiKey: "AIzaSyCA6SREZWlzCH_EdBxFqoRcOlzVNzjY1MM",
    authDomain: "wedding-app-3814c.firebaseapp.com",
    projectId: "wedding-app-3814c",
    storageBucket: "wedding-app-3814c.appspot.com",
    messagingSenderId: "1042163815689",
    appId: "1:1042163815689:web:49117c7585311b980dafd8",
    measurementId: "G-7ER7SR717P"
  };
  
  // Inicializa Firebase
  const app = firebase.initializeApp(firebaseConfig);
  
form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warnings += 'El nombre no es valido <br>'
        entrar = false
    }
    if(!regexEmail.test(email.value)){
        warnings += 'El email no es valido <br>'
        entrar = false
    }
    if(pass.value.length < 8){
        warnings += 'La contraseña no es valida <br>'
        entrar = false
    }

    if(pass.value != conf_pass.value){
        warnings += 'Las contraseñas no coinciden <br>'
        entrar = false
    }

    if(!entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
        // Registra un usuario con correo electrónico y contraseña
        firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then((userCredential) => {
        // Registro exitoso
            const user = userCredential.user;
            console.log("Usuario registrado:", user);
        })
        /*.catch((error) => {
        // Hubo un error en el registro
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error al registrar usuario:", errorMessage);
        });*/

    }
})