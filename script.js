// Import Translations Data
import {
  featureAr,
  featureEn,
  servicesAr,
  servicesEN,
  translationsmain,
  translationsService,
} from "./data.js";

// DOM Elements
const linksMenu = document.querySelector(".links-menu");
const linksList = document.querySelector(".links-menu ul");
const links = document.querySelectorAll(".links li a");
const scrollElement = document.querySelector(".scroll");
const srvContent = document.querySelector(".srvContent");
const btnAr = document.getElementById("ar");
const btnEn = document.getElementById("en");
const title = document.querySelector(".main .text [data-lang='title']");
const nameMain = document.querySelector("[data-lang='name']");
const desMain = document.querySelector("[data-lang='description']");
const featuresTitle = document.querySelector(".features h1.title");
const aboutHeader = document.querySelector(".About h2.heading");
const aboutContentText = document.querySelector(".About .aboutContent .text p");
const contactHeader = document.querySelector("#contact h2.heading");
const serviceHeader = document.querySelector("#services h2.heading");

// Mobile Menu Toggle
linksMenu.addEventListener("click", () => {
  linksList.style.display = "block";
});

// Scroll Event - Show/Hide Scroll to Top Button
document.addEventListener("scroll", () => {
  scrollElement.style.display = window.pageYOffset > 600 ? "flex" : "none";
});

// Scroll to Top Action
scrollElement.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Language Handling
let currentLang = localStorage.getItem("lang") || "ar";
document.documentElement.setAttribute(
  "dir",
  currentLang === "ar" ? "rtl" : "ltr"
);

const updateButtons = () => {
  btnAr.style.display = currentLang === "ar" ? "none" : "block";
  btnEn.style.display = currentLang === "en" ? "none" : "block";
};

const updateTextContent = () => {
  title.innerText = translationsmain[currentLang].titlemain;
  featuresTitle.innerHTML = translationsmain[currentLang].featureTitle;
  aboutHeader.innerHTML = translationsmain[currentLang].aboutHead;
  aboutContentText.innerHTML = translationsmain[currentLang].aboutText;

  // Update Features Section
  const featureElement = (currentLang === "ar" ? featureAr : featureEn)
    .map(
      (feature) => `
      <div class="feat">
        <h3>${feature.title}</h3>
        <p>${feature.des}</p>
      </div>
    `
    )
    .join("");
  document.querySelector(".features .container").innerHTML = featureElement;
};

const setLanguage = (lang) => {
  localStorage.setItem("lang", lang);
  currentLang = lang;
  location.reload();
};

// Language Buttons Event Listeners
btnAr.addEventListener("click", () => setLanguage("ar"));
btnEn.addEventListener("click", () => setLanguage("en"));

// Update Links Text
links.forEach((link, index) => {
  link.innerText = translationsmain[currentLang].links[index];
});

nameMain.innerHTML = translationsmain[currentLang].name;
desMain.innerHTML = translationsmain[currentLang].description;

// Update Services Section
const serviceElement = (currentLang === "ar" ? servicesAr : servicesEN)
  .map(
    (service) => `
      <div class="srv">
        <img src="${service.image}" alt="Service Image" />
        <div class="text">
          <h3>${service.title}</h3>
          <p>${service.desc}</p>
        </div>
      </div>
    `
  )
  .join("");
srvContent.innerHTML = serviceElement;

// Update Other Texts
serviceHeader.innerHTML = translationsService[currentLang].servicesHeading;
contactHeader.innerHTML = translationsmain[currentLang].contactHeading;

document.querySelector("input[type='submit']").value =
  translationsmain[currentLang].sendMessage;
document.querySelector("input[type='name']").placeholder =
  translationsmain[currentLang].namePlaceholder;
document.querySelector("input[type='email']").placeholder =
  translationsmain[currentLang].emailPlaceholder;
document.querySelector("textarea[name='message']").placeholder =
  translationsmain[currentLang].messagePlaceholder;
document.querySelector(".info h4").innerHTML =
  translationsmain[currentLang].contactHeading;

// Initialize Page
updateButtons();
updateTextContent();
