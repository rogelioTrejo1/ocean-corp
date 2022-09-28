class Componete{
    alert(color,message){
        const alert = document.createElement('div');
        alert.className =`alert alert-${color} message`;
        alert.appendChild(document.createTextNode(message));
        return alert;
    }
}