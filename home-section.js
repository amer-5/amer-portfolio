const text = "Talk is cheap. \n Show me the code.";
let index = 0;
let typingText = document.getElementById("typing");

function typeWriter() {
  if (index < text.length) {
    typingText.textContent += text[index];
    index++;
    setTimeout(typeWriter, 100);
  }
}

typeWriter();


function writeMessage() {
  const messages = [
    "We only get a limited number of days.",
    "So make sure to enjoy each of them to the fullest.",
    "I hope you have a great day.",
  ];
  let messageIndex = 0;
  let characterIndex = 0;
  let isDeleting = false;

  return () => {
    const currentMessage = messages[messageIndex];
    let displayText = currentMessage.substring(0, characterIndex);

    if (isDeleting) {
      characterIndex--;
    } else {
      displayText += currentMessage[characterIndex];
      characterIndex++;
    }

    document.getElementById("typingMessages").textContent = displayText;

    if (characterIndex === currentMessage.length) {
      isDeleting = true;
      setTimeout(updateMessage, 2000);
    } else if (isDeleting && characterIndex === 0) {
      isDeleting = false;
      messageIndex = (messageIndex + 1) % messages.length;
      setTimeout(updateMessage, 500);
    } else {
      setTimeout(updateMessage, isDeleting ? 50 : 150);
    }
  };
}

const updateMessage = writeMessage();
updateMessage();


