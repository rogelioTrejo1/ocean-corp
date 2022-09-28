//Variables Globales!!
const api = new ApiRest();
const componet = new Componete();
const id = document.getElementById('id').value;
const calle = document.getElementById('Calle');
const numeroInterno = document.getElementById('Num-Int');
const numeroExterno = document.getElementById('Num-Ext');
const fraccionamiento = document.getElementById('Fracciona');
const codigoPostal = document.getElementById('Codigo-Postal');
const telefono = document.getElementById('Telefono');
const email = document.getElementById('Email');
const comentarioUbicacion = document.getElementById('comen-ubi');
const nombre = document.getElementById('Nombre');
const paterno = document.getElementById('Paterno');
const materno = document.getElementById('Materno');
const username = document.getElementById('Username');
const oldPassword = document.getElementById('Pass1');
const newPassword = document.getElementById('Pass2');
const btnGuardar = document.getElementById('Guardar');
const btnActualizar = document.getElementById('Actualizar');
const alertMessges = document.getElementById('messages');
var banderaDatos,banderaMenssage = false;

document.addEventListener('DOMContentLoaded',async ()=>{
    const datosCliente = await api.getDatosCliente(id);
  
    if(datosCliente.length > 0){
        calle.value = datosCliente[0].Calle;
        numeroInterno.value = datosCliente[0].No_Interno;
        numeroExterno.value = datosCliente[0].No_Externo;
        fraccionamiento.value = datosCliente[0].Fraccionamiento;
        codigoPostal.value = datosCliente[0].Codigo_Postal;
        telefono.value = datosCliente[0].Telefono;
        email.value = datosCliente[0].Email;
        comentarioUbicacion.value = datosCliente[0].Ayuda;

        btnGuardar.disabled = true;
        banderaDatos = false;
    } else{
        btnActualizar.disabled = true;
        banderaDatos = true;
    }
});

//Actualizar y guardar datos de entrega para los pedidos!!!!!
document.getElementById('form-Datos')
    .addEventListener('click',async (e)=>{
        if (e.target.classList.contains('btn-block')){
           
            if ((calle.value.length && numeroInterno.value.length && numeroExterno.value.length && fraccionamiento.value.length && codigoPostal.value.length && telefono.value.length && email.value.length && comentarioUbicacion.value.length) > 0){
                const datosCliente = {
                    ID_cliente: id,
                    Calle: calle.value,
                    No_Interno: numeroInterno.value,
                    No_Externo: numeroExterno.value,
                    Fracci: fraccionamiento.value,
                    Codigo_Postal: codigoPostal.value,
                    Telefono: telefono.value,
                    Email: email.value,
                    Ayuda: comentarioUbicacion.value
                };
                //Guardar datos por primera vez!
                if (e.target.classList.contains('guardar')){
                    const respDatos = await api.postDatosCliente(datosCliente);

                    if (respDatos.Text === 'Insertado') {
                        messageAlert('success', 'Datos Insertados!!');
                    }
                }
                //actualizar datos!
                if (e.target.classList.contains('actualizar')){
                    const respDatos = await api.putDatosClientes(datosCliente);

                    if (respDatos.Text === 'Actualizado!') {
                        messageAlert('success', 'Datos Actualizados!!!');
                    }
                }

            } else{
                messageAlert('warning', 'Verifique que todos sus campos sean correcto y esten llenos!');
            }
            
        }

    });

//Actualizar datos Principales del usuario!
document.getElementById('form-register')
    .addEventListener('click',async (e)=>{
        if (e.target.classList.contains('btn-block')){

            if((nombre.value.length && paterno.value.length && materno.value.length && username.value.length && oldPassword.value.length && newPassword.value.length) > 0){
                const userUpdate = {
                    ID_cliente: id,
                    Nombre: nombre.value,
                    Paterno: paterno.value,
                    Materno: materno.value,
                    Username: username.value,
                    Pass: newPassword.value
                };

                if(oldPassword.value === newPassword.value){
                    const respCliente = await api.putCliente(userUpdate);

                    if(respCliente.Text === 'Actualizado'){
                        messageAlert('success', 'Datos Actualizados!!');           
                    }
                } else{
                    messageAlert('danger', 'Las Contraseñas no coinciden!'); 
                }


            } else{
                //Mensaje de error de datos!!!
                messageAlert('warning', 'Verifique que todos sus campos sean correcto y esten llenos!');
            }
        }
    });


//Funciones

/* Mensage Alert */
function messageAlert(color,mensaje){
    if (!banderaMenssage) {
        banderaMenssage = true;
        const alert = componet.alert(color, mensaje);
        alertMessges.appendChild(alert);
        setTimeout(() => {
            document.querySelector('.message').remove();
            banderaMenssage = false;
        }, 3000);
    }
}