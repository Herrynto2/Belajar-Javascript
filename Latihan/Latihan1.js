var total = 10,
    angkot = 1;
for (angkot; angkot <= total; angkot++) {
    if (angkot <= 4 || angkot == 6) {
        console.log("angkot No." + angkot + " " + "berjalan dengan baik");
    } else if (angkot == 8 || angkot == 10 || angkot == 5) {
        console.log("angkot No." + angkot + " " + "sedang lembur");
    } else {
        console.log("angkot No." + angkot + " " + "sedang tidak beroperasi");
    }
}