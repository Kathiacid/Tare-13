//  color barra
const navbar = document.querySelector('nav'); 
const body = document.body; // 

window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// nav 
const secciones = document.querySelector("#secciones");
const abrir = document.querySelector("#open"); 
const cerrar = document.querySelector("#close");

if (abrir && cerrar) {
    abrir.addEventListener("click", () => {
        secciones.classList.add("visible");

        navbar.classList.add("menu-open"); 
        body.classList.add("no-scroll");
    });

    cerrar.addEventListener("click", () => {
        secciones.classList.remove("visible");
        navbar.classList.remove("menu-open");
        body.classList.remove("no-scroll");
    });
}