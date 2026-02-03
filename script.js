function handleYes() {
    // Hide initial content and thinking response
    const initialContent = document.querySelector('.initial-content');
    const thinkingResponse = document.getElementById('thinkingResponse');
    
    if (initialContent) initialContent.style.display = 'none';
    if (thinkingResponse) thinkingResponse.classList.remove('active');
    
    // Show yes response
    document.getElementById('yesResponse').classList.add('active');
    
    // Create confetti
    createConfetti();
    
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleNo(event) {
    // Hide initial content
    document.querySelector('.initial-content').style.display = 'none';
    
    // Show thinking response
    document.getElementById('thinkingResponse').classList.add('active');
    
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#ff6b9d', '#c9184a', '#ffccd5', '#ffd700', '#ff1744', '#f50057'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confettiPiece = document.createElement('div');
            confettiPiece.className = 'confetti-piece';
            confettiPiece.style.left = Math.random() * 100 + '%';
            confettiPiece.style.background = colors[Math.floor(Math.random() * colors.length)];
            confettiPiece.style.animationDelay = Math.random() * 0.5 + 's';
            confettiPiece.style.width = (Math.random() * 8 + 5) + 'px';
            confettiPiece.style.height = (Math.random() * 8 + 5) + 'px';
            
            confettiContainer.appendChild(confettiPiece);
            
            setTimeout(() => {
                confettiPiece.remove();
            }, 3000);
        }, i * 30);
    }
}
