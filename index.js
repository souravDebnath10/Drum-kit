//This will work only when first button is clicked
/*function handleClick(){
    alert("Button has been clicked");
}

document.querySelector("button").addEventListener("click",handleClick);*/

//This will work when any of the button is clicked
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
        var buttonHtml = this.innerHTML;

        makeSound(buttonHtml);

        buttonAnimation(buttonHtml);
    
    });
}

document.addEventListener("keydown",function(ev){
    makeSound(ev.key);

    buttonAnimation(ev.key);
});

function makeSound(key){

    switch (key) {
        case "w":
            var tomAudio1 = new Audio("sounds/tom-1.mp3");
            tomAudio1.play();
            break;

        case "a":
            var tomAudio2 = new Audio("sounds/tom-2.mp3");
            tomAudio2.play();
            break;

        case "s":
            var tomAudio3 = new Audio("sounds/tom-3.mp3");
            tomAudio3.play();
            break;

        case "d":
            var tomAudio4 = new Audio("sounds/tom-4.mp3");
            tomAudio4.play();
            break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        default:
            alert("Button does not exists");
            break;
    }
}

//instead of querySelector we can use $ sign
/*$6.addEventListener("click",respondToClick);

function respondToClick(){
    alert("I got clicked");
}*/

//animation in button
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){activeButton.classList.remove("pressed")},100);
}