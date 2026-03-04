export const scripts = () => {
  const screen = document.getElementById("screen");

  const pointSize = 10;

  let points = [];

  function cartesianToScreen({ x, y }) {
    return {
      x: ((x + 1) / 2) * 100,
      y: ((0 - y + 1) / 2) * 100,
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
      x: x,
      y: y * cos - z * sin,
      z: y * sin + z * cos,
    };
  }

  function rotateY({ x, y, z }, angle) {
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);

    return {
      x: x * cos + z * sin,
      y: y,
      z: -x * sin + z * cos,
    };
  }

  function createElement() {
    const el = document.createElement("p");
    el.innerText = "x";
    el.style.width = `${pointSize}px`;
    el.style.height = `${pointSize}px`;

    el.style.position = "absolute";

    screen.appendChild(el);
    elements.push(el);
  }

  const radius = 10;

  const qualityX = 20;
  const qualityY = 30;

  for (let i = 0; i < qualityX; i++) {
    const tSin = Math.sin((i / qualityX) * Math.PI);
    const tCos = Math.cos((i / qualityX) * Math.PI);

    for (let j = 0; j < qualityY; j++) {
      const pSin = Math.sin((j / qualityY) * (Math.PI * 2));
      const pCos = Math.cos((j / qualityY) * (Math.PI * 2));

      const x = radius * tSin * pCos;
      const y = radius * tSin * pSin;
      const z = radius * tCos;

      const el = document.createElement("p");
      el.innerText = "x";
      el.style.width = `${pointSize}px`;
      el.style.height = `${pointSize}px`;

      el.style.position = "absolute";

      screen.appendChild(el);

      points.push({ x, y, z, element: el });
    }
  }

  function animate(delta) {
    for (const point of points) {
      let position = { ...point };

      const angle = delta * 0.001;

      const rotatedX = rotateX(position, angle);
      let rotatedXY = rotateY(rotatedX, angle);
      rotatedXY.z += 25;

      const coords = cartesianToScreen(to2D(rotatedXY));

      point.element.style.left = `calc(${coords.x}% - ${pointSize / 2}px)`;
      point.element.style.top = `calc(${coords.y}% - ${pointSize / 2}px)`;
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
};
