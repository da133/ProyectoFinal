
 const cant= document.getElementById("cantidad");
 const bord= document.getElementById("bordado");
 const col= document.getElementById("color");

    
function writeUserData() {
     
    // Add a new document in collection "prenda"
    db.collection("prenda").add({
        bordado: bord.value,
        cantidad: cant.value,
        color: col.value
    })
    .then(a => {
        Swal.fire({
            type: 'success',
            title: 'Pedido enviado',
            text: '¡Gracias por su preferencia!'
        });
    });
    


}