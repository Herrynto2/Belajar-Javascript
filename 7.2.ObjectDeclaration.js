function daftarmhs(nama, kelas, jurusan, NIM) {
    var mhs = {};
    mhs.nama = nama;
    mhs.kelas = kelas;
    mhs.jurusan = jurusan;
    mhs.NIM = NIM;
    return mhs;
}
var mhs1 = daftarmhs("Heri", "6CC", "Tekkom", "061630700560");
console.log(mhs1);