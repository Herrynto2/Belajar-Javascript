//Latihan1
function daftarmhs(nama, kelas, jurusan, NIM) {
    this.nama = nama;
    this.kelas = kelas;
    this.jurusan = jurusan;
    this.NIM = NIM;
}
var mahasiswa = new daftarmhs("Heri", "6CC", "Tekkom", "061630700560");



//Latihan2
function aktivitas(nama, energy) {
    this.nama = "Heri";
    this.energy = 50;
    this.game = function(jam) {
        this.energy = this.energy - (jam * 10);
        return this.energy;
    };
    this.makan = function(porsi) {
        this.energy = this.energy + (porsi * 10);
        return this.energy;
    };
}

let mhs1 = new aktivitas("Heri", 50);