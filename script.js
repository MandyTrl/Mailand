///COMPTEUR///
let NMsg = document.getElementsByClassName("msg").length ///Variable qui permet de comptabiliser le nombre de MSG
console.log("MSG ::: "+NMsg);
document.getElementById("count").textContent = NMsg; ///Permet de MAJ le compteur de MSG

///SUPPRESSION MSG///
for(var i=0; i<document.getElementsByClassName("trash").length; i++){
    document.getElementsByClassName("trash")[i].addEventListener("click",
        function(){
            this.parentNode.remove();///supprime le msg (élément parent de la poubelle cliquée graçe au"this")
            let NMsg = document.getElementsByClassName("msg").length ///Variable qui permet de comptabiliser le nombre de MSG
            document.getElementById("count").textContent = NMsg; ///Permet de MAJ le compteur de MSG
        }
    );
}; ///Ecoute de l'événement et modification au click