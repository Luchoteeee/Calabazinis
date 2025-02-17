function saludar() {
    alert("¡Bienvenido a ver nuestros videos de goles y!");
}
document.addEventListener("DOMContentLoaded", function () {
    let sidebar = document.querySelector(".sidebar");
    if (sidebar) {
        setTimeout (() => {
            sidebar.classList.add("visible")
        }, 500)
    }   
});



