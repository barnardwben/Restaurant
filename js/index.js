import { displayLanding } from "./landing";
import { displayMenu } from "./menu";
import { displayContact } from "./contact";
import "../scss/style.scss";

const PaintUI = (() => {
  // SELECT OUR DOM ELEMENT WE WILL POPULATE CONTENT TO
  let content = document.querySelector("#content");
  // INITIAL POPULATED CONTENT ON PAGE LOAD
  content.appendChild(displayLanding.landingSection);

  // ADD NAVBAR
  let navigation = document.createElement("div");
  navigation.classList.add("navbar");

  // ADD NAV TABS
  // Tab One
  let navTabOne = document.createElement("div");
  navTabOne.classList.add("nav-tab", "landing-section", "active");
  navTabOne.dataset.tab = "landing";
  navTabOne.innerHTML = "Home";
  navigation.appendChild(navTabOne);
  // Tab Two
  let navTabTwo = document.createElement("div");
  navTabTwo.classList.add("nav-tab", "menu-section");
  navTabTwo.dataset.tab = "menu";
  navTabTwo.innerHTML = "Menu";
  navigation.appendChild(navTabTwo);
  // Tab Three
  let navTabThree = document.createElement("div");
  navTabThree.classList.add("nav-tab", "contact-section");
  navTabThree.dataset.tab = "contact";
  navTabThree.innerHTML = "Contact";
  navigation.appendChild(navTabThree);

  // ADD OUR TABS TO THE DOM
  document.body.appendChild(navigation);

  // ADD OUR TABS TO AN ARRAY
  let tabsArray = [navTabOne, navTabTwo, navTabThree];

  // CALL OUR TAB SWITCH FUNCTION ON TAB CLICK
  tabsArray.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      TabController.tabSwitch(e);
    });
  });

  // RETURN ELEMENTS WE WILL WORK WITH IN OUR TAB CONTROLLER IIFE
  return {
    content,
    navTabOne,
    navTabTwo,
    navTabThree,
  };
})();

const TabController = (() => {
  function tabSwitch(e) {
    let tabSelected = e.target.dataset.tab;

    switch (tabSelected) {
      case "landing":
        e.target.classList.add("active");
        PaintUI.navTabTwo.classList.remove("active");
        PaintUI.navTabThree.classList.remove("active");
        PaintUI.content.innerHTML = "";
        PaintUI.content.appendChild(displayLanding.landingSection);
        break;
      case "menu":
        e.target.classList.add("active");
        PaintUI.navTabOne.classList.remove("active");
        PaintUI.navTabThree.classList.remove("active");
        PaintUI.content.innerHTML = "";
        PaintUI.content.appendChild(displayMenu.menuSection);
        break;
      case "contact":
        e.target.classList.add("active");
        PaintUI.navTabOne.classList.remove("active");
        PaintUI.navTabTwo.classList.remove("active");
        PaintUI.content.innerHTML = "";
        PaintUI.content.appendChild(displayContact.contactSection);
        break;
    }
  }

  // RETURN ELEMENTS THAT WE WILL WORK WITH IN OUR PaintUI IIFE
  return { tabSwitch };
})();
