//Initialize element variables 

const nav_button = document.querySelector('.navigationbutton');

const nav_panel = document.querySelector('.navigation');

const overlay = document.querySelector('.dark-overlay');

// Toggle navigation button animation, navigation panel, and dark overlay

nav_button.addEventListener('click', ()=> {

  const isOpened = nav_button.getAttribute('aria-expanded');

  if(isOpened === 'false'){

    nav_button.setAttribute('aria-expanded','true');

    nav_panel.classList.add('slide-nav-out');

    overlay.style.display = "block";

  } else {

    nav_button.setAttribute('aria-expanded', 'false');

    nav_panel.classList.remove('slide-nav-out');

    overlay.style.display = "none";

  }
});