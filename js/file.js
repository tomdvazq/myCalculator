let i = 0;
let text = ">bienvenido a myCalculator!";

function typing(){
    if(i < text.length){
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,70);
    }
}

typing();