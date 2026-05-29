document.getElementById("btnCalcular").addEventListener("click", procesarDesafio);

function procesarDesafio() {
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let contenedorResultado = document.getElementById("resultado");
    
    if (isNaN(cantidad) || cantidad <= 0) {
        contenedorResultado.innerHTML = "<p style='color: red;'>Por favor, ingrese un número válido mayor a 0.</p>";
        return;
    }

    contenedorResultado.innerHTML = "";
    let a = 0, b = 1, c;

    for (let i = 1; i <= cantidad; i++) {
        let numeroActual;
        if (i === 1) numeroActual = a;
        else if (i === 2) numeroActual = b;
        else {
            c = a + b; a = b; b = c;
            numeroActual = c;
        }

        let esPrimo = verificarSiEsPrimo(numeroActual);
        let clasePrimo = esPrimo ? "item-numero es-primo" : "item-numero";
        let etiquetaPrimo = esPrimo ? "<span class='badge-primo'>¡Es Primo!</span>" : "<span>No es primo</span>";

        contenedorResultado.innerHTML += `
            <div class="${clasePrimo}">
                <span><strong>Término ${i}:</strong> Valor = ${numeroActual}</span>
                ${etiquetaPrimo}
            </div>`;
    }
}

function verificarSiEsPrimo(numero) {
    if (numero <= 1) return false;
    let contadorDivisores = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) contadorDivisores++;
    }
    return contadorDivisores === 2;
}