import React, { useRef, useState } from "react";


const JoystickPad = () => {
  const padRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = () => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!padRef.current) return;
      const rect = padRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      let offsetX = e.clientX - centerX;
      let offsetY = e.clientY - centerY;

      const maxRadius = rect.width / 2 - 16; 
      const distance = Math.sqrt(offsetX ** 2 + offsetY ** 2);

      if (distance > maxRadius) {
        const angle = Math.atan2(offsetY, offsetX);
        offsetX = Math.cos(angle) * maxRadius;
        offsetY = Math.sin(angle) * maxRadius;
      }

      setPosition({ x: offsetX, y: offsetY });
    };

    const handleMouseUp = () => {
      setPosition({ x: 0, y: 0 }); 
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
      <div
        ref={padRef}
        onMouseDown={handleMouseDown}
        className="w-20 h-20 md:w-32 md:h-32 bg-transparent border border-gray-500 rounded-full relative"
      >
        <div
          className="absolute w-6 h-6 md:w-8 md:h-8 bg-white rounded-full shadow-md"
          style={{
            left: "50%",
            top: "50%",
            transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px)`,
          }}
        />
      </div>
  );
};

export default JoystickPad;
