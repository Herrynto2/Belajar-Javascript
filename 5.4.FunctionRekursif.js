function name(a) {
    if (a === 2) {
        return;
    }
    console.log(a);
    return name(a - 1);
}
name(5);


function name2(a) {
    for (var i = a; i <= 10; i++) {
        if (i == 7 || i == 9) {
            console.log("angkot " + i + " belum berangkat");
        } else {
            console.log("angkot " + i + " sudah berangkat");
        }
    }
}
name2(5);