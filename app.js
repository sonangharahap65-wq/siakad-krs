// SIAKAD - modul KRS: pengambilan kelas dengan pemeriksaan kuota
function ambilKelas(kelas) {
  if (kelas.terisi >= kelas.kapasitas) {
    throw new Error("Kelas penuh");
  }
  return { ...kelas, terisi: kelas.terisi + 1 };
}

module.exports = { ambilKelas };
