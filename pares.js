var carrito = [];
//definicion de la estructura del código
var agregarAlCarro = function(item,cantidad){
  carrito.push([item,cantidad]);
};

var quitarDelCarro = function(){
  for(var index=0; index<=carrito.length-1;index++){
	if(carrito[index][0] === itemAQuitar){
		carrito.splice(index,1);
	}
}
};

var solicitarProducto = function(){
  var item = prompt("ingrese el item");
  var cantidad = prompt("ingrese la cantidad");

  agregarAlCarro(item,cantidad);
  alert(carrito);
}
//ejecución del código

var cantidadDeProductos = prompt("ingrese la cantidad de productos a agregar al carrito");

for(var index = 0;index < cantidadDeProductos; index++){
  solicitarProducto();
}
var cantidadDeProductosAQuitar = prompt ("cuantos productos desea sacar?")
for(var index = 0;index < cantidadDeProductosAQuitar; index++){
  var itemAQuitar=prompt("ingrese el producto a sacar");
  quitarDelCarro(carrito);
  alert(carrito);
}




