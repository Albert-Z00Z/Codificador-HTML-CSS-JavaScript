function process() {
    let = document.getElementById("text").value;
    let option = document.querySelector('input[name="option"]:checked') ? document.querySelector('input[name="option"]:checked').value : "";
    let result = "";

    if (option == "encrypt") {
        result = let.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    } else if (option == "decrypt") {
        result = let.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    }

    document.getElementById("result").value = result;
}

// Función de copiado
function copy() {
    result = document.getElementById("result");
    result.select();
    result.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Texto copiado: " + result.value);
}

function clearText() {
    document.getElementById("text").value = "";
    document.getElementById("result").value = "";
}

document.getElementById("encrypt").addEventListener("click", function() {
    process();
    
});

document.getElementById("decrypt").addEventListener("click", function() {
    process();
});
