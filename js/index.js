

// Contact Form Pop-up

function togglePopup(){

    document.getElementById("popup-1").classList.toggle("active");
    document.getElementById('header').classList.toggle('static');
    document.getElementById('scroll-top').classList.toggle('static');
    
    const modal = document.getElementById("popup-1");
    const body = document.querySelector("body");
    
    if (modal.classList.contains("active")) {
    // Disable scroll
    body.style.overflow = "hidden";
    } else {
        // Enable scroll
        body.style.overflow = "auto";
    }
}




// Video Pop-up

function toggleVideo(){
    
    document.getElementById("popup-2").classList.toggle("active");
    document.getElementById('header').classList.toggle('static');
    document.getElementById('scroll-top').classList.toggle('static');

    const modal = document.getElementById("popup-2");
    const body = document.querySelector("body");
    // const video = document.querySelector('iframe');
    
    if (modal.classList.contains("active")) {
    // Disable scroll
    body.style.overflow = "hidden";
    // video.insertAfter('.close-btn');
    } else {
    // Enable scroll
    body.style.overflow = "auto";
    // video.pause();
    window.location.reload();
    // var video = document.getElementById('video');
    // video = video.remove();
    }
}



//   $(function () {
//     $(document).scroll(function () {
//         var $nav = $(".navbar-fixed-top");
//         $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//       });
//   });


// Changing properties of navbar on scroll

var myNav = document.getElementById('header');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 3 || document.documentElement.scrollTop >= 3 ){
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");

        // myNav.classList.toggle('nav-colored');
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");

        // myNav.classList.toggle('nav-colored');
    }

    // if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100 ){
    //     myNav.classList.toggle('nav-transparent');
    // }
    // else{
    //     myNav.classList.toggle('nav-transparent');
    // }
};



// Hamburger Menu Toggle

let toggleNavbar = () =>{
    document.getElementById('navbar').classList.toggle('active');
}




// Discounted Offer Pop-up

// function popUp(){
//     document.getElementById('popupOffer').classList.toggle('active');
//     document.getElementById('header').classList.toggle('head');

//     const modal = document.getElementById("popupOffer");
//     const body = document.querySelector("body");
    
//     if (modal.classList.contains("active")) {
//     // Disable scroll
//     body.style.overflow = "hidden";
//     } else {
//     // Enable scroll
//     body.style.overflow = "auto";
//     }
// }

// setTimeout(popUp, 5000)




// Navigation Link Active Changing

// $(document).ready(function() {
//     "use strict";
  
//     $('ul.navbar > li').click(function(e) {
//       e.preventDefault();
//       $('ul.navbar > li').removeClass('active');
//       $(this).addClass('active');
//     });
//   });



// Subscribed Newsletter Offer Pop-up


// function pop(){

//     if(!isValid){
//         return;
//     }

//     document.getElementById('subscribed').classList.toggle('active');
//     document.getElementById('header').classList.toggle('head');
//     document.getElementById('scroll-top').classList.toggle('static');

//     let email = document.getElementById('email').value;
//     document.getElementById('emailHere').innerHTML =`<b>${email}</b>`;

//     const modal = document.getElementById("subscribed");
//     const body = document.querySelector("body");
    
//     if (modal.classList.contains("active")) {

//     // Disable scroll
//     body.style.overflow = "hidden";
//     } else {

//     // Enable scroll
//     body.style.overflow = "auto";
//     }
// }
