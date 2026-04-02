const galleryItem = document.querySelectorAll(".Gallery");
const overlay = document.querySelector(".overlay");
const selectedDiv = document.querySelector(".selectedDiv");
const closeBtn = document.getElementById("closeBtn");

galleryItem.forEach(item => {
    item.addEventListener("click", () => {
        const imgSrc = item.querySelector("img").src;
        const caption = item.querySelector(".caption").innerText;

        selectedDiv.innerHTML = `
            <img src = "${imgSrc}" />
            <p class = "caption"> ${caption} </p>`;

        overlay.classList.add("show");
    });
});

closeBtn.addEventListener("click" , () => {
    overlay.classList.remove("show");
});