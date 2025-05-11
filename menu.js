function toggleMenu() {
  const nav = document.querySelector("nav");
  const burger = document.querySelector(".burger");
  burger.classList.toggle("open");

  if (nav.classList.contains("active")) {
    nav.style.maxHeight = "0px";
    nav.classList.remove("active");
  } else {
    nav.style.maxHeight = nav.scrollHeight + "px";
    nav.classList.add("active");
  }
}

window.addEventListener("resize", () => {
  const nav = document.querySelector("nav");
  if (!nav.classList.contains("active")) {
    nav.style.maxHeight = "0px";
  }
});