db.monitores.find(
    {$and: [
    {espacioColor: {$elemMatch: {estandar: "sRGB", cobertura: {$gte: 97}}}},
    {"espacioColor.estandar": "DCIP3"}
]}, 
{espacioColor:1}
)