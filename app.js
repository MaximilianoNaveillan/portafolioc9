const proyectoscontainer = document.querySelector(".proyectos-container");
const btn = document.querySelector("#button")

emailjs.init(config.emailjsUserId)


function mostrarFormulario(){
    document.querySelector('.overlay').style.display='block';
    document.querySelector('.popup-container').style.display='block';
}

function cerrarFormulario(){
    document.querySelector('.overlay').style.display='none';
    document.querySelector('.popup-container').style.display='none';
}


document.getElementById('form')
.addEventListener('submit', function(event){
    event.preventDefault(); // ===> captura, bloquea el evento

    btn.value = "Enviando..."

    const serviceID = 'default_service';
   const templateID = config.emailTemplate;

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });

})


let render= '';
proyectosData.forEach((proyecto,index) =>{

    render=render+`<div class="proyecto-card">
    <img 
    src="${proyecto.imagen}"
    alt="${proyecto.nombre}"
    class="proyecto-img"
    >
    <div class="proyecto-info">
        <div class="proyecto-nombre">
            ${proyecto.nombre}
        </div>
        <div class="proyecto-descripcion">
            ${proyecto.descripcion}
        </div>
        <a 
        class="proyecto-enlace"
        href="${proyecto.enlaceGithub}">
        ver en Github.
        </a>
    </div>
    
    </div>`
    /* 
    //  1)
    // Crear un nuevo elemento 'div' peara representar una tarjeta de producto
    const proyectoCard=document.createElement('div');
    // se agrega una clase a el div creado
    proyectoCard.classList.add('proyecto-card');

    // 2)
    // Crear un elemento div 'proyecto-ifo'
    const proyectoInfo = document.createElement('div');
    // Se agrega la clase 'proyecto-info'
    proyectoInfo.classList.add('proyecto-info');

        // 2.a) ====> nombre
        const nombre = document.createElement('div');
        nombre.classList.add('proyecto-nombre');
        nombre.textContent = proyecto.nombre

        // 2.b) ====> descripción
        const descripcion =document.createElement('div');
        descripcion.classList.add('proyecto-descripcion');
        descripcion.textContent = proyecto.descripcion;

        // 2.c) ====> enlace
        const enlace= document.createElement('a');
        enlace.classList.add('proyecto-enlace');
        enlace.href= proyecto.enlaceGithub;
        enlace.target = '_blank';
        enlace.textContent = "ver en gitHub";

        proyectoInfo.appendChild(nombre);
        proyectoInfo.appendChild(descripcion);
        proyectoInfo.appendChild(enlace);


    // 3)
    // Crear un elemento img para la imagen del proyecto
    const image = document.createElement('img');
    // Se agrega la clase a el elemeto img
    image.classList.add('proyecto-img');
    image.src= proyecto.imagen;
    image.alt= proyecto.nombre;

    



    // 3)
    // Añadir imagen dentro de Proyecto card
    proyectoCard.appendChild(image)

    // 2)
    // Añadir Proyecto info dentro proyecto card
    proyectoCard.appendChild(proyectoInfo) 

    // 1)
    // agregar el elemento de clase proyecto card
    proyectoscontainer.appendChild(proyectoCard)
    */
}) 

proyectoscontainer.innerHTML= render