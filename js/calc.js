
// Calculatrice.

const calcScreen = document.getElementById("calcScreen");
const btn = document.querySelectorAll(".case");

let inputUser = "";
let histo = [];
// Permet de crée un boucle "forEach" qui a comme attribut function(touche) et donc pour chaque .case récuperer le script va rechercher la valeur présente dans le data-value, reprise par le dataset.value
btn.forEach(function(touche) {
    touche.addEventListener("click",function() {
        const caseCalc = touche.dataset.value;
        if (caseCalc === '='){ // Ici on verifie si la touche entrée est = et si c'est un égal et si c'est égal j'utilise un objet Function qui va permettre de faire l'expression du resultat grace au return
            try {
                let result = new Function('return ' + inputUser)(); // dans ma variable result je lui ajoute un function avec comme parametre return + mon input user ce qui permet de realiser l'expression de l'input user, ensuite j'appelle imédiatement la fonction dans ma variable ce qui lui attribue automatiquement la valeur qui sort de cette fonction et donc la variable result passe de type objet a type number.
                if (Number.isFinite(result)){                
                if(Number.isInteger(result)){ // si il est entier pas de restriction sur les virgules 
                    calcScreen.innerHTML =`${result}`; 
                    histo.push(`${inputUser} = ${result}`); // Ajoutez l'expression et le résultat à l'historique //.push permet d'ajouter dans le histo []
                    inputUser = `${result}`;
                } else {
                    calcScreen.innerHTML =`${result.toFixed(6)}`;  // si il est décimal, max 6 décimale ( a modifier en math round p-e ? pour ne pas avoir 6 décimale sur un .50 par exemple.)
                    // inputUser = `${result.toFixed(6)}`;
                } 
            }else{
                throw new Error("Resultat infinis ou invalide");
            }
        } catch (error) {
            calcScreen.innerHTML = "Erreur : veuillez clear."; // j'aurais pu mettre error.mesasge pour afficher le message lier a l'erreur présente.
        }
        } else if (caseCalc === 'C') { //si c on supprime tout.
            inputUser = "";
            calcScreen.innerHTML = "";
        }else if (caseCalc ==='del'){
            inputUser = inputUser.slice(0, -1); //supprime la derniere entrée 
            calcScreen.innerHTML = inputUser;
        }else if (caseCalc ==='switch'){ // change le symbole de l'entree par un - et si c'est - ca fait + .
            if(inputUser !== ""){
                inputUser = -parseFloat(inputUser);
                calcScreen.innerHTML = `${inputUser}`;
            }else{
                inputUser += caseCalc;
                calcScreen.innerHTML = `${inputUser}`;
                histo.push(`${inputUser} = ${calcScreen.innerHTML}`);
            }
        }else {
            inputUser += caseCalc;
            calcScreen.innerHTML = `${inputUser}`;
        }
        // Affiche dans une autres div comme pour garder un historique (pas encore en place.)
        if (caseCalc === '=') { // Si "=" est pressé, ajoutez l'expression et le résultat à l'historique
            let resultat = new Function('return ' + inputUser)();
            if(Number.isInteger(resultat)) {
                calcScreen.innerHTML = `${resultat}`;
            } else {
                calcScreen.innerHTML = `${resultat.toFixed(6)}`;
            }

            // Récuperation de l'expression et du résultat dans un historique avec une limite de 10 calcul.
            const repCalc = document.getElementById("repCalc");
            repCalc.innerHTML = histo.join('<br>').split(); // Affiche chaque entrée de l'historique sur une nouvelle ligne
            if (histo.length > 10){
                repCalc.innerHTML = histo.join('<br>').split(); // Affiche chaque entrée de l'historique sur une nouvelle ligne
                histo = histo.splice(1, 1);
                repCalc.innerHTML = histo.join('<br>').split(); // Affiche chaque entrée de l'historique sur une nouvelle ligne
            }
        }
    })
});

function getRandomIntInclusive(min, max) {
    min = Math.ceil(0);
    max = Math.floor(25);
    console.log(Math.floor(Math.random() * (max - min + 1)) + min);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}