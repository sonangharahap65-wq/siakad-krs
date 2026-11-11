// SIAKAD - modul KRS: pengambilan kelas
function ambilKelas(kelas) {
  return { ...kelas, terisi: kelas.terisi + 1 };
}

module.exports = { ambilKelas };
