:root {
    --bg-color: #FBF4ED; /* Nude creme */
    --bg-darker: #f3e8dc;
    --text-color: #6D5E52; /* Taupe */
    --accent-gold: #d4af37; /* Dourado metálico mais rico */
    --accent-gold-bright: #f9e5b9; /* Dourado claro luz */
    --white: #ffffff;
    --card-shadow: 0 20px 40px rgba(109, 94, 82, 0.15);

    --font-title: 'Playfair Display', serif;
    --font-body: 'Montserrat', sans-serif;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    background: radial-gradient(circle at center, var(--bg-color), var(--bg-darker));
    color: var(--text-color);
    font-family: var(--font-body);
    min-height: 100vh; /* Mudado para min-height para evitar cortes em telas pequenas */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    position: relative;
}

/* --- EFEITO DE FUNDO: CHUVA DOURADA AUTOMÁTICA --- */
.sparkles-container {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    pointer-events: none;
    z-index: -1;
    overflow: hidden;
}

.sparkle {
    position: absolute;
    background-color: var(--accent-gold);
    border-radius: 50%;
    box-shadow: 0 0 10px var(--accent-gold-bright); /* Bastante brilho */
    top: -10px; /* Começa fora da tela */
}

/* A animação de cair */
@keyframes fall {
    0% { transform: translateY(-10vh) translateX(0); opacity: 0; }
    10% { opacity: 1; } /* Aparece rápido */
    100% { transform: translateY(110vh) translateX(20px); opacity: 0; } /* Cai até o fim */
}

/* --- O CONTAINER PRINCIPAL (CARTÃO) --- */
.container {
    padding: 2rem;
    max-width: 550px;
    width: 95%;
    z-index: 10;
    perspective: 1000px; /* Para efeitos 3D */
}

.content-card {
    background: rgba(255, 255, 255, 0.95);
    padding: 3rem 2rem;
    border-radius: 25px;
    box-shadow: var(--card-shadow);
    text-align: center;
    border: 2px solid rgba(212, 175, 55, 0.2); /* Borda dourada sutil */
    backdrop-filter: blur(5px);
    transition: all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.card-ornament {
    font-size: 2rem; margin-bottom: 1rem; display: block;
}

/* Tipografia */
.main-title, .reveal-title {
    font-family: var(--font-title);
    font-size: 2.8rem;
    background: linear-gradient(45deg, var(--text-color), var(--accent-gold));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1.5rem;
    font-weight: 700;
}
.subtitle, .reveal-text {
    font-size: 1.15rem; line-height: 1.7; color: var(--text-color); margin-bottom: 2.5rem;
}

/* --- O BOTÃO MÁGICO --- */
.button-wrapper { position: relative; display: inline-block; }

.gold-button {
    background: linear-gradient(135deg, var(--accent-gold), #b89b72);
    border: none;
    padding: 18px 45px;
    color: var(--white);
    font-family: var(--font-body);
    font-size: 1.2rem; font-weight: 600;
    text-transform: uppercase; letter-spacing: 1px;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 0 10px 25px rgba(212, 175, 55, 0.4);
    transition: all 0.3s ease;
    position: relative; overflow: hidden;
    display: flex; align-items: center; justify-content: center; gap: 10px;
}

/* Brilho passando pelo botão */
.gold-button::after {
    content: '';
    position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
    background: linear-gradient(to right, transparent, rgba(255,255,255,0.6), transparent);
    transform: rotate(45deg);
    animation: glowing 3s infinite cubic-bezier(0.4, 0, 0.2, 1);
}
@keyframes glowing {
    0% { left: -100%; } 100% { left: 100%; }
}

.pulse-animation { animation: pulseBtn 2s infinite; }
@keyframes pulseBtn {
    0% { box-shadow: 0 10px 25px rgba(212, 175, 55, 0.4); transform: scale(1); }
    50% { box-shadow: 0 15px 35px rgba(212, 175, 55, 0.6); transform: scale(1.03); }
    100% { box-shadow: 0 10px 25px rgba(212, 175, 55, 0.4); transform: scale(1); }
}

/* --- TRANSIÇÕES E REVELAÇÃO --- */

/* Overlay do Flash de Luz */
#flash-overlay {
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: var(--accent-gold-bright);
    opacity: 0; pointer-events: none; z-index: 999;
    transition: opacity 0.6s ease-out;
}
.flash-active { opacity: 0.8 !important; }

.hidden { display: none; opacity: 0; }

/* Animação de saída do intro */
.intro-exit {
    animation: fadeScaleOut 0.8s forwards cubic-bezier(0.6, -0.28, 0.735, 0.045);
}
@keyframes fadeScaleOut {
    to { opacity: 0; transform: scale(0.8) translateY(-50px); }
}

/* Animação de entrada do presente (O "Pulo") */
.reveal-entrance {
    display: block !important;
    animation: bounceInUp 1s forwards cubic-bezier(0.215, 0.610, 0.355, 1.000);
}
@keyframes bounceInUp {
    0% { opacity: 0; transform: scale(0.3) translateY(100px); }
    60% { opacity: 1; transform: scale(1.05) translateY(-20px); }
    100% { opacity: 1; transform: scale(1) translateY(0); }
}

/* A moldura da imagem do presente */
.image-frame-magical {
    margin: 2rem auto;
    border-radius: 20px;
    padding: 15px;
    background: var(--white);
    box-shadow: 0 15px 35px rgba(109, 94, 82, 0.2);
    position: relative;
    border: 3px solid var(--accent-gold-bright);
}
.gift-image { width: 100%; border-radius: 15px; display: block; position: relative; z-index: 2;}
/* Brilho atrás da imagem */
.glow-effect {
    position: absolute; top: 50%; left: 50%;
    width: 90%; height: 90%;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle, var(--accent-gold-bright) 0%, transparent 70%);
    filter: blur(30px); opacity: 0.6; z-index: 1;
    animation: pulseGlow 4s infinite alternate;
}
@keyframes pulseGlow { 0% { opacity: 0.4; } 100% { opacity: 0.7; scale: 1.1; } }

/* Footer e Links */
.product-name { font-family: var(--font-title); font-size: 1.5rem; margin: 1.5rem 0; color: var(--accent-gold); }
.footer-note { font-family: var(--font-title); font-style: italic; color: var(--text-color); font-size: 0.9rem; }
.insta-link { display: inline-block; margin-top: 25px; color: var(--accent-gold); text-decoration: none; border-bottom: 1px dotted var(--accent-gold); transition: all 0.3s; }
.insta-link:hover { letter-spacing: 1px; border-bottom-style: solid; }

/* Responsivo */
@media (max-width: 768px) {
    .main-title, .reveal-title { font-size: 2rem; }
    .content-card { padding: 2rem 1.5rem; }
    .gold-button { padding: 15px 35px; font-size: 1rem; width: 100%; }
}
