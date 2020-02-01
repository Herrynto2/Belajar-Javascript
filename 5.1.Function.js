//String
var nama = "HeriHeryanto";
console.log(nama.charAt(5));

//Math
var angka = Math.log(2)
console.log(angka);


//User Defined
function nilai(a, b) {
    var hasil;
    hasil = a + b;
    return hasil;
}
console.log(nilai(2, 4));

//Add 2 Volume Kubus
function kubus(s1, s2) {
    var hasil1 = s1 * s1 * s1;
    var hasil2 = s2 * s2 * s2;
    var total = hasil1 + hasil2;
    return total;
}
var ulang = true;
while (ulang) {
    var a1 = prompt("Input nilai sisi 1 = ");
    var a2 = prompt("Input nilai sisi 2 = ");
    alert(kubus(a1, a2));
}