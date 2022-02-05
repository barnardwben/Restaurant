import { displayLanding } from "./landing";
import { displayMenu } from "./menu";
import { displayContact } from "./contact";
import "../scss/style.scss";

const PaintUI = (() => {
  let content = document.querySelector("#content");

  content.appendChild(displayLanding.landingSection);
})();
