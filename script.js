const hamburger = document.querySelector('header .fa-bars');
const navbar = document.querySelector('header .navbar-container');

hamburger.addEventListenerI('click', function(){
    navbar.classList.toggle('active');  //this will add or remove the class
    hamburger.classList.toggle('fa-xmark');
})