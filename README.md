# React E-commerce para venta de motocicletas.

### Descripción del proyecto:

Esta proyecto es un E-comerce para compra de motocicletas creado por Gabriel Aguirre 
El proyecto fue hecho en React.
Se utilizó la libreria de Boostrap para una buena parte de los estilos. 
La parte de bases de datos se hizo con FireStore Firebase, de ahí se levantan los productos que figuran a al venta y se escriben las ordenes de compra que realizan los usuarios. 
La parte del procesamiento del pago no fue incorporada todavia, quedará pendiente para proximas actualizaciones.

### Explicación de la navegación

En la Nav-bar encontraremos los primeros links que nos dirigen a la tienda completa y a paginas con los productos filtrados por tipo.
Harley Davidson (logo) - Abre la tienda completa con todos los productos.
Cruiser / Touring / Sport - Abre la tienda con los productos pertenecientes a esa categoria.

Al terminar de comprar poodremos ir al carrito (se accede desde la NavBar o en el detalle del item luego de agregarlo), donde podremos revisar los productos, borrarlos o simplemente completar la compra

Cuando queramos completar la compra nos pedira que llenemos un formulario con nuestros datos.
La orden de compra se almacenará en Firebase con todos los datos de los productos comprados y del cliente.

link de google drive sobre demostracion de la navegacion: https://drive.google.com/file/d/1ZVtEYFYXiOldEPMGqWfSrFU3va16YB2J/view?usp=drive_link


### TOOLS USED TO BUILD THE APP:

**Node.js v16.13.1** - Descargar de la pagina de node e instalar

**npm v8.1.2** - Se instala junto con Node

**ReactJS**

**react router DOM v5.2.0** - correr el comando **"npm install react-router-dom@5.2.0"** - (no usar la última versión porque puede introducir errores)

**Firebase v8.8.0** - correr el comando **"npm install firebase@8.8.0"** - Lo usamos como reemplazo de nuestro back end

**Loader de nomjs react-spiners** - correr el comando **"npm install --save react-spinners"** - Lo usamos para importar nuestro Loader

**Boostrap** - correr el comando **"npm install react-boostrap boostrap"** - Implementado en varios estilos del proyecto

### HOW TO SET THE APP LOCALLY:

Clone this repository and run **npm install** inside the repository directory.

After finished installation run **npm start** to open the app in the browser.


Actualizada por ultima vez el 12/8/2023