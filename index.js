for(var i=0;i<=6;i++)
{
document.querySelectorAll("button")[i].addEventListener("click",function(){
    var bt=this.innerHTML;
    handleclick(bt);
    buttonanimation(bt);
});
}
document.addEventListener("keypress",function(event){
    handleclick(event.key);
    buttonanimation(event.key);
})
function handleclick(event){

    
    switch (event) {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
    
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;


        default:
            console.log(bt);
            break;
    }
 
}
function buttonanimation(currentkey){
    var activebutton=document.querySelector("."+currentkey);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },100)

}