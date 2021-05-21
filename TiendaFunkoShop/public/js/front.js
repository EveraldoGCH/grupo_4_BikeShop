window.addEventListener("load", loaded);

function loaded(){

    // Proceso de open y close Slide Menu
    let open = document.querySelector(".fa-bars");
    let close = document.querySelector(".fa-times");
    if (open != null){
        open.addEventListener("click", openSlideMenu);
        function openSlideMenu() {
            document.getElementById('menu').style.width='80vw';
            document.getElementById('content').style.marginLeft='0vw';
        }
    }
    if (close != null) {
        close.addEventListener("click", closeSlideMenu);
        function closeSlideMenu(){
            document.getElementById('menu').style.width='0';
            document.getElementById('content').style.marginLeft='0';
        }
    }

    // Validaciones login
    let form = document.querySelector("form.form");
    let submit = document.getElementById("submit");
    let emailInput = document.getElementById("email")
    let erEmail = document.querySelector(".erEmail");
    let passwordInput = document.getElementById("password");
    let erPassword = document.querySelector(".erPassword");

    if (form != null) {
        form.addEventListener("submit", function(e){
            let erroresEmail = [];
            let erroresPassword = [];

            if (emailInput.value == "") {
                erroresEmail.push("Debes completar este campo");
            } else if (emailInput.value.length < 5){
                erroresEmail.push("Debes escribir mínimo 5 caracteres");
            }

            if (passwordInput.value == "") {
                erroresPassword.push("Debes completar este campo");
            } else if (passwordInput.value.length < 5){
                erroresPassword.push("Debes escribir mínimo 8 caracteres");
            }

            if (erroresEmail.length > 0 || erroresPassword.length > 0){
                e.preventDefault();

                if (erroresEmail.length > 0) {
                    erEmail.innerHTML = erroresEmail;
                }
                if (erroresPassword.length > 0) {
                    erPassword.innerHTML = erroresPassword;
                }
                
            } else {
                form.submit();
            }
        })
    }
    
}