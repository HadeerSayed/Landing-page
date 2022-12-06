/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

const sections = document.querySelectorAll("section");
const fragment = document.createDocumentFragment();
const navList = document.getElementById("navbar__list");
const navIcon = document.querySelector('.navbar__icon');
/**
 * End Global Variables
 
 * Begin Main Functions
 *
 */

// build the nav

function CreateNavbar() {
  for (let i = 0; i < sections.length; i++) {
    const sectionName = sections[i].getAttribute("data-nav");
    const sectionId = sections[i].getAttribute("id");
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.classList.add("menu__link");
    link.href = `#${sectionId}`;
    link.textContent = sectionName;

    link.addEventListener("click", function (event) {
      event.preventDefault();
      sections[i].scrollIntoView({
        behavior: "smooth",
      });
    });

    listItem.appendChild(link);
    fragment.appendChild(listItem);
  }

  navList.appendChild(fragment);
}



/*
* make navbar Responsive  
*/
navIcon.addEventListener('click', function() {
  navIcon.classList.toggle('clicked');
  navList.classList.toggle('clicked');

});


window.addEventListener("load", CreateNavbar());

// Add class 'active' to section when near top of viewport

window.addEventListener("scroll", function () {
  for (let i = 0; i < sections.length; i++) {
    let sectionTop = sections[i].offsetTop - 300;
    let sectionHeight = sections[i].offsetHeight + sectionTop;
    if (scrollY > sectionTop && scrollY < sectionHeight) {
      sections[i].classList.add("your-active-class");
      document.getElementsByClassName("menu__link")[i].classList.add("active");
    } else {
      sections[i].classList.remove("your-active-class");
      document.getElementsByClassName("menu__link")[i].classList.remove("active");
    }
  }
});



