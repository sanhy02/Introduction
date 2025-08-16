// Hiệu ứng chuyển mục
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 20,
                behavior: 'smooth'
            });
        }
    });
});

// Biểu đồ kỹ năng
window.onload = function() {
    const ctx = document.getElementById('skillsChart').getContext('2d');
    if (ctx) {
        // Sử dụng Chart.js nếu muốn, ở đây vẽ đơn giản
        ctx.fillStyle = '#0078d7';
        ctx.fillRect(10, 100, 60, -80); // HTML
        ctx.fillRect(80, 100, 60, -70); // CSS
        ctx.fillRect(150, 100, 60, -60); // JS
        ctx.fillRect(220, 100, 60, -50); // React
        ctx.fillRect(290, 100, 60, -40); // Network
        ctx.fillStyle = '#333';
        ctx.font = '14px Arial';
        ctx.fillText('HTML', 20, 115);
        ctx.fillText('CSS', 90, 115);
        ctx.fillText('JS', 165, 115);
        ctx.fillText('React', 225, 115);
        ctx.fillText('Network', 295, 115);
    }
};

// Xử lý form liên hệ
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.name.value.trim();
        const email = this.email.value.trim();
        const message = this.message.value.trim();
        if (!name || !email || !message) {
            document.getElementById('contactResult').textContent = 'Vui lòng điền đầy đủ thông tin.';
            return;
        }
        document.getElementById('contactResult').textContent = 'Cảm ơn bạn đã liên hệ!';
        this.reset();
    });
}
