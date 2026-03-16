const images = document.querySelectorAll(".grid img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.getElementById("lightbox-img");

images.forEach(img=>{
img.addEventListener("click",()=>{

lightbox.style.display="flex";
lightboxImg.src=img.src;

});
});

lightbox.addEventListener("click",()=>{
lightbox.style.display="none";
});