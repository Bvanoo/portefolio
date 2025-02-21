let pos = 0;
const arrow = document.getElementById("arrow");
const header = document.querySelector("header");
const profilName = document.querySelector(".profilName");
const sub = document.querySelector(".sub");
const profil = document.getElementById("photoProfil");
const liFirst = document.querySelector(".firstList");
const liSnd = document.querySelector(".sndList");
const navH2 = document.querySelector(".navH2");

function backdrop(){
            if (pos===0){
            header.style.transform = "translateX(-190px)";
            arrow.style.transform = "rotate(180deg)";
            profil.style.transform ="translateX(180px) scale(.7)";
            sub.style.opacity ="0";
            profilName.style.opacity ="0";
            liFirst.style.opacity ="0";
            liSnd.style.opacity ="0";
            navH2.style.opacity ="0";
            pos=1;
        } else {
            header.style.transform = "translateX(0px)";
            arrow.style.transform = "rotate(0deg)";
            profil.style.transform ="translateX(0px)";
            sub.style.opacity ="1";
            profilName.style.opacity ="1";
            liFirst.style.opacity ="1";
            liSnd.style.opacity ="1";
            navH2.style.opacity ="1";   
            pos=0;
        };
}
