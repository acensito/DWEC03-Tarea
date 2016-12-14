/* 
 * CODIGO CREADO BAJO LICENCIA CREATIVE COMMONS
 * Reconocimiento - NoComercial - CompartirIgual (by-nc-sa): 
 * No se permite un uso comercial de la obra original ni de las posibles obras
 * derivadas, la distribución de las cuales se debe hacer con una licencia igual
 * a la que regula la obra original.
 */

/* global LegislacionEspecifica */

/**
 * Clase Delito
 * 
 * Constará de las siguientes propiedades:
 * @param {type} fechoria
 * @param {type} penaMinima
 * @param {type} penaMaxima
 * 
 * @returns {Delito}
 */
function Delito (fechoria, penaMinima, penaMaxima) {
    
    /* PROPIEDADES */
    this.fechoria = fechoria;
    this.penaMinima = penaMinima;
    this.penaMaxima = penaMaxima;

    /* GETTERRS */
    this.getFechoria = function() {
        return fechoria;
    };
    
    this.getPenaMinima = function() {
        return penaMinima;
    };
    
    this.getPenaMaxima = function() {
        return penaMaxima;
    };
    
    /* SETTERS */
    this.setFechoria = function(fechoria) {
        this.fechoria = fechoria;
    };
    
    this.setPenaMinima = function(tiempoMin) {
        this.penaMinima = tiempoMin;
    };
    
    this.setPenaMaxima = function(tiempoMax) {
        this.penaMaxima = tiempoMax;
    };
}

/**
 * Clase Legislacion
 * 
 * Constara de las siguienres propiedades
 * @param {type} delitosyFaltas array que albergará objetos tipo Delito
 * 
 * @returns {Legislacion}
 */
function Legislacion (delitosyFaltas) {
    
    /* PROPIEDADES */
    this.delitosyFaltas = new Array();
    
    /* GETTERS */
    this.getDelito = function(posicion_en_el_array) { //Pasamos por parametro la posicion en el array que queremos buscar
        if (posicion_en_el_array < 0) { //Si le hemos pasado una menor que cero...
            posicion_en_el_array = 0; //Le asignamos el valor inicial 0
        } else if (posicion_en_el_array >= this.delitosyFaltas.length) { //Si es mayor o igual que el tamaño del numero de delitos
            posicion_en_el_array = (this.delitosyFaltas.length - 1); //Le asignamos la ultima posición (que es el tamaño del array menos 1, ya que los indices empiezan por 0
        }
        return this.delitosyFaltas[posicion_en_el_array]; //Devolvemos el delito indicado;
    };
    
    /* METODOS */
    
    /*
     * Método addDelito para añadir delitos al array de objetos
     * 
     * @param {type} delito Objeto delito
     * 
     * @returns {undefined}
     */
    this.addDelito = function(delito) {
        this.delitosyFaltas.push(delito);
    };
    
    /**
     * Método toString que devuelve un valor string con los delitos almacenados
     * 
     * @returns {String}
     */
    this.toString = function() {

        var arrayAZ = new Array(); //Creamos un array nuevo
        arrayAZ = this.delitosyFaltas.slice(); //Volcamos una copia del array para no alterar el original
        
        /**
         * Función interna que compara dos elementos y devuelve si es mayor o menor
         * 
         * @param {type} a
         * @param {type} b
         * 
         * @returns {Number} -1 a es menor que b, 1 a es mayor que b, 0 son iguales
         */
        function compare( a, b) {
            if (a.fechoria < b.fechoria) {
                return -1;
            } else if (a.fechoria > b.fechoria) {
                return 1;
            } else {
                return 0;
            };
        };

        arrayAZ.sort(compare); //Ordena el array, usando como orden el establecido en la función interna

        var mensaje =""; //Valor por defecto del mensaje, vamos añadiendole delitos
        for (var i in arrayAZ) { //Por cada delito en el array
            mensaje += ("<strong>Delito:</strong> " //Añadimos el siguiente mensaje....
                    + arrayAZ[i].getFechoria() + ", con pena mínima de " 
                    + arrayAZ[i].getPenaMinima() + " días y pena máxima de " 
                    + arrayAZ[i].getPenaMaxima() + " días. <br />");
        };
        
        return mensaje; //Devolvemos el mensaje creado
    };
};

/**
 * Clase Convicto
 * 
 * @param {type} nombre
 * @param {type} NIF
 * @param {type} delitosCometidos
 * @param {type} penasSentenciado
 * 
 * @returns {Convicto}
 */
