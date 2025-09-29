function drawText() {
  const canvas = document.getElementById("graffitiCanvas");
  const ctx = canvas.getContext("2d");
  const name = document.getElementById("nameInput").value || "Grafiti";

  // limpiar canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // lista de fuentes disponibles (deben estar declaradas en style.css)
  const fuentes = ["Vabioxe Graffiti", "DonGraffiti", "Urban Heroes", "GrafittiNewYear", "aAnotherTag", "Street Wars Demo", "Decipher_PERSONAL_USE_ONLY", "Hesorder", "Urban Calligraphy"];

  // escoger una fuente al azar
  const fuenteAleatoria = fuentes[Math.floor(Math.random() * fuentes.length)];

  // aplicar fuente
  ctx.font = "120px " + fuenteAleatoria;
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";

  // sombra
  ctx.shadowColor = "rgba(0,0,0,0.7)";
  ctx.shadowBlur = 15;

  // gradiente de color
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop("0", "#ff0055");
  gradient.addColorStop("1", "#00eaff");
  ctx.fillStyle = gradient;

  // texto principal
  ctx.fillText(name, canvas.width / 2, canvas.height / 2);

  // contorno blanco
  ctx.lineWidth = 8;
  ctx.strokeStyle = "#fff";
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

// generar QR con la URL de la página
window.onload = function () {
  const url = window.location.href;
  new QRCode(document.getElementById("qrcode"), {
    text: url,
    width: 200,
    height: 200,
  });
};
