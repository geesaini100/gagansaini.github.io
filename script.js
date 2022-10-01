// Below is the code for the toggle menu in mobile view

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navLinks = document.getElementsByClassName('navLinks')[0]

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})


const home = document.querySelector('#index');
const about = document.querySelector('#aboutt');
const contact = document.querySelector('#linkAnchor');

home.addEventListener('click', () =>{
    navLinks.classList.toggle('active');
});

about.addEventListener('click', () =>{
    navLinks.classList.toggle('active');
});

contact.addEventListener('click', () =>{
    navLinks.classList.toggle('active');
});