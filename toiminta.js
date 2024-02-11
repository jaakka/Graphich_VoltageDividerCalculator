/*Created by Jaakko Talvitie 11.2.2024 2:22*/

R1 = 4500;
R2 = 100;
VCC = 230;
V1 = 5;
type = 0;

function r1_upd()
{
    R1 = parseFloat(document.getElementById("r1_value").value);
    document.getElementById("r1_value").value = "R1 "+String(R1)+"Ω";
    document.getElementById("r1_txt").innerHTML = "R1 "+String(R1)+"Ω";
    new_calc();
}

function r2_upd()
{
    R2 = parseFloat(document.getElementById("r2_value").value);
    document.getElementById("r2_value").value = "R2 "+String(R2)+"Ω";
    document.getElementById("r2_txt").innerHTML = "R2 "+String(R2)+"Ω";
    new_calc();
}

function in_upd()
{
    VCC = parseFloat(document.getElementById("in_value").value);
    document.getElementById("in_value").value = "In "+String(VCC)+"V";
    document.getElementById("in_txt").innerHTML = "In "+String(VCC)+"V";
    new_calc();
}

function out_upd()
{
    V1 = parseFloat(document.getElementById("out_value").value);
    document.getElementById("out_value").value = "Out "+String(V1)+"V";
    document.getElementById("out_txt").innerHTML = "Out "+String(V1)+"V";
    new_calc();
}

function new_calc()
{
    switch(type)
    {
        case 0: //R1 selvittäminen
            R1 = ((R2 * VCC) / V1) - R2;
            document.getElementById("r1_value").value = "R1 "+String(R1)+"Ω";
            document.getElementById("r1_txt").innerHTML = "R1 "+String(R1)+"Ω";
            break;

        case 1: //R2 selvittäminen
            R2 = R1 / ((VCC / V1) -1);
            document.getElementById("r2_value").value = "R2 "+String(R2)+"Ω";
            document.getElementById("r2_txt").innerHTML = "R2 "+String(R2)+"Ω";
            break;

        case 2: //ulostulon selvittäminen
            V1 = (R2 * VCC) / (R1 + R2);
            document.getElementById("out_value").value = "Out "+String(V1)+"V";
            document.getElementById("out_txt").innerHTML = "Out "+String(V1)+"V";
            break;

        case 3: //sisääntulon selvittäminen
            VCC = ((V1 * R1) + (V1 * R2))/R2; 
            document.getElementById("in_value").value = "In "+String(VCC)+"V";
            document.getElementById("in_txt").innerHTML = "In "+String(VCC)+"V";
            break;
    }
}

function alusta_nakyma()
{
    //piilotetaan elementit
    document.getElementById("out_txt").style.display="none";
    document.getElementById("in_txt").style.display="none";
    document.getElementById("r1_txt").style.display="none";
    document.getElementById("r2_txt").style.display="none";
    document.getElementById("out_value").style.display="none";
    document.getElementById("in_value").style.display="none";
    document.getElementById("r1_value").style.display="none";
    document.getElementById("r2_value").style.display="none";
}

function calc_type(x)
{
    alusta_nakyma(); //piilotetaa eka kaikki
    switch(parseInt(x))
    {
        case 0: //Jos halutaan selvittää R1
            document.getElementById("out_value").style.display="block";
            document.getElementById("in_value").style.display="block";
            document.getElementById("r2_value").style.display="block";
            type = 0;
            document.getElementById("r1_txt").style.display="block";
            break;
        case 1: //Jos halutaan selvittää R2
            document.getElementById("out_value").style.display="block";
            document.getElementById("in_value").style.display="block";
            document.getElementById("r1_value").style.display="block";
            type = 1;
            document.getElementById("r2_txt").style.display="block";
            break;
        case 2: //Jos halutaan selvittää output
            document.getElementById("in_value").style.display="block";
            document.getElementById("r1_value").style.display="block";
            document.getElementById("r2_value").style.display="block";
            type = 2;
            document.getElementById("out_txt").style.display="block";
            break;
        case 3: //Jos halutaan selvittää input
            document.getElementById("out_value").style.display="block";
            document.getElementById("r1_value").style.display="block";
            document.getElementById("r2_value").style.display="block";
            type = 3;
            document.getElementById("in_txt").style.display="block";
            break;
    } 
}