var productos = [
    { nombre: 'Camisa', precio: 300},
    { nombre: 'Pantalon', precio: 500},
    { nombre: 'Zapatos', precio: 800},
    { nombre: 'Sombrero', precio: 200},
]
// Iniciar arreglo vacio
var compras = [];
function agregarCosas(){
    let opcion = prompt("Ingresa el número del artículo que quieres agregar:");
    let indice = parseInt(opcion) - 1;
    
    if(indice >= 0 && indice < productos.length) {
        let articuloSeleccionado = productos[indice];
        compras.push(articuloSeleccionado);  
        alert(`Agregaste: ${articuloSeleccionado.nombre} - $${articuloSeleccionado.precio}`);
    } else {
        alert("Número inválido. Intenta de nuevo.");
    }
}
function mostrarArticulos(){
    if(compras.length === 0){
        alert("Sin artículos");
    } else {
        let mensaje = "Artículos almacenados:\n";
        let total = 0;

        compras.forEach((articulo, index) => {
            mensaje += `${index+1}. ${articulo.nombre} - $${articulo.precio}\n`;
            total += articulo.precio;
        });

        mensaje += `\nTOTAL: $${total}`;
        alert(mensaje);
    }
}
function mostrarProductos(lista) {
    let mensaje = "Lista de productos disponibles:\n";
    lista.forEach((producto, index) => {
        mensaje += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
    });
    alert(mensaje);
}
function mostrarMenu(){
    let opcion;
    do{
        opcion = prompt(`
           Opciones disponibles:
           1- Agregar Articulo
           2- Mostrar lista de articulos
           3- Salir
           "Elige una opcion"  
            `)
    switch(opcion){
        case "1":
            mostrarProductos(productos);
            agregarCosas();
            break;
        case "2":
            mostrarArticulos();
            break;
        case "3":
            alert("Saliendo del programa");
            break;
            default: alert ("Opcion no valida. Intenta de nuevo");
    }
}while(opcion!=='3')

    }
    mostrarMenu();