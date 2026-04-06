const contentDiv = document.getElementById("contentDiv");

function loadContent(){
    const hash = window.location.hash;
    switch(hash){
        case "#about":
            contentDiv.innerHTML = 
            `<h1> About Section </h1>`;
            break;
        case "#product":
            contentDiv.innerHTML = 
            `<h1> Products Section </h1>`;
            break;
        case "#contact":
            contentDiv.innerHTML = 
            `<h1> Contact Section </h1>`;
            break;
        default:
            contentDiv.innerHTML = 
            `<h1> Home Section </h1>`;
    }
}

window.addEventListener("hashchange", loadContent);
window.addEventListener("load",loadContent);