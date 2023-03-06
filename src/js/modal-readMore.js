(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-readMore-open]"),
    closeModalBtn: document.querySelector("[data-modal-readMore-close]"),
    modal: document.querySelector("[data-modal-readMore]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();