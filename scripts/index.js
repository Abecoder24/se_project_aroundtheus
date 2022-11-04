let initialCards = [{name: "Yosemite Valley",
link:"../images/yosemite-valley.jpg"},
{name:"Lake Louise", link: "../images/lake-louise.png"},
{name:"Bald Mountains", link: "../images/bald-mountains.png"}, 
{name:"Latemar", link:"../images/latemar.png"}, 
{name: "Vanoise National Park", link: "../images/vanoise-national-park.jpg"}, 
{name: "Lago di Braies", link: "../images/lago-di-braise.png"}];
 
const profileCloseButton = document.querySelector(".modal__close")
 const profileEditButton = document.querySelector(".profile__button");
 const modal = document.querySelector(".modal");

 profileEditButton.addEventListener("click", () => {
 modal.classList.add("modal__opened")
 })
profileCloseButton.addEventListener("click", () =>{
    modal.classList.remove("modal__opened")
})