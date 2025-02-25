
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
profilP.innerHTML = `J'ai ${age} ans et je vis à ${ville}. Depuis un moment déjà, je suis passionné par le développement web. Ce qui me plaît dans ce domaine, c'est qu'il est en constante évolution : il y a toujours quelque chose de nouveau à apprendre, de nouveaux défis à relever, et ça rend les choses vraiment stimulantes.<br><br>

J'aime particulièrement le fait que le développement web ne soit jamais figé. Chaque nouvelle technologie, chaque mise à jour apporte son lot de découvertes et d'innovations. Et c'est justement ça qui me motive : pouvoir apprendre en continu, expérimenter et progresser sans cesse.<br><br>

De nature proactive, j'aime chercher des solutions et me creuser la tête pour résoudre des problèmes. Ayant beaucoup joué aux jeux vidéo, j'ai développé un esprit logique et stratégique, ce qui me sert énormément dans le code : anticiper les erreurs, structurer mes idées et prendre des décisions rapidement.<br><br>

Actuellement, je me forme en autodidacte et je suis également une formation pour me préparer aux formations qualifiantes en développement web. Je suis motivé et investi pour acquérir de bonnes bases et être prêt à franchir cette nouvelle étape.<br><br>

Je suis convaincu que cette formation est une opportunité incroyable pour développer mes compétences, rencontrer d'autres passionnés et apprendre ensemble. J'ai hâte de commencer cette aventure et de me lancer pleinement dans ce métier qui me passionne.
`;

