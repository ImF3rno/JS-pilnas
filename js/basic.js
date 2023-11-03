// /*
// Mokomes javasrcipt
// */

// // Primityvus duomenu tipai

// let first_name='Jonas'; //string
// let last_name='Andriuskevicius'; //string
// let item_price=12.56;
// let user_age=25;
// let user_online=true;

// // Inteligentiski duomenu tipai

// // Masyvas
// let product_cart=['Computer','Phone','Tablet','Pencil'];

// // Objektas
// let product={
//     tittle:'Apple MacBook Pro',
//     price:2366.12,
//     location:'Kaunas'
// };

// // Masyvo objektas
// let products=[
// {
//     tittle:'Apple MacBook Pro',
//     price:2366.12,
//     location:'Kaunas'
// },
// {
//     tittle:'Apple MacBook Pro',
//     price:2366.12,
//     location:'Kaunas'
// },
// {
//     tittle:'Apple MacBook Pro',
//     price:2366.12,
//     location:'Kaunas'
// },
// ];

// // Tipai kintamuju

// console.log(typeof(first_name));
// console.log(typeof(item_price));
// console.log(typeof(user_age));
// console.log(typeof(user_online));
// console.log(typeof(product_cart));
// console.log(typeof(product));
// console.log(product)

// // console.log isvedimas
// console.log(`Vartotojo pavarde yra ${last_name}, o jo vardas ${first_name}`);
// console.log("Man galbut patinka JS: "+first_name);

// // Konstantos deklaravimas
// const user_role='admin';
// // userRole='sale'; negalima perrasyti konstantos

// console.log(`Vartojo role yra ${user_role}`);



// var miestas='Jurbarkas';
// var pakeistas_miestas=miestas.replace('Jurbar','Kauna') //pakeicia viena dalyka i kita

// console.log(miestas.length); //ilgis viso var(nuo 1)
// console.log(miestas[3]); //parodo kas yra 3 pozicijoje
// console.log(miestas.indexOf('barkas')); //parodo nuo kur prasideda parasyta vieta
// console.log(miestas.slice(2,4)); //parodo nuo kurios iki kurios vietos uzmeta i console
// console.log(miestas.toLocaleLowerCase()); //viskas i mazasias raides
// console.log(miestas.toLocaleUpperCase()); //viskas i didziasias raides
// console.log(pakeistas_miestas);

// const language="lt";

// switch(language){
//     case "lt":
//         console.log("Svieki");
//         break;
//     case "en":
//         console.log("Hello");
//         break;
//     case "ru":
//         console.log("Zdarova");
//         break;
//     default:
//         console.log("Neuspratau kalbos");
// }



// let user=prompt('Iveskite kiek bus sveciu')
// sveciai=[];
// for(let i=0;i<user;i++){
//     sveciai=sveciai+1;
// }
// console.log(user)

//pati save issikviecianti funkcija
(function(){
// funkcijos deklaravimas
function say_hi(a){
    return a*2
}

// funkcijos kvietimas
console.log(say_hi(5));

// anonimine arrow funkcija
const calculator=function(...numbers){
    return numbers.reduce((prev,current)=>prev*current);
}

console.log(calculator(5,6,4,8,5,2,5,6,2))
})();