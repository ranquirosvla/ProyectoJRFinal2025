

//la crea array  
//lo -- crea objeto
//kv -- crea key : value 


export let Datos_LiNav = [

    {
        Id: 1, //numero
        Nombre: "Inicio",  // nombre en el menu o lo que ve el usuario 
        Detalle: "Proyecto",   // si es proyecto o practica
        Url: "Inicio.html",  // ruta de la pagina
        Activo: true // para visualizar u ocultar la pagina
    },
    {   Id: 2,
        Nombre: "Calculadora",
        Detalle: "Practica",      
        Url: "/Practica_Calculadora.html",
        Activo: false
    },
    {   Id: 3,
        Nombre: "API_Listado_Clientes", 
        Detalle: "Practica",     
        Url: "/Practica_Listado_Clientes.html",
        Activo: false
    },
    {   Id: 4,
        Nombre: "Tarea Pokemon",   
        Detalle: "Practica",  
        Url: "/Practica_TareaPokemon.html",
        Activo: false
    },
    {   Id: 5,
        Nombre: "Tarea Netflix",    
        Detalle: "Practica", 
        Url: "/Practica_TareaNetflix.html",
        Activo: false
    },
    {   Id: 7,
        Nombre: "API_TareaPokemon",    
        Detalle: "Proyecto", 
        Url: "/API_TareaPokemon.html",
        Activo: false
    },
    {   Id: 8,
        Nombre: "Pesca",    
        Detalle: "Proyecto", 
        Url: "/Pesca.html",
        Activo: true
    },
    {   Id: 9,
        Nombre: "Transporte",    
        Detalle: "Proyecto", 
        Url: "/Transporte.html",
        Activo: true
    },
    {   Id: 10,
        Nombre: "Contacto",    
        Detalle: "Proyecto", 
        Url: "/Contacto.html",
        Activo: true
    },
    {   Id: 11,
        Nombre: "Practica IF",    
        Detalle: "Practica ", 
        Url: "/Practica_IF.html",
        Activo: false
    },
    {   Id: 12,
        Nombre: "Practica CICLO",    
        Detalle: "Practica ", 
        Url: "/Practica_CICLO.html",
        Activo: false
    },
    {
        Id: 13,  
        Nombre: "Punto Extra",  
        Detalle: "Puntos Extra",  
        Url: "/puntoextra.html",  
        Activo: true  
    }
];

export let urlCompleta = window.location.href; // Obtiene la URL completa
export let nombrePagina = window.location.pathname.split("/").pop().replace(".html", ""); // Elimina ".html"




