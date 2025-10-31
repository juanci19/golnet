document.addEventListener('DOMContentLoaded', function() {
    animateOnScroll();
    highlightTopTeams();
    addFixtureAnimations();
    animateTableRows();
    addPlayoffAnimations();
    animateFinalCard();
});

function animateOnScroll() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });
}

function highlightTopTeams() {
    const standingsBody = document.getElementById('standings-body');
    if (!standingsBody) return;
    
    const rows = standingsBody.querySelectorAll('tr');
    
    rows.forEach((row, index) => {
        row.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(139, 0, 255, 0.3)';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.background = '';
        });
        
        if (index === 0) {
            row.style.borderLeft = '4px solid gold';
        } else if (index === 1) {
            row.style.borderLeft = '4px solid silver';
        } else if (index === 2) {
            row.style.borderLeft = '4px solid #cd7f32';
        }
    });
}

function addFixtureAnimations() {
    const fixtureCards = document.querySelectorAll('.fixture-card');
    
    fixtureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
        
        card.addEventListener('click', function() {
            this.style.animation = 'pulse 0.5s ease';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    });
}

function animateTableRows() {
    const allRows = document.querySelectorAll('tbody tr');
    
    allRows.forEach((row, index) => {
        row.style.opacity = '0';
        row.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            row.style.transition = 'all 0.4s ease-out';
            row.style.opacity = '1';
            row.style.transform = 'translateX(0)';
        }, index * 50);
    });
}

function addPlayoffAnimations() {
    const playoffCards = document.querySelectorAll('.playoff-card');
    
    playoffCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150);
        
        card.addEventListener('click', function() {
            this.style.animation = 'pulse 0.6s ease';
            setTimeout(() => {
                this.style.animation = '';
            }, 600);
        });
    });
    
    const infoCard = document.querySelector('.info-card');
    if (infoCard) {
        infoCard.style.opacity = '0';
        infoCard.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            infoCard.style.transition = 'all 0.8s ease-out';
            infoCard.style.opacity = '1';
            infoCard.style.transform = 'scale(1)';
        }, 300);
    }
}

function animateFinalCard() {
    const finalCard = document.querySelector('.final-card');
    if (!finalCard) return;
    
    finalCard.style.opacity = '0';
    finalCard.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        finalCard.style.transition = 'all 1s ease-out';
        finalCard.style.opacity = '1';
        finalCard.style.transform = 'scale(1)';
    }, 400);
    
    finalCard.addEventListener('click', function() {
        this.style.animation = 'pulse 0.8s ease';
        setTimeout(() => {
            this.style.animation = '';
        }, 800);
    });
}

const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
`;
document.head.appendChild(style);
