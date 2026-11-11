const test = require("node:test");
const assert = require("node:assert");
const { ambilKelas } = require("./app");

test("kelas masih ada kursi: terisi bertambah 1", () => {
  const hasil = ambilKelas({ kode: "IF101", kapasitas: 40, terisi: 39 });
  assert.strictEqual(hasil.terisi, 40);
});

test("kelas penuh (40/40): ditolak", () => {
  assert.throws(
    () => ambilKelas({ kode: "IF101", kapasitas: 40, terisi: 40 }),
    /Kelas penuh/
  );
});
