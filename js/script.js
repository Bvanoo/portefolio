const profil = document.getElementById('profil');
const year = new Date().getFullYear();
const month = new Date().getMonth()+1;
const day = new Date().getDate();
const myYear = 1996;
const myMonth = 7;
const myDay = 24;
let age = 0;
let ville = "Leuze (5310)"
if (myMonth>= month && myDay>day){
    age = year-myYear-1;
}else{
    age = year-myYear;
}
profil.innerHTML = `J'ai ${age} ans, je vis a ${ville}. Je suis une personne dynamique et passionnée par le monde du développement web. Je suis proactif et toujours prêt à relever de nouveaux défis. Depuis longtemps, le développement web est un secteur qui me passionne et j'ai toujours rêvé d'en faire mon métier. C'est un domaine super dynamique, il y a toujours des nouveautés ! <br><br>

J'adore les défis qui font appel à la logique et à la résolution de problèmes, et les jeux vidéo ont été pour moi un véritable terrain d'entraînement. Ils m'ont appris à élaborer des stratégies, à anticiper les actions de l'adversaire et à penser de manière logique pour atteindre mes objectifs. <br><br>

Je suis actuellement inscrit à une formation préparatoire pour intégrer une formation qualifiante en développement web. Cette formation me permet d'acquérir les bases nécessaires et de me préparer efficacement aux exigences de la formation qualifiante. Je suis assidu et motivé dans cette démarche et je suis convaincu d'être prêt à relever les défis de la formation qualifiante. <br><br>

Je suis convaincu que cette formation qualifiante en développement web est l'opportunité idéale pour acquérir les compétences techniques et les connaissances nécessaires pour concrétiser mon projet professionnel. Je suis déterminé à m'investir pleinement dans cette formation et à contribuer activement à la dynamique du groupe.

`;