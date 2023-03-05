(() => {
  const refs = {
      openModalBtnFirst: document.querySelector("[data-modal-ingredients-open-first]"),
      openModalBtnSecond: document.querySelector("[data-modal-ingredients-open-second]"),
      openModalBtnThird: document.querySelector("[data-modal-ingredients-open-third]"),
    closeModalBtn: document.querySelector("[data-modal-ingredients-close]"),
    modal: document.querySelector("[data-modal-ingredients]"),
  };

  refs.openModalBtnFirst.addEventListener("click", toggleModal);
    refs.openModalBtnSecond.addEventListener("click", toggleModal);
    refs.openModalBtnThird.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();