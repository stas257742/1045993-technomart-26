// Товар добавлен в корзину-скрипт

var actionBookmark = document.querySelectorAll(".buy"); // 1.
console.log(actionBookmark);
console.log(actionBookmark.length);

var popupBasket = document.querySelector(".popup-basket");

var close = popupBasket.querySelector(".modal-close");

for (var i = 0; i < actionBookmark.length; i++) {
  actionBookmark[i].addEventListener("click", function (evt) { //2. 
    evt.preventDefault();
    popupBasket.classList.add("modal-show");
  })
}

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupBasket.classList.remove("modal-show");

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupBasket.classList.contains("modal-show")) {
        popupBasket.classList.remove("modal-show");
      }
    }
  })
})
// Форма обратной связи-скрипт


var link = document.querySelector(".contacts-button"); // нашли кнопку по которой будет производиться клик и записали её в переменную "link";
console.log(link)
var popup = document.querySelector(".wrapper-form"); // нашли класс формы по которому форма будет показываться;
var close = popup.querySelector(".modal-close"); // нашли кнопку закрытия формы и записали ёё в переменную;

var form = popup.querySelector(".user-form") // нашли форму в попапе для того что бы управлть отправкой формы;
var login = popup.querySelector(".user-name"); // нашли инпут которому будем устанавливать фокус;
var email = popup.querySelector(".user-email"); // нашли инпут который будем проверяь на валидность;
var text = popup.querySelector("user-message"); //нашли инпут который будем проверять на валидность;

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

if (link === null) {
  link = 1;
}
console.log(link)

link.addEventListener("click", function (evt) { // поймали событие клика по кнопке;
  evt.preventDefault(); // отменили действие браузера по умолчанию для кнопки;
  popup.classList.add("modal-show"); // добавили форме класс который отвечает за показ-форма показалась;
  if (storage) { //если storage имеет значаение;
    login.value = storage; // тогда присваиваем login значание storage;
    email.focus; //если нет-сместили фокус на поле email;
  }
  else {
    login.focus; // если storage не имеет значения ставим фокус на ввод имени;
  }
})

close.addEventListener("click", function (evt) { // поймали событие клика по кнопке "Закрыть";
  evt.preventDefault(); // отменили стандартное действие браузера;
  popup.classList.remove("modal-show"); // убрали у попапа класс "modal-show";
})

form.addEventListener("submit", function (evt) { // поймали событие отправки формы;
  evt.preventDefault(); //отменили стандартное дествие браузера;
  if (!login.value || !email.value || !text.value) { // если хоть одно поле не заполнено, то отменяем отправку формы;
    evt.preventDefault(); //отменяем отправку формы;
    console.log("Пожалуйста, заполните поля формы") // и выводим сообщение о необходимости заполнить все поле формы;
  } else { // если все поля формы заполнены, то происходит отправка формы;
    if (isStorageSupport) {
      localStorage.setItem("login", login.value) // и мы записываем логин пользователя в localStorage;
    }
  }
})
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
})

// Карта-скрипт

var map = document.querySelector(".map"); // 1. нашли карту в документе;

var modalMap = document.querySelector(".modal-map"); // 4. нашли в index.html большую карту;

var close = modalMap.querySelector(".map-modal-close"); // 6. нашли кнопку закрытия большой карты;

map.addEventListener("click", function (evt) { // 2. отследили событие клика по карте;
  evt.preventDefault(); // 3. отменили стандартное действие браузера;
  modalMap.classList.add("modal-show");// 5. показали большую карту;
})

close.addEventListener("click", function (evt) { // 6. отследили событие клика по кнопке закрытия болшой карты;
  evt.preventDefault(); // 7. отменили стандартное действие браузера;
  modalMap.classList.remove("modal-show"); // 8. Убрали у большой карты класс "modal-show";
})

window.addEventListener("keydown", function (evt) { // 9. 
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalMap.classList.contains("modal-show")) {
      modalMap.classList.remove("modal-show");
    }
  }
})