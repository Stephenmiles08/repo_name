//document.querySelectorall("button").addEventListener("click", handleClick);

/*let allButtons = document.querySelectorAll(".drum").length;

for(let i = 0; i < allButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        let buttonInnerHtml = this.innerHTML;
        this.style.color = "red";
      //  makeSound(buttonInnerHtml);
    });
}

//detecting keyboard press
document.addEventListener("keypress", function (event) {
    switch (event) {
        case "w":
               this.style.color = "white";
            break;
        case "a":
                this.style.color = "blue";
            break;
        case "s":
                this.style.color = "green";
            break;
        case "d":
                 this.style.color = "red";
            break;
        case "j":
                 this.style.color = "yellow";
            break;                      
        
        case "k":
                 this.style.color = "orange";
            break;
        
        case "l":
                 this.style.color = "purple";
            break;         
        default:
            
    }   

});

/*function makeSound(key) {
    let inHtml = this.innerHTML;
    switch (inHtml) {
        case "w":
            let drum = new Audio("sounds/or-1.mp3");
            drum.play();
            break;
    
        default:
            break;
    }
}*/

let mine = [
    {
      name: "uche",
      school: "NNSS",
      age: 17
    },
    {
      name: "stephen",
      school: "command",
      age: 15
    },
    {
      name: "miles",
      school: "staff school",
      age: 10
    }
 ];
 
 for(let i of mine){
   console.log(mine.name);
 }