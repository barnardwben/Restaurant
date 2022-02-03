function component() {
  const element = document.createElement("div");

  element.innerHTML = "Hello World Test";

  return element;
}

document.body.appendChild(component());
