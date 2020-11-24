## Pablo 24/11

- Añadido navbar provisional al signup (idea de crear un navbar diferente que solo tenga el logo OA centrado que redirija a la pagina principal)
- Cambio en el navbar se quita support (ira en footer) metemos services que redirige a los servicios (brokers)
- Se añade la propiedad que impide que los textos e imagenes de los brokers se puedan seleccionar (queda bastante feo por estetica)
- Solucionado el problema de que cuando pulsabas en un link del navbar la linea horizontal inferior se situaba en la categoria anterior
- Arreglado el desplazamiento desde el boton de "Start without code" (antes no se desplazaba lo suficiente y no se marcaba la barra horizontal inferior de Services)
- Modificado tambien el SideBar para que se quede igual de actualizado que el NavBar

## Fran 22/11

- Creadas 3 tarjetas de 3 brokers
- Intenta meter los brokers que falten y haz que cuadren los tamanyos y todo eso
- Me voy al tenis, volvere por la tarde

## Fran 21/11

- Modificado footer
- Modificada cabecera
- Son las 9 de la noche, por ahora no he avanzado a penas en el video, sigo despues
- Hay que hacer funcional la barra de busqueda de codigo y decorarla
- Arreglado problema de los links que no funcionaban

## Fran 18/11

- Anyadidos issues a revisar, problemas de compilacion solucionados
- He avanzado hasta el minuto que pone en el mensaje del commit (3:06)
- Son las 10:30 de la tarde vuelvo en un rato

## Fran y Pablo 14/11

- Avanzamos con el código de la página

## Fran 14/11

- Solucionado problemas de merge ( había una rama 1.0 rara por ahí ).

## Fran 11/11

- Instalar librerías:

  > npm install styled-components
  > npm install react-icons --save

- Ver vídeo:
  Minuto 02:06:00 -> Introducción de un video de background reproducido en bucle
  Link: https://www.youtube.com/watch?v=Nl54MJDR2p8&t=18s

## Cambios realizados Pablo 11/11 ¡MIRAR README para importar RRD!

- Investigación React Router DOM para el redireccionamiento de las MPA (Multi Pages Application), para los links de acerca de, contacto...

- Creacion de páginas temporales de contacto...

- Redireccionamientos creados (integrar el React Router DOM ha sido un poco movida en el proyecto pero ha salido bien)

- Estilo de los <a> cambiado en index.css (se elimina el subrayado y el color azul de los típicos links para que quede acorde con el estilo de la página)

## Cambios realizados Pablo 07/11

- Introduccion de un BR entre descripcion y codigo para que haya algo de separacion (se veia todo muy junto)

- Repaso general de la página, comentario sobre el uso de los px en archivo Media.docx (problemas de visualizacion en diferentes dispositivos, y explicacion con capturas). SE PUEDE BORRAR CUANDO SE LEA

- Añadimos footer, falta hacer algun cambio para que el footer se mantenga abajo siempre, y también falta añadir los enlaces, esta todo comentado en el codigo del footer (imagenes de las RRSS a la izq y a la derecha el "acerca de", "contacto"... o viceversa, eso da un poco igual, como prefieras tu

## Cambios realizados Fran 06/11

- Mejorada la fuente del texo de inicio y distancias

- Mejorado el botón de acceder al link de afiliados

- Puestos los brokers otra vez de dos en dos (ver como poner de uno en uno para móvil), posible solución, cambiar:
  grid-template-columns: 1fr 1fr; por grid-template-rows: 1fr 1fr;

- Mejorada la estética en general (revisar cambio de imágenes completas por imágenes sin fondo)

## Cambios realizados Pablo 06/11

- Al hacer el merge dejamos subido a github la última versión con los cambios aplicados en ambas versiones.

- He encontrado un "problema" con la idea de hacer un boton que copie los códigos, necesitaríamos codificar a mano los X botones y asignar diferentes IDs a cada código que queramos copiar. Mando captura del código por WhatsApp.

- Al pulsar en el logo de la parte superior izquierda volvemos a la página principal (si estamos en alguna subpagina) o recargamos la misma (si estamos en la página principal)

- Para mañana 07/11 hacer el footer

## Cambios realizados Fran 05/11

¡¡¡¡¡¡IMPORTANTE!!!!!! -> guarda tus cambios en otros archivos y haz git pull, después introduce tus cambios, sino habrá conflictos git

-Creado archivo updates.md para guardar los cambios realizados.

-Cabecera rectangular blanca para que se vea correctamente aunque bajes por la página

-Cajita de introducir código (si introduces letras genera error por ahora)

-Actualizado el logo en la barra de arriba (luego decidimos si queremos cambiarlo)

## Cambios realizados Pablo 05/11

-Cuenta correo compartida creada: onlineaffiliateweb@gmail.com

-Logo provisional de la empresa creado (carpeta public, nombre: favicon.ico)

-Favicon de la página cambiado (se puede cambiar desde index.html en el head)

-Se ha modificado la forma de la que se muestran los códigos para que sean mas visuales (falta retocarlos para que estén mas acordes a la página)
-Mirar en el apartado de ideas la referente al boton que cubra el codigo
