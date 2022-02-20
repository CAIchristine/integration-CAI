const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav li');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        } );
        navLinks.forEach((link) => {
            link.style.animation='navFade 0.5s ease forwards ${index/7 + 0.5}s'
           });
    }
        
navSlide(); 