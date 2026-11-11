const test = require("node:test");
const assert = require("node:assert");
const { ambilKelas } = require("./app");

test("ambil kelas menambah jumlah terisi 1", () => {
  const hasil = ambilKelas({ kode: "IF101", kapasitas: 40, terisi: 10 });
  assert.strictEqual(hasil.terisi, 11);
});
