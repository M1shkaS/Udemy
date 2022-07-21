function openModal(modalSelector, modalTimerId) {
   const modal = document.querySelector(modalSelector);

   modal.style.display = 'block';
   document.body.style.overflow = 'hidden';

   if (modalTimerId) {
      clearTimeout(modalTimerId);
   }

}

function closeModal(modalSelector) {
   const modal = document.querySelector(modalSelector);

   modal.style.display = 'none';
   document.body.style.overflow = '';

}

function modals(modalSelector, targetModal, modalTimerId) {
   //!Modal
   const modal = document.querySelector(modalSelector),
      btnOpenModal = document.querySelectorAll(targetModal);

   btnOpenModal.forEach(btn => {
      btn.addEventListener('click', event => {
         event.preventDefault();
         openModal(modalSelector, modalTimerId);
      });
   });

   modal.addEventListener('click', event => {
      const target = event.target;

      if (target && target.classList.contains('modal') || target.getAttribute('data-close') == '') {
         closeModal(modalSelector);
      }
   });

   document.addEventListener('keydown', event => {
      if (event.code === 'Escape') closeModal(modalSelector);
   });

   window.addEventListener('scroll', showModalByScroll);

   function showModalByScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
         openModal(modalSelector, modalTimerId);
         window.removeEventListener('scroll', showModalByScroll);
      }
   }
}

export default modals;
export { openModal };
export { closeModal };