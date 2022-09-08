///COMPTEUR///
let NMsg = document.getElementsByClassName("msg").length; ///Variable qui permet de comptabiliser le nombre de MSG
console.log("MSG ::: "+NMsg);
document.getElementById("count").textContent = NMsg; ///Permet de MAJ le compteur de MSG

///SUPPRESSION MSG///
for(var i=0; i<document.getElementsByClassName("trash").length; i++){
    document.getElementsByClassName("trash")[i].addEventListener("click",
        function(){
            this.parentNode.remove();///supprime le msg (élément parent de la poubelle cliquée graçe au"this")
            let NMsg = document.getElementsByClassName("msg").length; ///Variable qui permet de comptabiliser le nombre de MSG
            document.getElementById("count").textContent = NMsg; ///Permet de MAJ le compteur de MSG
        }
    );
}; ///Ecoute de l'événement et modification au click

///RECHERCHER UN MESSAGE///
document.getElementById("search").addEventListener("click",
    function(){
        let value = document.getElementById("saisie").value;
        let sender = document.getElementsByTagName("h2");
        let msg = document.getElementsByClassName("msg");
        console.log("Saisie récupérée : ",value);
        // msg.filter(item => sender.includes(value));
        for(i=0; i<sender.length; i++){
            if(sender.length[i] === value){
                msg.show(sender.length[i])
            }
        }
        // msg.show(sender.includes(value));
    }
); ///Détection du click sur le bouton "search" + récupère la valeur saisie dans la barre de recherche
