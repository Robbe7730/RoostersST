#!/usr/bin/env python3 

# -------- LIJST VAN STRINGS --------
class LijstVanStrings(object):
    def roosterVanString(self, tekst, rijlen):
        # assert (len(tekst) / rijlen).is_integer(), "Ongeldige string"
        ret = [tekst[i: min(i+rijlen, len(tekst)) ] for i in range(0, len(tekst), rijlen)]
        return ret
    
    def vierkantRoosterVanString(self, tekst):
        rijlen = len(tekst) ** 0.5
        assert rijlen.is_integer(), "Ongeldige string"
        rijlen = int(rijlen)
        ret = [tekst[i: min(i+rijlen, len(tekst)) ] for i in range(0, len(tekst), rijlen)]
        return ret
    
    # Afgeraden, hier is het beter om een rooster van strings te gebruiken
    def setValue(self, rooster, x, y, waarde):
        assert (x < len(rooster)), "Ongeldige X"
        oudStr = rooster[x]
        assert (y < len(rooster[x])), "Ongeldige Y"
        nieuwStr = oudStr[:y] + waarde + oudStr[y+1:]
        rooster[x] = nieuwStr

    # Afgeraden, hier is het beter om een rooster van strings te gebruiken
    def setValueReturn(self, rooster, x, y, waarde):
        assert (x < len(rooster)), "Ongeldige X"
        oudStr = rooster[x]
        assert (y < len(rooster[x])), "Ongeldige Y"
        nieuwStr = oudStr[:y] + waarde + oudStr[y+1:]
        nieuwRooster = [rij[:] for rij in rooster]
        nieuwRooster[x] = nieuwStr
        return nieuwRooster

    def getValue(self, rooster, x, y):
        assert (x < len(rooster)), "Ongeldige X"
        assert (y < len(rooster[x])), "Ongeldige Y"
        return rooster[x][y]
    
    # Waarschijnlijk te gebruiken als __str__() 
    def toString(self, rooster):
        return "".join(rooster)

# -------- ROOSTER VAN STRINGS --------
class RoosterVanStrings(object):
    def roosterVanString(self, tekst, rijlen):
        # assert (len(tekst) / rijlen).is_integer(), "Ongeldige string"
        ret = [list(tekst[i: min(i+rijlen, len(tekst)) ]) for i in range(0, len(tekst), rijlen)]
        return ret
    
    def vierkantRoosterVanString(self, tekst):
        rijlen = len(tekst) ** 0.5
        assert rijlen.is_integer(), "Ongeldige string"
        rijlen = int(rijlen)
        ret = [list(tekst[i: min(i+rijlen, len(tekst)) ]) for i in range(0, len(tekst), rijlen)]
        return ret
    
    def setValue(self, rooster, x, y, waarde):
        assert (x < len(rooster)), "Ongeldige X"
        assert (y < len(rooster[x])), "Ongeldige Y"
        rooster[x][y] = waarde

    def setValueReturn(self, rooster, x, y, waarde):
        assert (x < len(rooster)), "Ongeldige X"
        assert (y < len(rooster[x])), "Ongeldige Y"
        nieuwRooster = [rij[:] for rij in rooster]
        nieuwRooster[x][y] = waarde
        return nieuwRooster

    def getValue(self, rooster, x, y):
        assert (x < len(rooster)), "Ongeldige X"
        assert (y < len(rooster[x])), "Ongeldige Y"
        return rooster[x][y]
    
    # Waarschijnlijk te gebruiken als __str__() 
    def toString(self, rooster = [""]):
        return "".join(["".join(rij) for rij in rooster])
