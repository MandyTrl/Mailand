///COMPTEUR///
let NMsg = document.getElementsByClassName("msg").length; ///Variable qui permet de comptabiliser le nombre de MSG
document.getElementById("count").textContent = NMsg; ///Permet de MAJ le compteur de MSG

///SUPPRESSION MSG///
for(let i=0; i<document.getElementsByClassName("trash").length; i++){
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
        let value = document.getElementById("saisie").value; ///Variable qui récupère la saisie de l'input
        let sender = document.getElementsByTagName("h2"); ///Variable initialisée au tableau des <h2>
        // let msg = document.getElementsByClassName("msg"); ///Variable initialisée au tableau des <div> "msg"

        for(i in sender){
            if(sender[i] === value){
                let filteredMsg = sender.parentNode.parentNode.parentNode.filter(value)
            }
        }

    }
); ///Détection du click sur le bouton "search" + récupère la valeur saisie dans la barre de recherche
