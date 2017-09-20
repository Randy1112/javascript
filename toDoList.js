//document.getElementById('ajouter').onclick = function(){document.getElementById("affichage").innerHTML = 'Bienvenue'};

document.getElementById('ajouter').onclick = function(){
    var tache = document.getElementById("tache").value;
    document.getElementById('afficherTitre').innerHTML = tache;

    var tableau = [];
    localStorage.setItem('tache', tache);

};
