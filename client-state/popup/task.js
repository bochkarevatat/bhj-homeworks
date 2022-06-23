// Необходимо реализовать всплывающее окно, которое появляется только один раз
const subscribeModal = document.querySelector('#subscribe-modal');
const modalPopup = document.querySelector(".modal__close");

window.addEventListener("load", () => {
    modalPopup.addEventListener("click", () => {
        subscribeModal.classList.remove("modal_active");
        document.cookie = true;
    });
    if (document.cookie == false) {
        subscribeModal.classList.add("modal_active");
    }
});