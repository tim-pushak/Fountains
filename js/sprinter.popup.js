var bink = document.querySelector(".bink-js");
var sprinter = document.querySelector(".sprinter-js");
var closse = document.querySelector(".popup-close");


bink.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});

closse.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});