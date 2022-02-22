const cupones  = [
    {
        nameCoupon: "cupon_1",
        discount: 15,
    },
    {
        nameCoupon: "cupon_2",
        discount: 10,
    },
    {
        nameCoupon: "cupon_3",
        discount: 20,
    },
    {
        nameCoupon: "cupon_4",
        discount: 10,
    },
]



function calcularPrecioConDescuento(precio,descuento){
    const porcentajeDelPrecioConDescuento = 100 - descuento;
    const precioConDescento = (precio * porcentajeDelPrecioConDescuento) / 100;

    return precioConDescento;
}


function onclickButtonProductDiscount(){
    const inputProduct = document.getElementById("input-product")
    const productValue = inputProduct.value;

    const inputDiscount = document.getElementById("input-discount")
    const discountValue = inputDiscount.value; 

    const inputCoupon = document.getElementById("input-coupon")
    const couponValue = inputCoupon.value;

    if(couponValue == ""){
        const descuento = discountValue;
        const precioConDescuento = calcularPrecioConDescuento(productValue, descuento);

        const resultadoP = document.getElementById("resultP");
        resultadoP.innerText = "El precio de su descuento son: $" + precioConDescuento
    }
    else{
        const isCouponValueValid = function (cupones) {
            return cupones.nameCoupon === couponValue;
        };
        
        const userCoupon = cupones.find(isCouponValueValid);
        
        if (!userCoupon) {
            alert("El cupón " + couponValue + " no es válido");
        }
        else {
            const descuento = userCoupon.discount;
            const precioConDescuento = calcularPrecioConDescuento(productValue, descuento);
        
            const resultadoP = document.getElementById("resultP");
            resultadoP.innerText = "El precio con el descuento del cupon es: $" + precioConDescuento;
        }
    }

}