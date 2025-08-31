
  // نجيب كل الروابط في الـ navbar
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // نشيل active من كل الروابط
      navLinks.forEach(l => l.classList.remove('active'));
      // نضيف active للرابط اللي اتضغط
      link.classList.add('active');
    });
  });
