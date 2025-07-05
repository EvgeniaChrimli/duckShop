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
  const cart = document.querySelector(".header-body_right-cart");

  burger.addEventListener("click", () => {
    overlay.classList.add("active");
    navList.classList.toggle("mobile-menu");
    burger.style.display = "none";
    close.style.display = "block";
    cart.style.display = "none";
  });

  close.addEventListener("click", () => {
    overlay.classList.remove("active");
    navList.classList.remove("mobile-menu");
    burger.style.display = "flex";
    close.style.display = "none";
    cart.style.display = "flex";
  });

  const modalOverlay = document.querySelector(".modal-overlay");
  const modal = document.querySelector(".modal");
  const btnOpenModal = document.querySelectorAll(".btn");
  const modalBtn = document.querySelector(".modal_btn");
  const closeModal = document.querySelector(".modal_close");

  btnOpenModal.forEach((el) => {
    el.addEventListener("click", () => {
      modalOverlay.classList.add("active");
      modal.classList.add("active-modal");
    });
  });

  modalBtn.addEventListener("click", () => {
    modalOverlay.classList.remove("active");
    modal.classList.remove("active-modal");
  });

  closeModal.addEventListener("click", () => {
    modalOverlay.classList.remove("active");
    modal.classList.remove("active-modal");
  });

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      console.log(e.target);
      modalOverlay.classList.remove("active");
      modal.classList.remove("active-modal");
    }
  });
});
