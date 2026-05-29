document.getElementById("btnSimular").addEventListener("click", simularPoblacion);

function simularPoblacion() {
    let ciclos = parseInt(document.getElementById("ciclosInput").value);
    let output = document.getElementById("resultadoBox");
    
    if(isNaN(ciclos) || ciclos <= 0) {
        output.innerHTML = "<p style='color:red;'>Ingrese un número de ciclos válido.</p>";
        return;
    }

    output.innerHTML = "";
    let a = 0, b = 1, c;

    for (let i = 1; i <= ciclos; i++) {
        let especímenes;
        if (i === 1) especímenes = a;
        else if (i === 2) especímenes = b;
        else {
            c = a + b; a = b; b = c;
            especímenes = c;
        }
        
        output.innerHTML += `
            <div class="bio-item">
                <span><strong>Generación ${i}:</strong> Población activa</span>
                <span>${especímenes} individuos</span>
            </div>`;
    }
}