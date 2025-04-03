function checarWhile() {
    num1 = parseInt(document.getElementById('num1').value);
    num2 = parseInt(document.getElementById('num2').value);
    i = num1 + 1;
    contagemDePares = 0;
    if (num1 < num2) {
        while (i < num2) {
            if (i % 2 == 0) {
                contagemDePares++;
            }
            i++;
        }
        alert('A contagem de números pares é ' + contagemDePares);
    }
    else {
        alert('O primeiro número deve ser menor que o segundo!');
    }
}

function checarDo() {
    num1 = parseInt(document.getElementById('num1').value);
    num2 = parseInt(document.getElementById('num2').value);
    i = num1 + 1;
    contagemDePares = 0;
    if (num1 < num2) {
        do {
            if (i % 2 == 0) {
                contagemDePares++;
            }
            i++;
        } while (i < num2);
        alert('A contagem de números pares é ' + contagemDePares);
    }
    else {
        alert('O primeiro número deve ser menor que o segundo!');
    }
}
function checarFor() {
    num1 = parseInt(document.getElementById('num1').value);
    num2 = parseInt(document.getElementById('num2').value);
    contagemDePares = 0;
    if (num1 < num2) {
        for (i = num1 + 1; i < num2; i++) {
            if (i % 2 == 0) {
                contagemDePares++;
            }
        }
        alert('A contagem de números pares é ' + contagemDePares);
    }
    else {
        alert('O primeiro número deve ser menor que o segundo!');
    }
}