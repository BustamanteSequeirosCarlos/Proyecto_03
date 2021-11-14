//Consultas

/*Un jugador de videojuegos profesional que necesita un monitor de un tamaño de 24 o 27 con un refresco mayor o igual de 144hz, 
que sea ajustable en altura e inclinación que tenga alguna tecnologia ya sea freesync o gsync tenga al menos 2 usb y un displayport*/

db.monitores.find(
    {
        $and: 
        [
         {pulgadas: {$all: [24, 27]}},
         {"pantalla.refresco": {$gte: 144}},
         {"peana.ajustabilidad": {$all: ["altura", "inclinacion"]}},
         {$or:[{tecnologias: {$eq: "freesync"}}, {tecnologias: {$eq: "gsync" } } ]},
         {"conectividad.USB.number": {$gte: 2}},
         {"conectividad.DisplayPort": {$exists: true}},
        ]
    }, {pulgadas:1, "pantalla.refresco":1, "peana.ajustabilidad":1, tecnologias:1, conectividad:1}
)
//_id:1

/*Un fotografo necesita un monitor para poder editar sus fotos. Necesita que el monitor tenga una resolución
de QHD, UHD o WQHD una profundidad de bits de 10. Tenga HDR.  Que tenga espacio de color "sRGB" mayor al 97 
y que tambien tenga el espacio de color DCIP3 sin importar el porcentaje. Ademas los quiere ordenados por su 
fecha de salida al mercado para*/

db.monitores.find(
    {
        $and: 
        [
         {$or: [{"pantalla.resolucion": {$regex: /Q/}},{"pantalla.resolucion": {$regex: /^U/}}]},
         {"pantalla.bitsProfundidad": 10},
         {"pantalla.HDR": {$exists: true}},
         {$and: [
            {espacioColor: {$elemMatch: {estandar: "sRGB", cobertura: {$gte: 97}}}},
            {"espacioColor.estandar": "DCIP3"}
        ]}
        ]
    }, {"pantalla.resolucion":1, "pantalla.bitsProfundidad":1, "pantalla.HDR":1, "espacioColor":1, puestoEnVenta:1}
).sort({puestoEnVenta:-1})

//_id:2, _id:3, _id:8

/*Un editor de video necesita un monitor con las siguientes caracteristicas: Que tenga un Ratio de aspecto mayor de
16:9, que tenga un panel IPS de cualguier tipo, que sea ajustable en altura e inclinacion, que tenga altavoces
y que se pueda comprar por amazon*/

db.monitores.find({
    "ratioAspecto.formato": {$ne: "16:9"},
    "pantalla.panel": {$regex: /IPS$/},
    "peana.ajustabilidad": {$all: ["altura", "inclinacion"]},
    altavoces: true,
    "comprar.tienda": "amazon"

}, {"ratioAspecto.formato":1, "pantalla.panel":1, "altavoces": 1, "comprar":1})

//_id:17, _id:20

/*Quiero conocer todos los monitores que tienen mas de un tamaño de pulgadas, tienen mas de 60Hz de refresco, 
pero menos de 300, que tienen partes hechas de aluminio, fueron anunciados en 2020*/

db.monitores.find({
    pulgadas: {$not:{$size: 1}},
    "pantalla.refresco": {$gt: 60, $lt: 300},
    "peana.materiales": "aluminio",
    anunciado: {$gte: new Date("2020-1-1"), $lt: new Date("2021-1-1")},
    "comprar.precio": {$lt: 300}
}, 
    
    {pulgadas:1, "pantalla.refresco":1, "peana.materiales":1, "anunciado":1, comprar:1}
)

//_id: 4

/*Quiero conocer el número de monitores que tienen panel IPS, 10bits de profundidad, HDR superior a 400, que no tenga el color bronce ni plateado,
en el espacio de color tienen un sRGB superior a 100 o tienen mas de 1 estandar de espacio de color*/

db.monitores.find({
    $and: 
    [
        {"pantalla.panel": {$regex: /IPS$/}},
        {"pantalla.bitsProfundidad": {$eq: 10}},
        {"pantalla.HDR": {$gt: 400}},
        {"peana.colores": {$nin: ["plateado", "bronce"]}},
        {espacioColor: {$exists: true}},
        {$or: [
                {espacioColor: {$elemMatch: {estandar: "sRGB", cobertura: {$gt: 100}}}}, 
                {espacioColor: {$not: {$size: 1}}}
            ]}
    ]
}).count()

//Number 1