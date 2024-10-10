window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 100) {
    // Adjust the value to when you want the header to become sticky
    header.classList.add("is-sticky");
  } else {
    header.classList.remove("is-sticky");
  }
});
