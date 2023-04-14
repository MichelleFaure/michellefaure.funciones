
let colorSeleccionado

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        colorSeleccionado = "black"
    } 
    else if (event.key === 's') {
        colorSeleccionado = "blue"
    }
    else if (event.key === 'd') {
        colorSeleccionado = "red"
        }

    else{
        alert("Solo letra a, s o d")
    }
    })

    let divs = document.querySelectorAll(".ele");

    divs.forEach(function(div){
        div.addEventListener("click", function(e){
            e.currentTarget.style.backgroundColor = colorSeleccionado
        })
    });
