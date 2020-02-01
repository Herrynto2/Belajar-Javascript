function tambah() {

    var hasil = 0;
    var i;
    for (i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}
console.log(tambah(1, 2, 3, 4));