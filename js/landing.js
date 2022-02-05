const displayLanding = (() => {
  // PAGE SECTION
  let landingSection = document.createElement("section");
  landingSection.classList.add("landing-section", "page-display");

  // PAGE CONTENT CONTAINER
  let landContainer = document.createElement("div");
  landContainer.classList.add("contents-container", "landing-container");

  // HEADER
  let landHeaderDiv = document.createElement("div");
  landHeaderDiv.classList.add("page-header-container");
  let landHeader = document.createElement("h1");
  landHeader.classList.add("page-header");
  landHeader.innerHTML = "Cupheads Couch";
  landHeaderDiv.appendChild(landHeader);
  landContainer.appendChild(landHeaderDiv);

  landingSection.appendChild(landContainer);

  return { landingSection };
})();

export { displayLanding };
