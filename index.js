// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    // Welcome message
    const userName = prompt("Masukkan nama Anda (opsional):");
    if (userName && userName.trim()) {
        const welcomeHeading = document.querySelector('#home h1');
        if (welcomeHeading) {
            welcomeHeading.textContent = `Hi ${userName.trim()}!, Welcome To My Bakery`;
        }
    }

    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            // Basic validation
            if (!data.nama || !data.email || !data.kue || !data.jumlah || !data.tanggal) {
                alert('Mohon lengkapi form yang wajib diisi.');
                return;
            }

            // Show success message
            alert(`Terima kasih ${data.nama}! Pesanan Anda untuk ${data.jumlah} ${data.kue} telah diterima. Kami akan menghubungi Anda di ${data.email} untuk konfirmasi.`);

            // Reset form
            form.reset();
        });
    }

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Add some CSS for fade-in animation
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            animation: fadeIn 1s ease-in-out;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
});