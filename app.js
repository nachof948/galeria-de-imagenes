/* VARIABLES */
const imagenes = [{img: 'Img/01.jpg'},{img: 'Img/02.jpg'},{img: 'Img/03.jpg'},{img: 'Img/04.jpg'},{img: 'Img/05.jpg'},{img: 'Img/06.jpg'}, {img: 'Img/07.jpg'},{img: 'Img/08.jpg'},{img: 'Img/09.jpg'},{img: 'Img/10.jpg'},{img: 'Img/11.jpg'},{img: 'Img/12.jpg'},{img: 'Img/13.jpg'},{img: 'Img/14.jpg'},{img: 'Img/15.jpg'},{img: 'Img/16.jpg'},{img: 'Img/17.jpg'},{img: 'Img/18.jpg'},{img: 'Img/19.jpg'},{img: 'Img/20.jpg'},{img: 'Img/21.jpg'},{img: 'Img/22.jpg'},{img: 'Img/23.jpg'},{img: 'Img/24.jpg'},{img: 'Img/25.jpg'},{img: 'Img/26.jpg'},{img: 'Img/27.jpg'},{img: 'Img/28.jpg'},{img: 'Img/29.jpg'},{img: 'Img/30.jpg'},{img: 'Img/31.jpg'},{img: 'Img/32.jpg'},{img: 'Img/33.jpg'},{img: 'Img/34.jpg'},{img: 'Img/35.jpg'},{img: 'Img/36.jpg'},{img: 'Img/37.jpg'},{img: 'Img/38.jpg'},{img: 'Img/39.jpg'},{img: 'Img/40.jpg'},{img: 'Img/41.jpg'},{img: 'Img/42.jpg'},{img: 'Img/43.jpg'},{img: 'Img/44.jpg'},{img: 'Img/45.jpg'},{img: 'Img/46.jpg'},{img: 'Img/47.jpg'},{img: 'Img/48.jpg'},{img: 'Img/49.jpg'},{img: 'Img/50.jpg'},{img: 'Img/51.jpg'},{img: 'Img/52.jpg'},{img: 'Img/53.jpg'},{img: 'Img/54.jpg'},{img: 'Img/55.jpg'},{img: 'Img/56.jpg'}];
const contenedor = document.querySelector('.slideshow');
const overlay = document.querySelector('.overlay');
const galeria_imagenes = document.querySelectorAll('.galeria img');
const img_slideshows = document.querySelector('.slideshow img');
const nombre_foto = document.getElementById("nombre-foto")
const btnCerrar = document.querySelector('.btn_cerrar')
const atras = contenedor.querySelector('.atras')
const adelante = contenedor.querySelector('.adelante')
const img = contenedor.querySelector('img')
let contador = 0


/* FUNCIONES */
const carrousel = (event) =>{
    let tgt = event.target
    if (tgt == atras) {
        if (contador > 0) {
            img.src = imagenes[contador - 1].img
            contador--
        } else {
            img.src = imagenes[imagenes.length - 1].img
            contador = imagenes.length - 1
        }
    } else if (tgt == adelante) {
        if (contador < imagenes.length - 1) {
            img.src = imagenes[contador + 1].img
            contador++
        } else {
            img.src = imagenes[0].img
            contador = 0
        }
    }
    nombre_foto.innerHTML = imagenes[contador].img;
} 

    Array.from(galeria_imagenes).forEach(img => {
        img.addEventListener('click', event => {
            const imagen_seleccionada = +(event.target.dataset.imgMostrar)
            img_slideshows.src = imagenes[imagen_seleccionada].img
            contador = imagen_seleccionada
            nombre_foto.innerHTML = imagenes[imagen_seleccionada].img
            overlay.style.opacity = 1
            overlay.style.visibility = 'visible'
        })
    })


/* EVENTOS */
contenedor.addEventListener('click', carrousel) 
btnCerrar.addEventListener("click", () =>{
    overlay.style.visibility = "hidden"
})
btn.addEventListener("click", ()=>{
    cuerpo.classList.toggle("modoOscuro")
})

