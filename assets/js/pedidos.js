

//const cant= document.getElementById("cantidad");
//const talla= document.getElementById("talla");


    

function agregar(bord,cant,tal) {

if (cant != "" && talla != "" ) {
     
    //alert(cant);
    //alert(tal);
    // Add a new document in collection "prenda"
    db.collection("prenda").add({
        bordado: bord,
        cantidad: cant,
        talla: tal
    })
    .then(a => {
        Swal.fire({
            type: 'success',
            title: 'Pedido enviado',
            text: '¡Gracias por su preferencia!'
        });
    });

    }
    else {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Por favor completa todos los campos',
        })
    }
    
}