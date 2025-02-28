import { translationsService, uniquAr, uniquEn } from "./data.js";

let currentLang = localStorage.getItem("lang") || "ar";
document.documentElement.setAttribute(
  "dir",
  currentLang === "ar" ? "rtl" : "ltr"
);
const uniquElement = (currentLang === "ar" ? uniquAr : uniquEn).map(
  (ele) => `
    <div class="box">
          <span class="icon">
            <i class="${ele.icon}"></i>
          </span>
          <h3 class="">${ele.title}</h3>
          <p class="">
            ${ele.desc}
          </p>
        </div>
  `
);

document.querySelector(".unique .boxes").innerHTML = uniquElement.join("");
document.querySelector(".unique p.text").innerHTML =
  translationsService[currentLang].uniqu;

document.querySelector(".about-us .info h2").innerHTML =
  translationsService[currentLang].uniqueHeading;
document.querySelector(".about-us .info p.text").innerHTML =
  translationsService[currentLang].uniqueText;
document.querySelector(".our-message .vision h2").innerHTML =
  translationsService[currentLang].visionTitle;
document.querySelector(".our-message .vision p").innerHTML =
  translationsService[currentLang].visionText;

document.querySelectorAll(".our-message ul.lists li").forEach((li, index) => {
  li.innerHTML = translationsService[currentLang].visionList[index];
});

document.querySelector(".our-message .message h2").innerHTML =
  translationsService[currentLang].missionTitle;
document.querySelector(".our-message .message p").innerHTML =
  translationsService[currentLang].missionText;
