import { translationsService, uniquAr, uniquEn } from "./data.js";

const title = document.querySelector(
  ".service-landing .text [data-lang='title']"
);
let currentLang = localStorage.getItem("lang") || "ar";
document.documentElement.setAttribute(
  "dir",
  currentLang === "ar" ? "rtl" : "ltr"
);

title.innerText = translationsService[currentLang].title;

document.querySelector("[data-lang='aboutHeading']").innerHTML =
  translationsService[currentLang].aboutHeading;
document.querySelector("[data-lang='aboutText']").innerHTML =
  translationsService[currentLang].aboutText;

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
