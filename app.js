/*
// Sistema de registro de estudiantes

let cantidad = Number(prompt("¿Cuántos estudiantes desea registrar?"));
let aprobados = 0;
let reprobados = 0;
let suma = 0;
let calificacionAlta = 0;
let calificacionBaja = 100;

for (let i = 1; i <= cantidad; i++){
    let calificacion;
    while(true){
        calificacion = Number(prompt(`Ingrese la calificación del estudiante ${i}:`));
        if (calificacion >= 0 && calificacion <= 100) {
            break;
        }
        alert("Calificación inválida. Debe estar entre 0 y 100.");
    }
    if(calificacion >= 60){
        aprobados++;
    }else{
        reprobados++;
    }
    suma += calificacion;
    if (calificacion > calificacionAlta){
        calificacionAlta = calificacion;
    }
    if (calificacion < calificacionBaja){
        calificacionBaja = calificacion;
    }
}
let promedio = suma / cantidad;

document.write(`Cantidad total de estudiantes: ${cantidad}` + "<br>");
document.write(`Cantidad de estudiantes aprobados: ${aprobados}` + "<br>");
document.write(`Cantidad de estudiantes reprobados: ${reprobados}` + "<br>");
document.write(`Promedio general del grupo: ${promedio}` + "<br>");
document.write(`Calificación más alta: ${calificacionAlta}` + "<br>");
document.write(`Calificación más baja: ${calificacionBaja}` + "<br>");
*/

/*
// Ejercicio de Cajero Automatico

let saldo = 1000;
let depositos = 0;
let retiros = 0;
let menu;

do {
    menu = Number(prompt(`CAJERO AUTOMÁTICO
                            Seleccione una opción:        
                            1. Consultar saldo
                            2. Depositar dinero
                            3. Retirar dinero
                            4. Salir
                            `));
    if (menu === 1){
        alert("Su saldo actual es: Q" + saldo);
    }else if(menu === 2){
        let cantidad;
        while(true){
            cantidad = Number(prompt("Ingrese la cantidad que desea depositar:"));
            if(cantidad > 0){
                break;
            }else{
                alert("La cantidad debe ser mayor que cero.");
            }
        }
        saldo = saldo + cantidad;
        depositos++;
        alert("Depósito realizado correctamente.");
    }else if(menu === 3){
        let cantidad;
        while(cantidad <= 0 && cantidad > saldo){
            cantidad = Number(prompt("Ingrese la cantidad que desea retirar:"));
            if(cantidad <= 0){
                alert("La cantidad debe ser mayor que cero.");
            }else if(cantidad > saldo){
                alert("No tiene saldo suficiente.");
            }
        }
        saldo = saldo - cantidad;
        retiros++;
        alert("Retiro realizado correctamente.");
    } else if (menu === 4) {
        alert("Sesion Finalizada : Resumen");
    } else {
        alert("Opción inválida. Seleccione una opción del 1 al 4.");
    }
} while (menu != 4);
document.write(`Saldo final: Q${saldo}` + "<br>");
document.write(`Cantidad de depósitos: ${depositos}` + "<br>");
document.write(`Cantidad de retiros: ${retiros}` + "<br>");
document.write(`Gracias por utilizar nuestro cajero.`);
*/

//Tienda de tecnologia

let nombre = prompt("Ingrese el nombre del cliente:");
let edad = Number(prompt("Ingrese la edad del cliente:"));
let tipo = Number(prompt(`Ingrese el tipo de cliente:
    1. Estudiante
    2. Empleado
    3. Cliente general`));
let tipoCliente;
if(tipo == 1){
    tipoCliente = "Estudiante";
}else if(tipo == 2){
    tipoCliente = "Empleado";
}else{
    tipoCliente = "Cliente general";
}

let subtotal = 0;
let cantidadProductos = 0;
let continuar;

do{
    let producto = prompt("Ingrese el nombre del producto:");
    let precio = Number(prompt("Ingrese el precio del producto:"));
    let cantidad = Number(prompt("Ingrese la cantidad comprada:"));

    let costo = precio * cantidad;
    subtotal = subtotal + costo;
    cantidadProductos = cantidadProductos + cantidad;
    alert(
        "Producto: " + producto +
        "Costo: Q" + costo);
    continuar = Number(prompt(`¿Desea registrar otro producto?
        1. Sí
        2. No`));
}while(continuar === 1);
    
let descuentoTipo = 0;
if(tipo === 1){
    descuentoTipo = subtotal * 0.05;
}else if(tipo === 2){
    descuentoTipo = subtotal * 0.10;
}

let descuentoMonto = 0;
if(subtotal > 1000){
    descuentoMonto = subtotal * 0.10;
}else if(subtotal > 500){
    descuentoMonto = subtotal * 0.05;
}

let descuentos = descuentoTipo + descuentoMonto;
let total = subtotal - descuentos;

document.write(`Cliente: ${nombre}` + "<br>");
document.write(`Edad: ${edad} años` + "<br>");
document.write(`Tipo de cliente: ${tipoCliente}` + "<br>");
document.write(`Cantidad de productos: ${cantidadProductos}` + "<br>");
document.write(`Subtotal: Q${subtotal}` + "<br>");
document.write(`Descuento por tipo de cliente: Q${descuentoTipo}` + "<br>");
document.write(`Descuento por monto: Q${descuentoMonto}` + "<br>");
document.write(`Total a pagar: Q${total}` + "<br>");
document.write(`Compra realizada correctamente` + "<br>");
document.write(`¡Gracias por su compra, ${nombre}!`);
