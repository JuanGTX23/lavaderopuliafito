document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.section');
  
    function showSection(sectionId) {
      sections.forEach(section => {
        if (section.id === sectionId) {
          section.classList.add('active');
          section.classList.remove('hide');
        } else {
          section.classList.remove('active');
          section.classList.add('hide');
        }
      });
    }
  
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute('data-section');
        showSection(sectionId);
      });
    });
  
    // Mostrar la sección inicial
    showSection('inicio');
  });
  