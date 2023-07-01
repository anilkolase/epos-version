document.addEventListener("DOMContentLoaded", function () {
  window.bridge.updateMessage(updateMessage);
});

function updateMessage(event, message) {
  console.log("message logged in view");
  console.log("Change in branch A");
  let elemE = document.getElementById("message");
  elemE.innerHTML = message;
}
