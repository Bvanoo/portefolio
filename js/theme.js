const firstList =document.querySelector(".firstList");

const sndList =document.querySelector(".sndList");

// MISE EN PLACE DU THÈME SOMBRE

const applyDarkTheme = () => {
    document.body.style.backgroundColor = "#161616";
    document.querySelector("header").style.backgroundColor = "rgb(28, 28, 28)";
    header.style.boxShadow = ".5rem 0 2rem #242423";
    document.querySelectorAll(".card").forEach(function(card) {
        card.style.boxShadow = "-1rem -1rem 2rem #242423";
        card.style.backgroundColor ="rgba(28,28,28,.5)";
    });
    document.getElementById("arrow").style.fill = "rgb(256,256,256)";
    document.getElementById("arrow").style.stroke = "rgb(256,256,256)";

    document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(title => {
        title.style.fontWeight = "800";
        title.style.color = "rgb(246, 246, 246)";
    });

    document.querySelectorAll(".subs").forEach(subTitle => {
        subTitle.style.color = "#857e6e";
    });

    document.querySelectorAll("p").forEach(paragraph => {
        paragraph.style.color = "rgb(133,126,110)";
    });

    document.querySelectorAll("a").forEach(link => {
        link.style.color = "rgb(133,126,110)";
    });
    const aPropos = document.querySelectorAll(".btnDesc").forEach((desc)=>{
        desc.style.color = "rgb(246, 246, 246)";
    });
    const btnDesc = document.querySelectorAll(".btnDescription").forEach((description)=>{
        description.style.backgroundColor = "#333533"
});
};

// MISE EN PLACE DU THÈME CLAIR

const applyLightTheme = () => {
    document.body.style.backgroundColor = "#F3D9B0";
    document.querySelector("header").style.backgroundColor = "#cc5928";
    header.style.boxShadow = "0 -1rem 3rem #393938";
    document.querySelectorAll(".card").forEach(function(card) {
        card.style.boxShadow = "-.5rem -.5rem 3rem #393938";
        card.style.backgroundColor ="#bda988";
    });
    document.getElementById("arrow").style.fill = "#333533";
    document.getElementById("arrow").style.stroke = "#333533";
    
    document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(title => {
        title.style.fontWeight = "700";
        title.style.color = "#333533";
    });
    
    document.querySelectorAll(".subs").forEach(subTitle => {
        subTitle.style.color = "#333533";
    });
    
    document.querySelectorAll("p").forEach(paragraph => {
        paragraph.style.color = "#333533";
    });
    
    document.querySelectorAll("a").forEach(link => {
        link.style.color = "#333533";
    });
    const aPropos = document.querySelectorAll(".btnDesc").forEach((desc)=>{
        desc.style.color = "#333533";
    });
    const btnDesc = document.querySelectorAll(".btnDescription").forEach((description)=>{
        description.style.backgroundColor = "rgb(246, 246, 246)"
});
}

// MISE EN PLACE DE LA CONDITION QUI CHANGE LE THÈME EN FONCTION DE L'ÉTAT DE LA CHECKBOX

const swapTheme = () => {
    const btnTheme = document.getElementById("theme");
    if (btnTheme.checked) {
        applyLightTheme();
        localStorage.setItem('theme', 'light');
    } else {
        applyDarkTheme();
        localStorage.setItem('theme', 'dark');
    }
};

// EXPRESSION DE FONCTION QUI PERMET DE STOCKER L'ÉTAT DE LA CHECKBOX.  
// SI LE THÈME EST DARK, ELLE EST UNCHECKED ; SINON, ELLE EST CHECKED.

const initializeTheme = () => {
    const btnTheme = document.getElementById("theme");
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        btnTheme.checked = false;
        applyDarkTheme();
    } else {
        btnTheme.checked = true;
        applyLightTheme();
    }
};

document.getElementById("theme").addEventListener('change', swapTheme);

// LORS DU CHARGEMENT DE LA WINDOW, ON EXÉCUTE AUTOMATIQUEMENT LA FONCTION QUI INITIALISE LE THÈME  
// EN FONCTION DE L'ÉTAT DE LA CHECKBOX SAUVÉE.

window.onload = () => {
    initializeTheme();
    header.style.transition ="0s ease-in-out";
    profilName.style.transition ="0s ease-in-out";
    sub.style.transition ="0s ease-in-out";
    firstList.style.transition ="0s ease-in-out";
    navH2.style.transition ="0s ease-in-out";
    sndList.style.transition ="0s ease-in-out";
    setTimeout(() =>{
        header.style.transition =".7s ease-in-out";
        profilName.style.transition =".7s ease-in-out";
        sub.style.transition =".7s ease-in-out";
        firstList.style.transition =".7s ease-in-out";
        navH2.style.transition =".7s ease-in-out";
        sndList.style.transition =".7s ease-in-out";

    },100);

};
