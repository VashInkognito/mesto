// Массив элементов(Карточек)
const elements = [
  {
    title: 'Village house',
    image: './images/derevenskii-dom.jpg',
    alt: 'Village house'
  },
  {
    title: 'Main Botanical Garden',
    image: './images/botanical_garden.jpg',
    alt: 'Main Botanical Garden'
  },
  {
    title: 'Mayak Gamova',
    image: './images/mayak_gamova.jpg',
    alt: 'Mayak Gamova'
  },
  {
    title: 'Ivanovo Oblast',
    image: './images/ivanovo_oblast.jpg',
    alt: 'Ivanovo Oblast'
  },
  {
    title: 'Arkhangelsk Oblast',
    image: './images/arkhangelsk_oblast.jpg',
    alt: 'Arkhangelsk Oblast'
  },
  {
    title: 'Krasnoyarsk Krai',
    image: './images/krasnoyarsk_krai.jpg',
    alt: 'Krasnoyarsk Krai'
  }
]; 
//--------------------------------------------------------------------//
// Глобальные переменные для popUpEditProfile
const popUpEditProfile = document.querySelector('.popup_type_edit-profile');
const buttonClosePopUpEditProfile = document.querySelector('.popup__button-close-pop-up-edit-profile');
//
const formElementEdit = document.querySelector('.popup__form_type_edit');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
//
const buttonEditProfile = document.querySelector('.profile__button-edit');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');
//
// Глобальные переменные для popUpAddCard
const elementsList = document.querySelector('.elements__list');
//
const popUpAddElement = document.querySelector('.popup_type_add-card');
const buttonClosePopUpAddCard = document.querySelector('.popup__button-close-pop-up-add-card');
//
const formElementAdd = document.querySelector('.popup__form_type_add');
const titleInput = document.querySelector('.popup__input_type_title');
const imageInput = document.querySelector('.popup__input_type_image');
//
const createNewElementButton = document.querySelector('.profile__button-add');
//
// Глобальные переменные для popUpPicture
const popUpPicture = document.querySelector('.popup_type_picture');
const buttonClosePopUpPicture = document.querySelector('.popup__button-close-picture');
//
const popUpImage = document.querySelector('.popup__image');
const popUpCaption = document.querySelector('.popup__caption');
//
//----------------------------Popup-EditProfile-----------------------//
//  Универсальные функции закрытия и открытия PopUp
function openPopUp(popUp) {
  popUp.classList.add('popup_opened');
}
function closePopUp(popUp) {
  popUp.classList.remove('popup_opened');
}
//--------------------------------------------------------------------//
// Слушатель открытия PopUpEditProfile
buttonEditProfile.addEventListener('click', function() {
  openPopUp(popUpEditProfile);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});
//--------------------------------------------------------------------//
// Слушатель закрытия PopUpEditProfile
buttonClosePopUpEditProfile.addEventListener('click', function() {
  closePopUp(popUpEditProfile);
});
//--------------------------------------------------------------------//
// Функция обработки данных формы
function handleFormSubmitEdit(event) {
  event.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopUp(popUpEditProfile);
}
// Слушатель сохранения формы
formElementEdit.addEventListener('submit', handleFormSubmitEdit);
//--------------------------------------------------------------------//
//----------------------------Popup-AddCard---------------------------//
// Слушатель открытия PopUpAddCard
createNewElementButton.addEventListener('click', function () {
  openPopUp(popUpAddElement);
});
//--------------------------------------------------------------------//
// Слушатель закрытия PopUpAddCard
buttonClosePopUpAddCard.addEventListener('click', function () {
  closePopUp(popUpAddElement);
});
//--------------------------------------------------------------------//
// Функция создания карточки
function createElement(element) {
  // Клонирование содержимого template
  const newElement = document.querySelector('#elementTemplate').content.cloneNode(true);
  //--------------------------------------------//
  // Присваивание значений
  const elementTitle = newElement.querySelector('.element__title')
  elementTitle.textContent = element.title;
  const elementImage = newElement.querySelector('.element__image')
  elementImage.setAttribute('src', element.image);
  elementImage.setAttribute('alt', element.alt);
  //--------------------------------------------//
  //Слушатель лайка карточек
  const buttonLike = newElement.querySelector('.element__button-like');
  buttonLike.addEventListener('click', function(event) {
  event.target.classList.toggle('element__button-like_active')
});
  //--------------------------------------------//
  //Слушатель удаления карточек
  const buttonTrash = newElement.querySelector('.element__button-trash')
  buttonTrash.addEventListener('click', function (event) {
  const deleteButton = event.target;
  const element = deleteButton.closest('.element');
  element.remove();
});
  //--------------------------------------------//
  //Слушатель открытия PopUpPicture
  elementImage.addEventListener('click', function(event) {
    openPopUp(popUpPicture);
    popUpImage.src = event.target.src;
    popUpImage.alt = event.target.alt;
    popUpCaption.textContent = event.target.alt;
  });
  return newElement;
};
//--------------------------------------------------------------------//
// Функция добавления карточки в лист
const renderCard = function(title, image) {
  elementsList.prepend(createElement({title, image}));
};
//--------------------------------------------------------------------//
// Выполнение функции createElement, для каждого элемента массива
elements.forEach(function(element) {
  renderCard(element.title, element.image);
});
//--------------------------------------------------------------------//
// Функция обработки данных формы
function handleFormSubmitAdd(event) {
  event.preventDefault(); 
  renderCard(titleInput.value, imageInput.value);
  closePopUp(popUpAddElement);
  formElementAdd.reset();
};
//--------------------------------------------------------------------//
// Слушатель сохранения формы
formElementAdd.addEventListener('submit', handleFormSubmitAdd);
//--------------------------------------------------------------------//
//----------------------------Popup-Picture---------------------------//
// Слушатель закрытия PopUpPicture
buttonClosePopUpPicture.addEventListener('click', function () {
  closePopUp(popUpPicture);
});
//--------------------------------------------------------------------//