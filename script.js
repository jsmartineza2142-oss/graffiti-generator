function drawText() {
  const canvas = document.getElementById("graffitiCanvas");
  const ctx = canvas.getContext("2d");
  const name = document.getElementById("nameInput").value || "Grafiti";

  // limpiar
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // lista de fuentes(declaradas en style.css con @font-face)
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

  // escoger una al azar
  const fuenteAleatoria = fuentes[Math.floor(Math.random() * fuentes.length)];

  // aplicar la fuente
  ctx.font = "120px " + fuenteAleatoria;
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";

  // sombra
  ctx.shadowColor = "rgba(0,0,0,0.7)";
  ctx.shadowBlur = 15;

  // relleno con gradiente
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop("0", "#ff0055");
  gradient.addColorStop("1", "#00eaff");
  ctx.fillStyle = gradient;

  // texto principal
  ctx.fillText(name, canvas.width / 2, canvas.height / 2);

  // contorno
  ctx.lineWidth = 8;
  ctx.strokeStyle = "#fff";
  ctx.strokeText(name, canvas.width / 2, canvas.height / 2);
}
