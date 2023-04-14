

const elemento = document.getElementById('ele1');

elemento.addEventListener("click", () => pintar("yellow"))
    
function pintar(color = "green"){
    elemento.style.backgroundColor = color
}

pintar()