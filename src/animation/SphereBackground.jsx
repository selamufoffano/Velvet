import { useRef, useEffect } from "react";

export const SphereBackground = ()=> {
  const screenRef = useRef(null);
  const pointsRef = useRef([]);

  useEffect(() => {
    const screen = screenRef.current;
    if (!screen) return;

    const pointSize = 6;
    const radius = 20;
    const qualityX = 20;
    const qualityY = 20;

    const points = [];

    function cartesianToScreen({ x, y }) {
      return {
        x: ((x + 1) / 2) * 150,
        y: ((0 - y + 1) / 2) * 150,
      };
    }

    function to2D({ x, y, z }) {
      return {
        x: x / z,
        y: y / z,
      };
    }

    function rotateX({ x, y, z }, angle) {
      const sin = Math.sin(angle);
      const cos = Math.cos(angle);

      return {
        x,
        y: y * cos - z * sin,
        z: y * sin + z * cos,
      };
    }

    function rotateY({ x, y, z }, angle) {
      const sin = Math.sin(angle);
      const cos = Math.cos(angle);

      return {
        x: x * cos + z * sin,
        y,
        z: -x * sin + z * cos,
      };
    }

    for (let i = 0; i < qualityX; i++) {
      const tSin = Math.sin((i / qualityX) * Math.PI);
      const tCos = Math.cos((i / qualityX) * Math.PI);

      for (let j = 0; j < qualityY; j++) {
        const pSin = Math.sin((j / qualityY) * Math.PI * 2);
        const pCos = Math.cos((j / qualityY) * Math.PI * 2);

        const x = radius * tSin * pCos;
        const y = radius * tSin * pSin;
        const z = radius * tCos;

        const el = document.createElement("div");
        el.style.width = `${pointSize}px`;
        el.style.height = `${pointSize}px`;
        el.style.background = "white";
        el.style.borderRadius = "50%";
        el.style.position = "absolute";
        el.style.opacity = "0.8";

        screen.appendChild(el);

        points.push({ x, y, z, element: el });
      }
    }

    pointsRef.current = points;

    let animationId;

    function animate(time) {
      for (const point of pointsRef.current) {
        let position = { x: point.x, y: point.y, z: point.z };

        const angle = time * 0.0005;

        const rotatedX = rotateX(position, angle);
        let rotatedXY = rotateY(rotatedX, angle);

        rotatedXY.z += 25;

        const coords = cartesianToScreen(to2D(rotatedXY));

        point.element.style.left = `calc(${coords.x}% - ${pointSize / 2}px)`;
        point.element.style.top = `calc(${coords.y}% - ${pointSize / 2}px)`;
      }

      animationId = requestAnimationFrame(animate);
    }

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      screen.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={screenRef}
      className="absolute inset-0 overflow-hidden"
    />
  );
}