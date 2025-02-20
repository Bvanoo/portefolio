function chgmtTheme() {
    const btnTheme = document.getElementById("theme");

    if (btnTheme.checked) {
        document.body.style.backgroundColor = "rgb(200,200,200)"; 
        const header = document.querySelector("header");
        header.style.backgroundColor = "rgb(158, 158, 158)"; 
        const arrow = document.getElementById("arrow")
        arrow.style.fill = "rgb(0,0,0)";
        arrow.style.stroke = "rgb(0,0,0)";
        // Changement de couleur de tout les titres
        const titles = document.querySelectorAll("h1, h2, h3, h4, h5, h6"); 
        for (let i = 0; i < titles.length; i++) {
            titles[i].style.color = "rgb(20,20,20)"; 
        }
        
        // Changement de couleur de tout les h2 class .subs
        const subTitles = document.querySelectorAll(".subs");
        for (let i = 0; i < subTitles.length; i++) {
            subTitles[i].style.color = "rgb(123,126,136";
        }
        // Changement de couleur de tout les p
        const paragraphs = document.querySelectorAll("p");
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.color = "rgb(10,10,10)"; 
        }
        const a = document.querySelectorAll("a");
        for (let i = 0; i < a.length; i++) {
            a[i].style.color = "rgb(0,0,0)"; 
        }
        
    } else {
        document.body.style.backgroundColor = "#161616";  
        const header = document.querySelector("header");
        header.style.backgroundColor = "rgb(28, 28, 28)"; 
        const arrow = document.getElementById("arrow")
        arrow.style.fill = "rgb(256,256,256)";
        arrow.style.stroke = "rgb(256,256,256)";
        
        // Changement de couleur de tout les titres
        const titles = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
        for (let i = 0; i < titles.length; i++) {
            titles[i].style.color = "rgb(246, 246, 246)";
        }
        // Changement de couleur de tout les h2 class .subs
        const subTitles = document.querySelectorAll(".subs");
        for (let i = 0; i < subTitles.length; i++) {
            subTitles[i].style.color = "#857e6e";
        }
        
        // Changement de couleur de tout les p
        const paragraphs = document.querySelectorAll("p");
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.color = "rgb(133,126,110)";
        }
        const a = document.querySelectorAll("a");
        for (let i = 0; i < a.length; i++) {
            a[i].style.color = "rgb(133,126,110)"; 
        }
        
    }
}