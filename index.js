document.addEventListener("DOMContentLoaded", () => {
  alert("DOMContentLoaded");

  document.getElementById("test").addEventListener("click", () => {
    alert("you've clicked the button");
  });
}, {
  once: true
});

alert("loaded");