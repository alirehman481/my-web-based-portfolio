/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Orbitron', sans-serif;
    background: #0a0a0a;
    color: #fff;
    overflow-x: hidden;
    scroll-behavior: smooth;
    cursor: none; /* hide default cursor */
}

/* Custom Cursor */
.cursor {
    position: fixed;
    top: 0;
    left: 0;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid #00f2ff;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: transform 0.1s ease, background 0.2s ease;
}

/* Navigation */
nav {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(10,10,10,0.85);
    z-index: 10;
    backdrop-filter: blur(10px);
}
nav ul {
    display: flex;
    justify-content: center;
    list-style: none;
}
nav ul li {
    margin: 0 15px;
}
nav ul li a {
    color: #00f2ff;
    text-decoration: none;
    font-weight: bold;
    padding: 15px;
    display: block;
    position: relative;
}
nav ul li a::after {
    content: '';
    position: absolute;
    left: 0; bottom: 0;
    width: 0;
    height: 2px;
    background: #00f2ff;
    transition: 0.3s;
}
nav ul li a:hover::after {
    width: 100%;
}

/* Canvas Background */
#bgCanvas {
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:-1;
}

/* Hero Section */
.hero {
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    perspective: 1000px;
    overflow: hidden;
}
.hero-content h1 {
    font-size: 3rem;
    text-shadow: 0 0 10px #00f2ff, 0 0 20px #ff00ff;
}
.hero-content span { color: #ff00ff; }
.hero-content p { margin-top: 10px; font-size: 1.2rem; opacity: 0.8; }
.hero-content .btn {
    display: inline-block;
    margin-top: 20px;
    padding: 12px 25px;
    border-radius: 10px;
    border: none;
    background: #00f2ff;
    color: #000;
    font-weight: bold;
    text-decoration: none;
    transition: 0.3s;
}
.hero-content .btn:hover {
    background: #ff00ff;
    color: #fff;
    box-shadow: 0 0 20px #ff00ff, 0 0 40px #00f2ff;
}

.profile {
    width: 280px;
    height: 350px;
    transform-style: preserve-3d;
}
.profile img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 30px 60px rgba(0,0,0,0.7);
    transition: transform 0.2s ease, box-shadow 0.3s;
}

/* Sections */
.section {
    min-height: 100vh;
    padding: 100px 10%;
    text-align: center;
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 1s ease, transform 1s ease;
}
.section.active {
    opacity: 1;
    transform: translateY(0);
}
.section h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #00f2ff;
    text-shadow: 0 0 10px #00f2ff;
}
.section p {
    font-size: 1.1rem;
    opacity: 0.8;
}

/* Projects Logos */
.project-logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
    margin-top: 30px;
}
.logo-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s, filter 0.3s;
}
.logo-item img {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
    filter: drop-shadow(0 5px 20px #00f2ff);
}
.logo-item:hover {
    transform: translateY(-10px) scale(1.1);
    filter: drop-shadow(0 0 30px #ff00ff);
}

/* Skills Grid */
.skills-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
}
.skill {
    padding: 15px 25px;
    background: rgba(255,255,255,0.05);
    border-radius: 15px;
    font-weight: bold;
    transition: 0.3s;
    box-shadow: 0 0 10px #00f2ff inset;
}
.skill:hover {
    background: rgba(255,0,255,0.15);
    box-shadow: 0 0 20px #ff00ff, 0 0 40px #00f2ff;
}

/* Contact Form */
form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 400px;
    margin: 0 auto;
}
form input, form textarea {
    padding: 12px;
    border-radius: 10px;
    border: none;
    outline: none;
    background: rgba(255,255,255,0.05);
    color: white;
}
form input::placeholder,
form textarea::placeholder { color: rgba(255,255,255,0.5); }
form button {
    padding: 12px;
    border-radius: 10px;
    border: none;
    background: #00f2ff;
    color: black;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
}
form button:hover {
    background: #ff00ff;
    color: #fff;
    box-shadow: 0 0 20px #ff00ff, 0 0 40px #00f2ff;
}

/* ============================= */
/* RESPONSIVE FIX (Same UI Scale) */
/* ============================= */

/* Universal scaling */
html {
    font-size: clamp(14px, 1vw, 16px);
}

/* Hero responsiveness */
.hero {
    flex-wrap: wrap;
    gap: 40px;
    text-align: center;
}

.hero-content {
    max-width: 600px;
}

/* Profile image scaling */
.profile {
    width: clamp(220px, 30vw, 280px);
    height: clamp(280px, 40vw, 350px);
}

/* Sections padding scale */
.section {
    padding: clamp(70px, 10vw, 100px) clamp(5%, 8vw, 10%);
}

/* Navigation scaling */
nav ul li a {
    font-size: clamp(0.85rem, 1vw, 1rem);
    padding: 12px;
}

/* Project logos scaling */
.logo-item img {
    width: clamp(60px, 8vw, 80px);
    height: clamp(60px, 8vw, 80px);
}

/* Skills scaling */
.skill {
    font-size: clamp(0.85rem, 1vw, 1rem);
}

/* Contact form width fix */
form {
    width: 100%;
    padding: 0 10px;
}

/* ============================= */
/* MOBILE OPTIMIZATION */
/* ============================= */
@media (max-width: 768px) {

    nav ul {
        flex-wrap: wrap;
    }

    .hero {
        height: auto;
        padding-top: 120px;
    }

    .hero-content h1 {
        font-size: clamp(2rem, 6vw, 3rem);
    }

    .hero-content p {
        font-size: 1rem;
    }

    .project-logos {
        gap: 20px;
    }

    .skills-grid {
        gap: 15px;
    }
}

/* ============================= */
/* SMALL PHONES */
/* ============================= */
@media (max-width: 480px) {

    html {
        font-size: 14px;
    }

    .hero-content h1 {
        font-size: 1.8rem;
    }

    nav ul li {
        margin: 0 8px;
    }
}

