
var datas;
fetch('package.json')
    .then(response => response.json())
    .then(data => {
        // Gọi hàm hiển thị danh sách sản phẩm với đối số là data
        datas = data;
        // displayProductList(data);
    })
    .catch(error => {
        // Xử lý lỗi khi tải tệp JSON
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

function filterbrand(brand) {
    const filteredData = [];

    // Lọc danh sách sản phẩm trong mảng dresses
    const dresses = datas.dresses.filter(product => product.brand === brand);
    filteredData.push(...dresses);

    // Lọc danh sách sản phẩm trong mảng bags
    const bags = datas.bags.filter(product => product.brand === brand);
    filteredData.push(...bags);

    // Lọc danh sách sản phẩm trong mảng accessories
    const accessories = datas.accessories.filter(product => product.brand === brand);
    filteredData.push(...accessories);

    displayProductList(filteredData);
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