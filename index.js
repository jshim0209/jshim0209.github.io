"use strict";

// mobile menu
const burgerIcon = document.querySelector('#burger');
const navarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {

  navarMenu.classList.toggle('is-active')
  
  for (const navItem of navbarItems) {
    navItem.classList.add('has-text-black', 'has-text-centered');
  }

});

navarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

// Change Navbar dark when scrolling down
const navbar = document.querySelector("#navbar");
const navbarItems = document.querySelectorAll(".navbar-item");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('is-white');
    burgerIcon.classList.remove('has-text-white');
    for (const navItem of navbarItems) {
      navItem.classList.remove('has-text-white');
    }
  } else {
    navbar.classList.remove('is-white');
    burgerIcon.classList.add('has-text-white');
    for (const navItem of navbarItems) {
      navItem.classList.add('has-text-white');
    }
  }
});

// Change Home element opacity when scrolling
const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {

  if (window.scrollY > homeHeight) {
    return;
  }
  const percentVisible = 1 - (window.scrollY / homeHeight);
  home.style.opacity = percentVisible;
});

// Show "Arrow Up" button when scrolling  down
const arrowUp = document.querySelector("#arrow-up");

document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

// Go back to top when tapping on the arrow up button
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
})

// Handle scrolling when tapping on the contact me
const contactMe = document.querySelector("#contactMe");
contactMe.addEventListener("click", () => {
  scrollIntoView("#contact");
});



function getDatasetFilter(e) {
  return e.dataset.filter;
}

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
  // selectNavItem(navItems[sectionIds.indexOf(selector)]);
}

// const sectionIds = [
//   "#home",
//   "#about",
//   "#skills",
//   "#work",
//   "#contact",
// ];

// const sections = sectionIds.map((id) => document.querySelector(id));
// const navItems = sectionIds.map((id) =>
//   document.querySelector(`[data-link="${id}"]`)
// );

// const observerOptions = {
//   root: null,
//   rootMargin: "0px",
//   threshold: "0.3",
// };

// function selectNavItem(selected) {
//   selectedNavItem.classList.remove("active");
//   selectedNavItem = selected;
//   selectedNavItem.classList.add("active");
// }

// let selectedNavIndex = 0;
// let selectedNavItem = navItems[0];
// const observerCallback = (entries, observer) => {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting && entry.intersectionRatio > 0) {
//       const index = sectionIds.indexOf(`#${entry.target.id}`);
//       if (entry.boundingClientRect.y < 0) {
//         selectedNavIndex = index + 1;
//       } else {
//         selectedNavIndex = index - 1;
//       }
//     }
//   });
// };



