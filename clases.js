/*
 * CODIGO CREADO BAJO LICENCIA CREATIVE COMMONS
 * --------------------------------------------
 * Reconocimiento - NoComercial - CompartirIgual (by-nc-sa):
 * ---------------------------------------------------------
 * No se permite un uso comercial de la obra original ni de las posibles obras
 * derivadas, la distribución de las cuales se debe hacer con una licencia igual
 * a la que regula la obra original.
 */

/**
 * Clase Producto
 *
 * @param string nombre Nombre del producto
 * @param float precio  Precio del producto
 * @param boolean ecologico Si es ecológico o no
 *
 * @returns string valores del objeto producto
 */
function Producto(nombre, precio, ecologico){
    //PROPIEDADES
    this.nombre = nombre;
    this.precio = precio;
    this.ecologico = ecologico;

    //GETTERS
    this.getNombre = function(){
        return nombre;
    };

    this.getPrecio = function(){
        return precio;
    };

    this.getEcologico = function(){
        return ecologico;
    };

    //SETTERS
    this.setNombre = function(nombre){
        this.nombre = nombre;
    };

    this.setPrecio = function(precio){
        this.precio = precio;
    };

    this.setEcologico = function(ecologico){
        this.ecologico = ecologico;
    };

    //METODOS
    this.toString =function(){
        //Para el mensaje, primero tenenemos que comprobar si el producto es ecológico o no
        //para ello tomaremos como valor por defecto, que no lo es, y si en caso de ser
        //la propiedad del producto verdadera (true), lo modificaremos.
        var msjeco = "no es un producto ecológico";
        if (this.ecologico === true){
            msjeco = "es un producto ecológico";
        }
        return "La " + this.nombre + " vale " + this.precio + " € y " + msjeco + "<br>";
    };
}

/**
 * Clase Cliente
 * 
 * @param   string nombre    XXXXXXX del cliente
 * @param   string apellido1 XXXXXXX del cliente
 * @param   string nif       XXXXXXX del cliente
 * @param   string direccion XXXXXXX del cliente
 * @param   string password  XXXXXXX del cliente
 *
 * @returns string valores del objeto cliente
 */
function Cliente(nombre, apellido1, nif, direccion, password){
    //PROPIEDADES
    this.nombre = nombre;
    this.apellido1 = apellido1;
    this.nif = nif;
    this.direccion = direccion;
    this.password = password;

    //GETTERS
    this.getNombre = function(){
        return this.nombre;
    };

    this.getApellido1 = function(){
        return this.apellido1;
    };

    this.getNif = function(){
        return this.nif;
    };

    this.getDireccion = function(){
        return this.direccion;
    };

    this.password = function(){
        return this.password;
    };

    //SETTERS
    this.setNombre = function(nombre){
        this.nombre = nombre;
    };

    this.setApellido1 = function(apellido1){
        this.apellido1 = apellido1;
    };

    this.setNif = function(nif){
        //Comprueba previamente que el nif introducido es correcto.
        if (calcularNIF(nif)){
            this.nif = nif;
        //Si es incorrecto lanza un alert de aviso, no se modifica el dato.
        } else {
            alert("DNI/NIE introducido inválido. Compruebe los datos y pruebe de nuevo.");
        }
    };
    
    this.setDireccion = function(direccion){
        this.direccion = direccion;
    }

    this.setpassword = function(password){
        this.password = password;
    };

    //METODO TOSTRING
    this.toString = function(){
        return "El cliente " + this.nombre + " " + this.apellido1 + " con documento número " + this.nif + ", reside en " + this.direccion + ".<br>";
    };
}

/**
 * Clase Cesta
 * 
 * @param   {[[Type]]} Cliente [[Description]]
 * @param   {[[Type]]} envio   [[Description]]
 *                             
 * @returns {string}   valores contenidos en la cesta
 */
function Cesta(Cliente, envio){
    //PROPIEDADES
    this.Cliente = Cliente;
    this.envio = envio;
    this.pedido = [];

    //METODOS
    //Metodo addProducto para añadir un producto a la cesta
    this.addProducto = function(Producto){
        //Buscamos primero el indice en el array de dicho producto
        //será el primero que encuentre en el array con dicho nombre
        var indice = this.pedido.indexOf(Producto);

        //Si existe alguien en el array con ese nombre de producto
        if (indice != -1) {
            alert("Ya está el producto en la cesta");
        } else {
            //Si no existe, lo añadimos
            this.pedido.push(Producto);
        }
    };

    //Metodo delProducto para eliminar un producto de la cesta
    this.delProducto = function(Producto){
        //Buscamos primero el indice en el array de dicho producto
        //será el primero que encuentre en el array con dicho nombre
        var indice = this.pedido.indexOf(Producto);

        //Si existe alguien en el array con ese nombre de producto
        if (indice != -1) {
            //Lo eliminamos de la cesta
            this.pedido.splice(indice,1);
            //alert("Producto eliminado de la cesta satisfactoriamente"); //Opcional
        } else {
            alert("No existe ningún elemento en la cesta con ese nombre");
        }
    };

    this.setCliente = function(Cliente){
        this.Cliente = Cliente;
    };
    
    this.setEnvio = function(envio){
        this.envio = envio;
    }

    this.getPreciofinal = function(){
        //En un principio el coste de la cesta es 0, porque está vacia
        var total = 0;
        //Recorremos el array de la cesta sumando los precios
        for (var i in this.pedido){
            total += this.pedido[i].getPrecio();
        }
        //Devolvemos los precios
        return "El coste total de la compra asciende a " + total + " €";
    };

    this.toString = function(){
        //Mostramos los datos principales del cliente
        var datos = "<p><strong>Cliente: </strong>" + this.Cliente.getNombre() + " " + this.Cliente.getApellido1() +"<br>";
        //Mostramos la dirección de envio
        //Si no está definida dirección de envio y es la misma, mostramos la dirección indicada en los atributos del cliente
        if (this.envio === false){
            datos += "<strong>Dirección de envío: </strong>" + this.Cliente.getDireccion()+"<br>";
        //Si no es la misma, la definida en el campo de envío al crear la cesta.
        } else {
            datos += "<strong>Dirección de envío: </strong>" + this.envio+"<br>";
        }
        
        //Mostramos la cesta
        //Si esta llena la cesta, recorremos la cesta y la vamos mostrando como elementos de una lista
        if ((this.pedido).length > 0){
            datos += "<strong>El pedido es el siguiente: </strong>";
            datos += "<ul>";
            for (var i in this.pedido){
                datos += ("<li>" + this.pedido[i].getNombre() + " con un precio de " + this.pedido[i].getPrecio() + " €</li>");
            }
            datos += "</ul>" + this.getPreciofinal() +"</p>";
        //Si está vacia, mostramos un mesaje de aviso
        } else {
            datos += "<strong>La cesta se encuentra vacía</strong>";
        }
        return datos;
    };
}
