const contentDiv = document.getElementById("contentDiv");
const loading = document.getElementById("loading");

let page = 1;
let isLoading = false;

async function loadData(){
    if(isLoading)   return;

    isLoading = true;
    console.log("Loading");
    loading.style.display = "block";

    await new Promise(resolve => setTimeout(resolve,1000));

    for(let i = 0; i < 10; i++){
        const img = document.createElement("img");
        img.src = `https://picsum.photos/300/200?random=${page * 10 + i}`;
        img.alt = "Image";
        img.style.margin = "10px";
        img.style.borderRadius = "10px";
        contentDiv.appendChild(img);
    }
    page++;
    isLoading = false;
    loading.style.display = "none";
}

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.scrollHeight;

    if (scrollTop + windowHeight >= fullHeight - 100) {
        loadData();
    }
});
window.addEventListener("load", loadData);
