//--------------------CATEGORY-------------------

var datas;
fetch('package.json')
    .then(response => response.json())
    .then(data => {

        datas = data;
        displayProductList(datas);
    })
    .catch(error => {

    });

function filter(name){
    var data;
    if (name == 'dress') {
        // lay ra cac san pham vay
        data = datas.dresses;
    }
    if (name == 'shoes') {
        // lay ra cac san pham vay
        data = datas.shoes;
    }
    if (name == 'bags') {
        // lay ra cac san pham vay
        data = datas.bags;
    }
    if (name == 'accessories') {
        // lay ra cac san pham vay
        data = datas.accessories;
    }
    displayProductList(data);
}


function displayProductList(data) {
    const container = document.getElementById("product-container");

    // Xóa nội dung cũ trong container (nếu có)
    container.innerHTML = "";

    // Lặp qua danh sách sản phẩm và tạo các phần tử HTML
    for (let i = 0; i < data.length; i++) {
        const product = data[i];

        const productContainer = document.createElement("div");
        productContainer.className = "product";

        const imageElement = document.createElement("img");
        imageElement.id = "img";
        imageElement.src = product.image;

        const brandElement = document.createElement("h5");
        brandElement.id = "brand";
        brandElement.textContent = product.brand;

        const nameElement = document.createElement("p");
        nameElement.id = "name";
        nameElement.textContent = product.name;

        const priceElement = document.createElement("p");
        priceElement.id = "price";
        priceElement.innerHTML =   product.price + "<sup>$</sup>";

        // Thêm sự kiện khi click vào product-container
        productContainer.addEventListener('click',()=>{
            window.location.href = "../Minh-code/test product.html?id=" + product.id;
        })

        // Thêm các phần tử vào productContainer
        productContainer.appendChild(imageElement);
        productContainer.appendChild(brandElement);
        productContainer.appendChild(nameElement);
        productContainer.appendChild(priceElement);



        // Thêm productContainer vào container
        container.appendChild(productContainer);
    }
}
function findProductById(productId) {
    for (const category in datas) {
        const products = datas[category];
        const product = products.find(p => p.id === productId);
        if (product) {
            return product;
        }
    }
    return null;
}
// ------------------------Product-detail----------------


