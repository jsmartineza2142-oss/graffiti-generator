function drawText() {
  const canvas = document.getElementById("graffitiCanvas");
  const ctx = canvas.getContext("2d");
  const name = document.getElementById("nameInput").value || "Grafiti";

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // fuentes disponibles
  const fuentes = ["VabioxeGraffiti", "DonGraffiti"];
  const fuenteAleatoria = fuentes[Math.floor(Math.random() * fuentes.length)];

  ctx.font = "120px " + fuenteAleatoria;
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";

  // sombra
  ctx.shadowColor = "rgba(0,0,0,0.7)";
  ctx.shadowBlur = 12;

  // 🎨 color sólido más legible
  const colores = ["#ff0055", "#00eaff", "#39ff14", "#ffcc00", "#ff6f00"];
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  ctx.fillStyle = colorAleatorio;

  // texto principal
  ctx.fillText(name, canvas.width / 2, canvas.height / 2);

  // borde blanco para contraste
  ctx.lineWidth = 6;
  ctx.strokeStyle = "#fff";
  ctx.strokeText(name, canvas.width / 2, canvas.height / 2);
}

function downloadImage() {
  const canvas = document.getElementById("graffitiCanvas");
  const link = document.createElement("a");
  link.download = "graffiti.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}

window.onload = function () {
  const url = window.location.href;
  new QRCode(document.getElementById("qrcode"), {
    text: url,
    width: 200,
    height: 200,
  });

  // botón generar
  document.getElementById("generateBtn").addEventListener("click", drawText);
  document.getElementById("downloadBtn").addEventListener("click", downloadImage);

  drawText();
};
