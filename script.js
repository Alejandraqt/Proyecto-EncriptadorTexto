const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")


function encripta(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none"
    inputTexto.value = ""
}


function encriptar(stringEncriptada){
    //let matrizCodigo = [["a", "ai"],["e", "enter"],["i", "imes"],["o", "ober"],["u", "ufat"]];
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        } 
    }
    return stringEncriptada;
}


function desencripta(){
    const textoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    mensaje.style.backgroundImage = "none"
    inputTexto.value = ""
}


function desencriptar(stringDesencriptada){
    //let matrizCodigo = [["a", "ai"],["e", "enter"],["i", "imes"],["o", "ober"],["u", "ufat"]];
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        } 
    }
    return stringDesencriptada;
}


function copiar(){
    navigator.clipboard.writeText(mensaje.value)
        .then(() => {
        console.log("Texto copiado...");
    })
        .catch(err => {
        console.log("Hay un erros", err);
    })
}