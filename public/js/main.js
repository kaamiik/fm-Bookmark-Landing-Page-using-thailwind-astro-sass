const tabs = document.querySelectorAll('[role="tab"]');
const tabItems = document.querySelectorAll('[role="presentation"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

tabs.forEach((tab) => {
  tab.addEventListener("click", function (e) {
    e.preventDefault();

    tabs.forEach((tabItem) => {
      tabItem.setAttribute("tabindex", "-1");
      tabItem.setAttribute("aria-selected", "false");
    });

    tabItems.forEach((item) => {
      item.classList.remove("current");
    });

    tab.removeAttribute("tabIndex");
    tab.setAttribute("aria-selected", "true");
    tab.parentNode.classList.add("current");

    const sectionId = tab.getAttribute("data-tab");

    tabPanels.forEach((tabPanel) => {
      if (tabPanel.id === sectionId) {
        tabPanel.classList.add("grid");
        tabPanel.removeAttribute("hidden");
      } else {
        tabPanel.classList.remove("grid");
        tabPanel.setAttribute("hidden", "");
      }
    });
  });

  tab.addEventListener("keydown", function (e) {
    const index = Array.prototype.indexOf.call(tabs, e.currentTarget);
    let dir = null;

    switch (e.which) {
      case 37:
      case 38:
        dir = "previous";
        break;
      case 39:
      case 40:
        dir = "next";
        break;
    }

    if (dir) {
      e.preventDefault();

      const newIndex =
        dir === "previous"
          ? (index - 1 + tabs.length) % tabs.length
          : (index + 1) % tabs.length;

      tabs.forEach((tabItem) => {
        tabItem.setAttribute("tabindex", "-1");
        tabItem.setAttribute("aria-selected", "false");
      });

      tabItems.forEach((item) => {
        item.classList.remove("current");
      });

      const newTab = tabs[newIndex];
      newTab.removeAttribute("tabIndex");
      newTab.setAttribute("aria-selected", "true");
      newTab.parentNode.classList.add("current");
      newTab.focus();

      const sectionId = newTab.getAttribute("data-tab");
      tabPanels.forEach((tabPanel) => {
        if (tabPanel.id === sectionId) {
          tabPanel.classList.add("grid");
          tabPanel.removeAttribute("hidden");
        } else {
          tabPanel.classList.remove("grid");
          tabPanel.setAttribute("hidden", "");
        }
      });
    }
  });
});
