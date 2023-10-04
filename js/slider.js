// we are changing the main Big image with the bottom smaller images.

var mainImg = document.getElementById("mainImg");
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function(){
    mainImg.src = smallImg[0].src;
}

smallImg[1].onclick = function(){
    mainImg.src = smallImg[1].src;
}

// Both the format of the function are valid ,we can use any one.

smallImg[2].addEventListener("click", () =>{
    mainImg.src = smallImg[2].src;
})

smallImg[3].addEventListener("click", () =>{
    mainImg.src = smallImg[3].src;
})