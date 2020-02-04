var isiangkot = [];

function naik(nama, isiangkot) {
    if (isiangkot.includes(nama)) {
        console.log("data sudah ada")
    } else {
        isiangkot.push(nama);
    }
    return isiangkot;
}