// Scroll Suave al Hacer Clic en el Menú
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Ajusta para el header fijo
                behavior: 'smooth'
            });
        }
    });
});

// Resaltado del Menú Activo Según la Sección Visible
const navLinks = document.querySelectorAll('#navLinks a');
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    navLinks.forEach(link => {
        const sectionId = link.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        if (
            section &&
            section.offsetTop - 100 <= scrollPosition &&
            section.offsetTop + section.offsetHeight > scrollPosition
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Función de Búsqueda
function performSearch() {
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
        alert(`Buscando: "${query}"\n(Función de búsqueda en desarrollo)`);
        // Implementar funcionalidad real de búsqueda aquí si es necesario
    } else {
        alert('Por favor, ingresa un término para buscar.');
    }
}

// Mensaje de Confirmación al Cerrar Sesión
document.getElementById('logoutBtn').addEventListener('click', function (e) {
    const confirmLogout = confirm("¿Estás seguro de que deseas cerrar sesión?");
    if (!confirmLogout) {
        e.preventDefault(); // Evita redirigir si el usuario cancela
    }
});
