let imagenes = [
    {img: 'https://github.com/nachof948/galeria-de-imagenes/blob/main/Img/01%20(V).jpg'},
    {img: '/Img/02 (H).jpg'},
    {img: '/Img/03 (H).jpg'},
    {img: '/Img/04 (H).jpg'},
    {img: '/Img/05 (V).jpg'},
    {img: '/Img/06 (H).jpg'},
    {img: '/Img/07 (V).jpg'},
    {img: '/Img/08 (H).jpg'},
    {img: '/Img/09 (H).jpg'},
    {img: '/Img/10 (V).jpg'},
    {img: '/Img/11 (H).jpg'},
    {img: '/Img/12 (H).jpg'},
    {img: '/Img/13 (V).jpg'},
    {img: '/Img/14 (V).jpg'},
    {img: '/Img/15 (H).jpg'},
    {img: '/Img/16 (H).jpg'},
    {img: '/Img/17 (V).jpg'},
    {img: '/Img/18 (H).jpg'},
    {img: '/Img/19 (V).jpg'},
    {img: '/Img/20 (H).jpg'},
    {img: '/Img/21  (V).jpg'},
    {img: '/Img/22 (V).jpg'},
    {img: '/Img/23 (V).jpg'},
    {img: '/Img/24 (H).jpg'},
    {img: '/Img/25 (H).jpg'},
    {img: '/Img/26 (H).jpg'},
    {img: '/Img/27 (H).jpg'},
    {img: '/Img/28 (H).jpg'},
    {img: '/Img/29 (H).jpg'},
    {img: '/Img/30 (V).jpg'},
    {img: '/Img/31 (V).jpg'},
    {img: '/Img/32 (V).jpg'},
    {img: '/Img/33 (V).jpg'},
    {img: '/Img/34 (V).jpg'},
    {img: '/Img/35 (H).jpg'},
    {img: '/Img/36 (H).jpg'},
    {img: '/Img/37 (V).jpg'},
    {img: '/Img/38 (V).jpg'},
    {img: '/Img/39 (H).jpg'},
    {img: '/Img/40 (V).jpg'},
    {img: '/Img/41 (H).jpg'},
    {img: '/Img/42 (V).jpg'},
    {img: '/Img/43 (H).jpg'},
    {img: '/Img/44 (H).jpg'},
    {img: '/Img/45 (V).jpg'},
    {img: '/Img/46 (H).jpg'},
    {img: '/Img/47 (H).jpg'},
    {img: '/Img/48 (H).jpg'},
    {img: '/Img/49 (H).jpg'},
    {img: '/Img/50 (H).jpg'},
    {img: '/Img/51 (V).jpg'},
    {img: '/Img/52 (H).jpg'},
    {img: '/Img/53 (V).jpg'},
    {img: '/Img/54 (H).jpg'},
    {img: '/Img/55 (V).jpg'},
    {img: '/Img/56 (H).jpg'}
    ];
document.addEventListener('DOMContentLoaded', function() {
    let contador = 0
    const contenedor = document.querySelector('.slideshow');
    const overlay = document.querySelector('.overlay');
    const galeria_imagenes = document.querySelectorAll('.galeria img');
    const img_slideshows = document.querySelector('.slideshow img');
    const nombre_foto = document.getElementById("nombre-foto")


    contenedor.addEventListener('click', function(event) {
        let atras = contenedor.querySelector('.atras')
        let adelante = contenedor.querySelector('.adelante')
        let img = contenedor.querySelector('img')
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
    })
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

    let span = document.getElementsByClassName("btn_cerrar")[0];
    span.onclick = function() {
        overlay.style.visibility = "hidden";
    }
})

btn.addEventListener("click", ()=>{
    cuerpo.classList.toggle("modoOscuro")
})

