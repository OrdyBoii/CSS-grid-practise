let slideIndex = 1;
const mobileMenuContainer = document.querySelector(".mobile-menu-container");
const closeMobileMenu = document.querySelector(".close-mobile-menu");
const mobileMenuBtn = document.querySelector(".mobile-menu");

const plusSlides = (n) => {
  showSlides((slideIndex += n));
};

const showSlides = (n) => {
  let i;
  const headerImage = document.querySelectorAll(".header-image");
  const mainHeader = document.querySelectorAll(".main-header");
  const mainBody = document.querySelectorAll(".main-body");

  if (n > headerImage.length && mainHeader.length && mainBody.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = headerImage.length && mainHeader.length && mainBody.length;
  }
  for (i = 0; i < headerImage.length; i++) {
    headerImage[i].style.display = "none";
    mainHeader[i].style.display = "none";
    mainBody[i].style.display = "none";
  }
  headerImage[slideIndex - 1].style.display = "block";
  mainHeader[slideIndex - 1].style.display = "block";
  mainBody[slideIndex - 1].style.display = "block";
};

showSlides(slideIndex);

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuContainer.style.display = "block";
});

closeMobileMenu.addEventListener("click", () => {
  mobileMenuContainer.style.display = "none";
});
