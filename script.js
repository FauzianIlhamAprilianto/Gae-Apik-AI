
//HALAMAN INDEX

const navbar = document.getElementById('mainNavbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

//HALAMAN HISTORY

const tabButtons = document.querySelectorAll('.tab-btn');
const historyCards = document.querySelectorAll('.history-card');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Set active button
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        historyCards.forEach(card => {
            if(filter === 'all') {
                card.style.display = 'flex';
            } else {
                if(card.classList.contains(filter)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    });
});
