(() => {
  const buttonElement = document.createElement("button");
  const section = document.createElement("section");

  document.body.appendChild(section);
  section.appendChild(buttonElement);

  buttonElement.textContent = "play";
  buttonElement.addEventListener("click", drawImage);


  function imageLoaded() {
    const sections = Array.from(document.getElementsByTagName("section"));

    const parentSection = sections.find((currentSection) => {
      const buttons = currentSection.getElementsByTagName("button");
      if (buttons?.length) {
        return currentSection;
      }
    });

    const alert = document.createElement('div');
    alert.className = 'alert alert-success';
    alert.setAttribute('role', 'alert');
    alert.textContent = 'Your kitten is ready <3 <3';
    parentSection.appendChild(alert);
  }

  function drawImage(event) {
    event.preventDefault();
    const imageElement = document.createElement("img");
    imageElement.src = "http://placekitten.com/200/300";
    imageElement.onload = imageLoaded;
    section.appendChild(imageElement);
  }
})();
