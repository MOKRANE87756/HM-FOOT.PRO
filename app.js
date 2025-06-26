
document.addEventListener("DOMContentLoaded", function() {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    const container = document.getElementById("product-list");
    if(container){
        products.forEach(p => {
            const div = document.createElement("div");
            div.className = "product";
            div.innerHTML = `<h3>${p.name}</h3><img src="${p.image}" width="100"><p>${p.desc}</p>`;
            container.appendChild(div);
        });
    }
});
