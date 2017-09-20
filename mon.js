/*alert('Hello World');
var myArray = ['Sébastien', 'laurence', 'Ludovic', 'Guillaume'];
console.log(myArray);
alert(myArray.length);
myArray.push('Medhi');
console.log(myArray);

function maFonction (str="par default"){
    console.log(str);
}
maFonction('Bonjour toi');

var obj = {
    name : "Andy",
    job: "Etudiant",
    citation: function(){alert('YOLO')}
}
console.log(obj.citation());*/

//Exercice 1
/*
for(var i=0; i<500; i++){
    console.log('Je dois faire des sauvegardes régulières de mes fichiers.');
}
*/

//Exercice 2
/*
for(var i=0; i<1500; i++){
    if(i%2 != 0){
        console.log(i);
    }
}
*/

//Exercice 3
/*
for(var i=0; i<=10; i++){
    console.log('13 * '+i+ " = " + (13*i))
}
*/

//Exercice 4
/*
var mot = prompt('Entrer un mot');
alert(mot.length);
*/

//05 - Ecrire un programme javascript qui demande un nombre entier à l’utilisateur. L’ordinateur affiche ensuite le message "Ce nombre est pair" ou "Ce nombre est impair" selon le cas.
/*
var nombre = prompt('Entrer un nombre');
if(nombre%2 == 0){
    alert('Ce nombre est pair');
}else{
    alert('Ce nombre est impair');
}
*/

//- 06 Ecrire un programme javascript qui demande un nombre compris entre 10 et 20, jusqu’à ce que la réponse convienne. En cas de réponse supérieure à 20, on fera apparaître un message : « Plus petit ! », et inversement, « Plus grand ! » si le nombre est inférieur à 10.
/*
do {
    var nombre = prompt('Entré un nombre');
    if(nombre<10){
        alert('Ce nombre est inférieur à 10');
    }else if(nombre>20){
        alert('Ce nombre est supérieur à 20');
    }
} while (nombre<10 || nombre >20);
*/

//- 07 Ecrire un programme javascript qui demande un nombre de départ, et qui ensuite affiche les dix nombres suivants. Par exemple, si l'utilisateur entre le nombre 17, le programme affichera les nombres de 18 à 27.
/*
var valeur = prompt('Entrer un nombre');
var nombre = parseInt(valeur, 10);
var i = nombre+10;
while (nombre<=i){
    console.log(nombre);
    nombre++;
}
*/

//- 08 Ecrire un programme javascript qui demande un nombre de départ, et qui ensuite écrit la table de multiplication de ce nombre.
/*
var valeur = prompt('Entrer un nombre');
var nombre = parseInt(valeur, 10);
    for(var i=0; i<=10; i++){
        console.log(valeur + ' + ' + i + ' = ' + nombre*i);
    }
*/

//- 09 Ecrire un programme javascript qui demande un nombre de départ, et qui calcule la somme des entiers jusqu’à ce nombre. Par exemple, si l’on entre 5, le programme doit calculer : 1 + 2 + 3 + 4 + 5 = 15, afficher que le résultat
//Fonction récursive possible
var valeur = prompt('Entrer un nombre');
var nombre = parseInt(valeur, 10);
var total = 0;
    for(nombre; nombre>=1; nombre--){
        total = total + nombre;
    }
    console.log(total);

//- 10 Ecrire un programme javascript qui demande l’ˆage d’un enfant `a l’utilisateur. Ensuite il l’informe de sa catégorie :
//		”Poussin” de 6 à 7 ans
//		”Pupille” de 8 à 9 ans
//		”Minime” de 10 à 11 ans
//		”Cadet” après 12 ans

//- 11 Faire une calculatrice ex: http://www.supportduweb.com/ftp/ybouane/scripts_astuces/javascript/calculatrice/calculatrice.html
