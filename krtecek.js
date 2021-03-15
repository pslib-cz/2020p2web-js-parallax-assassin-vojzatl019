var el = document.getElementsByClassName("parallax-layer")

window.onscroll = (e) => {


    for (let i of el) {
        if (i.classList.contains("layer-man")) {
            console.log("auticko")
            i.style.transform = "translateX(-" + window.scrollY/3 + "px)  translateY(-" + window.scrollY  + "px)";
            
        }
        if(i.classList.contains("layer-4")){
            i.style.transform = "translateY(-" + window.scrollY + "px)";
        }
    
    }  
    
    
}

