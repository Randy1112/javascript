/*
var longueurTableau = localStorage.length;
var affichage = '';
for(var i=0; i<longueurTableau; i++){
    affichage = affichage + '<input id="delete" type="text" name="delete" value="' +  localStorage.key(i) + '" readonly><input type="button" onclick="supprimer()" value="Supprimer"><br>';
}
document.getElementById('afficherTitre').innerHTML = affichage;
*/
function ajouter(){
    if(document.getElementById("tache").value != ''){
        localStorage.setItem(document.getElementById("tache").value, document.getElementById("tache").value);
    }
    var longueurTableau = localStorage.length;
    var affichage = '';
    for(var i=0; i<longueurTableau; i++){
        affichage = affichage + '<input id="delete'+ i +'" type="text" name="delete" value="' +  localStorage.key(i) + '" readonly><input type="button" onclick="supprimer('+ localStorage.key(i) +')" value="Supprimer"><br>';
    }
    document.getElementById('afficherTitre').innerHTML = affichage;
}

function supprimer(valeur){
    //localStorage.removeItem(valeur);
    console.log(valeur);
}
