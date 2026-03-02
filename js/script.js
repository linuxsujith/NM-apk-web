document.addEventListener('DOMContentLoaded', () => {

    /* =====================================================================
       1. Mobile Menu Toggle
       ===================================================================== */
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
    }

    /* =====================================================================
       2. Smooth Scrolling for Anchor Links
       ===================================================================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                // Offset for fixed navbar
                const navbarHeight = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* =====================================================================
       3. APK Download Logic (Auto-Download + Fallback)
       ===================================================================== */
    const apkLink = 'https://storage.appilix.com/uploads/app-apk-69a44784e6760-1772373892.apk';
    const downloadBtns = document.querySelectorAll('.download-apk-btn');

    downloadBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Programmatic anchor click
            const anchor = document.createElement('a');
            anchor.href = apkLink;
            anchor.download = 'newmo-app.apk';
            anchor.target = '_blank';
            document.body.appendChild(anchor);
            anchor.click();
            document.body.removeChild(anchor);

            // Ultimate fallback (forces redirect if normal download fails)
            setTimeout(() => {
                window.location.href = apkLink;
            }, 500);
        });
    });

    /* =====================================================================
       4. FAQ Accordion Logic
       ===================================================================== */
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Toggle active state
            question.classList.toggle('active');

            // Handle panel animation
            const answer = question.nextElementSibling;
            if (question.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = '0px';
            }

            // Close other items (optional, currently it works as multiple open)
            // faqQuestions.forEach(otherQuestion => {
            //     if (otherQuestion !== question && otherQuestion.classList.contains('active')) {
            //         otherQuestion.classList.remove('active');
            //         otherQuestion.nextElementSibling.style.maxHeight = '0px';
            //     }
            // });
        });
    });

    /* =====================================================================
       5. Dynamic Year in Footer
       ===================================================================== */
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});
