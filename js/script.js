// Сервисы
var serviceItemDelShow = document.querySelector(".service-left-column li .delivery");
var serviceItemDel = document.querySelector(".service-right-column .delivery");
serviceItemDelShow.addEventListener("click", function (event) {
event.preventDefault("");
serviceItemDelShow.classList.add("service-list-active");
serviceItemDel.classList.add("service-item-show");

serviceItemGuarantShow.classList.remove("service-list-active");
serviceItemGuarant.classList.remove("service-item-show");
serviceItemCreditShow.classList.remove("service-list-active");
serviceItemCredit.classList.remove("service-item-show");
});

var serviceItemGuarantShow = document.querySelector(".service-left-column li .guarantee");
var serviceItemGuarant = document.querySelector(".service-right-column .guarantee");
serviceItemGuarantShow.addEventListener("click", function (event) {
event.preventDefault("");
serviceItemGuarantShow.classList.add("service-list-active");
serviceItemGuarant.classList.add("service-item-show");

serviceItemDelShow.classList.remove("service-list-active");
serviceItemDel.classList.remove("service-item-show");
serviceItemCreditShow.classList.remove("service-list-active");
serviceItemCredit.classList.remove("service-item-show");
});

var serviceItemCreditShow = document.querySelector(".service-left-column li .credit");
var serviceItemCredit = document.querySelector(".service-right-column .credit");
serviceItemCreditShow.addEventListener("click", function (event) {
event.preventDefault("");
serviceItemCreditShow.classList.add("service-list-active");
serviceItemCredit.classList.add("service-item-show");

serviceItemGuarantShow.classList.remove("service-list-active");
serviceItemGuarant.classList.remove("service-item-show");
serviceItemDelShow.classList.remove("service-list-active");
serviceItemDel.classList.remove("service-item-show");
});

// Карта
var mapPopUpShow = document.querySelector(".map img");
var mapPopUp = document.querySelector(".map .map-popup");
var mapPopUpClose = document.querySelector(".map .map-popup button")

mapPopUpShow.addEventListener("click", function (event) {
event.preventDefault("");
mapPopUp.classList.add("map-popup-show");
});

mapPopUpClose.addEventListener("click", function (event) {
event.preventDefault("");
mapPopUp.classList.remove("map-popup-show");
});

// Как проехать
var writeUsModalOpen = document.querySelector(".about-right-column .map .btn");
var writeUsPopup = document.querySelector(".write-us-modal");
var writeUsModalClose = document.querySelector(".write-us-modal .modal-content-close");
var overlay = document.querySelector(".modal-overlay");

writeUsModalOpen.addEventListener("click", function (event) {
event.preventDefault("");
writeUsPopup.classList.add("modal-content-show");
overlay.classList.add("overlay-show");
});


writeUsModalClose.addEventListener("click", function (event) {
event.preventDefault("");
writeUsPopup.classList.remove("modal-content-show");
overlay.classList.remove("overlay-show");
});

overlay.addEventListener("click", function (event) {
event.preventDefault("");
overlay.classList.remove("overlay-show");
writeUsPopup.classList.remove("modal-content-show");
});

