//Variables glovales
const api = new ApiRest();
const component = new Componete();
const cuerpo = document.getElementById('Cuerpo');
const visualizador = document.querySelector('iframe');
const url = 'https://api.cloudinary.com/v1_1/dhngkzkti/image/upload';
const upload_preset = 'futwydlu';
var fileUpload;
var banderaMensaje = false;
console.log(document.getElementById('id').value);


//Carga de archivo
document.getElementById('file')
    .addEventListener('change',async (e)=>{
        const file = e.target.files[0];

        const formData = new FormData();
        formData.append('file',file);
        formData.append('upload_preset', upload_preset);

        const resp = await axios.post(url,formData,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        });

        fileUpload = resp.data.secure_url;
        visualizador.src = fileUpload;
        
    });

//Guardar pedido
document.getElementById('form-Copias')
    .addEventListener('submit',async (e)=>{
        e.preventDefault();

        const formData = {
            ID_Cliente: document.getElementById('id').value, 
            NumCopias: document.getElementById('Numero-copias').value, 
            ColorCopias: document.getElementById('color').value, 
            InterCopias: document.getElementById('Intervalos').value, 
            VistaCopias: document.getElementById('cara').value, 
            PaginaCopias: document.getElementById('pag_hoja').value, 
            TamañoCopias: document.getElementById('tamano').value, 
            PapelCopias: document.getElementById('papel').value,
            Documento: fileUpload
        };

        const resp = await api.postImprecion(formData);

        if(resp.Text === 'Insertado!') 
            mensajeAlert('success','Pedido realizado correctamente!!!!!',5000);
    });


//Funciones
function mensajeAlert(color, mensaje, time) {
    if (!banderaMensaje) {
        const alert = component.alert(color, mensaje);
        alert.classList.add('w-50', 'mx-auto');
        document.querySelector('.servicios')
            .insertBefore(alert,cuerpo);
        banderaMensaje = true;
        setTimeout(() => {
            document.querySelector('.message').remove();
            banderaMensaje = false;
        }, time);

    }
}