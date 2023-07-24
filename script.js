document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("squareContainer");
  const numberOfSquares = 800;

  for (let i = 0; i < numberOfSquares; i++) {
    const square = document.createElement("div");
    square.className = "square";
    container.appendChild(square);
  }
});
