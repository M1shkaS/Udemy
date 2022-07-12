/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.addEventListener('DOMContentLoaded', () => {
  //!Tabs
  const wrapperTabs = document.querySelector('.tabheader__items'),
        tabs = wrapperTabs.querySelectorAll('.tabheader__item'),
        tabContent = document.querySelectorAll('.tabcontent');
  wrapperTabs.addEventListener('click', event => {
    event.preventDefault();
    const target = event.target;

    if (target && target.classList.contains('tabheader__item')) {
      removeClasses(tabs, 'tabheader__item_active');
      hideTabsContent(tabContent);
      tabs.forEach((item, idx) => {
        if (target == item) {
          showTabsContent(idx, tabContent);
        }
      });
      target.classList.add('tabheader__item_active');
    }
  });
  hideTabsContent(tabContent);
  showTabsContent();

  function hideTabsContent(items) {
    items.forEach(tab => {
      tab.style.display = 'none';
    });
  }

  function showTabsContent(id = 0, showContent = tabContent) {
    showContent[id].style.display = 'block';
  }

  function removeClasses(item, classRemove) {
    item.forEach(element => {
      element.classList.remove(classRemove);
    });
  } //!Timer


  const deadLine = '2022-07-10';
  setClock(deadLine, '.timer');

  function getTimeRemaining(endTime) {
    const t = Date.parse(endTime) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor(t / (1000 * 60 * 60) % 24),
          minutes = Math.floor(t / (1000 * 60) % 60),
          seconds = Math.floor(t / 1000 % 60);
    return {
      t,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function getZero(num) {
    return num < 10 && num > 0 ? `0${num}` : num;
  }

  function setClock(endTime, selector) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateTime, 1000);
    updateTime();

    function updateTime() {
      const t = getTimeRemaining(endTime);
      days.textContent = getZero(t.days);
      hours.textContent = getZero(t.hours);
      minutes.textContent = getZero(t.minutes);
      seconds.textContent = getZero(t.seconds);

      if (t.t <= 0) {
        clearInterval(timeInterval);
        days.textContent = '0';
        hours.textContent = '0';
        minutes.textContent = '0';
        seconds.textContent = '0';
      }
    }

    updateTime();
  } //Modal


  const modal = document.querySelector('.modal'),
        btnOpenModal = document.querySelectorAll('[data-modal]');
  const modalTimerId = setTimeout(openModal, 10000);
  btnOpenModal.forEach(btn => {
    btn.addEventListener('click', event => {
      event.preventDefault();
      openModal();
      clearTimeout(modalTimerId);
    });
  });
  modal.addEventListener('click', event => {
    const target = event.target;

    if (target && target.classList.contains('modal') || target.getAttribute('data-close') == '') {
      closeModal();
    }
  });
  document.addEventListener('keydown', event => {
    if (event.code === 'Escape') closeModal();
  });
  window.addEventListener('scroll', showModalByScroll);

  function openModal() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }

  class MenuItem {
    constructor(src, alt, title, decr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.decr = decr;
      this.price = price;
      this.classes = classes;
      this.transfer = 60;
      this.parent = document.querySelector(parentSelector);
      this.changeToRub();
    }

    changeToRub() {
      this.price = this.transfer * this.price;
    }

    render() {
      const element = document.createElement('div');

      if (this.classes.length === 0) {
        this.classes = 'menu__item';
        element.classList.add(this.classes);
      } else {
        this.classes.forEach(className => element.classList.add(className));
      }

      element.innerHTML = `
<img src="${this.src}" alt="${this.alt}">
<h3 class="menu__item-subtitle">Меню "${this.title}"</h3>
<div class="menu__item-descr">${this.decr} </div>
<div class="menu__item-divider"></div>
<div class="menu__item-price">
<div class="menu__item-cost">Цена:</div>
<div class="menu__item-total"><span>${this.price}</span> руб/день</div>
</div>
`;
      this.parent.append(element);
    }

  }

  new MenuItem('img/tabs/vegy.jpg', 'vegy', 'Фитнес', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов.Продукт активных и здоровых людей.Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 500, '.menu__field .container', 'menu__item', 'big').render();
  new MenuItem('img/tabs/vegy.jpg', 'vegy', 'Фитнес', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов.Продукт активных и здоровых людей.Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 10, '.menu__field .container', 'menu__item').render();
  new MenuItem('img/tabs/elite.jpg', 'elite', '“Премиум”', 'Меню "Премиум" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов.Продукт активных и здоровых людей.Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 30, '.menu__field .container').render(); //Forms

  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    postData(form);
  });
  const messages = {
    loaded: 'img/form/spinner.svg',
    success: 'Спасибо. Скоро мы с вами свяжемся',
    failed: 'Упс.. Что-то пошло не так'
  };

  function postData(form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const statusMessage = document.createElement('img');
      statusMessage.src = messages.loaded;
      statusMessage.style.cssText = 'display: block; margin: 0 auto;';
      form.insertAdjacentElement('afterend', statusMessage);
      const request = new XMLHttpRequest();
      request.open('POST', 'server.php'); // request.setRequestHeader('Content-type', 'multipart/form-data')

      request.setRequestHeader('Content-type', 'application/json');
      const formData = new FormData(form);
      const obj = {};
      formData.forEach(function (val, key) {
        obj[key] = val;
      });
      request.send(JSON.stringify(obj));
      request.addEventListener('load', () => {
        if (request.status === 200) {
          console.log(request.response);
          showThanksModal(messages.success);
          form.reset();
          statusMessage.remove();
        } else {
          console.log('Что-то пошло не так');
          showThanksModal(messages.failed);
          form.reset();
        }
      }); // fetch('server.php', {
      //    method: 'POST',
      //    body: JSON.stringify(obj),
      //    headers: { 'Content-type': 'application/json' }
      // }).then(response => response.text())
      //    .then(data => {
      //       console.log(data);
      //       showThanksModal(messages.success);
      //       form.reset();
      //       statusMessage.remove();
      //    })
      //    .catch(() => {
      //       showThanksModal(messages.failed);
      //    }).finally(() => form.reset())
    });
  }

  function showThanksModal(text) {
    const prevModalDialog = document.querySelector('.modal__dialog');
    prevModalDialog.style.display = 'none';
    openModal();
    const modalDialog = document.createElement('div');
    modalDialog.classList.add('modal__dialog');
    modalDialog.innerHTML = `
                 <div class='modal__content'>
                       <div data-close="" class="modal__close">×</div>
                       <div class="modal__title">${text}</div>
                 </div>
                 `;
    document.querySelector('.modal').append(modalDialog);
    setTimeout(() => {
      modalDialog.remove();
      prevModalDialog.style.display = 'block';
      closeModal();
    }, 5000);
  } // fetch('http://localhost:3000/menu')
  //    .then(data => data.json())
  //    .then(response => console.log(response));

});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map