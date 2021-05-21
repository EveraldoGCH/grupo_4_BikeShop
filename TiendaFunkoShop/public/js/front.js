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

    let emailInput = document.getElementById("email")
    let erEmail = document.querySelector(".erEmail");

    let passwordInput = document.getElementById("password");
    let erPassword = document.querySelector(".erPassword");

    let nameInput = document.getElementById("name");
    let erName = document.querySelector(".erName");

    if (form != null) {
        form.addEventListener("submit", function(e){
            let erroresEmail = [];
            let erroresPassword = [];
            let erroresName = [];

            if (emailInput != null) {
                if (emailInput.value == "") {
                    erroresEmail.push("Debes completar este campo");
                } else if (emailInput.value.length < 5){
                    erroresEmail.push("Debes escribir mínimo 5 caracteres");
                }
            }

            if (passwordInput != null) {
                if (passwordInput.value == "") {
                    erroresPassword.push("Debes completar este campo");
                } else if (passwordInput.value.length < 5){
                    erroresPassword.push("Debes escribir mínimo 8 caracteres");
                }
            }
            
            if (nameInput != null) {
                if (nameInput.value == "") {
                    erroresName.push("Debes completar este campo");
                } else if (nameInput.value.length < 5){
                    erroresName.push("Debes escribir mínimo 8 caracteres");
                }
            }            

            if (erroresEmail.length > 0 || erroresPassword.length > 0 || erroresName.length > 0){
                e.preventDefault();
                
                if (erroresEmail.length > 0) {
                    erEmail.innerHTML = erroresEmail;
                }
                if (erroresPassword.length > 0) {
                    erPassword.innerHTML = erroresPassword;
                }
                if (erroresName.length > 0) {
                    erName.innerHTML = erroresPassword;
                }
                
            } else {
                form.submit();
            }
        })
    }

    // Validaciones productos

    let formProducts = document.querySelector("form.products");

    let nameProduct = document.getElementById("nameProduct");
    let erNameP = document.querySelector(".erNameP")

    let descProduct = document.getElementById("descProduct");
    let erDesc = document.querySelector(".erDesc");

    let precioProduct = document.getElementById("precioProduct");
    let erPrecio = document.querySelector(".erPrecio");

    if (formProducts != null) {
        formProducts.addEventListener("submit", function(e){
            let erroresNameProducts = [];
            let erroresDescProducts = [];
            let erroresPrecioProducts = [];

            if (nameProduct != null) {
                if (nameProduct.value == "") {
                    erroresNameProducts.push("Debes completar este campo");
                } else if (nameProduct.value.length < 5){
                    erroresNameProducts.push("Debes escribir mínimo 5 caracteres");
                }
            }

            if (descProduct != null) {
                if (descProduct.value == "") {
                    erroresDescProducts.push("Debes completar este campo");
                } else if (descProduct.value.length < 5){
                    erroresDescProducts.push("Debes escribir mínimo 8 caracteres");
                }
            }
            
            if (precioProduct != null) {
                if (precioProduct.value == "") {
                    erroresPrecioProducts.push("Debes completar este campo");
                } else if (precioProduct.value.length < 5){
                    erroresPrecioProducts.push("Debes escribir mínimo 8 caracteres");
                }
            }

            if (erroresNameProducts.length > 0 || erroresPrecioProducts.length > 0 || erroresDescProducts.length > 0){
                e.preventDefault();
                
                if (erroresDescProducts.length > 0) {
                    erDesc.innerHTML = erroresDescProducts;
                }
                if (erroresNameProducts.length > 0) {
                    erNameP.innerHTML = erroresNameProducts;
                }
                if (erroresPrecioProducts.length > 0) {
                    erPrecio.innerHTML = erroresPrecioProducts;
                }
                
            } else {
                form.submit();
            }
        })
    }
    
}