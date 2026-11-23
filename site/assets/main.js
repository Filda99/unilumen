(function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');

  // Mobilní menu
  function setOpen(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Zavřít menu' : 'Otevřít menu');
  }
  toggle.addEventListener('click', function () { setOpen(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });

  // Stín hlavičky po odscrollování
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Aktuální rok v patičce
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  if (!('IntersectionObserver' in window)) return;

  // Zvýraznění aktivní položky menu
  var links = {};
  nav.querySelectorAll('a[href^="#"]').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      var a = links[en.target.id];
      if (a && en.isIntersecting) {
        Object.keys(links).forEach(function (k) { links[k].classList.remove('active'); });
        a.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  document.querySelectorAll('main section[id]').forEach(function (s) { spy.observe(s); });

  // Jemné objevení obsahu
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var items = document.querySelectorAll('.section h2, .about p, .facts li, .card, .ref-card, .contact-card');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  items.forEach(function (el) { el.classList.add('reveal'); io.observe(el); });
})();
