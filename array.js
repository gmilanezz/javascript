function exc1() {
    const a = [];
    let somat = 0;
    for (let i = 0; i < 9; i++) {
        a[i] = parseFloat(prompt('Digite o ' + (i + 1) + 'º elemento do array'));
        somat += a[i];
        alert('Soma dos elementos: ' + somat);
    }
}


function exc2() {
    const a = [];
    const b = [];
    for (i = 0; i < 9; i++) {
        a[i] = parseFloat(prompt('Digite o ' + i + 'º elemento do array'));
        if (a[i] % 2 == 0) {
            b.push(a[i])
        }
    }
    alert(b.join(' - '));
}