# Rafael Café – Sistema Web de Compra

Este proyecto es una solución web diseñada para facilitar la compra de productos de Rafael Café. Permite a los usuarios visualizar un catálogo de productos, seleccionar uno, completar un formulario de compra y revisar su pedido en un carrito. Todo el flujo se realiza sin backend, utilizando parámetros en la URL para transferir datos entre páginas.

---

## Objetivos del Proyecto

- Ofrecer una experiencia de compra clara, visual y responsiva
- Mantener la coherencia estética de la marca Rafael Café
- Implementar un flujo de navegación sin almacenamiento local ni base de datos
- Modularizar el código para facilitar su mantenimiento y escalabilidad

---

## Estructura del Proyecto

| Archivo                  | Función principal                                                                 |
|--------------------------|-----------------------------------------------------------------------------------|
| `Productos.html`         | Muestra el catálogo de productos con imágenes, descripciones y botón “Comprar”   |
| `FormularioVenta.html`   | Recibe el producto seleccionado y permite ingresar cantidad y datos del cliente  |
| `Carrito.html`           | Muestra el resumen de compra con total y confirmación                            |
| `img/`                   | Carpeta que contiene las imágenes de fondo y productos                           |
| `js/`                    | Carpeta para scripts opcionales como `productos.js` o `Carrito.js`               |

---

## Requisitos Generales

- Imagen de fondo: `img/FondoCafeRafael.jpg` aplicada en todas las páginas
- Imágenes de productos: `media.png`, `libra.png`, `Planta.png`, etc.
- Estilos responsivos para pantallas móviles
- Navegación entre páginas mediante parámetros en la URL (`GET`)
- Validación básica de campos antes de redirigir
- Uso de `encodeURIComponent()` para evitar errores en la URL
- Bootstrap y jQuery vinculados para soporte visual y funcional

---

## Flujo de Navegación

1. El usuario accede a `Productos.html`
2. Selecciona un producto y hace clic en “Comprar”
3. Es redirigido a `FormularioVenta.html` con el producto y precio en la URL
4. Ingresa la cantidad y sus datos personales
5. Al confirmar, es redirigido a `Carrito.html` con todos los datos en la URL
6. Se calcula el total y se muestra el resumen de compra
7. Al hacer clic en “Finalizar compra”, se muestra el mensaje “COMPRA EXITOSA”
8. El usuario puede regresar al catálogo desde el carrito

---

## Estilos y Diseño

- Fondo visual aplicado con `background-image` en el `<body>`
- Contenedores `.container` con fondo translúcido (`rgba`) para legibilidad
- Tipografía uniforme (`Segoe UI`, `sans-serif`)
- Botones estilizados con clases `.boton-comprar`, `.finalizar`, `.regresar`
- Diseño adaptado para pantallas pequeñas mediante media queries

---

## Recomendaciones Técnicas

- Mantener consistencia en nombres de clases, imágenes y rutas
- Separar lógica JS en archivos externos (`productos.js`, `Carrito.js`) si el proyecto crece
- Validar todos los campos antes de redirigir al carrito
- Comentar el código para facilitar su comprensión y mantenimiento
- Si se desea escalar, considerar integración con backend y almacenamiento persistente

---

## Autor

**Diego Daniel Cevallos Sánchez**  
Estudiante de Ingeniería en Sistemas  
Proyecto académico y creativo para Rafael Café
