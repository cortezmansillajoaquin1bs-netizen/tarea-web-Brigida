document.getElementById("btnCalcular").addEventListener("click", calcularAhorro);

function calcularAhorro() {
    let meses = parseInt(document.getElementById("mesesInput").value);
    let output = document.getElementById("resultadoBox");
    
    if(isNaN(meses) || meses <= 0) {
        output.innerHTML = "<p style='color:red;'>Ingrese un número de meses válido.</p>";
        return;
    }

    output.innerHTML = "";
    let a = 0, b = 1, c;
    let totalAhorrado = 0;

    for (let i = 1; i <= meses; i++) {
        let depositoActual;
        if (i === 1) depositoActual = a;
        else if (i === 2) depositoActual = b;
        else {
            c = a + b; a = b; b = c;
            depositoActual = c;
        }
        
        totalAhorrado += depositoActual;
        output.innerHTML += `
            <div class="mes-item">
                <span><strong>Mes ${i}:</strong> Depósito requerido</span>
                <span>Bs. ${depositoActual}</span>
            </div>`;
    }
    output.innerHTML += `
        <div class="total-box">
            <strong>Total Capital Acumulado:</strong> Bs. ${totalAhorrado}
        </div>`;
}