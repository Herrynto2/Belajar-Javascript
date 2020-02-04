var mahasiswa1 = {
    nama: 'Heri Heryanto',
    kelas: "6CC",
    alamat: {
        kota: "Depok",
        provinsi: "Jawa barat"
    },
    IPS: [100, 30, 50, 60, 70],
    IPK: function() {
        var hasil = 0;
        var IPss = this.IPS;
        for (var i = 0; i < IPss.length; i++) {
            hasil += IPss[i];
        }
        return hasil / IPss.length;
    }
}
console.log(mahasiswa1.IPK());


////////////////
var datadiri = {
    nama: 'Heri Heryanto',
    kelas: "6CC",
    umur: 21,
    Hoby: "Program",
    Sapa: function() {
        return "Haii nama saya " + this.nama + " saya kelas " + this.kelas;
    }
}
console.log(datadiri.Sapa());