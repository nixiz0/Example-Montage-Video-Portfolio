const targetElement = document.getElementById('competences');
const form_contact = document.getElementById('form_contact');
const projets = document.getElementById('projets');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slideInRight');
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove('slideInRight');
    }
  });
});

const observerFadeleft = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fadeInLeft');
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove('fadeInLeft');
    }
  });
});

const observerfadeInUp = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacityEffect');
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove('opacityEffect');
    }
  });
});

observer.observe(targetElement);
observerFadeleft.observe(form_contact);
observerfadeInUp.observe(projets);
