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
        let sender = document.getElementsByTagName("h2");
        let msg = document.getElementsByClassName("msg");
        console.log("type sender : ", typeof(sender), " type msg : ", typeof(msg));
        console.log("tableau msg :", msg);
        console.log("tableau sender :", sender);
        for (let i=0; i < sender.length; i++){
            let senderSelected = sender[i].includes(value)
            for (let i=0; i < msg.length; i++){
                msg.filter(item => senderSelected);
            }
        }
    }
); ///Détection du click sur le bouton "search" + récupère la valeur saisie dans la barre de recherche
