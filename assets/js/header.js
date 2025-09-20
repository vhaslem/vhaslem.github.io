// Minimal JS for toggling mobile nav and dropdowns, with basic keyboard accessibility.
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const primaryNav = document.getElementById('primary-nav');

  // Toggle mobile nav
  navToggle && navToggle.addEventListener('click', function () {
    const open = this.classList.toggle('open');
    this.setAttribute('aria-expanded', String(open));
    if (primaryNav) primaryNav.classList.toggle('open', open);
  });

  // Dropdown handling
  document.querySelectorAll('.has-dropdown').forEach(function (li) {
    const link = li.querySelector('.nav-link');
    const button = li.querySelector('.dropdown-toggle');
    const dropdown = li.querySelector('.dropdown');

    // If there's a small-screen toggle button, use it
    if (button) {
      button.addEventListener('click', function (e) {
        const open = dropdown.classList.toggle('open');
        button.setAttribute('aria-expanded', String(open));
      });
    }

    // On desktop: open on hover & focus
    li.addEventListener('mouseenter', function () {
      if (window.matchMedia('(min-width: 861px)').matches) {
        dropdown && dropdown.classList.add('open');
        link && link.setAttribute('aria-expanded', 'true');
      }
    });
    li.addEventListener('mouseleave', function () {
      if (window.matchMedia('(min-width: 861px)').matches) {
        dropdown && dropdown.classList.remove('open');
        link && link.setAttribute('aria-expanded', 'false');
      }
    });

    // Keyboard support for dropdown
    link && link.addEventListener('keydown', function (ev) {
      if (!dropdown) return;
      // Enter or Space opens the submenu
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        const willOpen = !dropdown.classList.contains('open');
        dropdown.classList.toggle('open', willOpen);
        link.setAttribute('aria-expanded', String(willOpen));
        // focus first item if opening
        if (willOpen) {
          const first = dropdown.querySelector('[role="menuitem"]') || dropdown.querySelector('a');
          first && first.focus();
        }
      }
      // Escape closes it
      if (ev.key === 'Escape') {
        dropdown.classList.remove('open');
        link.setAttribute('aria-expanded', 'false');
        link.focus();
      }
    });
  });

  // Close menus when clicking outside
  document.addEventListener('click', function (e) {
    const insideHeader = e.target.closest('.site-header');
    if (!insideHeader) {
      // close mobile
      if (navToggle) {
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
      primaryNav && primaryNav.classList.remove('open');
      // close dropdowns
      document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
      document.querySelectorAll('.nav-link[aria-expanded="true"]').forEach(n => n.setAttribute('aria-expanded','false'));
    }
  });
});
