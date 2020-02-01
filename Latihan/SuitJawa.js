var ulang = true;
while (ulang) {
    var p = prompt("Pilih gajah, orang atau semut ?");
    var comp = Math.random();
    var hasil = "";

    if (comp < 0.34) {
        comp = "orang";
    } else if (comp > 0.34 && comp < 0.64) {
        comp = "gajah";
    } else {
        comp = "semut";
    }

    if (p == comp) {
        hasil = "Kamu seri";
    } else if (p == "gajah") {
        if (comp == "orang") {
            hasil = "Kamu menang";
        } else if (comp == "semut") {
            hasil = "Kamu kalah";
        }
    } else if (p == "orang") {
        if (comp == "gajah") {
            hasil = "Kamu kalah";
        } else if (comp == "semut") {
            hasil = "Kamu menang";
        }
    } else if (p == "semut") {
        if (comp == "gajah") {
            hasil = "Kamu menang";
        } else if (comp == "orang") {
            hasil = "Kamu kalah";
        }
    } else {
        hasil = "Silahkan input yang benar"
    }

    alert(p + " vs " + comp + "\n" + hasil);
    ulang = confirm("Coba lagi ?");
}
alert("Terimakasih sudah bermain");