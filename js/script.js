  // Select the menu button and navbar elements
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

// Handle click event on the menu button
menu.onclick = () => {
    // Toggle the 'fa-times' class on the menu button for a close icon effect
    menu.classList.toggle('fa-times');
    
    // Toggle the 'active' class on the navbar to show/hide the navigation menu
    navbar.classList.toggle('active');
}

// Handle scroll event on the window
window.onscroll = () => {
    // Check if the vertical scroll position is greater than 0
    if(window.scrollY > 0){
        // Add the 'active' class to the header for styling adjustments
        document.querySelector('.header').classList.add('active');
    } else {
        // Remove the 'active' class from the header when at the top of the page
        document.querySelector('.header').classList.remove('active');
    }

    // Reset the 'fa-times' class on the menu button
    menu.classList.remove('fa-times');
    
    // Remove the 'active' class from the navbar during scrolling
    navbar.classList.remove('active');
}

// Handle the window load event
window.onload = () => {
    // Check the initial scroll position on window load
    if(window.scrollY > 0){
        // Add the 'active' class to the header if the page is not at the top
        document.querySelector('.header').classList.add('active');
    } else {
        // Remove the 'active' class from the header if the page is at the top
        document.querySelector('.header').classList.remove('active');
    }
}


document.querySelector('#login-btn').onclick =()=>{
    document.querySelector('.login-form-container').classList.toggle('active');
}
document.querySelector('#close-login').onclick =()=>{
    document.querySelector('.login-form-container').classList.remove('active');
}

document.querySelector('.home').onmousemove =(e)=>{
document.querySelectorAll('.home-parallax').forEach(elm =>{
    let speed = elm.getAttribute('data-speed');
    let x =(window.innerWidth - e.pageX * speed)/100;
    let y =(window.innerHeight - e.pageY * speed)/100;

    elm.style.transform = `translateX(${x}px) translateY(${y}px)`
});
}


document.querySelector('.home').onmouseleave =()=>{
    document.querySelectorAll('.home-parallax').forEach(elm =>{
  
    
        elm.style.transform = `translateX(0px) translateY(0px)`
    });
    }

   // swiper
   var swiper = new Swiper(".vehicle-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grapCursor: true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
       0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
         
      },
      999: {
        slidesPerView: 3,
       
      },
    },
  }); 