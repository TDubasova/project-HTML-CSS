(() => {
  const refs = {
    openModalBtnMobileMenu: document.querySelector("[data-modal-buyNow-mobileMenu-open]"),
    openModalBtn: document.querySelector("[data-modal-buyNow-open]"),
    closeModalBtn: document.querySelector("[data-modal-buyNow-close]"),
    modal: document.querySelector("[data-modal-buyNow]"),
  };

  refs.openModalBtnMobileMenu.addEventListener("click", toggleModal);
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();