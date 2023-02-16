"use strict";

const header = document.getElementById("typewriter");

const text = header.innerText;

header.innerText = "";

let index = 0;

function addCharacter() {
  if (index < text.length) {
    const character = text.charAt(index);
    header.innerText += character;

    if (character === " ") {
      document.getElementById("typespace").play();
    } else if (index === text.length - 1) {
      document.getElementById("typelast").play();
    } else {
      document.getElementById("typekey" + Math.floor(Math.random() * 2 + 1)).play();
    }
    index++;
    setTimeout(addCharacter, Math.floor(Math.random() * 150) + 50);
  }
}
addCharacter();
