(() => {
  const buttonElement = document.createElement("button");
  const section = document.createElement("section");

  document.body.appendChild(section);
  section.appendChild(buttonElement);

  buttonElement.textContent = "play";
  buttonElement.addEventListener("click", drawImage);

      /**
     <div class="alert alert-success" role="alert">
            A simple success alert—check it out!
        </div>
     */

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
    alert.textContent = 'Your kitten is ready <3';
    parentSection.appendChild(alert);

    // fetch('https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css').then((response) => console.log(response));
  }

  function drawImage(event) {
    event.preventDefault();
    const imageElement = document.createElement("img");
    imageElement.src = "http://placekitten.com/200/300";
    imageElement.onload = imageLoaded;
    section.appendChild(imageElement);
  }
})();
