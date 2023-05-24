document.addEventListener("DOMContentLoaded", function () {
    // Kích hoạt mục menu đầu tiên
    activateMenu(null, 0);
});

function activateMenu(event, index) {
    var menuItems = document.getElementsByClassName("menu-item");

    // Xóa class active của tất cả các mục menu
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].classList.remove("active");
    }

    // Thêm class active cho mục menu được click hoặc mục menu đầu tiên
    var menuItem = index !== null ? menuItems[index] : menuItems[0];
    menuItem.classList.add("active");

    // Ngăn chặn hành vi mặc định khi click vào liên kết
    if (event) {
        event.preventDefault();
    }
}


document.addEventListener("DOMContentLoaded", function () {
    // Kích hoạt mục menu đầu tiên
    activateMenuToggle(null, 0);
});

function activateMenuToggle(event, index) {
    var menuItems = document.getElementsByClassName("dropdown-item");

    var menuTop = document.querySelector('.menu');

    // Xóa class active của tất cả các mục menu
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].classList.remove("active");
        menuTop.classList.remove('animal');
    }

    // Thêm class active cho mục menu được click hoặc mục menu đầu tiên
    var menuItem = index !== null ? menuItems[index] : menuItems[0];
    menuItem.classList.add("active");

    if(index == 1){
        menuTop.classList.add('animal');
    }else{
        menuTop.classList.remove('animal');
    }

    // Ngăn chặn hành vi mặc định khi click vào liên kết
    if (event) {
        event.preventDefault();
    }
}

// active category
document.addEventListener("DOMContentLoaded", function () {
    // Kích hoạt mục menu đầu tiên
    activateCategory(null, 0);
});

function activateCategory(event, index) {
    var menuItems = document.getElementsByClassName("category-item");

    // Xóa class active của tất cả các mục menu
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].classList.remove("active");
    }

    // Thêm class active cho mục menu được click hoặc mục menu đầu tiên
    var menuItem = index !== null ? menuItems[index] : menuItems[0];
    menuItem.classList.add("active");

    // Ngăn chặn hành vi mặc định khi click vào liên kết
    if (event) {
        event.preventDefault();
    }
}


// -----------

const menuContainer = document.querySelector('.menu-container');
const menu = document.querySelector('.menu');

menuContainer.addEventListener('scroll', function () {
  if (menuContainer.scrollLeft === 0) {
    menu.classList.remove('slide');
  } else {
    menu.classList.add('slide');
  }
});

