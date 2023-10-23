//--------------------CATEGORY-------------------

var datas;
fetch('package.json')
    .then(response => response.json())
    .then(data => {

        datas = data;
        filter('bags');
    })
    .catch(error => {

    });

function filter(name){
    var data;
    if (name == 'dress') {

        data = datas.dresses;
    }
    if (name == 'shoes') {

        data = datas.shoes;
    }
    if (name == 'bags') {

        data = datas.bags;
    }
    if (name == 'accessories') {

        data = datas.accessories;
    }
    displayProductList(data);
}
function filterbrand(brand) {

    var filteredBags = datas.bags.filter(function(product) {
        return product.brand === brand;
    });

    displayProductList(filteredBags);
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
            const encodedId = encodeURIComponent(product.id);
            localStorage.setItem('selectedProduct', JSON.stringify(product));
            window.location.href = "../dat-code/test product.html?id=" + encodedId;
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