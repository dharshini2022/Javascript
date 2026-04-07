const products = [
  { id: "P1", name: "Laptop Stand", category: "Mobile_Laptops", price: 1200, image: "https://m.media-amazon.com/images/I/61kBmC8NfGL._SX679_.jpg" },
  { id: "P2", name: "Wireless Mouse", category: "Mobile_Laptops", price: 500, image: "https://m.media-amazon.com/images/I/61kBmC8NfGL._SX679_.jpg" },
  { id: "P3", name: "Keyboard", category: "Mobile_Laptops", price: 900, image: "https://m.media-amazon.com/images/I/61kBmC8NfGL._SX679_.jpg" },
  { id: "P4", name: "T-Shirt", category: "Dress", price: 800, image: "https://m.media-amazon.com/images/I/61kBmC8NfGL._SX679_.jpg" },
  { id: "P5", name: "Track Pants", category: "Dress", price: 1200, image: "https://m.media-amazon.com/images/I/61kBmC8NfGL._SX679_.jpg" },
  { id: "P6", name: "Shoes", category: "Footwear", price: 2000, image: "https://m.media-amazon.com/images/I/61kBmC8NfGL._SX679_.jpg" },
  { id: "P7", name: "Headphones", category: "Home Electronics", price: 1500, image: "https://m.media-amazon.com/images/I/61kBmC8NfGL._SX679_.jpg" },
  { id: "P8", name: "Smart Watch", category: "Mobile_Laptops", price: 2500, image: "https://m.media-amazon.com/images/I/61kBmC8NfGL._SX679_.jpg" },
  { id: "P9", name: "Book", category: "Books", price: 400, image: "https://m.media-amazon.com/images/I/61kBmC8NfGL._SX679_.jpg" },
  { id: "P10", name: "Toy Car", category: "Toys", price: 600, image: "https://m.media-amazon.com/images/I/61kBmC8NfGL._SX679_.jpg" }
];
const container = document.getElementById("productContainer");
const searchInput = document.getElementById("searchBar");
const categorySelect = document.getElementById("Shop");
const cartBody = document.getElementById("cartBody");
const Total = document.getElementById("Total");
const Tax = document.getElementById("Tax");


if(container){
    applyFilter();
}

function renderProducts(list){
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    container.innerHTML = "";
    list.forEach(product => {
        const isInCart = cart.some(item => item.id === product.id); 
        const div = document.createElement("div");
        div.classList.add("ProductCard");
        div.innerHTML = `
        <img src="${product.image}" />
        <h2>${product.name}</h2>
        <p>₹${product.price}</p>
        ${isInCart ?
            `<button disabled>Added to Cart</button>` :
            `<button onclick="addToCart('${product.id}')">Add to Cart</button>`
        }`
        
        container.appendChild(div);
    });
}

function applyFilter(){
    const filter = JSON.parse(localStorage.getItem("filter")) || {};
    let filtered = products;

    if(filter.query){
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(filter.query.toLowerCase())
        );
    }

    if(filter.category && filter.category !== 'all'){
        filtered = filtered.filter(p =>
            p.category === filter.category
        );
    }

    renderProducts(filtered);
}

window.addToCart = function(id){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find(p => p.id === id);

    if(item){
        item.qty++;
    }else{
        cart.push({id,qty:1});
    }

    localStorage.setItem("cart",JSON.stringify(cart));
    applyFilter();
    alert("Item Added to Cart");
}


if(cartBody){
    loadCart();
}

function loadCart(){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartBody.innerHTML = "";

    if(cart.length === 0){
        alert("Empty cart");
    }

    let total = 0;
    cart.forEach(item =>{
        const product = products.find(p => p.id === item.id);
        total += product.price * item.qty;
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>
        <button onclick="changeQty('${item.id}', -1)">-</button>
        ${item.qty}
        <button onclick="changeQty('${item.id}', 1)">+</button>
        <button onclick="removeItem('${item.id}')">Remove</button>
        </td>`;
        cartBody.appendChild(tr);

    });
    const tax = total * 0.01;
    const final = total + tax;
    Tax.innerHTML = `Tax: ${tax}`;
    Total.innerHTML = `Total: ${final}`;
    console.log("Total:", total, "Tax:", tax, "Price with tax:", final);
}

window.changeQty = function(id,delta){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find(p => p.id === id);
    item.qty += delta;

    if(item.qty <= 0){
        cart = cart.filter(p => p.id !== id);
    }

    localStorage.setItem("cart",JSON.stringify(cart));
    loadCart();
};

window.removeItem = function(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(p => p.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
};



if (searchInput && categorySelect) {
  function sendFilter() {
    const query = searchInput.value;
    const category = categorySelect.value;

    localStorage.setItem("filter", JSON.stringify({ query, category }));

    if (typeof applyFilter === "function") {
        applyFilter();
    }
  }

  searchInput.addEventListener("input", sendFilter);
  categorySelect.addEventListener("change", sendFilter);
}

window.addEventListener("beforeunload", () => {
    localStorage.removeItem("filter");
});