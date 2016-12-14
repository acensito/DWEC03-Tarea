/* 
 * CODIGO CREADO BAJO LICENCIA CREATIVE COMMONS
 * Reconocimiento - NoComercial - CompartirIgual (by-nc-sa): 
 * No se permite un uso comercial de la obra original ni de las posibles obras
 * derivadas, la distribución de las cuales se debe hacer con una licencia igual
 * a la que regula la obra original.
 */

/**
 * Función calcularDNI. Se introducirá un documento DNI o NIE completo y este
 * calculará si el digito de control corresponde con el introducido, que valida
 * si dicho documento es correcto o no.
 * 
 * @param {type} dninie String con el documento formato X0000000Z ó 00000000Z
 * @returns {Boolean} Valor true/false resultado de la validación
 */
function calcularNIF(dninie) {
    /*
     * Mascara para el DNI-NIE
     * == [xyzXYZ0-9]{1} -> El primer digito puede ser un número o X, Y, Z case insensitive
     * == \d{7} -> El resto tienen que ser 7 números
     * == \w{1} -> Una letra, case insensitive
     * == $ -> Fin de entrada
     * 
     */
    var mascara_dni = /^[xyzXYZ0-9]{1}\d{7}\w{1}$/;
    
    // Comparamos la máscara, si coincide, continuamos...
    if (mascara_dni.test(dninie) === true) {
        var numero = dninie.substring(0, 8); //Obtenemos los primeros ocho digitos
        
        /*
         * En el caso de haber introducido un NIE, para su validación es necesario
         * sustituir la primera letra por un número otorgado
         */
        numero = numero.replace('X', 0); //En caso de X será el 0
        numero = numero.replace('Y', 1); //En caso de Y será el 1
        numero = numero.replace('Z', 2); //En caso de Z será el 2
        
        var digito = dninie.charAt(8); //Obtenemos la letra

        numero = numero % 23; //Obtenemos el resto de dividir la parte numérica por 23
        
        // De ese resultado, obtenemos un valor que será la posición de una letra
        var letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        
        // Obtenemos la letra, en relación a la posición obtenida
        letra = letra.substring(numero, numero + 1);

        if (letra !== digito) { //Si la letra y el digito de control NO coinciden...
                //alert('Dni erroneo, la letra del NIF no se corresponde'); //Alternativo
                return false;
        } else { //En el caso de que coincidan, de devuelve true como validado
                //alert('Dni correcto'); //Alternativo
                return true;
        }
    } else {
        //alert('Dni erroneo, formato no válido'); //Alternativo
        return false; //Si no valida el documento introducido, devolvemos no validado
    }
}


