var headerlink = document.querySelector(".buy-href-js");
var footerlink = document.querySelector(".buy-href-jss");

var popup = document.querySelector(".modal-login");

var close = document.querySelector(".modal-close");




window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();

        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
        }
    }
});

headerlink.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});

footerlink.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});



close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});




