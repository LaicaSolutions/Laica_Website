import { useEffect, useRef } from 'react';

const StarryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Star properties
    class Star {
      constructor(x, y, radius, opacity, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.opacity = opacity;
        this.speed = speed;
        this.twinkleSpeed = Math.random() * 0.02 + 0.003;
        this.twinkleDirection = Math.random() > 0.5 ? 1 : -1;
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
      
      update() {
        // Twinkle effect
        this.opacity += this.twinkleSpeed * this.twinkleDirection;
        
        if (this.opacity > 1) {
          this.opacity = 1;
          this.twinkleDirection = -1;
        } else if (this.opacity < 0.1) {
          this.opacity = 0.1;
          this.twinkleDirection = 1;
        }
        
        // Subtle movement
        this.y += this.speed;
        
        // Reset position when it goes off screen
        if (this.y > canvas.height) {
          this.y = 0;
        }
        
        this.draw();
      }
    }
    
    // Create stars
    const stars = [];
    const numberOfStars = Math.min(150, Math.floor(window.innerWidth * window.innerHeight / 5000));
    
    for (let i = 0; i < numberOfStars; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 2;
      const opacity = Math.random() * 0.8 + 0.2;
      const speed = Math.random() * 0.05;
      
      stars.push(new Star(x, y, radius, opacity, speed));
    }
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        star.update();
      });
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
};

export default StarryBackground;