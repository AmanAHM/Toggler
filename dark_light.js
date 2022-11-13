var click= document.getElementsByClassName("form-check-input");
var body= document.querySelector("body");



click[0].addEventListener("click",()=>{

    if(body.style.backgroundColor=="black")
    {

    body.style.backgroundColor="white";
    body.style.color="black";
    }
    else
    {
        body.style.backgroundColor="black";
    body.style.color="white";
    }
});



    
