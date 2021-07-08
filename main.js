function calcular() {
        const number = document.getElementById("Bin"); // Bin Id
        const dec = document.getElementById("Dec"); // Dec Id
        const n = parseInt(number.value, 2); // Transform a binary number to decimal
        
        dec.value = n;
    }
