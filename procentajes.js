// (precio * (100 - descuento))/100

const ABC = 10;
const DEF = 30;
const GHI = 50;

const descuentoTotal = (precio, descuento) => (precio * descuento) / 100;

const createForm = () => {
    const form = document.createElement('form')
}

const pay = () => {
    const precio = document.querySelector('#precio').value;
    const descuento = document.querySelector('#descuento').value;
    const descuentoAplicado = 100 - descuento;

    let total = descuentoTotal(precio, descuentoAplicado);
    document.querySelector('.pagar').textContent = `El precio a pagar con descuento es: ${total}`;
};
