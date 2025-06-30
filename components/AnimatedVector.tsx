// "use client";

// import { useEffect, useRef } from "react";

// const AnimatedVector: React.FC = () => {
//     const canvasRef = useRef<HTMLCanvasElement>(null);

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         if (!canvas) return;

//         const ctx = canvas.getContext("2d");
//         if (!ctx) return;

//         const radius = canvas.width / 2;
//         let angle = 0;

//         const draw = () => {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);

//             const x0 = radius + Math.cos(angle) * radius;
//             const y0 = radius + Math.sin(angle) * radius;
//             const x1 = radius - Math.cos(angle) * radius;
//             const y1 = radius - Math.sin(angle) * radius;

//             const gradient = ctx.createLinearGradient(x0, y0, x1, y1);
//             gradient.addColorStop(0.3, "#8DECFF");
//             gradient.addColorStop(0.6, "#FDB67F");
//             gradient.addColorStop(1, "#faa9df");

//             ctx.fillStyle = gradient;
//             ctx.beginPath();
//             ctx.arc(radius, radius, radius, 0, Math.PI * 2);
//             ctx.fill();

//             angle += 0.01;
//             requestAnimationFrame(draw);
//         };

//         draw();
//     }, []);

//     return (
//         <div className="flex items-center bg-white justify-center">
//             <canvas
//                 ref={canvasRef}
//                 width={300}
//                 height={300}
//                 className="rounded-full filter blur-md drop-shadow-xl"
//             />
//         </div>
//     );
// };

// export default AnimatedVector;

'use client'
import React from 'react'

const AnimatedVector = () => {
  return (
    <div className='parent flex justify-center items-center w-full backdrop-blur-[171px] bg-white'>
  <div className='gradient absolute'></div>
</div>
  )
}

export default AnimatedVector
