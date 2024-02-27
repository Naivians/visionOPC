// be default navbar is transparent
// then add bg-dark when scroll > 100
let nav = document.querySelector("nav")
let navLinks = document.querySelectorAll(".nav-link")
window.addEventListener('scroll', function() {
    if(window.scrollY > 50){
        nav.classList.add('nav-danger', 'shadow')
        
        navLinks.forEach((tags)=>{
            tags.classList.add('nav-black')
        })

        // navLinks.classList.add('nav-black')
    }else{
        nav.classList.remove('nav-danger', 'shadow')
        // navLinks.classList.remove('nav-black')

        navLinks.forEach((tags)=>{
            tags.classList.remove('nav-black')
        })
    }
})

