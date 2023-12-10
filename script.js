function bukaYoutube() {
  window.location.href = "https://www.youtube.com/watch?v=dtx8CgjRmqE";
}

function tampilanJam() {
  const sekarang = new Date();
  const hari = sekarang.toLocaleDateString("id-ID", { weekday: "long" });
  const tanggal = sekarang.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const jam = sekarang.toLocaleTimeString("id-ID", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  const elemenTampilan = document.getElementById("tanggal-hari-jam-live");
  elemenTampilan.innerText = `Hari ini ${hari}, ${tanggal}, ${jam}`;
}
setInterval(tampilanJam, 1000);
