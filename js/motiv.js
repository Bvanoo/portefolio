
const profilP = document.getElementById('profilP');
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
profilP.innerHTML = `J'ai ${age} ans, je vis à ${ville}. Je suis passionné par le développement web depuis un moment déjà. J'adore le fait que ce domaine soit en constante évolution, il y a toujours de nouvelles choses à apprendre et de nouveaux défis à relever. <br><br>

Je suis quelqu'un de proactif, j'aime trouver des solutions et je suis toujours prêt à me lancer dans de nouveaux projets. J'ai un esprit logique et j'aime résoudre des problèmes, un peu comme dans les jeux vidéo auxquels j'ai beaucoup joué.  Ils m'ont appris à être stratégique, à anticiper et à prendre des décisions rapidement.<br><br>

En ce moment, je me forme pour pouvoir suivre une formation qualifiante en développement web.  Je suis vraiment motivé et je travaille dur pour acquérir les bases nécessaires et être prêt pour la suite.<br><br>

Je suis convaincu que cette formation est une opportunité incroyable pour moi de développer mes compétences et de me lancer dans le monde du développement web. J'ai hâte de commencer, de rencontrer d'autres passionnés et d'apprendre ensemble.`;

