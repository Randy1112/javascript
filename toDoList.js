//document.getElementById('ajouter').onclick = function(){document.getElementById("affichage").innerHTML = 'Bienvenue'};

document.getElementById('ajouter').onclick = function(){
    var titre = document.getElementById("titre").value;
    var dateDebut =  document.getElementById("debut").value;
    var dateFin =  document.getElementById("fin").value;
    document.getElementById('afficherTitre').innerHTML = titre;
    document.getElementById('afficherDebut').innerHTML = dateDebut;
    document.getElementById('afficherFin').innerHTML = dateFin;

    localStorage.setItem('titre', titre);
    
};
