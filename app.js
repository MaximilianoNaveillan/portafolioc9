const proyectoscontainer = document.querySelector(".proyectos-container");

proyectosData.forEach((proyecto,index) =>{
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
})