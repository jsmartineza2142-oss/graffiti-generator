function drawText() {
  const canvas = document.getElementById("graffitiCanvas");
  const ctx = canvas.getContext("2d");
  const name = document.getElementById("nameInput").value || "Grafiti";

  // limpiar canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // lista de fuentes (declaradas en style.css con @font-face)
  const fuentes = [
    "VabioxeGraffiti",
    "DonGraffiti",
    "UrbanHeroes",
    "GrafittiNewYear",
    "StreetWarsDemo",
    "Decipher",
    "Hesorder",
    "UrbanCalligraphy"
  ];

  // escoger una fuente al azar
  const fuenteAleatoria = fuentes[Math.floor(Math.random() * fuentes.length)];

  // aplicar fuente
  ctx.font = "120px " + fuenteAleatoria;
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";

  // sombra sutil
  ctx.shadowColor = "rgba(0,0,0,0.6)";
  ctx.shadowBlur = 10;

  // colores sólidos (sin gloss)
  const colores = ["#ff0055", "#00eaff", "#39ff14", "#ffea00", "#ff7f00"];
  ctx.fillStyle = colores[Math.floor(Math.random() * colores.length)];

  // texto principal
  ctx.fillText(name, canvas.width / 2, canvas.height / 2);

  // contorno
  ctx.lineWidth = 6;
  ctx.strokeStyle = "#000"; // borde negro
  ctx.strokeText(name, canvas.width / 2, canvas.height / 2);
}

// descargar imagen en PNG
function downloadImage() {
  const canvas = document.getElementById("graffitiCanvas");
  const link = document.createElement("a");
  link.download = "graffiti.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}

// iniciar eventos
window.onload = function () {
  // botón generar
  document.getElementById("generateBtn").addEventListener("click", drawText);

  // botón descargar
  document.getElementById("downloadBtn").addEventListener("click", downloadImage);

  // generar QR
  const url = window.location.href;
  new QRCode(document.getElementById("qrcode"), {
    text: url,
    width: 200,
    height: 200,
  });
};
