import { useEffect, useState } from "react";

const MouseTrackerComponent: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", updateMouse);
    return () => {
      document.removeEventListener("mousemove", updateMouse);
    };
  }, []);

  return (
    <p>
      X: {position.x}, Y: {position.y}
    </p>
  );
};

export default MouseTrackerComponent;
