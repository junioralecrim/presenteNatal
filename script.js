document.addEventListener('DOMContentLoaded', () => {
    
    // --- PARTE 1: A LÓGICA DO BOTÃO E TRANSIÇÃO ---
    const revealBtn = document.getElementById('reveal-btn');
    const introSection = document.getElementById('intro-section');
    const revealSection = document.getElementById('reveal-section');
    const flashOverlay = document.getElementById('flash-overlay');
    const bgMusic = document.getElementById('bg-music'); // Se tiver música

    revealBtn.addEventListener('click', () => {
        // Tenta tocar a música (se existir)
        if (bgMusic) {
            bgMusic.volume = 0.5; // Volume a 50%
            bgMusic.play().catch(e => console.log("Audio autoplay bloqueado"));
        }

        // Animação de saída
        introSection.classList.add('intro-exit');
        revealBtn.classList.remove('pulse-animation');

        // Flash de luz
        setTimeout(() => {
            flashOverlay.classList.add('flash-active');
        }, 400);

        // Troca de telas
        setTimeout(() => {
            introSection.style.display = 'none';
            introSection.classList.remove('intro-active');
            
            flashOverlay.classList.remove('flash-active');
            
            revealSection.classList.remove('hidden');
            revealSection.classList.add('reveal-entrance');
        }, 800);
    });

    // --- PARTE 2: GERADOR DE PARTÍCULAS (MÁGICA!) ---
    createSparkles();
});

function createSparkles() {
    const container = document.querySelector('.sparkles-container');
    const particleCount = 100; // QUER MAIS? Mude este número para 150 ou 200!

    for (let i = 0; i < particleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');

        // 1. Posição horizontal aleatória (0 a 100%)
        const randomLeft = Math.random() * 100;
        sparkle.style.left = randomLeft + '%';

        // 2. Tamanho aleatório (entre 2px e 7px)
        const randomSize = Math.random() * 5 + 2; 
        sparkle.style.width = randomSize + 'px';
        sparkle.style.height = randomSize + 'px';

        // 3. Velocidade de queda aleatória (entre 5s e 15s)
        const randomDuration = Math.random() * 10 + 5;
        sparkle.style.animation = `fall ${randomDuration}s linear infinite`;

        // 4. Atraso aleatório para não caírem todas juntas no começo
        const randomDelay = Math.random() * 15;
        sparkle.style.animationDelay = randomDelay + 's';
        
        // 5. Opacidade aleatória para dar profundidade
        sparkle.style.opacity = Math.random();

        container.appendChild(sparkle);
    }
}
