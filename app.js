window.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav_item");
  const navLinks = document.querySelectorAll(".nav_link");

  navItems.forEach((el) => {
    el.addEventListener("click", () => {
      navItems.forEach((itm) => itm.classList.remove("active-nav"));
      el.classList.add("active-nav");
    });
  });

  navLinks.forEach((el) => {
    el.addEventListener("click", () => {
      navLinks.forEach((elem) => elem.classList.remove("active-link"));
      el.classList.add("active-link");
    });
  });

  const navList = document.querySelector(".nav_list");
  const burger = document.querySelector(".burger");
  const overlay = document.querySelector(".overlay");
  const close = document.querySelector(".nav_close");

  burger.addEventListener("click", () => {
    overlay.classList.add("active");
    navList.classList.toggle("mobile-menu");
    burger.style.display = "none";
    close.style.display = "block";

    if ((burger.style.display = "none")) {
      const cart = document.querySelector(".header-body_right-cart");
      cart.style.display = "none";
    } else {
    }
  });

  close.addEventListener("click", () => {
    overlay.classList.remove("active");
    navList.classList.remove("mobile-menu");
    burger.style.display = "flex";
    close.style.display = "none";
  });
});
