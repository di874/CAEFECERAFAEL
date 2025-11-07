/**
 * Carrito de Compras – Rafael Café
 *
 *
 * PRERREQUISITOS
 *
 * - Imagen de fondo ubicada en la carpeta /img (FondoCafeRafael.jpg)
 * - Contenedor principal con clase `.container` para aplicar estilos visuales
 * - Secciones internas con IDs: `info`, `producto`, `total`, `mensaje`
 * - Botones con clases `.finalizar` y `.productos` para acciones de compra y navegación
 * - Parámetros recibidos por URL: producto, cantidad, precio, nombre, teléfono, dirección
 * - Estilos definidos para `.info`, `.producto`, `.total`, `.mensaje`, `.acciones`
 * - Script que extrae parámetros con `URLSearchParams` y renderiza contenido dinámico
 * - Bootstrap y jQuery vinculados correctamente
 *
 * ALGORITMO
 *
 * 1. Cargar la página del carrito con fondo visual y contenedor estilizado
 * 2. Extraer los parámetros desde la URL (producto, cantidad, precio, nombre, teléfono, dirección)
 * 3. Calcular el subtotal multiplicando precio × cantidad
 * 4. Mostrar los datos del cliente en el contenedor `#info`
 * 5. Mostrar el producto, cantidad y precio unitario en `#producto`
 * 6. Mostrar el total a pagar en `#total`
 * 7. Esperar que el usuario haga clic en “Finalizar compra”
 *    a. Mostrar el mensaje “COMPRA EXITOSA” en el contenedor `#mensaje`
 * 8. Permitir regresar al catálogo mediante el botón “Ir a productos”
 *
 */
