/* VARIABLES */
const btn = document.getElementById("btn")
const cuerpo = document.getElementById("cuerpo")

btn.addEventListener("click", ()=>{
    cuerpo.classList.toggle("modoOscuro")
})