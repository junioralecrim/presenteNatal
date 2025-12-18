document.addEventListener('DOMContentLoaded', () => {
    const revealBtn = document.getElementById('reveal-btn');
    const introSection = document.getElementById('intro-section');
    const revealSection = document.getElementById('reveal-section');
    const flashOverlay = document.getElementById('flash-overlay');
    
    // Opcional: Se você adicionar música
    // const bgMusic = document.getElementById('bg-music');

    revealBtn.addEventListener('click', () => {
        // Tenta tocar a música se ela existir (navegadores podem bloquear na primeira vez)
        // if (bgMusic) bgMusic.play().catch(e => console.log("Autoplay bloqueado"));

        // 1. Inicia a animação de saída do cartão de intro
        introSection.classList.add('intro-exit');
        revealBtn.classList.remove('pulse-animation'); // Para o botão de pulsar

        // 2. Dispara o flash de luz no momento certo
        setTimeout(() => {
            flashOverlay.classList.add('flash-active');
        }, 400);

        // 3. Troca as seções e inicia a entrada mágica
        setTimeout(() => {
            introSection.style.display = 'none';
            introSection.classList.remove('intro-active');
            
            // Remove o flash
            flashOverlay.classList.remove('flash-active');
            
            // Faz o presente "pular" na tela
            revealSection.classList.remove('hidden');
            revealSection.classList.add('reveal-entrance');

        }, 800); // Sincronizado com o tempo da animação CSS
    });
});