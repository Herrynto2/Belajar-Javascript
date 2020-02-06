var isiangkot = ["heri", "putri", "kiki"];

function naik(nama, isiangkot) {
    //Jika angkot kosong
    if (isiangkot.length == 0) {
        isiangkot.push(nama);
    }
    //Jika angkot tidak kosong
    else {
        //Telusuri terleih dahulu apakah penumpang sudah ada/belum
        for (var i = 0; i < isiangkot.length; i++) {
            //Jika ada kursi undifined
            if (isiangkot[i] == undefined) {
                isiangkot[i] = nama;
                return isiangkot;
            }
            //Jika penumpang sudah ada
            else if (isiangkot[i] == nama) {
                console.log("penumpang sudah ada");
                return isiangkot;
            }
            //Jika penumpang sudah terisi berurutan
            else if (i == isiangkot.length - 1) {
                isiangkot.push(nama);
                return isiangkot;
            }
        }
    }
}

function turun(nama, isiangkot) {
    //Jika angkot kosong
    if (isiangkot.length == 0) {
        console.log("tidak ada penumpang yang turun");
        return isiangkot;
    }
    //Jika angkot tidak kosong
    else {
        //Telusuri terleih dahulu isi penumpang
        for (var i = 0; i < isiangkot.length; i++) {
            //Jika ada penumpang yang turun
            if (isiangkot[i] == nama) {
                isiangkot[i] = undefined;
                return isiangkot;
            }
            //Jika namanya tidak sesuai di angkot
            else if (!isiangkot.includes(nama)) {
                console.log("Penumpang dengan nama " + nama + " tidak ada");
                return isiangkot;
            }
        }
    }
}