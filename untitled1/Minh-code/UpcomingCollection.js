//--------------------CATEGORY-------------------

var datas;
fetch('UpcomingCollection.json')
    .then(response => response.json())
    .then(data => {

        datas = data;
        filter('THESUMMERITLIST2')
    })
    .catch(error => {

    });

function filter(name){
    var data;
    if (name == 'THESUMMERITLIST2') {
        // lay ra cac san pham vay
        data = datas.THESUMMERITLIST2;
    }
    if (name == 'THESUMMERITLIST1') {
        // lay ra cac san pham vay
        data = datas.THESUMMERITLIST1;
    }
    if (name == 'THESUMMERITLIST') {
        // lay ra cac san pham vay
        data = datas.THESUMMERITLIST;
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
        priceElement.innerHTML =   product.price;




        // Thêm các phần tử vào productContainer
        productContainer.appendChild(imageElement);
        productContainer.appendChild(brandElement);
        productContainer.appendChild(nameElement);
        productContainer.appendChild(priceElement);



        // Thêm productContainer vào container
        container.appendChild(productContainer);
    }
}

// ------------------------Product-detail----------------



