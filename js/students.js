let student=prompt('Iveskite kokio zmogaus ieskote')

let students =[
    {
        id:1,
        firstName:"Tadas",
        lastName: "Tadauskas",
        email:"tadas.tadauskas@stud.kitm.lt",
        group: "students",
        marks:[
            {
                subject:'programming',
                mark:7
            },
 
            {
                subject:'IT',
                mark:8
            },
 
            {
                subject:'Math',
                mark:5
            }
        ]
    },
 
    {
        id:2,
        firstName:"Ieva",
        lastName: "Ievute",
        email:"Ieva.Ievute@stud.kitm.lt",
        group: "students",
        marks:[
            {
                subject:'programming',
                mark:4
            },
 
            {
                subject:'IT',
                mark:9
            },
 
            {
                subject:'Math',
                mark:4
            }
        ]
    },
 
    {
        id:3,
        firstName:"Migle",
        lastName: "Tadauskaite",
        email:"migle.tadauskaite@stud.kitm.lt",
        group: "students",
        marks:[
            {
                subject:'programming',
                mark:6
            },
 
            {
                subject:'IT',
                mark:4
            },
 
            {
                subject:'Math',
                mark:6
            }
        ]
    },
 
    {
        id:4,
        firstName:"Petras",
        lastName: "Tadauskiukas",
        email:"petras.tadauskiukas@stud.kitm.lt",
        group: "students",
        marks:[
            {
                subject:'programming',
                mark:10
            },
 
            {
                subject:'IT',
                mark:10
            },
 
            {
                subject:'Math',
                mark:10
            }
        ]
    },
 
    {
        id:5,
        firstName:"Rokas",
        lastName: "Tadauskas",
        email:"Rokas.tadauskas@stud.kitm.lt",
        group: "students",
 
    }
]

for(let i=0;i<=5;i++){
    if (students.includes('Tadas')){
        console.log(students.id(1))
    }
}


// Parasyti programa, kurios pagalba galima atlikti studentu paieska pagal varda.
// Per prompt langa paieskomas zmogus.
// Jei randa isveda visus duomenis. 
// Jei neranda isveda, kad tokio studento nera.
// Realizuoti reikia naudojant JS funkcija includes.