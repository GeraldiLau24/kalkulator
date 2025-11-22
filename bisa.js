const angkapertama = document.getElementById("number1")
const angkakedua = document.getElementById("number2")
const bagianopasi = document.getElementById("operator")
const buutonnya = document.getElementById("Hasil")
const outputnya = document.getElementById("output")
buutonnya.addEventListener("click",
     function(){
        const number1 = Number(angkapertama.value);
        const number2 = Number(angkakedua.value);
        const operator = Number(bagianopasi.value)
        
        let jadi = 0;
    if(operator === 1){
        jadi = number1 + number2
        
    }
    else if(operator === 2){
        jadi = number1 - number2
       
    }
    else if(operator === 3){
        jadi = number1 * number2
      
    }
    else if(operator === 4){
        jadi = number1 / number2
       
    }
    else if(operator === 5){
        jadi = number1 ** number2
        
    }else{
        "number invalid"
        return jadi;
    }
    outputnya.textContent = "Hasil : "+ jadi;
}
);

