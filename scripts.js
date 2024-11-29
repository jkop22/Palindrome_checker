"use strict";

const checkBtn = document.querySelector("#check-btn");
const showResult = document.querySelector("#result");
const input = document.querySelector("#text-input");
const historyEl = document.querySelector("#history");

function saveToHistory(textFromInput, isPalindrome) {
  const history = JSON.parse(localStorage.getItem("history")) || [];
  history.push({
    input: textFromInput,
    result: isPalindrome ? "is" : "is not",
  });
  localStorage.setItem("history", JSON.stringify(history));
}

function renderHistory() {
  const history = JSON.parse(localStorage.getItem("history")) || [];
  historyEl.innerHTML = "";
  history.forEach(({ input, result }, index) => {
    const historyItem = document.createElement("div");
    historyItem.className = "history-item";
    historyItem.innerHTML = `
      <p><strong>${index + 1}. Input:</strong> ${input}</p>
      <p><strong>Result:</strong> <span style="color: ${
        result === "is" ? "green" : "red"
      };">${result}</span> a palindrome</p>
      <hr>
    `;
    historyEl.appendChild(historyItem);
  });
}

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
    showResult.classList.add("has-content");
    saveToHistory(textFromInput, isPalindrome);
    renderHistory();

    input.value = "";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  renderHistory();
});
