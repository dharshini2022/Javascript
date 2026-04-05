const list = document.getElementById("list");
const items = document.querySelectorAll("#list li");
let draggedItem = null;

items.forEach(item => {

    item.addEventListener("dragstart", () => {
        draggedItem = item;
        item.style.opacity = 0.5;
    });

    item.addEventListener("dragend",() => {
        draggedItem = null;
        item.style.opacity = 1;
    });

    item.addEventListener("dragover", (e) => {
        e.preventDefault();
        item.style.background = "#d3f3ff";
    });

    item.addEventListener("dragleave", () => {
        item.style.background = "#eee"
    });

    item.addEventListener("drop", () => {
        item.style.background = "#eee";

        if(draggedItem != item){
            let allItems = [...list.children];
            let draggedIndex = allItems.indexOf(draggedItem);
            let itemIndex = allItems.indexOf(item);

            if(draggedIndex < itemIndex){
                list.insertBefore(draggedItem,item.nextSibling);
            }else{
                list.insertBefore(draggedItem,item);
            }
        }
    });
});