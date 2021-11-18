/* Enviar informacion a whastapp_menj */

const f = document.getElementById("formulario");
const btnSend = document.querySelector(".whastapp_menj--button");

btnSend.addEventListener("click",(e)=>{
    e.preventDefault();
    let datos = new FormData(f);

    window.open(`https://wa.me/+51966415462?text= ${datos.get('text_m')}`);
})

////////////////////////////////////////////////////////////////////////


/* Efecto de cerrar ventana */

const cerrar = document.querySelector('.whastapp_menj--cerrar');
const content_figure  = document.querySelector('.content_figure ');
const container_chat = document.querySelector('#container_chat');
const cont = document.querySelector('.container_whastapp--item');

cerrar.addEventListener("click",(e)=>{
    // console.log('gaaaaaaaaaaaaaaaaaa');
    // container_chat.classList.toggle('cerrar_whastapp')
    condicion_cerrar();
})

content_figure.addEventListener('click',(e)=>{
    condicion_cerrar();
    // console.log('gaaaaa 2')
    // container_chat.classList.toggle('cerrar_whastapp')
})

const condicion_cerrar = ()=>{
    container_chat.classList.toggle('abrir_whastapp')
    if(container_chat.classList.contains('abrir_whastapp')){
        setTimeout(() => {
            container_chat.classList.add('d-aparecer');
        }, 200)
    }else{
        container_chat.classList.remove('d-aparecer');
        
    }
}
