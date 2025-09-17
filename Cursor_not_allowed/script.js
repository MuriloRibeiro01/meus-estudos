const botao = document.getElementById("botao_dropdown_hora");
const conteudoDropdown = document.getElementById("dropdown_horarios");

botao.addEventListener("click", function() {
    conteudoDropdown.classList.toggle("mostrar");
});

window.addEventListener("click", function(event) {
    if (!event.target.matches('.dropdown_btn')) {
        if (conteudoDropdown.classList.contains('mostrar')) {
            conteudoDropdown.classList.remove('mostrar');
        }
    }
});