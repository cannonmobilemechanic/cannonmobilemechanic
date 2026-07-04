// Cannon Mobile Mechanic LLC — shared site scripts

document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

  // Service card chain-electricity click effect
  document.querySelectorAll('.svc-card').forEach(function (card) {
    card.addEventListener('click', function () {
      if (card.classList.contains('electrified')) return;
      card.classList.add('electrified');
      setTimeout(function () { card.classList.remove('electrified'); }, 2000);
    });
  });

});
