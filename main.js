let errorNombre= document.querySelector("#errorNombreId")
let errorApellido= document.querySelector("#errorApellidoId")

function mandarData( ){
    const nombre = document.querySelector("#nombreId").value
    const apellido = document.querySelector("#apellidoId").value
    const edad = document.querySelector("#edadId").value
    const anios = document.querySelector("#aniosId").value
    const email = document.querySelector("#emailId").value
    const mostraRango = document.querySelector("#mostraRangoId").value
    const estadoCivil = document.querySelector("#estadoCivilId").value
    const mascotas = document.querySelector("#chanchoId")



    const genero = document.querySelector("#generoId")
    
    const Objeto = {
         nombre,
         apellido,
         edad,
         anios,
         email,
         mostraRango,
         estadoCivil,
         mascotas,
         genero
     }
     console.log(Objeto)
    getValidation(Objeto)
}

function getValidation({nombre,apellido,edad,anios,email,mostraRango,estadoCivil,mascotas,genero}) {
    if (nombre.length === 0){
        errorNombre.innerHTML = "Escriba su Nombre"
        errorNombre.style.color = "red"
    }
    if (mascotas.checked === true){
        errorApellido.innerHTML = "Escriba su Apellido"
        errorApellido.style.color = "red"
    }    

}

