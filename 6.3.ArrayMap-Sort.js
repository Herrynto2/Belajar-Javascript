var hari = ["Senin", "Selasa", "Kamis", "Rabu"];
var angka = [2, 4, 1, 3, 5];
var angka2 = [2, 4, 1, 3, 10, 30, 5];

//Array Map
angka.map(function(e) {
    console.log(e);
})

var angkas = angka.map(function(e) {
    return e;
})
console.log(angkas.join(" - "));


//array Sort
angka.sort()
console.log(angka);

angka2.sort(function(a, b) {
    return a - b;
})
console.log(angka2);