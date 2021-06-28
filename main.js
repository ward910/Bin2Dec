function calcular() {
        const number = document.getElementById("Bin"); // Id de Bin
        const dec = document.getElementById("Dec"); // Id de Dec
        const n = parseInt(number.value, 2); // Transforma um numero binario en decimal
        
        dec.value = n;
    }