function forms(fromsSellector, modalTimerId) {
   //!Forms
   const forms = document.querySelectorAll(fromsSellector);

   forms.forEach(form => {
      bindPostData(form);
   });

   const messages = {
      loaded: 'img/form/spinner.svg',
      success: 'Спасибо. Скоро мы с вами свяжемся',
      failed: 'Упс.. Что-то пошло не так'
   };

   function bindPostData(form) {
      form.addEventListener('submit', event => {
         event.preventDefault();

         const statusMessage = document.createElement('img');
         statusMessage.src = messages.loaded
         statusMessage.style.cssText = 'display: block; margin: 0 auto;';
         form.insertAdjacentElement('afterend', statusMessage)

         const formData = new FormData(form);

         postData('http://localhost:3000/requests', JSON.stringify(Object.fromEntries(formData.entries())))
            .then(data => {
               console.log(data);
               showThanksModal(messages.success);
               statusMessage.remove();
            })
            .catch(() => {
               showThanksModal(messages.failed);
            }).finally(() => form.reset())
      })

   }

   function showThanksModal(text) {
      const prevModalDialog = document.querySelector('.modal__dialog');
      prevModalDialog.style.display = 'none';
      openModal('.modal', modalTimerId);

      const modalDialog = document.createElement('div');
      modalDialog.classList.add('modal__dialog');

      modalDialog.innerHTML = `
             <div class='modal__content'>
                   <div data-close="" class="modal__close">×</div>
                   <div class="modal__title">${text}</div>
             </div>
             `
      document.querySelector('.modal').append(modalDialog);

      setTimeout(() => {
         modalDialog.remove();
         prevModalDialog.style.display = 'block';
         closeModal('.modal');
      }, 5000)
   }
}

export default forms;