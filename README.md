# proyecto-final-mod4

## Tabla de contenido Proyecto Final Módulo 4
- [proyecto-final-mod4](#proyecto-final-mod4)
  - [Tabla de contenido Proyecto Final Módulo 4](#Tabla-de-contenido-Proyecto-Final-Módulo-4)
  - [Introducción](#Introducción)
  - [Ramas usadas en el proyecto](#Ramas-usadas-en-el-proyecto)
  - [Características](#Características)
  - [Características de las partes del proyecto](#Características-de-las-partes-del-proyecto)
  - [Tecnologías usadas](#Tecnologías-usadas)
  - [Validación de formulario de Login](#Validación-de-formulario-de-Login)
  - [Puesta en marcha o instalación](#Puesta-en-marcha-o-instalación)
  - [Mejoras Futuras](#Mejoras-Futuras)
  - [Contribuciones](#Contribuciones)

## Introducción

Este proyecto corresponde al Módulo 4 basado en React y tiene como propósito desarrollar una tienda en línea especializada en productos tecnológicos. La aplicación permite a los usuarios explorar una lista de productos, consultar los detalles de cada uno y simular la adición y eliminación de artículos en un carrito de compras.
Una de las características clave implementadas es un sistema de autenticación, el cual es necesario para acceder al proceso de checkout. En esta etapa, los usuarios pueden ver los métodos de pago disponibles. La sesión de usuario se gestiona mediante `localStorage`. Además se ha incorporado la funcionalidad que, después de 5 minutos de inactividad, elimina automáticamente los datos de la sesión, obligando al usuario a volver a iniciar sesión.Esto asegura una mayor seguridad y control sobre las sesiones activas.
Este proyecto sigue un enfoque **mobile-first** y es completamente **responsive**, garantizando una experiencia de usuario fluida y optimizada en dispositivos de todos los tamaños.

**Estructura del Proyecto:**
- **public**: Contiene archivos estáticos que son accesibles directamente a través de la URL. Se encuentra en este el favicon de la marca.
- **src/components**: Contiene los componentes funcionales de la tienda.
- **src/context**: Almacena los contextos implementados para mejorar la reutilización de la lógica.
- **src/services/**: Incluye los datos mockeados de los productos.
- **src/styles/**: Contiene los archivos CSS que dan estilo a la aplicación.
- **src/pages/**: Contiene las páginas principales que corresponden a las distintas rutas de la aplicación.
- **src/img/**: Contiene las imágenes usadas en la web.
- **src/customHook**: Almacena los customHooks
  - **usePagination**:Este custom hook tomará los productos que se desea mostrar y la cantidad de productos por página.
  - **useScrollToTop**: Este custom hook se utiliza para hacer que la página se desplace automáticamente hacia la parte superior cada vez que cambia la ruta o se realiza una navegación dentro de la aplicación.

## Ramas usadas en el proyecto
A continuación, se describen las ramasutilizadas en este proyecto:

- **main**: Rama principal y estable del proyecto, donde se encuentra la versión lista para producción. Esta rama siempre debe estar en un estado funcional y estable.

- **develop**: Rama donde se integran las nuevas características y cambios antes de ser fusionados con la rama main. Es la rama base para el desarrollo y prueba de nuevas funcionalidades.

- **feature/paginacion:** (Ejemplo hipotético): Rama dedicada al desarrollo de la paginación de productos.
- **feature/login:** (Ejemplo hipotético): Rama enfocada en la implementación de la funcionalidad de login, para permitir la identificación de usuarios y control de acceso a la aplicación.
- **feature/checkout:** (Ejemplo hipotético): Rama destinada al desarrollo de la funcionalidad del checkout.

## Características
  
- *HTML Semántico*: El contenido está estructurado con etiquetas HTML5 apropiadas para estructurar el contenido de manera clara y accesible.
- *CSS Anidado*: Se utiliza CSS para dar estilo a los elementos de la página, con un enfoque en anidación para mayor organización y control de los estilos.
- *Responsive Design. Mobile first*: El diseño se adapta a diferentes tipos de visualizaciones, garantizando una experiencia óptima para el usuario.
- *Navegación Dinámica*: Se incluyen enlaces rápidos a diferentes secciones de la página.
- *Animaciones y Efectos*: Se incorporan transiciones, efectos visuales y animaciones con CSS para mejorar la experiencia del usuario.
- *Favicon* : Se diseñó el favicon utilizando una herramienta en línea especializada en la creación de logotipos para la empresa PrimeZone. Este favicon se muestra en la pestaña del navegador, mejorando la identidad visual del proyecto y logrando una mayor similitud con la marca de la empresa. Al agregar el favicon, se asegura una experiencia de usuario más profesional y consistente en la navegación.
- *Navegación con react-router-dom:* : Implementación de rutas
  - /: Página de inicio que muestra una lista de productos.
  - /producto/:id: Página de detalles del producto.
  - /carrito: Página donde se muestran los productos añadidos al carrito.
  - /login: Página donde se muestra el formulario del login.
  - /checkout: Página donde se muestra el checkout.
- *Hooks personalizados*
- *Menú hamburguesa* : Se implementó un menú hamburguesa en el header de la vita móvil.
- *localStorage* : Para almacenar la sesión de usuario.

## Características de las partes del proyecto 

### 1. **Página de inicio (/)**  
  - Muestra una lista de productos disponibles.
  - Permite ver acceder a los detalles de cada producto.

### 2. **Detalle de producto (/producto/:id)**  
  - Muestra la información detallada de un producto seleccionado.
  - Permite agregar el producto al carrito si este se encuentra en stock, evitando incorporar al carrito aquellos productos que no estén disponibles.

### 3. **Carrito (/carrito)**  
  - Muestra los productos agregados al carrito.
  - Permite eliminar productos del carrito, aumentar o disminuir la cantidad del producto y ver el precio total.

### 4. **Autenticación y Checkout (/checkout)**  
  - Requiere inicio de sesión para proceder al checkout.
  - Muestra los métodos de pago disponibles (en fase de mejora).
  - Limpieza de sesión después de 5 minutos de inactividad.

## Tecnologías usadas

- HTML5.
- CSS Vanilla 
  - CSS Anidado.
- JavaScript
- Vite: Se utilizó Vite para el desarrollo del proyecto, proporcionando un entorno rápido y optimizado para la creación de la página web interactiva.
- React: Biblioteca principal para la construcción de la interfaz.
  - **react-router-dom**: Para la navegación entre las distintas vistas de la aplicación.
  - **useState & useEffect**: Para gestionar el estado local y los efectos secundarios en los componentes.
  - **Context**: Para la gestión global del estado del carrito de compras.
  - **localStorage**: Para almacenar la sesión de usuario.
  - **React Hook personalizado**: Para encapsular la lógica reutilizable.
 
## Validación de formulario de Login

El formulario de login en esta aplicación incluye validaciones específicas para garantizar que los datos ingresados cumplan con ciertos criterios de seguridad:

### 1. **Validación del nombre de usuario (Username)**

- El nombre de usuario debe tener entre **5 y 9 caracteres**.
- Solo puede contener **letras (mayúsculas y minúsculas)** y **números**.
- Si el nombre de usuario no cumple con estos requisitos, se mostrará el siguiente mensaje de error:  
  `"Username must be between 6-9 characters, and can only contain letters (uppercase and lowercase) and numbers."`
  
### 2. **Validación de la contraseña (Password)**
- La contraseña debe tener entre **9 y 12 caracteres**.
- Debe incluir al menos:
  - **Una letra mayúscula**.
  - **Una letra minúscula**.
  - **Un número**.
  - **Un carácter especial** (como `!`, `@`, `#`, etc.).
  - Si la contraseña no cumple con estos requisitos, se mostrará el siguiente mensaje de error:
  - `"Password must be between 9-12 characters, including one uppercase letter, one lowercase letter, one number, and one special character."`
  
## Puesta en marcha o instalación

1. Clona el repositorio (https://github.com/EliGlezS/proyecto-final-mod4.git).
3. **Página Web**:
   - Si deseas trabajar o visualizar la página web, navega a la carpeta ProyMod4.
   - Instala las dependencias con Vite (si aún no lo has hecho):
     **npm install**
   - Luego, para iniciar el servidor de desarrollo de Vite, corre el siguiente comando:
     **npm run dev**
   - Abre tu navegador y visita el local host que aparece después de introducir el comando anterior, a continuación podrás ver la página en acción.
   
**Si deseas realizar cambios y contribuir al proyecto** : 

1. Haz un fork del repositorio.
2. Crea una rama nueva con tu característica o corrección.
(Comando para crear la rama y situarse en ella **git checkout -b nombre-de-tu-rama**).
4. Realiza los cambios y haz un commit con un mensaje descriptivo.
5. Abre un pull request para que revisemos tus cambios.

## Mejoras Futuras
Algunas posibles mejoras para este proyecto son:
- Integración de API real: Conectar la aplicación a una API para obtener productos en lugar de usar datos mockeados.
- Mejoras en la autenticación: Implementar un sistema de autenticación más avanzado con token y sesiones de usuario.
- Implementación de métodos de pago reales: Integrar plataformas de pago para la fase de checkout.
- Crear un menú interno para los usuarios autenticados.

## Contribuciones
Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, por favor crea un "pull request" con tus sugerencias o mejoras.
