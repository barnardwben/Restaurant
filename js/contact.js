const displayContact = (() => {
  // PAGE SECTION
  let contactSection = document.createElement("section");
  contactSection.classList.add("contact-section", "page-display");

  // PAGE CONTENT CONTAINER
  let contactContainer = document.createElement("div");
  contactContainer.classList.add("contents-container", "contact-container");

  // HEADER
  let contactHeaderDiv = document.createElement("div");
  contactHeaderDiv.classList.add("page-header-container");
  let contactHeader = document.createElement("h1");
  contactHeader.classList.add("page-header");
  contactHeader.innerHTML = "Contact Us";
  contactHeaderDiv.appendChild(contactHeader);
  contactContainer.appendChild(contactHeaderDiv);

  contactSection.appendChild(contactContainer);

  return { contactSection };
})();

export { displayContact };
