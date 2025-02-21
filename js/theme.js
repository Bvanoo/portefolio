
// MISE NE PLACE THEME SOMBRE

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

// MISE EN PLACE THEME CLAIR.

const applyLightTheme = () => {
    document.body.style.backgroundColor = "#F3D9B0";
    document.querySelector("header").style.backgroundColor = "#d34420";
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

// MISE EN PLACE DE LA CONDITION QUI CHANGE LE THEME EN FONCTION DE L'ETAT DE LA CHECKBOX

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

// EXPRESSION DE FONCTION QUI PERMET DE STOCKER L'ETAT DE LA CHECKBOX SI LE THEME EST DARK ELLE EST UNCHECK SINON ELLE EST CHECK

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

// LORS DU CHARGEMENT DE WINDOW ON EFFECTUER AUTOMATIQUEMENT LA FONCTION QUI INITIALISE LE THEME EN FONCTION DE L'ETAT DE LA CHECKBOX SAUVEE.

window.onload = () => {
    initializeTheme();
};
