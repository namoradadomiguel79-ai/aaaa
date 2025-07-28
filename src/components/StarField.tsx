@@ .. @@
    const createStars = () => {
      stars.length = 0;
-      const numStars = Math.floor((canvas.width * canvas.height) / 8000);
+      const numStars = Math.floor((canvas.width * canvas.height) / 4000);
       
       for (let i = 0; i < numStars; i++) {
         stars.push({
           x: Math.random() * canvas.width,
           y: Math.random() * canvas.height,
-          size: Math.random() * 2 + 0.5,
-          opacity: Math.random() * 0.8 + 0.2,
-          twinkleSpeed: Math.random() * 0.02 + 0.005
+          size: Math.random() * 1.5 + 0.3,
+          opacity: Math.random() * 0.9 + 0.1,
+          twinkleSpeed: Math.random() * 0.015 + 0.003
         });
       }
     };
@@ .. @@
        
         ctx.beginPath();
         ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
-        ctx.fillStyle = `rgba(248, 214, 19, ${star.opacity})`;
+        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.8})`;
+        ctx.fill();
+        
+        // Add occasional golden stars
+        if (Math.random() < 0.1) {
+          ctx.fillStyle = `rgba(248, 214, 19, ${star.opacity * 0.6})`;
+        }
         ctx.fill();
       });
 
@@ .. @@
   return (
     <canvas
       ref={canvasRef}
-      className={`fixed inset-0 pointer-events-none ${className}`}
+      className={`absolute inset-0 pointer-events-none ${className}`}
       style={{ zIndex: -1 }}
     />
   );
 };