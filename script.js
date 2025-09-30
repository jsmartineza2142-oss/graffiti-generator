function drawText() {
  const canvas = document.getElementById("graffitiCanvas");
  const ctx = canvas.getContext("2d");
  const name = document.getElementById("nameInput").value || "Grafiti";

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const fuentes = [
    "VabioxeGraffiti", 
    "DonGraffiti",
    "UrbanHeroes",
    "GrafittiNewYear",
    "StreetWarsDemo", 
    "Decipher",
    "Hesorder",
    "UrbanCalligraphy",
  ];

  const fuenteAleatoria = fuentes[Math.floor(Math.random() * fuentes.length)];

  ctx.font = "120px " + fuenteAleatoria;
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";

  // sombra simple
  ctx.shadowColor = "rgba(0,0,0,0.8)";
  ctx.shadowBlur = 8;

  // color sólido (puedes cambiarlo si quieres)
  ctx.fillStyle = "#ff4d4d"; // rojo vivo
  ctx.fillText(name, canvas.width / 2, canvas.height / 2);

  // contorno negro
  ctx.lineWidth = 6;
  ctx.strokeStyle = "#000";
  ctx.strokeText(name, canvas.width / 2, canvas.height / 2);
}

// conectar el botón
window.onload = function () {
  document.getElementById("generateBtn").addEventListener("click", drawText);

  // generar QR de la página
  const url = window.location.href;
  new QRCode(document.getElementById("qrcode"), {
    text: url,
    width: 200,
    height: 200,
  });
};

// descargar imagen
function downloadImage() {
  const canvas = document.getElementById("graffitiCanvas");
  const link = document.createElement("a");
  link.download = "graffiti.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}
