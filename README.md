### TAREA CURSO NIVELADOR 👋
### JOSE ARMANDO GIRON MELENDEZ 👯


Instrucciones para correr proyecto

Ejecutar desde terminal:


# PARA EJECUTAR EL SERVICIO POST Y CONSUMIR CON UN CLIENTE COMO POSTMAN

# EJECUTAMOS PARA INSTALAR TODAS LAS REFERENCIAS Y COMPONENTES 
npm install 

# LUEGO PARA CORRER EL PROYECTO

node ServicioPost.js

# IMPORTANTE body EL PARAMETRO  text Y COLOCAR EL MENSAJE QUE SE DESEA MOSTRAR:
Metodo: Post 

Url: http://127.0.0.1:3000/

json mediante Body:

{"text":"Mensaje Personalizado"}


# PARA EL SERVICIO WEB NORMAL 

npm install 

node Servicio.js

Abrir desde navegador o cliente http://127.0.0.1:3000/



# ✨PARA EJECUTAR EL DOCKER ✨

Ejecutar el comando

docker build -t [nombre del contenedor] .

Usar el id que genero la construcción para ejecutar el proyecto

Para ver las imagenes creadas (nos interesa el IMAGE ID)

docker images

Ejecutar el proyecto

docker run -it -p 4200:3000 [colocar el id de la imagen]

Probando la API con Docker

Metodo: Post 
Url: http://127.0.0.1:3000/

json mediante Body:
{"text":"Mensaje Personalizado"}


