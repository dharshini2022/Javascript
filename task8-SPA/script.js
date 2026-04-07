const contentDiv = document.getElementById("contentDiv");

function loadContent(){
    const hash = window.location.hash;
    switch(hash){
        case "#about":
            contentDiv.innerHTML = 
            `<h1> About Section </h1>`;
            contentDiv.style.backgroundColor="pink";
            break;
        case "#product":
            contentDiv.innerHTML = 
            `<h1> Products Section </h1>`;
            contentDiv.style.backgroundColor="skyblue";
            break;
        case "#contact":
            contentDiv.innerHTML = 
            `<h1> Contact Section </h1>`;
            contentDiv.style.backgroundColor="lightgreen";
            break;
        default:
            contentDiv.innerHTML = 
            `<h1> Home Section </h1>`;
            contentDiv.style.backgroundColor="lightgray";
    }
}

window.addEventListener("hashchange", loadContent);
window.addEventListener("load",loadContent);