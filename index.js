const typElements = document.querySelectorAll(".typ");

typElements.forEach((element) => {
  element.addEventListener("mouseover", function () {
    this.innerHTML = "Frontend Developer";
    this.style.color = "#fe320a";
  });

  element.addEventListener("mouseout", function () {
    this.innerHTML = "Saathvik"; // Restore original text on mouseout
    this.style.color = "#fff";
  });
});

const lin = document.querySelector(".project");
lin.addEventListener("click", function () {
  window.location.href = "https://edgerog.github.io/forumforpeopleshealth/";
});

const lin2 = document.querySelector(".proj2");
lin2.addEventListener("click", function () {
  window.location.href = "https://truepointnews.com/";
});

const lin3= document.querySelector("#innerl");
lin3.addEventListener("click",function(){
  window.location.href="https://saathvik8.wordpress.com/2023/11/25/saathvik-kadiyal/";
})

var menu = document.querySelector("nav h3")
var full = document.querySelector("#ful-scr")
var banner = document.querySelector("nav h4")
var content = document.querySelector(".cont")
var flag =0
menu.addEventListener("click", function(){
  if(flag == 0){
full.style.top = 0
banner.style.opacity = 0
flag =1
content.addEventListener("click",function(){
  if (flag == 1){
    full.style.top = "-100%"
  banner.style.opacity = 1
  flag =0
  }
})}

else{
  full.style.top = "-100%"
  banner.style.opacity = 1
  flag =0
}
})