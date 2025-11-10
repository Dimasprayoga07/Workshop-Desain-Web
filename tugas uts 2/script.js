// toggle class active untuk hamburger
const nabarnav = document.querySelector('.navbar-nav');
//ketika hamburger menu di klik
document.querySelector('#hamburger-menu'). onclick = (e) => {
    nabarnav.classList.toggle('active');
    e.preventDefault();
};

// toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

//toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
};

// klik diluar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function(e) {
    if(!hm.contains(e.target) && !nabarnav.contains(e.target)) {
        nabarnav.classList.remove('active');
    }

    if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
    if(!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
});


// modal box
const itemdetailmodal = document.querySelector('#item-detail-modal');
const itemddetailbuttons = document.querySelectorAll('.item-detail-button');

itemddetailbuttons.forEach((btn) => {
    btn.onclick = (e) => {
        itemdetailmodal.style.display = 'flex';
        e.preventDefault();
    };

})


// klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemdetailmodal.style.display = 'none';
    e.preventDefault();
}

// klik di luar modal

window.onclick = (e) => {
    if (e.target === itemdetailmodal) {
        itemdetailmodal.style.display = 'none';
    }
}
