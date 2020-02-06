function angkot(sopir, tujuan, penumpang, income) {
    this.sopir = sopir;
    this.tujuan = tujuan;
    this.penumpang = penumpang;
    this.income = income;

    this.penumpangnaik = function(namapenumpang) {
        this.penumpang.push(namapenumpang);
        return this.penumpang;
    }
    this.penumpangturun = function(namapenumpang, bayar) {
        //cek apakah namapenumpang tidak ada
        if (!this.penumpang.includes(namapenumpang)) {
            console.log("Nama Penumpang tidak ada");
            return this.penumpang;
        }
        //Jika penumpang ada
        else {
            for (var i = 0; i < this.penumpang.length; i++) {
                if (this.penumpang[i] == namapenumpang) {
                    this.penumpang[i] = undefined;
                    this.income += bayar;
                    return this.penumpang;
                }
            }
        }
    }
}
var angkot1 = new angkot("Heri", "Depok-Bandung", [], 0);
var angkot2 = new angkot("Putri", "Depok-Bekasi", [], 0);