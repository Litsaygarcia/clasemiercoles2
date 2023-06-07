let boton=document.getElementById("Button")
let nombre=document.getElementById("Nombre")
let cedula=document.getElementById("Cedula")
let fecha =document.getElementById("Fecha")

//Detectando evento de click en el button del formulario

boton.addEventListener("click",function(evento){
    evento.preventDefault()
    let errores=[]

    let valorNombre=Nombre.value
    if(!valorNombre){
        nombre.classList.add("is-invalid")
        errores.push("El nombre es obligatorio")
    }
    let valorCedula=Cedula.value
    if(!valorCedula){
        cedula.classList.add("is-invalid")
        errores.push("La cedula es obligatorio")
    }
    let valorFecha=Fecha.value
    if(!valorFecha){
        fecha.classList.add("is-invalid")
        errores.push("La fecha es obligatorio")
    }
    if(errores.length>0){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Revisa tienes espacios sin completar!',
          })
    }else{
         
        let datos={
            nombreUsuario:valorNombre,
            cedulaUsuario:valorCedula,
            fecha:valorFecha
        }
        console.log(datos)


        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )
    }
 }) 