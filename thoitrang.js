
function addProduct() {
    var imgInput = document.getElementById('img_product');
    var imgProduct = imgInput.files[0]; // Lấy file đầu tiên từ input
    var nameProduct = document.getElementById('name_product').value;
    var newPrice = document.getElementById('new_price').value;
    var oldPrice = document.getElementById('old_price').value;
    var type = document.getElementById('type').value;
    var code = document.getElementById('code').value;

    if (imgProduct) {
        var reader = new FileReader();

        // Khi file đã được đọc
        reader.onload = function (e) {
            var productCard = document.createElement('div');
            productCard.classList.add('card', 'product-card');

            productCard.innerHTML = `
                <img src="${e.target.result}" alt="${nameProduct}">
                <p><span>${nameProduct} - </span><span>${code}</span></p>     
                <p><span>${newPrice} VND</span></p>
                <p><span><del>${oldPrice} VND</del></span></p>
                <p><span>${type}</span></p>
                <p><button>Buy</button></p>
            `;

            document.getElementById('productList').appendChild(productCard);
            document.getElementById('productForm').reset();
        };

        // Đọc file dưới dạng URL
        reader.readAsDataURL(imgProduct);
    } else {
        alert("Please select an image file.");
    }
}