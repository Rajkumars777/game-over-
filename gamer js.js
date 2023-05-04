let menu=document.querySelector('.menu-icon');
let navbar=document.querySelector('.menu');
menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
    bell.classList.remove('active');
} 

let bell=document.querySelector('.notification');
document.querySelector('#bell-icon').onclick = () =>{
    bell.classList.toggle('active');
}

var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay:5000,
        disabledOnInteraction:false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });
  window.onscroll=function() {mufunction()};
  function mufunction() {
    var winScroll=document.body.scrollTop||document.documentElement.scrollTop;
    var height = document.dovumentElement.scrollHeight - document.document.documentElement.clientHeight;
    var scrolled = (winScroll/height)*100;
    document.getElementById('#scroll-bar').style.width=scrolled+'%';
  }
  var loader;

  function loadNow(opacity) {
      if (opacity <= 0) {
          displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function() {
            loadNow(opacity - 0.01);
         }, 50);
      }
 }
  
  function displayContent() {
      loader.style.display = 'none';
      document.getElementById('content').style.display = 'block';
  }
  
  document.addEventListener("DOMContentLoaded", function() {
      loader = document.getElementById('loader');
      loadNow(1);
  });

  //gamer login 
  function validation(){
    if(document.Formfill.Username.value==""){
      document.getElementById("result").innerHTML="Enter Username*";
      return false;
    }
    else if(document.Formfill.Username.value.length<6){
      document.getElementById("result").innerHTML="Atleast six letter";
      return false;
    }
    else if(document.Formfill.Email.value==""){
      document.getElementById("result").innerHTML="Enter your Email*";
      return false;
    }
    else if(document.Formfill.Password.value==""){
      document.getElementById("result").innerHTML="Enter your Password*";
      return false;
    }
    else if(document.Formfill.Password.value.length<6){
      document.getElementById("result").innerHTML="Password must be 6-digits*";
      return false;
    }
    else if(document.Formfill.CPassword.value==""){
      document.getElementById("result").innerHTML="Enter Confirm Password*";
      return false;
    }
    else if(document.Formfill.CPassword.value !== document.Formfill.CPassword.value){
      document.getElementById("result").innerHTML="Password doesn't matched";
      return false;
  }
  else if(document.Formfill.Password.value == document.Formfill.CPassword.value){
    popup.classList.add("open-slide")
    return false;
}
  }
var popup=document.getElementById('popup');
function ClosseSlide(){
  popup.classList.remove("open-slide")
}

$(".info-item .btn").click(function(){

  $(".container").toggleClass("log-in");
  
  }); 
$(".container-form .btn").click(function(){ 
  $(".container").addClass("active"); });