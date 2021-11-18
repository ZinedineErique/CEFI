/* Enviar informacion a whastapp_menj */

const f = document.getElementById("formulario");
const btnSend = document.querySelector(".whastapp_menj--button");
let disparador =0;

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
    disparador++
    disparador === 2 ? cerrar_ventana(): condicion_cerrar();;
})

content_figure.addEventListener('click',(e)=>{
    disparador++
    console.log(disparador);
    disparador === 2 ? cerrar_ventana(): condicion_cerrar();;
})

const condicion_cerrar = ()=>{
    if(container_chat.classList.toggle('abrir_whastapp')){
        setTimeout(() => {
            container_chat.classList.toggle('d-aparecer');
        }, 200)
    }
}

const cerrar_ventana = ()=>{
    disparador =0;
    container_chat.classList.toggle('d-aparecer');
    setTimeout(()=>{container_chat.classList.toggle('abrir_whastapp')},350)
}
