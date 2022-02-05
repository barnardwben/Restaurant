const displayMenu = (() => {
  // PAGE SECTION
  let menuSection = document.createElement("section");
  menuSection.classList.add("no-show", "menu-section", "page-display");

  // PAGE CONTENT CONTAINER
  let menuContainer = document.createElement("div");
  menuContainer.classList.add("contents-container", "menu-container");

  // HEADER
  let menuHeaderDiv = document.createElement("div");
  menuHeaderDiv.classList.add("page-header-container");
  let menuHeader = document.createElement("h1");
  menuHeader.classList.add("page-header");
  menuHeader.innerHTML = "Menu";
  menuHeaderDiv.appendChild(menuHeader);
  menuContainer.appendChild(menuHeaderDiv);

  menuSection.appendChild(menuContainer);

  return { menuSection };
})();

export { displayMenu };
