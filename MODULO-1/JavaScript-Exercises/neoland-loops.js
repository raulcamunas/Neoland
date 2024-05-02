//EJERCICIO 1

/* const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];
for (let i=0; i<products.length; i++){
    if (products[i].includes("Camiseta")){
        console.log(products[i]);
    }
} */

//EJERCICIO 2

/* const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
	{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
	{name: 'Juan Miranda', T1: false, T2: true, T3: true},
	{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
	{name: 'Raquel Benito', T1: true, T2: true, T3: true}
];
alumns.forEach((alumns)=>{
    let aprobadas = 0;
    for(let trimestre in alumns){
        if(alumns[trimestre] == true){
            aprobadas++;
            console.log("entro");
        }
    }
    if (aprobadas>=2){
        alumns.isApproved = true;
    }
    else{
        alumns.isApproved = false;
    }
})
console.log(alumns); */

//EJERCICIO 3

/* const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar'];
for (place of placesToTravel){
    console.log(place);
} */

//EJERCICIO 4

/* const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
for(data in alien){
    console.log(`${data} : ${alien[data]}`);
} */

//EJERCICIO 5

/* const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}];
for (let i=0; i<placesToTravel.length; i++){
    if(placesToTravel[i].id == 11 || placesToTravel[i].id == 40){
        placesToTravel.splice(i, 1);
        i--; //al eliminar un objeto, retrocedemos en el índice para no saltar items
    }
}
console.log(placesToTravel); */

//EJERCICIO 6

/* const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]

let eliminados = 0;

for (let toy of toys){
    if (toy.name.includes("gato")){
        toys.unshift(toys.splice(toys.indexOf(toy),1)); 
        eliminados++; 
    }
}
toys.splice(0,eliminados);
console.log(toys); */

//EJERCICIO 7

const popularToys = [];

const toys = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]
for(let toy of toys){
    if(toy.sellCount > 15){
        popularToys.push(toy);
    }
}

console.log(popularToys);