//Foreach
var hari = ["senin", "selasa", "rabu", "kamis"];
//Untuk setiap element (e) di dalam array hari lakukan fungsinya 
hari.forEach(function(e) {
    console.log(e);
})

//atau
var hari = ["senin", "selasa", "rabu", "kamis"];
//function(element, key){}
var cetak = function(e, i) {
    console.log("Hari ke-" + (i + 1) + " Adalah " + e);
}
hari.forEach(cetak);