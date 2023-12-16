const text = "Hi, My name is Ikhlaq Ahmed.";
const text1 = "I am Front-end Web Developer.";
const textElement = document.getElementById("animated-text");

function animateText(text, text1, element) {
  let index = 0;

  function displayText() {
    if (index < text.length) {
      element.textContent += text[index];
      index++;
      setTimeout(displayText, 100); // Change the duration (in milliseconds) between each character
    } else {
      setTimeout(eraseText, 1000); // Wait for 1 second after text is fully displayed, then start erasing
    }
  }

  function eraseText() {
    if (index >= 0) {
      element.textContent = text.substring(0, index);
      index--;
      if (index >= 0) {
        setTimeout(eraseText, 100); // Change the duration (in milliseconds) between each character
      } else {
        index = 0;
        setTimeout(displayText1, 500); // Wait for 0.5 seconds before displaying the next text
      }
    }
  }

  function displayText1() {
    if (index < text1.length) {
      element.textContent += text1[index];
      index++;
      setTimeout(displayText1, 100); // Change the duration (in milliseconds) between each character
    } else {
      setTimeout(eraseText1, 1000); // Wait for 1 second after text is fully displayed, then start erasing
    }
  }

  function eraseText1() {
    if (index >= 0) {
      element.textContent = text1.substring(0, index);
      index--;
      if (index >= 0) {
        setTimeout(eraseText1, 100); // Change the duration (in milliseconds) between each character
      }
      else {
        index = 0;
        setTimeout(displayText, 500); // Wait for 0.5 seconds before displaying the next text
      }
    }
  }

  displayText();
}

animateText(text, text1, textElement);
// hello