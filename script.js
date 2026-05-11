const appState = {
  language: "it",
};

function markAppReady() {
  document.body.classList.add("is-ready");
}

document.addEventListener("DOMContentLoaded", markAppReady);

window.OpenLib = {
  state: appState,
};
