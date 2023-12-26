
const advertisementWindow = document.getElementById("advertisement-window");
const subscribeBtn = document.getElementById("subscribe-btn");
const noThanksBtn = document.getElementById("no-thanks-btn");
const subscribed = sessionStorage.getItem("subscribed");

if (subscribed) {
  advertisementWindow.style.display = "none";
} else {
  window.addEventListener("load", () => {
    advertisementWindow.style.display = "block";
  });
  subscribeBtn.addEventListener("click", () => {
    sessionStorage.setItem("subscribed", true);
    advertisementWindow.style.display = "none";
  });
  noThanksBtn.addEventListener("click", () => {
    advertisementWindow.style.display = "none";
    setTimeout(() => {
      advertisementWindow.style.display = "block";
    }, 60000);
  });
}

setInterval(function() {
  if (!sessionStorage.getItem("subscribed") && sessionStorage.getItem("popup_closed") !== "true") {
    document.getElementById("popup").style.display = "block";
  }
}, 60000);

window.onload = function() {
  if (sessionStorage.getItem("popup_closed") !== "false") {
    document.getElementById("popup").style.display = "block";
  }
}

function closePopup() {
  sessionStorage.setItem("popup_closed", "true");
  document.getElementById("popup").style.display = "none";
  setTimeout(function() {
    document.getElementById("popup").style.display = "block";
  }, 60000);
}

function subscribe() {
  sessionStorage.setItem("popup_closed", "false");
  document.getElementById("popup").style.display = "none";
}



