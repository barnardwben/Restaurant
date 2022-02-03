function component() {
  const element = document.createElement("div");

  element.innerHTML = "Hello World Testing";

  return element;
}

document.body.appendChild(component());
