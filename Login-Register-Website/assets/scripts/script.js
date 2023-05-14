const wrapper = document.querySelector('.wrapper');
const intro = document.querySelector('.intro');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const loginAnchor = document.querySelector('.login-anchor');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});

btnPopup.addEventListener('click', ()=>{
    intro.classList.add('inactive');
});

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});

iconClose.addEventListener('click', ()=>{
    intro.classList.remove('inactive');
});

loginAnchor.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});

loginAnchor.addEventListener('click', ()=>{
    intro.classList.add('inactive');
});