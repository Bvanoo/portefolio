let pos = 0;
const arrow = document.getElementById("arrow");
const header = document.querySelector("header");
const profilName = document.querySelector(".profilName");
const sub = document.querySelector(".sub");
const profil = document.getElementById("photoProfil");
const sndLi = document.querySelector(".sndLi");
function backdrop(){
            if (pos===0){
            header.style.transform = "translateX(-190px)";
            arrow.style.transform = "rotate(180deg)";
            profil.style.transform ="translateX(180px) scale(.7)";
            sub.style.opacity ="0";
            profilName.style.opacity ="0";
            sndLi.style.opacity ="0";
            pos=1;
        } else {
            header.style.transform = "translateX(0px)";
            arrow.style.transform = "rotate(0deg)";
            profil.style.transform ="translateX(0px)";
            sub.style.opacity ="1";
            profilName.style.opacity ="1";
            sndLi.style.opacity ="1";

            pos=0;
        };
}
