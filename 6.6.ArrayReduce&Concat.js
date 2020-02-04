//Reduce
var x = [1, 2, 3, 4, 10];
var hasil = x.reduce(function(total, number) {
    return total + number;
})
console.log(hasil);

var hasil2 = x.reduce(function(total, number) {
    return total - number;
})
console.log(hasil2);

//Concat
var angka = [1, 3, 4, 5];
var hari = ["senin", "selasa", "rabu"];
var concat = angka.concat(hari);
console.log(concat);