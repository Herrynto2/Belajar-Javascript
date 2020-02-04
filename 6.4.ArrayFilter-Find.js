var angka = [2, 4, 1, 3, 10, 30, 5];

//Filter
var angkas = angka.filter(function(e) {
    return e > 4;
})
console.log(angkas);

//Find
var angkas = angka.find(function(e) {
    return e > 4;
})
console.log(angkas);