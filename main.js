function calcular() {
        const number = document.getElementById("Bin");
        const dec = document.getElementById("Dec");
        const n = parseInt(number.value, 2);
        
        dec.value = n;
    }