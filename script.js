/* ─── Nav scroll effect ──────────────────────────────────────────── */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

/* ─── Fade-in on scroll ──────────────────────────────────────────── */
const fadeEls = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

fadeEls.forEach((el) => fadeObserver.observe(el));

/* ─── Active nav link highlight ──────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  },
  {
    rootMargin: `-${getComputedStyle(document.documentElement)
      .getPropertyValue('--nav-h')
      .trim()} 0px -60% 0px`,
  }
);

sections.forEach((sec) => sectionObserver.observe(sec));

/* ─── Contact form (Formspree) ───────────────────────────────────── */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('.form-submit');
    const status = contactForm.querySelector('.form-status');

    btn.disabled = true;
    btn.textContent = '전송 중...';
    status.className = 'form-status';
    status.textContent = '';

    try {
      const res = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        status.className = 'form-status success';
        status.textContent = '메시지가 전송되었습니다. 감사합니다!';
        contactForm.reset();
      } else {
        throw new Error();
      }
    } catch {
      status.className = 'form-status error';
      status.textContent = '전송에 실패했습니다. 잠시 후 다시 시도해주세요.';
    } finally {
      btn.disabled = false;
      btn.textContent = '보내기';
    }
  });
}
