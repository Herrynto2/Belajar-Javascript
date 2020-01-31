var s = "";
var key = prompt("Input angka 1.Horizontal, 2.Vertikal, 3.Set.Segitiga, 4.SetSegTerbalik, 5.SetSegCermin, 6.Segsamakaki, 7.Layang, 8.Persegi, 9.catur, 10.paskal")
switch (key) {
    case "1":
        //alert("You Input Number 1");
        //Horizontal;
        for (i = 1; i <= 6; i++) {
            s += "^";
        }
        console.log(s);
        break;

    case "2":
        //Vertikal
        for (i = 1; i <= 6; i++) {
            s += "^";
            s += "\n";
        }
        console.log(s);
        break;

    case "3":
        //Setengah Segitiga
        for (i = 1; i <= 10; i++) {
            for (i2 = 1; i2 <= i; i2++) {
                s += "^";
            }
            s += "\n";
        }
        console.log(s);
        break;

    case "4":
        //Setengah Segitiga Terbalik
        for (i = 1; i <= 10; i++) {
            for (i2 = 10; i2 >= i; i2--) {
                s += "^";
            }
            s += "\n";
        }
        console.log(s);
        break;

    case "5":
        //Setengah Segitiga Cermin
        for (i = 1; i <= 10; i++) {
            for (i2 = 10; i2 >= i; i2--) {
                s += " ";
            }
            for (i3 = 1; i3 <= i; i3++) {
                s += "^";
            }
            s += "\n";
        }
        console.log(s);
        break;

    case "6":
        //Segitiga Samakaki
        for (i = 1; i <= 10; i++) {
            for (i2 = 10; i2 >= i; i2--) {
                s += " ";
            }
            for (i3 = 1; i3 <= i; i3++) {
                s += "^";
            }
            for (i4 = 1; i4 < i; i4++) {
                s += "^";
            }
            s += "\n";
        }
        console.log(s);
        break;

    case "7":
        //Layang-layang
        for (i = 1; i <= 7; i++) {
            for (i2 = 7; i2 >= i; i2--) {
                s += " ";
            }
            for (i3 = 1; i3 <= i; i3++) {
                s += "^";
                s += " ";
            }
            s += "\n";
        }
        for (i = 1; i <= 6; i++) {
            for (i2 = 0; i2 <= i; i2++) {
                s += " ";
            }
            for (i3 = 6; i3 >= i; i3--) {
                s += "^";
                s += " ";
            }
            s += "\n";
        }
        console.log(s);
        break;

    case "8":
        //Segiempat 
        for (i = 1; i <= 5; i++) {
            for (t = 1; t <= 5; t++) {
                s += "^" + " ";
            }
            s += "\n";
        }
        console.log(s);
        break;

    case "9":
        //Papan Catur
        for (i = 1; i <= 5; i++) {
            for (t = 1; t <= 5; t++) {
                s += "#" + " ";
            }
            s += "\n";
        }
        console.log(s);
        break;

    case "10":
        //Segitiga Paskal
        x = 1;
        for (i = 1; i <= 5; i++) {
            for (i2 = 10; i2 >= i; i2--) {
                s += " ";
            }
            for (i3 = 1; i3 <= i; i3++) {
                s += x;
                s += " ";
            }
            s += "\n";
        }
        console.log(s);
        break;

    default:
        alert("The Number you input is wrong")
}