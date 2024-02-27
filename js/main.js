// be default navbar is transparent
// then add bg-dark when scroll > 100
let nav = document.querySelector("nav")
let navLinks = document.querySelectorAll(".nav-link")
window.addEventListener('scroll', function() {
    if(window.scrollY > 50){
        nav.classList.add('nav-danger', 'shadow')
    }else{
        nav.classList.remove('nav-danger', 'shadow')
    }
})

