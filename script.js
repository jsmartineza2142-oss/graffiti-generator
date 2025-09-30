function drawText() {
  const canvas = document.getElementById("graffitiCanvas");
  const ctx = canvas.getContext("2d");
  const name = document.getElementById("nameInput").value || "Grafiti";

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // solo 2 fuentes para probar
  const fuentes = ["VabioxeGraffiti", "DonGraffiti"];
  const fuenteAleatoria = fuentes[Math.floor(Math.random() * fuentes.length)];

  ctx.font = "120px " + fuenteAleatoria;
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";

  ctx.shadowColor = "rgba(0,0,0,0.7)";
  ctx.shadowBlur = 15;

  const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop("0", "#ff0055");
  gradient.addColorStop("1", "#00eaff");
  ctx.fillStyle = gradient;

  ctx.fillText(name, canvas.width / 2, canvas.height / 2);

  ctx.lineWidth = 8;
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

  document.getElementById("nameInput").addEventListener("input", drawText);
  document.getElementById("downloadBtn").addEventListener("click", downloadImage);

  drawText();
};
