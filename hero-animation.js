/**
 * Hero Section 3D Animation
 * Creates a floating parametric wave mesh with forest green and teal accents
 */

class HeroAnimation {
    constructor() {
        this.canvas = document.getElementById('hero-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.time = 0;
        this.particles = [];
        this.gridSize = 30;
        this.mouseX = 0;
        this.mouseY = 0;

        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => this.handleMouseMove(e));

        // Create particle grid for 3D mesh effect
        this.createParticleGrid();

        // Start animation loop
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.centerX = this.canvas.width / 2;
        this.centerY = this.canvas.height / 2;
    }

    handleMouseMove(e) {
        this.mouseX = (e.clientX - this.centerX) / this.centerX;
        this.mouseY = (e.clientY - this.centerY) / this.centerY;
    }

    createParticleGrid() {
        this.particles = [];
        const rows = 25;
        const cols = 25;
        const spacing = this.gridSize;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                this.particles.push({
                    baseX: (j - cols / 2) * spacing,
                    baseY: (i - rows / 2) * spacing,
                    baseZ: 0,
                    x: 0,
                    y: 0,
                    size: 1,
                    row: i,
                    col: j
                });
            }
        }
    }

    // Parametric wave function for organic movement
    calculateWave(x, y, time) {
        const frequency = 0.003;
        const amplitude = 80;
        const wave1 = Math.sin(x * frequency + time * 0.5) * amplitude;
        const wave2 = Math.cos(y * frequency + time * 0.7) * amplitude * 0.8;
        const wave3 = Math.sin((x + y) * frequency * 0.5 + time * 0.3) * amplitude * 0.5;
        return wave1 + wave2 + wave3;
    }

    // Project 3D coordinates to 2D screen space
    project3D(x, y, z, distance = 600) {
        const scale = distance / (distance + z);
        return {
            x: this.centerX + x * scale + this.mouseX * 30,
            y: this.centerY + y * scale + this.mouseY * 30,
            scale: scale
        };
    }

    // Color interpolation for depth and wave position
    getParticleColor(z, waveValue) {
        // Forest green: #1F6F54 (31, 111, 84)
        // Teal: #2DD4BF (45, 212, 191)

        const normalizedZ = (z + 200) / 400; // Normalize depth
        const normalizedWave = (waveValue + 150) / 300; // Normalize wave

        const r = Math.floor(31 + (45 - 31) * normalizedWave);
        const g = Math.floor(111 + (212 - 111) * normalizedWave);
        const b = Math.floor(84 + (191 - 84) * normalizedWave);
        const a = 0.3 + normalizedZ * 0.5;

        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }

    drawMesh() {
        const rows = 25;
        const cols = 25;

        // Update and draw connections first (lines)
        this.ctx.strokeStyle = 'rgba(31, 111, 84, 0.15)';
        this.ctx.lineWidth = 1;

        this.particles.forEach((particle, index) => {
            // Calculate wave position
            const waveZ = this.calculateWave(
                particle.baseX,
                particle.baseY,
                this.time
            );

            particle.z = waveZ;

            // Project to 2D
            const projected = this.project3D(
                particle.baseX,
                particle.baseY,
                particle.z
            );

            particle.x = projected.x;
            particle.y = projected.y;
            particle.scale = projected.scale;

            // Draw connections to adjacent particles
            const row = particle.row;
            const col = particle.col;

            // Connect to right neighbor
            if (col < cols - 1) {
                const rightIndex = index + 1;
                const right = this.particles[rightIndex];

                this.ctx.beginPath();
                this.ctx.moveTo(particle.x, particle.y);
                this.ctx.lineTo(right.x, right.y);
                this.ctx.stroke();
            }

            // Connect to bottom neighbor
            if (row < rows - 1) {
                const bottomIndex = index + cols;
                const bottom = this.particles[bottomIndex];

                this.ctx.beginPath();
                this.ctx.moveTo(particle.x, particle.y);
                this.ctx.lineTo(bottom.x, bottom.y);
                this.ctx.stroke();
            }
        });

        // Draw particles (dots)
        this.particles.forEach(particle => {
            const color = this.getParticleColor(particle.z, particle.z);
            const size = 1.5 * particle.scale;

            this.ctx.fillStyle = color;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
            this.ctx.fill();

            // Add glow effect for particles near peaks
            if (particle.z > 50) {
                const glowSize = size * 4;
                const gradient = this.ctx.createRadialGradient(
                    particle.x, particle.y, 0,
                    particle.x, particle.y, glowSize
                );
                gradient.addColorStop(0, 'rgba(45, 212, 191, 0.3)');
                gradient.addColorStop(1, 'rgba(45, 212, 191, 0)');

                this.ctx.fillStyle = gradient;
                this.ctx.beginPath();
                this.ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
                this.ctx.fill();
            }
        });
    }

    // Draw ambient light rays
    drawAtmosphericEffects() {
        // Rotating light rays
        const numRays = 3;
        for (let i = 0; i < numRays; i++) {
            const angle = (this.time * 0.1 + (i * Math.PI * 2) / numRays);
            const x1 = this.centerX + Math.cos(angle) * 200;
            const y1 = this.centerY + Math.sin(angle) * 200;
            const x2 = this.centerX + Math.cos(angle) * 600;
            const y2 = this.centerY + Math.sin(angle) * 600;

            const gradient = this.ctx.createLinearGradient(x1, y1, x2, y2);
            gradient.addColorStop(0, 'rgba(31, 111, 84, 0.15)');
            gradient.addColorStop(0.5, 'rgba(31, 111, 84, 0.05)');
            gradient.addColorStop(1, 'rgba(31, 111, 84, 0)');

            this.ctx.strokeStyle = gradient;
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(x1, y1);
            this.ctx.lineTo(x2, y2);
            this.ctx.stroke();
        }
    }

    animate() {
        // Clear canvas with slight trail effect for motion blur
        this.ctx.fillStyle = 'rgba(15, 17, 21, 0.3)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw atmospheric effects
        this.drawAtmosphericEffects();

        // Draw 3D mesh
        this.drawMesh();

        // Increment time
        this.time += 0.02;

        // Continue animation loop
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize animation when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new HeroAnimation();
    });
} else {
    new HeroAnimation();
}
