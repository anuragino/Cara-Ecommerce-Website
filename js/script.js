// Script for navigation bar
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const Close = document.getElementById('Close');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(Close){
    Close.addEventListener('click', () => {
       nav.classList.remove('active');
    })
}