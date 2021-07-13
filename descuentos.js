function calcularDescuento(precio, descuento){
    const precioTotal = precio - (precio*(descuento/100));
    return precioTotal
}

function precioApagar(){
    const precio = document.getElementById('inputPrice').value;
    const descuento = document.getElementById('inputDiscount').value;
    const showPrice = document.getElementById('priceShow');
    const precioTotal = calcularDescuento(precio, descuento);

    showPrice.innerText = "El precio a pagar es de $ " + precioTotal;
}
