function CalculateBhaskara(a, b, c) {
    const delta = (b * b) - 4 * a * c;

    if (delta < 0) {
        return 'Delta negativo'
    }

    const x1 = ((-b) + Math.sqrt(delta)) / 2*a;

    const x2 = ((-b) - Math.sqrt(delta)) / 2*a;

    const result = {
        x1,
        x2
    }

    return result;
}

function handleSubmit() {
    const a = document.getElementById('a').value;
    const b = document.getElementById('b').value;
    const c = document.getElementById('c').value;

    const { x1, x2 } = CalculateBhaskara(a, b, c);

    console.log(x1, x2);

    document.getElementById('x1').innerText = x1;
    document.getElementById('x2').innerText = x2;
}

