let date = new Date(Date.now() + 86400000); //86400000ms = 1 jour
date = date.toUTCString();
var tableau = ["sport", "design", "defarsci", "foot ball", "tech", "iot", "volkeno"]
var tb = [{id: 1, mot: 'Foot Ball', indice_1: 'crampons', indice_2: 'maillot', indice_3: 'stade'},
{id: 2, mot: 'DefarSci', indice_1: 'innovation', indice_2: 'partage', indice_3: 'developpement'},
{id: 3, mot: 'Design', indice_1: 'Inskape', indice_2: 'Photoshop', indice_3: 'Illustrator'}]
var tableauMotJouer = ["sport", "design", "defarsci"];
document.cookie = tableauMotJouer;'path=/; expires=' + date; 'domain=http://localhost/JS/coockies.html; ';

//Crée ou met à jour un cookie 'user'


console.log(document.cookie);

// add data to the tableau 
tableauMotJouer.push("Kiwi");
document.cookie = tableauMotJouer;'path=/; expires=' + date; 'domain=http://localhost/JS/coockies.html; ';
console.log(tableauMotJouer);
console.log('tableauMotJouer');
console.log(document.cookie);

let difference = tableau.filter(x => !tableauMotJouer.includes(x));
console.log(tableau.length);
console.log(tableauMotJouer.length);
console.log(difference);
console.log(difference.length);