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

let map = L.map("map").setView([-18.883303967496367, -48.26337301378025], 13);
let marker = L.marker([-18.883303967496367, -48.26337301378025]).addTo(map);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);

marker.bindPopup("<b>MINAS FUNDAÇÕES").openPopup();
