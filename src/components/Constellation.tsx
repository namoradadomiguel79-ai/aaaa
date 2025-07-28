@@ .. @@
        // Only connect nearby stars
         if (distance < 35) {
           lines.push(
             <line
               key={`${friend1.id}-${friend2.id}`}
               x1={`${friend1.x}%`}
               y1={`${friend1.y}%`}
               x2={`${friend2.x}%`}
               y2={`${friend2.y}%`}
               stroke="url(#lineGradient)"
               strokeWidth="1.2"
               opacity="0.8"
               filter="url(#lineGlow)"
               className="animate-pulse"
             />
           );
         }
+        
+        // Special connection: Dirigindo to Prisma
+        if ((friend1.id === 'dirigindo' && friend2.id === 'prisma') || 
+            (friend1.id === 'prisma' && friend2.id === 'dirigindo')) {
+          lines.push(
+            <line
+              key={`${friend1.id}-${friend2.id}-special`}
+              x1={`${friend1.x}%`}
+              y1={`${friend1.y}%`}
+              x2={`${friend2.x}%`}
+              y2={`${friend2.y}%`}
+              stroke="url(#specialLineGradient)"
+              strokeWidth="2"
+              opacity="0.9"
+              filter="url(#lineGlow)"
+              className="animate-pulse"
+            />
+          );
+        }
       }
     }
     return lines;
@@ .. @@
             <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
               <stop offset="0%" stopColor="#f8d613" stopOpacity="0.9" />
               <stop offset="50%" stopColor="#0248c1" stopOpacity="0.8" />
               <stop offset="100%" stopColor="#f8d613" stopOpacity="0.9" />
             </linearGradient>
+            <linearGradient id="specialLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
+              <stop offset="0%" stopColor="#f8d613" stopOpacity="1" />
+              <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.9" />
+              <stop offset="100%" stopColor="#f8d613" stopOpacity="1" />
+            </linearGradient>
             <filter id="lineGlow">
               <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
               <feMerge> 
                 <feMergeNode in="coloredBlur"/>
                 <feMergeNode in="SourceGraphic"/>
               </feMerge>
             </filter>