function Convicto (nombre, NIF, delitosCometidos, penasSentenciado ) {
    
    /* PROPIEDADES */
    this.nombre = nombre;
    this.NIF = NIF;
    this.delitosCometidos = new Array();
    this.penasSentenciado = new Array();
    

    /* SETTERS */
    this.setNombre = function(nombre) {
        this.nombre = nombre;
    };
    
    /**
     * Setter setNIF
     * 
     * Establece el NIF tras haber sido validado
     * 
     * @param {type} NIF
     * 
     * @returns {Boolean} valor true o false resultado de la validación
     */
    this.setNIF = function(NIF) {
        if (calcularNIF(NIF)) { //Si es valido...
            this.NIF = NIF; //Establece el NIF
            return true; //Devuelve valor true de confirmación
        } else {
            return false; //Devuelve valor false de negación
        }
    };
    
    /* GETTERS */
    this.getNombre = function() {
        return nombre;
    };
    
    this.getNIF = function() {
        return NIF;
    };
    
    
    /**
     * GET que recorre todas las condenas de un prisionero, suma los dias de 
     * condena y lo devuelve en años con un redondeo.
     * 
     * @returns {Number}
     */
    this.getPenaTotalEnAnyos = function() {
        
        var dias = 0; //Establecemos la variable de los dias totales de condena
        
        for (var i in this.penasSentenciado) { //Por cada condena
            var dias = + this.penasSentenciado[i]; //Sumamos los dias que tiene
        };
        
        dias = dias / 365; //Lo dividimos por el valor de un año

        return dias.toFixed(2); //Devolvemos redondeado a dos decimales
    };
    
    this.getDelitos = function() {
        return delitosCometidos;
    };
    
    /* METODOS */
    /**
     * Método addPena para añadir penas a un preso
     * 
     * Se comparará con LegislacionEspecifica para saber si existe la pena y si
     * la sentencia no supera el máximo de dias indicado en la legislación
     * 
     * @param {type} delito delito que ha cometido
     * @param {type} condena_en_dias
     * 
     * @returns {undefined}
     */
    this.addPena = function (delito, condena_en_dias) {
        for (var i in LegislacionEspecifica.delitosyFaltas) { //Por cada delitoyFalta en la legislación...
            if (delito === LegislacionEspecifica.getDelito(i).getFechoria()) { //Si coincide el precepto...
                var penaMax = LegislacionEspecifica.getDelito(i).getPenaMaxima(); //Obtenemos su pena máxima
                if (penaMax >= condena_en_dias) { //Si la pena maxima es mayor o igual que la condena en dias... proseguimos
                    this.delitosCometidos.push(delito); //Añadimos el delito al array de delitosCometidos
                    this.penasSentenciado.push(condena_en_dias); //Añadimos su condena en días
                };
            };
        };
    };
    
    /**
     * Método toString que devuelve las condenas y dias de condena por cada una que posee un preso
     * 
     * @returns {String} Con las condenas que posee
     */
    this.toString = function() {
        var sentencias = ("<p>El convicto: " + this.getNombre() + "</p>");
        for (var i in this.delitosCometidos) { //Por cada delito cometido del preso, se van concatenando condenas...
            sentencias += ("Condenado por " + this.delitosCometidos[i] + " a " + this.penasSentenciado[i] + " dias <br />");
        }
        return sentencias; //Se devuelve el string obtenido
    };
}

/**
 * Clase Prision
 * 
 * @param {type} preso objeto preso
 * 
 * @returns {Prision}
 */
function Prision (preso) {
    /* PROPIEDADES */
    this.preso = new Array();
    
    /* GETTERS */
    this.getTotal = function() {
        return this.preso.length;
    };
    
    /* METODOS */
    /**
     * Método addPreso que ingresa un preso en el array de la prisión
     * 
     * @param {type} preso
     * 
     * @returns {undefined}
     */
    this.addPreso = function(preso) {
        this.preso.push(preso);
    };
    
    /**
     * Método borraPreso que elimina un preso del array de la prisión al pasarle
     * el NIF del preso que este almacenado
     * 
     * @param {type} NIF
     * 
     * @returns {Boolean} true/false si ha sido eliminado o no
     */
    this.borraPreso = function(NIF) {
        var flag = false; //Establecemos un flag de control
        for (var i in this.preso) { ////Por cada preso en esta prisión
            if (NIF === this.preso[i].getNIF()) { //Si el dni es igual que el del preso
                this.preso.splice(i,1); //Eliminarlo
                flag = true; //Se establece como eliminado
            };
        };
        return flag; //Se devuelve el resultado de la eliminación
        
    };
    
    /**
     * Método toString que devuelve los presos internos en la prisión con su NIF
     * 
     * @returns {String}
     */
    this.toString = function() {
        var reo = "<ol>"; //Iniciamos el mensaje, será una lista ordenada
        for (var i in this.preso) { //Por cada preso, vamos concatenando mensajes
            reo += ("<li>" + this.preso[i].getNombre() + " con DNI/NIE: " + this.preso[i].getNIF() + "</li>");
        }
        reo += ("</ol>"); //Cerramos la lista ordenada
        
        //Modo alternativo sin usar listas ordenadas.
        //for (var i in this.preso) {
        //var posicion = i + 1;
        //reo += ("<p>" + posicion + ". " + this.preso[i].getNombre() + " con DNI/NIE: " + this.preso[i].getNIF() + "<br /></p>");
        //};
        
        return reo; //Devolvemos el valor
    };
};