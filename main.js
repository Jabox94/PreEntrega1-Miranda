/*****************************************************************************
Calculadora de prestamo
(basasado en https://prestamosweb.anda.com.uy/prestamosweb/servlet/simuladorprestamo)

*****************************************************************************/

// Agregando correccion
init();
function init() {
    let comenzar = confirm('Bienvenido, ¿Desea iniciar?');
    while (comenzar === true) {
        controlFlujo();
        comenzar = confirm('¿Desea continuar utilizando el programa?');
    }
}

function prestamo() {
    // Valor minimo de mil pesos
    const montoMin = 999;
    // Valor maximo de docientosmil pesos
    const montoMax = 200000;
    let montoPrestamo = prompt(`A continuación, ingrese el monto a solicitar entre $${montoMin} y $${montoMax}`, '1000');

    if (montoPrestamo <= montoMin || montoPrestamo > montoMax && montoPrestamo != null) {
        alert(`Recuerde que el valor minimo es de $${montoMin} y el mayor es de $${montoMax}`);
        montoPrestamo = null;
        alert('Operación cancelda, refresque e intente nuevamente');
        return null;
    }

    let confirmar = prompt(`El monto a solicitar es de $${montoPrestamo} ¿Es correcto?`, 'Si/No');
    if (confirmar != 'Si' || confirmar != 'si') {
        return montoPrestamo;
    } else if (confirmar == 'No' && confirmar == 'no' && confirmar == null) {
        alert('Operación cancelda');
        montoPrestamo = null;
        return null;
    }

}

/***************************************************************************/
function tasaInteres(a) {
    let monto = a;
    let tasaInteres;

    return parseFloat(tasaInteres = monto * 0.034);
}

/***************************************************************************/

function tasaMora(a) {
    let monto = a;
    let tasaMora;

    return parseFloat(tasaMora = monto * 0.045);
}

/***************************************************************************/

function impuesto(a) {
    let monto = a;
    let impuesto;

    return parseFloat(impuesto = monto * 0.022);
}

/***************************************************************************/

function totalPagar(a, b, c, d) {
    let total = (a + ((b + c) + d));

    return parseFloat(total);
}

/***************************************************************************/

function controlFlujo() {
    const prestado = prestamo();
    const interes = tasaInteres(prestado);
    const mora = tasaMora(prestado);
    const iva = impuesto(prestado);
    let total = totalPagar(prestado, interes, mora, iva);

    alert(`
        Ha solicitado un prestamo de: $${prestado} +
        con un interes del 35% +
        tasa de mora de 45% +
        IVA de 22% +
        El precio total final es de: $${total}
    `);

    document.write(`El total a pagar es de: ${total}`)

    /*
        total = totalPagar(1000, 35, 45, 22);
        alert(`${total}`);
    */
}

/***************************************************************************/