#Proyecto Final de MongoDB

Esta es una base de datos creada como proyecto final del primer trismetre de la asignatura de Gestion de Base de Datos

La principal intención de este proyecto es crear una base de datos utilizando documentos JSON para realizarles consultas.

He creado una base de datos de monitores registrando todas sus caracteristicas en sus campos correspondientes. Creando campos de los siguientes tipos:

- "string"
- numerico
- booleano
- array[]
- documento{}
- fecha

Y he realizado consultas con los operadores:

- $eq, $lt, $gt
- $and 
- $or
- $regex
- $all
- $elemMatch
- $exists

Y como aportación persona he añadido:

- Metodo .sort

##Instalación

Puedes instalar esta base de datos si tienes mongoDB en tu ordenador mediante la consola utilizando el comando
*>db.monitores.insertMany([])* y añadiendo todos los documentos que se encuentran en el archivo **inserts.js** o utilizando el comando  *>load("inserts.js")* con la ruta completa de archivo

### Mas Información

Dentro del manual que se encuentra en la carpeta **doc** encontraras toda la información relativa a cada campo: significado, tipo, posibles valores etc. Ademas de una explicación expandida de las consultas que he realizado

 
