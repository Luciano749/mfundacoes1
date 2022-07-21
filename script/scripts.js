AOS.init();

// --

let modal = document.getElementsByClassName("modal")[0];
let responsiveNavButton = document.getElementsByClassName(
  "responsiveNavButton"
)[0];

responsiveNavButton.onclick = () => {
  modal.classList.add("active");
};

modal.onclick = (e) => {
  if (e.currentTarget === e.target) {
    modal.classList.remove("active");
  }
};

// ---

let map = L.map("map").setView([51.505, -0.09], 13);
let marker = L.marker([51.5, -0.09]).addTo(map);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
