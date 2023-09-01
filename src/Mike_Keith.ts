export function Mike_Keith(){
    console.log('start');
    let x = 0
    let z = 0

    let D = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "samedi"]
    let M = ["janvier","février","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","decembre"]
    
    let m = 18
    let d = 1
    let y = 1953

    x = (23*m)/9 + d + 4 + y + y/4 - y/100 + y/400;
    x = (2 + m + 4 + y + 488 - 19 + 4)
    x = x%7  
    console.log(D.length[x]);
    

    if (m < 3) {

    }
    if (m > 3) {

    }
    if (m = 3) {

    }
           
    // if ( D = [(23m)/9] + d + 4 + y + [z/4] - [z/100] + [z/400] - 2 (si m >= 3)) {
        
    // }
} 

// Algo de Mike Keith

// Jour de semaine D = { [(23m)/9] + d + 4 + y + [z/4] - [z/100] + [z/400] - 2 (si m >= 3) } mod 7
// où:
// D = Jour de semaine   (D = 0 à 6;   0 = Dimanche, 1 = Lundi, ... , 6 = Samedi)
// [x] signifie le nombre entier résultant de la division, le reste étant ignoré
// m = Mois   (m = 1 à 12;   1 = Janvier, 2 = Février, 3 = Mars, ... , 12 = Décembre)     m >= 3 signifie m supérieur ou égal à 3
// d = Jour   (d = 1 à 31)
// y = année
// z = y - 1   si m < 3
// z = y        si m >= 3
// Modulo 7 ou mod 7 = reste de la division par 7

// d = 18, m = 1, y = 1953 et z = y-1 = 1952;   d'où
// D = { [(23x1)/9] + 18 + 4 + 1953 + [1952/4] - [1952/100] + [1952/400] } mod 7
// D = (2 + 18 + 4 + 1953 + 488 - 19 + 4) mod 7