/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
  let suits = ["♦", "♥", "♠", "♣"];

  const card = document.querySelector(".card");
  const cardValue = document.querySelector(".value");
  let randomForValues = Math.floor(Math.random() * 12);
  cardValue.innerHTML = values[randomForValues];

  const suit = document.querySelector(".suit");
  const suitRight = document.querySelector(".suit-right");
  let randomForSuits = Math.floor(Math.random() * 4);
  suit.innerHTML = suits[randomForSuits];
  suitRight.innerHTML = suits[randomForSuits];
  if (suits[randomForSuits] === "♦") {
    card.classList.add("diamond");
  }
  if (suits[randomForSuits] === "♥") {
    card.classList.add("heart");
  }
};
