// -------- LIJST VAN STRINGS --------
class RijstVanStrings {
    roosterVanString(str, rijlen) {
        let ret = [];
        // console.assert(isInt(str.length / rijlen), "Ongeldige string");
        for (let i = 0; i < str.length; i += rijlen) {
            // Stopt als het einde van de string gevonden is met een halve rij
            ret.push(str.slice(i, Math.min(i+rijlen, str.length)));
        }
        return ret;
    }

    vierkantRoosterVanString(str) {
        const rijlen = Math.sqrt(str.length);
        console.assert(isInt(rijlen), "ongeldige string");
        let ret = [];
        for (let i = 0; i < str.length; i += rijlen) {
            ret.push(str.slice(i, i+rijlen));
        }
        return ret;
    }

    // Afgeraden, hier is het beter om een rooster van strings te gebruiken
    setValue(rooster, x, y, waarde) {
        console.assert(x < rooster.length, "Ongeldige X");
        const oudStr = rooster[x];
        console.assert(y < rooster[x].length, "Ongeldige Y");
        const nieuwstr = oudStr.substr(0, y) + waarde + oudStr.substr(y+1);
        rooster[x] = nieuwstr;
    }

    // Afgeraden, hier is het beter om een rooster van strings te gebruiken
    setValueReturn(rooster, x, y, waarde) {
        console.assert(x < rooster.length, "Ongeldige X");
        const oudStr = rooster[x];
        console.assert(y < rooster[x].length, "Ongeldige Y");
        const nieuwstr = oudStr.substr(0, y) + waarde + oudStr.substr(y+1);
        let nieuwRooster = rooster.map(rij => rij.slice());
        nieuwRooster[x] = nieuwstr;
        return nieuwRooster;
    }

    getValue(rooster, x, y) {
        console.assert(x < rooster.length, "Ongeldige X");
        console.assert(y < rooster[x].length, "Ongeldige Y");
        return rooster[x][y];
    }

    toString(rooster) {
        return rooster.join("");
    }
}

// -------- ROOSTER VAN STRINGS --------
class RoosterVanStrings {
    roosterVanString(str, rijlen) {
        let ret = [];
        // console.assert(isInt(str.length / rijlen), "Ongeldige string");
        for (let i = 0; i < str.length; i += rijlen) {
            // Stopt als het einde van de string gevonden is met een halve rij
            ret.push(str.slice(i, Math.min(i+rijlen, str.length)).split(""));
        }
        return ret;
    }

    vierkantRoosterVanString(str) {
        const rijlen = Math.sqrt(str.length);
        console.assert(isInt(rijlen), "ongeldige string");
        let ret = [];
        for (let i = 0; i < str.length; i += rijlen) {
            ret.push(str.slice(i, i+rijlen).split(""));
        }
        return ret;
    }

    // Overschrijft de parameter
    setValue(rooster, x, y, waarde) {
        console.assert(x < rooster.length, "Ongeldige X");
        console.assert(y < rooster[x].length, "Ongeldige Y");
        rooster[x][y] = waarde;
    }

    setValueReturn(rooster, x, y, waarde) {
        console.assert(x < rooster.length, "Ongeldige X");
        console.assert(y < rooster[x].length, "Ongeldige Y");
        let nieuwRooster = rooster.map(rij => rij.slice());
        nieuwRooster[x][y] = waarde;
        return nieuwRooster;
    }

    getValue(rooster, x, y) {
        console.assert(x < rooster.length, "Ongeldige X");
        console.assert(y < rooster[x].length, "Ongeldige Y");
        return rooster[x][y];
    }

    toString(rooster) {
        return rooster.map(rij => rij.join("")).join("");
    }
}

// -------- HULPFUNCTIES --------

function isInt(n) {
    n === parseInt(n, 10);
}