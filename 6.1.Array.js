var hari = ["senin", "selasa", "rabu", [1, 2, 3]];
console.log(hari);
console.log(hari[3][1]);

var angka = [];
angka[0] = 1;
angka[1] = 2;
angka[2] = 3;
console.log(angka);

//Method Lenght
var bulan = ["Jan", "Feb", "March", "April"];
for (var i = 0; i < bulan.length; i++) {
    console.log(bulan[i]);
}

//Method Join
console.log(bulan.join(" - "));

//Method Push
bulan.push("Mei", "Jun");
console.log(bulan.join(" - "));

//Method POP
bulan.pop();
console.log(bulan.join(" - "));

//Method Unshift
bulan.unshift("Des");
console.log(bulan.join(" - "));

//Method Shft
bulan.shift();
bulan.shift();
console.log(bulan.join(" - "));

//Method Splice
var bentuk = ["Segitiga", "Persegi", "Bola", "Kubus"];
bentuk.splice(2, 0, "Prisma");
console.log(bentuk.join(" - "));

bentuk.splice(2, 2, "Prisma");
console.log(bentuk.join(" - "));

//Method Slice
var angka = [0, 1, 2, 3];
var angka2 = angka.slice(1, 3);
console.log(angka2.join(" - "));