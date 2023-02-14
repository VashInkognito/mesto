const editProfileButton = document.querySelector('.profile__button-edit');
const PopUp = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__button-close');

function openPopup () {
  PopUp.classList.add('popup_opened');
  }
editProfileButton.addEventListener('click', openPopup);

function closePopup () {
  PopUp.classList.remove('popup_opened');
  }
closePopupButton.addEventListener('click', closePopup);

const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    const nameProfile = document.querySelector('.profile__name');
    const jobProfile = document.querySelector('.profile__job');
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
}
formElement.addEventListener('submit', handleFormSubmit); 
formElement.addEventListener('submit', closePopup); 

