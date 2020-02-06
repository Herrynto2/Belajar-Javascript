//Latihan 1
var mahasiswa1 = {
    nama: 'Heri Heryanto',
    kelas: "6CC",
    IPS: [100, 30, 50, 60, 70],
    alamat: {
        kota: "Depok",
        provinsi: "Jawa barat"
    }
}
var mahasiswa2 = {
        nama: 'Kiki Amelia',
        kelas: "6CB",
        IPS: [100, 30, 50, 60, 70],
        alamat: {
            kota: "Depok",
            provinsi: "Jawa barat"
        }
    }
    // console.log(mahasiswa);
    // console.log(mahasiswa.nama);
    // console.log(mahasiswa["nama"]);
    // console.log(mahasiswa2.alamat.kota);
    // console.log(mahasiswa2.alamat["kota"]);


//Latihan2
let mhs = {
    nama: "Heri",
    energy: 50,
    game: function(jam) {
        this.energy = this.energy - (jam * 10);
        return this.energy;
    },
    makan: function(porsi) {
        this.energy = this.energy + (porsi * 10);
        return this.energy;
    }
}