/* VARIABLES */
const btn = document.getElementById("btn")
const cuerpo = document.getElementById("cuerpo")

/* FUNCIONES */

/* EVENTOS */
btn.addEventListener("click", ()=>{
    cuerpo.classList.toggle("modoOscuro")
})