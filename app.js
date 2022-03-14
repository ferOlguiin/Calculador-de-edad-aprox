const año = document.getElementById("año");
const btn = document.getElementById("botonEnviar");

const fecha = new Date;
const verAño = fecha.getFullYear();



btn.addEventListener("click", () => {
    const cuerpo = document.querySelector(".cuerpo")
    const template = document.getElementById("template");
    const destino = document.getElementById("templateDestino");
    const fragment = document.createDocumentFragment();
    const clone = template.content.cloneNode(true);     
    const resultAños = verAño - año.value;

    clone.querySelector(".textFinal3").textContent = resultAños;
    clone.querySelector(".textFinal2").textContent = resultAños*12;
    clone.querySelector(".textFinal").textContent = resultAños*365;

    cuerpo.classList.add("tierra");

    fragment.appendChild(clone);
    destino.appendChild(fragment);
    
})

