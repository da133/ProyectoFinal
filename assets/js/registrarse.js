
function goToIndex() {
    window.location = 'index.html';
}

function registrar() {
    console.log('hola');

    

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var register = document.getElementById('register').value;
   


    if (name != "" && email != ""  && password != "" ) {

        auth.createUserWithEmailAndPassword(email, password).then(
            
            Swal.fire({
                type: 'success',
                title: 'Registro completo',
                text: 'Te has registrado con éxito.',
                footer: 'Gracias',
            }).then(result => {
                location.href = 'login.html';
            })
        
        )
        
    }
    else {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Por favor completa todos los campos',
        })
    }

}


