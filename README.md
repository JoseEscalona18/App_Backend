1. Instalamos la siguiente lista de programas: Visual Studio Code, Postman, MySQL, Node.js, XAMPP (En el caso de Postman, es necesario crear una cuenta de usuario para poder trabajar con el programa)

2. Vamos al siguiente link: https://github.com/JoseEscalona18/App_Backend y descargamos la carpeta de nuestro programa desde el botón de Code/Local y luego a Download ZIP

3. Una vez descargado el ZIP, lo extraemos y obtenemos la carpeta App_Backend

4. Teniendo MySQL y XAMPP instalado, vamos a XAMPP y abrimos los puertos de Apache y MySQL con los botones de START, al haberse activado los puertos y servicios se verán en color verde y nos notificará en consola el cambio de estatus y que se encuentra activo, entonces le damos a ADMIN en el servicio de MySQL y así nos abrirá el phpmyadmin (Que nos permite administrar nuestras Bases de Datos)

5. Vamos a necesitar crear un usuario desde PHPMyadmin, nos vamos a Cuentas de Usuario, nos saldrá agregar cuentas de usuario (en la parte inferior) y le damos a ese botón, colocaremos los siguientes datos: usuario (admin); nombre de host (local, localhost); contraseña (123456); y le damos en privilegios globales a seleccionar todo, luego de esto le damos a continuar

6. Lo siguiente es crear nuestra base de datos, la barra vertical izquierda hay un botón de “Nueva”, le damos a ese botón y creamos una base de datos de esta forma, colocando de nombre reservasdb y le damos a crear, luego de esto nos aparecerá nuestra base de datos, y podemos observarlo desde la barra vertical izquierda, además de mandarnos a la base de datos, mostrándonos que no hay tablas actualmente

7. Luego tenemos que importar los datos que tenemos en el archivo SQL que se encuentra en la carpeta del proyecto (la que descargamos), lo que haremos es ir a nuestra base de datos, seleccionarla, y luego en la barra superior, le damos a importar. Entonces, nos saldrán diferentes opciones, pero lo único que queremos es importar de nuestro archivo, así que seleccionamos el archivo SQL de la carpeta del proyecto, y luego le damos al botón de importar (se encuentra abajo). Al hacerlo nos notificara de una gran cantidad de comandos realizados, y ahora podrán ver sus tablas y los datos de ejemplos de la Base de Datos

8. Abrimos Visual Studio Code y seleccionamos en Archivo/Abrir Carpeta, luego de esto seleccionamos la carpeta de App_Backend, de esta manera podrán ver el código del proyecto y podrán inicializarlo

9. En la carpeta descargada no se encuentra el archivo. env, eso es porque debemos crearlo para poder acceder a la base de datos en nuestro servidor, para eso simplemente creamos un archivo llamado “. env” (se puede realizar con el Icono de Archivo+), y colocaremos las siguientes variables, también llamadas variables de entorno y guardamos todo (Al botón archivo, y guardar todo)

10. Lo siguiente es crear una terminal desde Visual Studio Code, con las teclas CTRL+Mayus+Ñ o desde Terminal/Nuevo Terminal 

11. Inicializamos el servidor con el comando npm run serve

12. Ahora podemos ir desde nuestro navegador a localhost:3000 que funciona como un índice de nuestro sistema (contiene información sobre hacer las funciones de Equipos, Espacios, Personal, Solicitantes, Reservas de Equipo, Reservas de Espacio, Trabajos, Facturas y Proveedores)

13. Ya con el servidor inicializado, podemos abrir el programa de Postman, iniciar nuestra sesión y crear un Workspace para poder hacer las funciones de nuestro programa, colocando nuestra dirección HTTP de Localhost, y asignando una cabecera de tipo Content-Type y con valor application/json

14. Tenemos que obtener un token, de lo contrario no podremos tener accesibilidad a todas las funciones, ya que varían dependiendo del tipo de usuario que seas, ya sea Admin, Personal o Solicitante. 

15. El ingreso de usuario y su accessToken también puede obtenerse desde Google Chrome, básicamente nos vamos a http://localhost:3000/api/ingresar , luego de eso ingresamos nuestro usuario y contraseña. Si lo hacemos correctamente nos redirigirá a el menú de comandos y ya nuestra cookie nos dará acceso a las funciones que tenemos autorizadas, vía web

16. Para Postman, tendremos que colocar nuestra cookie que tenemos en nuestro navegador, primeramente, luego de ingresar usuario, seleccionamos con click derecho a cualquier parte de la pagina y le damos a inspeccionar elemento, luego nos abrirá una ventana a nuestra derecha, tendremos que ubicarnos en los botones de arriba y darle a application, luego nos saldrá un índice y tendremos que darle a Cookies, localhost, para así ver la cookie en nuestro sistema

17. Lo siguiente es ingresar esta cookie en Postman, básicamente iremos a debajo del botón SEND, ahí aparece el botón de Cookies, nos abrirá una ventana, en esta colocaremos nuestro dominio, en este caso es localhost, por defecto nos permitirá agregar una cookie, luego de eso nos pedirá los datos de nuestra Cookie, que ya obtuvimos desde el navegador, los colocaremos de acuerdo a lo pedido; Cookie1 seria accessToken, value sería el valor de nuestra cookie, Path sería la ruta de nuestra cookie(“/”); y el Expires podremos dejarla de esa forma, o podemos darle el valor que tenemos en nuestro navegador

A partir de esto, ya seremos capaces de usar el Postman en nuestro sistema, ya que este necesitaba la cookie para reconocerla dentro de nuestro middleware de verificación de roles y autenticación
