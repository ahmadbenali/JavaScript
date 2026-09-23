let Circle=document.getElementById("cir");
let img=document.getElementById("image");
let Square=document.getElementById("sq");

Circle.onclick=()=>{
img.style.borderRadius="70%";
};

Square.onclick=()=>{
img.style.borderRadius="0";
};