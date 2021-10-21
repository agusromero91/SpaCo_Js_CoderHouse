/* -------------- Contactos ------------ */
//Sumar contactos de la pagina "contacto" del sitio
class Contact {
    constructor (nombre, mail, tel, consulta){
        this.nombre = nombre;
        this.mail = mail; 
        this.tel = tel;
        this.consulta = consulta;
    }

}

let listaContactos = [];

//declaro variables
const nombree = document.getElementById("nombre");
const mail = document.getElementById("mail");
const mail = document.getElementById("tel");
const mail = document.getElementById("consulta");

const nuevoContacto = (contacto) => {

    const contactoP = document.createElement("div")

    const contactoNombre = document.createElement("h4")
    contactoNombre.textContent =contacto.nombre
    contactoP.appendChild(contactoNombre)

    const contactoMail = document.createElement("p")
    contactoMail.textContent =contacto.mail
    contactoP.appendChild(contactoMail)

    const contactoTel = document.createElement("p")
    contactoTel.textContent =contacto.tel
    contactoP.appendChild(contactoTel)

    const contactoConsulta = document.createElement("p")
    contactoConsulta.textContent =contacto.consulta
    contactoP.appendChild(contactoConsulta)
    

    document.getElementById("contactoNuevo").appendChild(contactoP)

}  

//Evento para enviar la info de los nuevos contactos cargados en el formulario
formularioContacto.addEventListener('submit', (e) => {
    e.preventDefault(contacto)
    const contacto = new Contact (nombre.value, mail.value, tel.value, consulta.value);
    listaContactos.push (contacto);
    console.log(listaContactos);
    formularioContacto.reset();
    nuevoContacto(contacto);
    
  })