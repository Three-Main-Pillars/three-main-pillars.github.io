const year = new Date().getFullYear();
document.querySelectorAll('.yr').forEach((el) => { el.textContent = year; });

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('navmenu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });
  navMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }));
}

const io = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = (i % 4 * 60) + 'ms';
  io.observe(el);
});
