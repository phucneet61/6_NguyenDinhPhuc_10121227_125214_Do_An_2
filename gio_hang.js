// Trong tệp JavaScript (gio_hang.js)
function addToCart(productName, price) {
    const newItem = { name: productName, price: price };
    cartItems.push(newItem);
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById("cartItems");

    // Xóa nội dung cũ trong giỏ hàng
    cartItemsContainer.innerHTML = "";

    // Thêm thông tin sản phẩm mới vào giỏ hàng
    cartItems.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.innerHTML = `<p>${item.name} - $${item.price}</p>`;
        cartItemsContainer.appendChild(itemElement);
    });

    // Tính tổng giá trị giỏ hàng và cập nhật tổng cộng
    const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);
    const cartTotalElement = document.getElementById("cartTotal");
    cartTotalElement.textContent = `Tổng cộng: $${cartTotal.toFixed(2)}`;
}
