const editProfileButton = document.querySelector('.profile__button-edit');
const popUp = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__button-close');

const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');

const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');

function openPopup() {
  popUp.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}
editProfileButton.addEventListener('click', openPopup);

function closePopup() {
  popUp.classList.remove('popup_opened');
}
closePopupButton.addEventListener('click', closePopup);

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup();
}
formElement.addEventListener('submit', handleFormSubmit);