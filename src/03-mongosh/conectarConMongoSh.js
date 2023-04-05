// CONECTAR CON MONGOSH
// docker ya tiene la terminal de mongosh intalada en el, entonces loque vamos a hacer es entrar a ese
// contenedor
// conectar o entrar con el contenedor:
// docker-compose exec mongodb bash
// ya estando adentro, conectar con mongosh:
// mongosh 'url' osea que colocandole la url pues a la base de datos que quieras conectarte en mongo compass quedaria
// mongosh 'mongodb://root:root123@localhost:27017/?authMechanism=DEFAULT&tls=false'

// ya cuando estamos en el sh podemos correr comandos como
// show dbs : muestra la bases de datos
// show collections: adivina que hace y te doy un premio jajajaj

// json vs bson
// Mongo guarda detras de camara todos sus datos en formato BSON, pero nosotros lo vemos como JSON
// JSON VENTAJAS: amigable/ se puede leer/ formato  muy usado
// JSON DESVENTAJAS: basado en texto osea que consume mucho espacio, esta limitados los tipos de datos que
// almacena : string, boolean, number,array subojectos.
// BSON VENTAJAS: representacion binaria del JSON, no consume tanto espacio, alto rendimiento, mas tipos de
// datos como fechas, raw binary, integer, long, float
// BSON DESVENTAJAS: No es estandar y no es facil de leer
