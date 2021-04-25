//Typing Animation
var count = 0;  
var text = "Programmers";

//Calling function
typingEffect(); 

//Function definition
function typingEffect(){
    if(count < text.length){
        document.querySelector("#typed-text").innerHTML += text.charAt(count);
        count++;
        setTimeout(typingEffect, 190);
    }
    else{
        setTimeout(()=>{
            count = 0;
            document.querySelector("#typed-text").innerHTML = "";
            typingEffect();
        },2000)
    }
}