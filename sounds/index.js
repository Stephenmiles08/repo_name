//document.querySelectorall("button").addEventListener("click", handleClick);

let allButtons = document.querySelectorAll(".drum").length;

for(let i = 0; i < allButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        let buttonInnerHtml = this.innerHTML;
        
        makeSound(buttonInnerHtml);
    });
}

//detecting keyboard press
document.addEventListener("keypress", function (event) {
   
    makeSound(event.key);
});

function makeSound(key) {
    let inHtml = this.innerHTML;
    switch (inHtml) {
        case "w":
            let drum = new Audio("sounds/or-1.mp3");
            drum.play();
            break;
    
        default:
            break;
    }
}