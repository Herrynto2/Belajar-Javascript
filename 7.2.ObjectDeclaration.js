//Latihan1
function daftarmhs(nama, kelas, jurusan, NIM) {
    var mhs = {};
    mhs.nama = nama;
    mhs.kelas = kelas;
    mhs.jurusan = jurusan;
    mhs.NIM = NIM;
    return mhs;
}
var mahasiswa = daftarmhs("Heri", "6CC", "Tekkom", "061630700560");


//Latihan2
function aktivitas(nama, energy) {
    let mhs = {};
    mhs.nama = "Heri";
    mhs.energy = 50;
    mhs.game = function(jam) {
        this.energy = this.energy - (jam * 10);
        return this.energy;
    };
    mhs.makan = function(porsi) {
        this.energy = this.energy + (porsi * 10);
        return this.energy;
    };
    return mhs;
}

let mhs1 = aktivitas("Heri", 50);