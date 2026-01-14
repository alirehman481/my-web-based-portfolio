// Profile 3D tilt
const profile = document.querySelector(".profile");
document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 25;
    const y = (window.innerHeight / 2 - e.clientY) / 25;
    profile.style.transform = `rotateY(${x}deg) rotateX(${y}deg) translateZ(40px)`;
});

// Custom Cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
});

// Scroll section animation
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add("active");
    });
}, { threshold: 0.3 });
sections.forEach(section => observer.observe(section));

// Smooth section transition on nav click
const navBtns = document.querySelectorAll(".nav-btn");
navBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(btn.getAttribute("href"));
        window.scrollTo({
            top: target.offsetTop,
            behavior: "smooth"
        });
    });
});

// Cyberpunk Canvas Background
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const particleCount = 100;

for(let i=0; i<particleCount; i++){
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 2 + 1,
        color: ['#00f2ff','#ff00ff','#ff00c8'][Math.floor(Math.random()*3)]
    });
}

function animate(){
    ctx.fillStyle = "rgba(10,10,10,0.3)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    particles.forEach(p=>{
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if(p.x<0) p.x=canvas.width;
        if(p.x>canvas.width) p.x=0;
        if(p.y<0) p.y=canvas.height;
        if(p.y>canvas.height) p.y=0;
    });
    requestAnimationFrame(animate);
}
animate();

// Resize canvas
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

