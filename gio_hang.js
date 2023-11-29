// var cartItems = [];

// Lấy thông tin giỏ hàng từ Session Storage khi trang được load
// window.onload = function () {
//     getCartFromSessionStorage();
//     updateCart();
// };



// function saveCartToSessionStorage() {
//     sessionStorage.setItem('cart', JSON.stringify(cartItems));
//     console.log(cartItems);
// }

// function getCartFromSessionStorage() {
//     const storedCart = sessionStorage.getItem('cart');
//     cartItems = storedCart ? JSON.parse(storedCart) : [];
// }


// Trong tệp JavaScript (gio_hang.js)
// function addToCart(productName, price) {
//     console.log("Thêm vào giỏ hàng: " + productName);
//     const newItem = { name: productName, price: price };
//     cartItems.push(newItem);
//     updateCart();
// }


// function updateCart() {
//     console.log("Cập nhật giỏ hàng");
//     const cartItemsContainer = document.getElementById("cartItems");

//     Xóa nội dung cũ trong giỏ hàng
//     cartItemsContainer.innerHTML = "";

//     Thêm thông tin sản phẩm mới vào giỏ hàng
//     cartItems.forEach(item => {
//         const itemElement = document.createElement("div");
//         itemElement.innerHTML = `<p>${item.name} - $${item.price}</p>`;
//         cartItemsContainer.appendChild(itemElement);
//     });

//     Tính tổng giá trị giỏ hàng và cập nhật tổng cộng
//     const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);
//     const cartTotalElement = document.getElementById("cartTotal");
//     cartTotalElement.textContent = `Tổng cộng: $${cartTotal.toFixed(2)}`;
// }
var giohang = [];
window.onload = function () {
    getCartFromSessionStorage();
};
function AddGioHang(ten,anh,sl,tien){
    var tenSP= document.getElementById(ten).innerHTML;
    var anhSP= document.getElementById(anh).src;
    var soluongSP= document.getElementById(sl).innerHTML;
    var giaSP= document.getElementById(tien).innerText;

    var item = [tenSP, anhSP, soluongSP, giaSP];
    // console.log(giohang);
    // sessionStorage.setItem("giohang", JSON.stringify(giohang));
    // if (giohang.length < 1){
    //     giohang.push(item);
    //     tongSL+=parseInt(item[2], 10);
    // }
    // else{
    //     for (let j = 0; j < giohang.length; j++) {
    //         if (item[0]==giohang[j][0]){
    //             tongSL+=parseInt(item[2], 10);
    //             giohang[j][2]=tongSL;
    //             alert(giohang[j][2]);
    //         }
    //     }
    // }
    giohang.push(item);
    updateCart();
    saveCartToSessionStorage();
    showgiohang();
}

function saveCartToSessionStorage() {
    sessionStorage.setItem('giohang', JSON.stringify(giohang));
}

function getCartFromSessionStorage() {
    const storedCart = sessionStorage.getItem('giohang');
    giohang = storedCart ? JSON.parse(storedCart) : [];
}


function showgiohang() {
    var nhanGioHang = sessionStorage.getItem("giohang");
    var data = JSON.parse(nhanGioHang);

    let chuoi = "";
    let tong = 0;
    for (let i = 0; i < data.length; i++) {
        let tt = parseFloat(data[i].soluongSP) * parseInt(data[i].giaSP);
        tong += tt;
        let j = i + 1;
        let tensp = data[i].tenSP;
        let hinhsp = "<img src='" + data[i].anhSP + "' width='30px'>";
        let slsp = data[i].soluongSP;
        let giasp = data[i].giaSP;
        chuoi += "<tr>";
        chuoi += "<td style=''>" + j + "</td>";
        chuoi += "<td style='width: 150px; text-align:center;font-size:15px'>" + tensp + "</td>";
        chuoi += "<td style='width: 120px; text-align:center;font-size:15px'>" + hinhsp + "</td>";
        chuoi += "<td style=font-size:15px  id='sl" + i + "'>" + slsp + "</td>";
        chuoi += "<td style='width: 120px; text-align:center;font-size:15px'>" + giasp + "</td>";
        chuoi += "<td style='width: 120px; text-align:center;font-size:15px'>" + tt + "</td>";
        chuoi += "<td><input type='button' value='Xóa' style='width: 60px;height: 30px; cursor: pointer;' onclick='Xoa(this);'></td>";
        chuoi += "<tr>";
    }
    document.getElementById('chitietgiohang').innerHTML = chuoi;
}


function Xoa(x){
    var tz=x.parentElement.parentElement;
    tz.remove();   
    alert('Xóa thành công!')
}