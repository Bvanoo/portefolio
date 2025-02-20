let pos = 0;
function backdrop(){
    const arrow = document.getElementById("arrow");
    const header = document.querySelector("header");
    arrow.style.transformOrigin="center";
    arrow.addEventListener('click',function(){
            if (pos===0){
            header.style.transform = "translateX(-210px)";
            arrow.style.transform = "translateX(80px)";
            pos=1;
            console.log(pos);
            arrow.style.transform="rotate(90deg)";
        } else {
            header.style.transform = "translateX(0px)";
            arrow.style.transform="rotate(0deg)";
            pos=0;
        };
})}
