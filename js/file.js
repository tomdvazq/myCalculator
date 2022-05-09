let messageArray = ["> welcome to myCalculator!"];
let textPosition = 0;
let speed = 100;

typeWriter = () => {
    document.querySelector("#text").innerHTML = messageArray[0].substring(0, textPosition) + "<span>\u25ae</span>";

    if(textPosition++ != messageArray[0].lenght)
        setTimeout(typeWriter, speed);
}

window.addEventListener("load", typeWriter);