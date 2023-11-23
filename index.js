// Lấy thẻ <a> có nội dung là "Tin tức"
const tinTucLink = document.querySelector('a[href="#"]');

// Thêm sự kiện click vào liên kết "Tin tức"
tinTucLink.addEventListener('click', function(event) {
    // Ngăn chặn hành vi mặc định của liên kết
    event.preventDefault();

    // Lấy phần tử cần cuộn đến (có ID là "tin-tuc")
    const tinTucSection = document.getElementById('tin-tuc');

    // Cuộn trang xuống vị trí của phần "Tin tức" trong khoảng thời gian 1 giây
    tinTucSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});