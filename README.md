#  DWEC - Tarea 3
## Enunciado:

**Bienvenidos a Merca Mona.**

Vamos a realizar realizar una simulación limitad de un carro de la compra. **No se va a implementar la web** , sino una  serie de clases que nos  va a permitir simular a través de código añadir productos al carro de la compra.

No hay que hacer ninguna interfaz.

1. Se va a crear la clase  **Producto**. Este producto va a tener las siguientes propiedades y métodos. (**2 puntos).**
  1. **Nombre**  del producto.
  2. Debe contener el  **Precio**.
  3. Un booleano para saber Si el producto es  **Ecológico**.
  4. Los _setters_ y los _getters_ para cada propiedad.
  5. Implementar toString para que cuando se le pase un producto a un document.write aparezca. Por ejemplo:

    document.write(mora);
    // Resultado
    // La mora vale 2 euros y es ecológica.

2. El constructor debe tener los siguientes parámetros: _nombre_, _precio_, _ecológico_. La forma de crearlo será esta:

    var mora = new Producto (&quot;mora&quot;, 2, true);

1. La clase  **Cliente**. **(3 Puntos)**
  1. El  **Nombre**.
  2. **Apellido1**.
  3. **Dirección**.
  4. **NIF**. Será además el login de acceso a la web.  Sólo de personas físicas. Nada de empresas o familia real.   [¿Cómo calcular el NIF?](http://www.interior.gob.es/web/servicios-al-ciudadano/dni/calculo-del-digito-de-control-del-nif-nie)
  5. **Password**. Esta contraseña será la que se use para entrar en la web.
  6. Con los _setters_ y los _getters_ para las propiedades.
  7. El constructor que debe recibir los parámetros nombre, apellido1, direccion, nif. No deberéis preocuparos por el equipo

    var cliente1 = new Cliente (&quot;Silvestre&quot;,&quot;Repollo&quot; &quot;, &quot;Plaza del Rollo, Cebolla, Toledo.&quot;, &quot;1234567Z&quot;);

1. La  **Cesta**  de la compra debe contener un _array_ de objetos producto. Además: **(4 puntos)**

1. Debe calcular el costo del total. **GetPrecioFinal()**.
2. Debe añadir productos. **addProducto(objeto\_producto);**
3. Debe eliminar elementos. **delProducto(nombre);**
4. Una cesta tiene un usuario del que depende. O sea, que cada cesta tiene que tener un usuario.  **SetCliente(cliente);**
5. **Dirección**  de envío. Puede ser diferente. Si está a  **false**  es que es la misma dirección que se indica en el cliente.
6. Implementar el  **toString**  para mostrar los productos de la cesta de la compra, el cliente y la dirección de envío.
7. Con los _setters_ y los _getters_ para las propiedades.
8. El constructor que tiene los siguientes parámetros empieza vacío sin productos es:

    var carro1 = new  Cesta (cliente1, false); //ya que la dirección va a ser la misma del cliente.
    
    var carro2 = new  Cesta (cliente2, false); //ya que la dirección va a ser la misma del cliente.

Ya fuera de las clases debéis tener una parte de código para verificar Para realizar uso del carro de la compra debéis crear datos de ejemplo, para comprar al menos 6 tipos de producto.  No utilicéis un formulario para entrar ya que esto es el objetivo de esta tarea. Para realizar la tarea debéis crear 8 productos distintos. Además se deben crear dos clientes al menos y crear dos cestas. Veamos un código de ejemplo que indica como lo quiero:

    var mora = new Producto (&quot;mora&quot;, 2, true);
    
    var patata = new Producto (&quot;patata&quot;, 1, false);
    
    var pipas = new Producto (&quot;mora&quot;, 2, false);
    
    document.write(mora + &quot;&lt;br&gt;&quot;+  patata + &quot; &lt;br&gt;&quot;);
    
    var cliente1= new Cliente (&quot;Silvestre&quot;,&quot;Repollo&quot; &quot;, &quot;Plaza del Rollo, Cebolla, Toledo.&quot;, &quot;1234567Z&quot;, );
    
     document.write(cliente);
    
    var carro1= new  Cesta (cliente1, &quot;Calle del Horno 3 de Cebolla Toledo&quot;); //Lo pide para su hermana.
    
     carro1.addProducto(mora):
    
     carro1.addProducto(mora);
    
     document.write(patata);

**Notas:**

- La estructura de archivos contendrá tres elementos..
  - meter las funciones del NIF en el archivo  **dni.js**
  - Meter las clases en  **clases.js**
  - En el  **index.html**  se incluirán los dos archivos anteriores y desde ese se utilizará.
- Crear constructores tal y como se desee, siempre que tenga sentido.
- Para la presentación y captura de datos ya podéis utilizar jQuery. Sin embargo eso no significa que saquéis más o menos nota. Lo único que me preocupa es que hagáis bien la tarea.
- La lectura/entrada de los datos no se puede realizar desde dentro de las clases. El hacerlo así puede suponer un 0 en esa pregunta.
- La dirección de ejemplo es verdadera. El nombre, pues lo mismo también (aunque no lo creo). ;)

## Criterios de corrección

Los puntos que tiene esta tarea están asignados de la siguiente forma:

- Ejercicio 1. **2 puntos.**
- Ejercicio 2.  **3 puntos.**
- Ejercicio 3.  **4 puntos.**
- Puesta en marcha de las clases y además claridad, calidad, comentarios de código e ingenio en la soluciones. Esta vez se corregirá de forma mucho más severa. ** 1 punto.**
- Deberéis crear dos archivos js.  Y un archivo index.html desde donde se utilicen esas clases.
- Para la presentación y captura de datos ya podéis utilizar  **jQuery**. Sin embargo eso no significa que saquéis más o menos nota. Lo único que me preocupa es que hagáis bien. De hecho prefiero que no lo uséis.
- La lectura/entrada de los datos no se puede realizar desde dentro de las clases. El hacerlo así puede suponer un 0 en esa pregunta.

Además las faltas de ortografía si son acentos o vulgarismos quitan 0,05 menos por cada falta. Si son faltas normales se quita 0,1 por cada falta.

No seguir las especificaciones, salvo que se indique otra cosa en los foros, podría llega a anular un apartado o un ejercicio completamente (dependerá del error).

**Total: 10 puntos máximo. **

## Recursos necesarios:

- Ordenador personal.
- Editor web para teclear el código de la aplicación.
- Navegador web para probar el funcionamiento de la aplicación.
- Algoritmo del cálculo de la letra del NIF:
  - [Cálculo de la letra.](http://www.interior.gob.es/web/servicios-al-ciudadano/dni/calculo-del-digito-de-control-del-nif-nie)
