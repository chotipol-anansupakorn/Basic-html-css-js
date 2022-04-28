// **************************
// strart header
// **************************
const sectionHeroEl = document.querySelector(".section-hero");
const header_container = document.querySelector(".header-container");
const header = document.querySelector(".header");
const logo = document.querySelector(".logo");
const topnavlink = document.querySelectorAll(".top-nav-link");
const icon_flag = document.querySelector(".icon-select-flag");
const language = document.querySelector(".language");
const language_item = document.querySelectorAll(".language-link-a");
const nav = document.querySelector(".nav-bar");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      header.classList.add("fix-top-nav");
      header_container.classList.add("top-nav-bg-container");
      logo.classList.remove("logo-filter");

      topnavlink.forEach((el) => {
        el.classList.add("top-nav-dark-font");
      });
      topnavlink[5].classList.remove("top-nav-list-highlight1");
      topnavlink[5].classList.add("top-nav-list-highlight2");
      topnavlink[5].classList.add("top-nav-white-font");
      icon_flag.classList.add("top-nav-dark-font");

      language.classList.add("lanaguage-light");

      language_item.forEach((el) => {
        el.classList.add("language-link-light");
      });
    }

    if (ent.isIntersecting === true) {
      header.classList.remove("fix-top-nav");
      header_container.classList.remove("top-nav-bg-container");
      logo.classList.add("logo-filter");

      topnavlink.forEach((el) => {
        el.classList.remove("top-nav-dark-font");
      });

      icon_flag.classList.remove("top-nav-dark-font");

      topnavlink[5].classList.add("top-nav-list-highlight1");
      topnavlink[5].classList.remove("top-nav-list-highlight2");
      topnavlink[5].classList.remove("top-nav-white-font");

      language.classList.remove("lanaguage-light");
      language_item.forEach((el) => {
        el.classList.remove("language-link-light");
      });
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

const change_language = document.querySelector("#langBtn");
let language_status = 0;

change_language.addEventListener("click", function () {
  language.classList.toggle("language-show");
});

document.addEventListener("scroll", function (e) {
  language.classList.remove("language-show");
});
// **************************
// End header
// **************************

// **************************
// slider image
// **************************
const arrowleft = document.querySelector(".icon-slide-left");
const arrowright = document.querySelector(".icon-slide-right");
const slide_wrap = document.querySelector(".slide-wrap");
const slide_img_box = document.querySelectorAll("#slide-img-box");
const slide_content = document.querySelectorAll(".slide-container");
const progress_bar = document.querySelectorAll(".progress-bar");
const heading1 = document.querySelectorAll("#heading-1-slider-1");
const heading2 = document.querySelectorAll("#heading-1-slider-2");

let counter = 0;
let timer = setInterval(autoSlide, 6000);
showSlides(counter);

function autoSlide() {
  counter = counter + 1;
  showSlides(counter);
  resetTime();
}
function changeSlide(offset) {
  counter = counter + offset;
  showSlides(counter);
  resetTime();
}
function currentSlide(offset) {
  counter = offset;
  showSlides(offset);
}
function resetTime() {
  clearInterval(timer);
  timer = setInterval(autoSlide, 6000);
}

function showSlides() {
  let i;
  let id, id2;
  let translate;
  for (i = 0; i < slide_content.length; i++) {
    progress_bar[i].classList.remove("progress-bar-active");
    heading1[i].classList.remove("sliderAnimate");
    heading2[i].classList.remove("sliderAnimate");
    slide_img_box[i].classList.remove("sliderAnimate");
  }
  if (counter >= slide_content.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slide_content.length - 1;
  }

  translate = counter * ((-1 / 4) * 100); //4 = total pictures
  heading1[counter].classList.add("sliderAnimate");
  heading2[counter].classList.add("sliderAnimate");
  slide_img_box[counter].classList.add("sliderAnimate");
  progress_bar[counter].classList.add("progress-bar-active");
  slide_wrap.style.transform = "translateX(" + translate + "%)";
}
// *****************
// Ebd slider
// ****************

// *****************
// start img modal
// ***************

const image = document.querySelectorAll(".img-product");
const overlay_text = document.querySelectorAll(".overlay-text");
const modal = document.getElementById("myModal");
const modalImg = document.querySelector(".modal-content");
const close = document.querySelector(".close");

overlay_text.forEach((el, index) => {
  el.addEventListener("click", function () {
    for (const [key, value] of Object.entries(image)) {
      modal.style.display = "block";
      modalImg.src = Object.values(image)[index].getAttribute("src");
    }
  });
});

close.addEventListener("click", close_modal);
modal.addEventListener("click", close_modal);
document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    close_modal();
  }
});
// document.addEventListener("scroll", function (e) {
//   close_modal();
// });

function close_modal() {
  modal.style.transition = "all ease-in 0.3s";
  modal.style.opacity = "0";
  document.body.style.overflow = "auto";
  setTimeout(function () {
    modal.style.display = "none";
    modal.style.opacity = "1";
  }, 500);
}

// *****************
// end img modal
