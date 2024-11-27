"use strict";

const checkBtn = document.querySelector("#check-btn");
const showResult = document.querySelector("#result");
const input = document.querySelector("#text-input");

checkBtn.addEventListener("click", () => {
  const textFromInput = input.value;
  if (!textFromInput) {
    alert("Please input a value");
  } else {
    const clearedText = textFromInput
      .replace(/[^a-zA-Z0-9]/g, "")
      .toLowerCase();
    const reversedText = clearedText.split("").reverse().join("");
    const isPalindrome = clearedText === reversedText;
    showResult.innerHTML = `<h2>${textFromInput}</h2> <span class="badge ${
      isPalindrome ? "text-bg-success" : "text-bg-danger"
    }">${isPalindrome ? "is" : "is not"}</span> a palindrome`;
    input.value = "";
  }
});
