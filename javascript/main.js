// console.log("hola mundo") ; 

//DOM
//querySelector /querySelectorAll
// let links=document.querySelectorAll("a") ; 

// links.forEach(function(link)  {
//     console.log(link) ; 
// } )


// let celdas = document.querySelectorAll("td") ; 
// celdas.forEach(function(td){
//     td.addEventListener('click', function() {
//         console.log(this); 
//     } )
//  } ) ; 


/*Obtener los elementos de la clase .close*/

//Recorrerlos

//Agergar un evento click a cada uno de ellos

let cerrar = document.querySelectorAll(".close") ; 

cerrar.forEach(function(clos){
    clos.addEventListener('click', function(){
        console.log(this) ; 
        })
})


let iconos = document.querySelectorAll("i") ; 

iconos.forEach(function(icono){
    icono.classList.remove("bi-star-fill") ; 
}) 


