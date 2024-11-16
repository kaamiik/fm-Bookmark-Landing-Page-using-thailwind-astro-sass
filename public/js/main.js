const btnOpen = document.querySelector(".js-nav-open");
const btnClose = document.querySelector(".js-nav-close");
const media = window.matchMedia("(width < 45em)");
const topNavMenu = document.querySelector(".nav__menu");
const body = document.querySelector("body");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

const tabs = document.querySelectorAll('[role="tab"]');
const tabItems = document.querySelectorAll('[role="presentation"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

const form = document.querySelector(".js-cta");
const emailInput = document.querySelector(".js-cta-input");
const errorDiv = document.querySelector(".js-error-div");
const errorMessage = document.querySelector(".js-error-message");
const errorIcon = document.querySelector(".js-error-icon");

function openMobileMenu() {
  btnOpen.setAttribute("aria-expanded", "true");
  topNavMenu.removeAttribute("inert");
  topNavMenu.removeAttribute("style");
  main.setAttribute("inert", "");
  footer.setAttribute("inert", "");
  bodyScrollLockUpgrade.disableBodyScroll(body);
  btnClose.focus();
}

function closeMobileMenu() {
  btnOpen.setAttribute("aria-expanded", "false");
  topNavMenu.setAttribute("inert", "");
  main.removeAttribute("inert");
  footer.removeAttribute("inert");
  bodyScrollLockUpgrade.enableBodyScroll(body);
  btnOpen.focus();

  setTimeout(() => {
    topNavMenu.style.transition = "none";
  }, 500);
}

function setupTopNav(e) {
  if (e.matches) {
    // is mobile
    console.log("is mobile");
    topNavMenu.setAttribute("inert", "");
    topNavMenu.style.transition = "none";
  } else {
    // is tablet/desktop
    console.log("is desktop");
    closeMobileMenu();
    topNavMenu.removeAttribute("inert");
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function updateTabState(selectedTab) {
  tabs.forEach((tab) => {
    tab.setAttribute("tabindex", "-1");
    tab.setAttribute("aria-selected", "false");
  });

  tabItems.forEach((item) => {
    item.classList.remove("current");
  });

  selectedTab.removeAttribute("tabindex");
  selectedTab.setAttribute("aria-selected", "true");
  selectedTab.parentNode.classList.add("current");
}

function updatePanelState(sectionId) {
  tabPanels.forEach((panel) => {
    if (panel.id === sectionId) {
      panel.classList.add("grid");
      panel.removeAttribute("hidden");
    } else {
      panel.classList.remove("grid");
      panel.setAttribute("hidden", "");
    }
  });
}

function handleTabClick(event) {
  event.preventDefault();
  const selectedTab = event.currentTarget;
  const sectionId = selectedTab.getAttribute("data-tab");

  updateTabState(selectedTab);
  updatePanelState(sectionId);
}

function handleTabKeydown(event) {
  const index = Array.prototype.indexOf.call(tabs, event.currentTarget);
  let dir = null;

  switch (event.which) {
    case 37: // Left arrow
    case 38: // Up arrow
      dir = "previous";
      break;
    case 39: // Right arrow
    case 40: // Down arrow
      dir = "next";
      break;
  }

  if (dir) {
    event.preventDefault();

    const newIndex =
      dir === "previous"
        ? (index - 1 + tabs.length) % tabs.length
        : (index + 1) % tabs.length;

    const newTab = tabs[newIndex];
    const sectionId = newTab.getAttribute("data-tab");

    updateTabState(newTab);
    updatePanelState(sectionId);
    newTab.focus();
  }
}

// Hamburger Menu Code
setupTopNav(media);

btnOpen.addEventListener("click", openMobileMenu);
btnClose.addEventListener("click", closeMobileMenu);

media.addEventListener("change", function (e) {
  setupTopNav(e);
});

// Tabs Interface Code
tabs.forEach((tab) => {
  tab.addEventListener("click", handleTabClick);
  tab.addEventListener("keydown", handleTabKeydown);
});

// Form Validation Code
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = emailInput.value.trim();

  if (!isValidEmail(email)) {
    errorDiv.classList.add("error-div");
    emailInput.setAttribute("aria-invalid", "true");
    errorMessage.removeAttribute("hidden");
    errorMessage.textContent = "Whoops, make sure it’s an email";
    errorIcon.removeAttribute("hidden");
  } else {
    errorDiv.classList.remove("error-div");
    emailInput.setAttribute("aria-invalid", "false");
    errorMessage.setAttribute("hidden", "");
    errorMessage.textContent = "";
    errorIcon.setAttribute("hidden", "");

    emailInput.value = "";
  }
});

emailInput.addEventListener("input", function () {
  errorDiv.classList.remove("error-div");
  emailInput.setAttribute("aria-invalid", "false");
  errorMessage.setAttribute("hidden", "");
  errorIcon.setAttribute("hidden", "");
});
