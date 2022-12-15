let body = document.querySelector('body');
let head = document.querySelector('h1');
let theme = document.getElementById('background');
theme.addEventListener('click', function (evt) {
    body.classList.toggle('dark')
    head.classList.toggle('dark')
})



// birinchi topshiriq
function firstTask() {
    let a = document.getElementById("login-first").value;
    switch (a) {
        case "ishchi":
            document.getElementById("result-first").innerHTML = "Hello"
            break;
        case "direktor":
            document.getElementById("result-first").innerHTML = "Greetings"
            break;
        case "":
            document.getElementById("result-first").innerHTML = "No Login"
            break;
        default:
            document.getElementById("result-first").innerHTML = "Bunday lavozim mavjud emas";
            break;
    }
};

// ikkinchi task

let tasdiq=document.getElementById('tasdiq');




function kkk(e){
    e.preventDefault();
    let date_first=new Date(document.getElementById('date_first').value)
    let date_second=new Date(document.getElementById('date_second').value) 
    let day=(date_first.getTime()-date_second.getTime())/1000/60/24/60;
let farq=document.getElementById('farq');
let b=`${day}`;
farq.innerHTML=b;





}

// uchinchi topshiriq

function thirdTask() {
    let c = document.getElementById("number").value;
    switch (c) {
        case "1":
            document.getElementById("result-third").innerHTML = "bir"
            break;
        case "2":
            document.getElementById("result-third").innerHTML = "ikki"
            break;
        case "3":
            document.getElementById("result-third").innerHTML = "uch"
            break;
        case "4":
            document.getElementById("result-third").innerHTML = "to'rt"
            break;
        case "5":
            document.getElementById("result-third").innerHTML = "besh"
            break;
        case "6":
            document.getElementById("result-third").innerHTML = "olti"
            break;
        case "7":
            document.getElementById("result-third").innerHTML = "yetti"
            break;
        case "8":
            document.getElementById("result-third").innerHTML = "sakkiz"
            break;
        case "9":
            document.getElementById("result-third").innerHTML = "to'qqiz"
            break;
        case "10":
            document.getElementById("result-third").innerHTML = "o'n"
            break;
        case "11":
            document.getElementById("result-third").innerHTML = "o'n-bir"
            break;
        case "12":
            document.getElementById("result-third").innerHTML = "o'n-ikki"
            break;
        case "13":
            document.getElementById("result-third").innerHTML = "o'n-uch"
            break;
        case "14":
            document.getElementById("result-third").innerHTML = "o'n-to'rt"
            break;
        case "15":
            document.getElementById("result-third").innerHTML = "o'n-besh"
            break;
        case "16":
            document.getElementById("result-third").innerHTML = "o'n-olti"
            break;
        case "17":
            document.getElementById("result-third").innerHTML = "o'n-yetti"
            break;
        case "18":
            document.getElementById("result-third").innerHTML = "o'n-sakkiz"
            break;
        case "19":
            document.getElementById("result-third").innerHTML = "o'n-to'qiiz"
            break;
        case "20":
            document.getElementById("result-third").innerHTML = "yigirma"
            break;
        case "21":
            document.getElementById("result-third").innerHTML = "yigirma-bir"
            break;
        case "22":
            document.getElementById("result-third").innerHTML = "yigirma-ikki"
            break;
        case "23":
            document.getElementById("result-third").innerHTML = "yigirma-uch"
            break;
        case "24":
            document.getElementById("result-third").innerHTML = "yigirma-to'rt"
            break;
        case "25":
            document.getElementById("result-third").innerHTML = "yigirma-besh"
            break;
        case "26":
            document.getElementById("result-third").innerHTML = "yigirma-olti"
            break;
        case "27":
            document.getElementById("result-third").innerHTML = "yigirma-yetti"
            break;
        case "28":
            document.getElementById("result-third").innerHTML = "yigirma-sakkiz"
            break;
        case "29":
            document.getElementById("result-third").innerHTML = "yigirma-to'qqiz"
            break;
        case "30":
            document.getElementById("result-third").innerHTML = "o'ttiz"
            break;
        case "31":
            document.getElementById("result-third").innerHTML = "o'ttiz-bir"
            break;
        case "32":
            document.getElementById("result-third").innerHTML = "o'ttiz-ikki"
            break;
        case "33":
            document.getElementById("result-third").innerHTML = "o'ttiz-uch"
            break;
        case "34":
            document.getElementById("result-third").innerHTML = "o'ttiz-to'rt"
            break;
        case "35":
            document.getElementById("result-third").innerHTML = "o'ttiz-besh"
            break;
        case "36":
            document.getElementById("result-third").innerHTML = "o'ttiz-olti"
            break;
        case "37":
            document.getElementById("result-third").innerHTML = "o'ttiz-yetti"
            break;
        case "38":
            document.getElementById("result-third").innerHTML = "o'ttiz-sakkiz"
            break;
        case "39":
            document.getElementById("result-third").innerHTML = "o'ttiz-to'qqiz"
            break;
        case "40":
            document.getElementById("result-third").innerHTML = "qirq"
            break;
        case "41":
            document.getElementById("result-third").innerHTML = "qirq-bir"
            break;
        case "42":
            document.getElementById("result-third").innerHTML = "qirq-ikki"
            break;
        case "43":
            document.getElementById("result-third").innerHTML = "qirq-uch"
            break;
        case "44":
            document.getElementById("result-third").innerHTML = "qirq-to'rt"
            break;
        case "45":
            document.getElementById("result-third").innerHTML = "qirq-besh"
            break;
        case "46":
            document.getElementById("result-third").innerHTML = "qirq-olti"
            break;
        case "47":
            document.getElementById("result-third").innerHTML = "qirq-yetti"
            break;
        case "48":
            document.getElementById("result-third").innerHTML = "qirq-sakkiz"
            break;
        case "49":
            document.getElementById("result-third").innerHTML = "qirq-to'qqiz"
            break;
        case "50":
            document.getElementById("result-third").innerHTML = "ellik"
            break;
        case "51":
            document.getElementById("result-third").innerHTML = "ellik-bir"
            break;
        case "52":
            document.getElementById("result-third").innerHTML = "ellik-ikki"
            break;
        case "53":
            document.getElementById("result-third").innerHTML = "ellik-uch"
            break;
        case "54":
            document.getElementById("result-third").innerHTML = "ellik-to'rt"
            break;
        case "55":
            document.getElementById("result-third").innerHTML = "ellik-besh"
            break;
        case "56":
            document.getElementById("result-third").innerHTML = "ellik-olti"
            break;
        case "57":
            document.getElementById("result-third").innerHTML = "ellik-yetti"
            break;
        case "58":
            document.getElementById("result-third").innerHTML = "ellik-sakkiz"
            break;
        case "59":
            document.getElementById("result-third").innerHTML = "ellik-to'qqiz"
            break;
        case "60":
            document.getElementById("result-third").innerHTML = "oltmish"
            break;
        case "61":
            document.getElementById("result-third").innerHTML = "oltmish-bir"
            break;
        case "62":
            document.getElementById("result-third").innerHTML = "oltmish-ikki"
            break;
        case "63":
            document.getElementById("result-third").innerHTML = "oltmish-uch"
            break;
        case "64":
            document.getElementById("result-third").innerHTML = "oltmish-to'rt"
            break;
        case "65":
            document.getElementById("result-third").innerHTML = "oltmish-besh"
            break;
        case "66":
            document.getElementById("result-third").innerHTML = "oltmish-olti"
            break;
        case "67":
            document.getElementById("result-third").innerHTML = "oltmish-yetti"
            break;
        case "68":
            document.getElementById("result-third").innerHTML = "oltmish-sakkiz"
            break;
        case "69":
            document.getElementById("result-third").innerHTML = "oltmish-to'qqiz"
            break;
        case "70":
            document.getElementById("result-third").innerHTML = "yetmish"
            break;
        case "71":
            document.getElementById("result-third").innerHTML = "yetmish-bir"
            break;
        case "72":
            document.getElementById("result-third").innerHTML = "yetmish-ikki"
            break;
        case "73":
            document.getElementById("result-third").innerHTML = "yetmish-uch"
            break;
        case "74":
            document.getElementById("result-third").innerHTML = "yetmish-to'rt"
            break;
        case "75":
            document.getElementById("result-third").innerHTML = "yetmish-besh"
            break;
        case "76":
            document.getElementById("result-third").innerHTML = "yetmish-olti"
            break;
        case "77":
            document.getElementById("result-third").innerHTML = "yetmish-yetti"
            break;
        case "78":
            document.getElementById("result-third").innerHTML = "yetmish-sakkiz"
            break;
        case "79":
            document.getElementById("result-third").innerHTML = "yetmish-to'qqiz"
            break;
        case "80":
            document.getElementById("result-third").innerHTML = "sakson"
            break;
        case "81":
            document.getElementById("result-third").innerHTML = "sakson-bir"
            break;
        case "82":
            document.getElementById("result-third").innerHTML = "sakson-ikki"
            break;
        case "83":
            document.getElementById("result-third").innerHTML = "sakson-uch"
            break;
        case "84":
            document.getElementById("result-third").innerHTML = "sakson-to'rt"
            break;
        case "85":
            document.getElementById("result-third").innerHTML = "sakson-besh"
            break;
        case "86":
            document.getElementById("result-third").innerHTML = "sakson-olti"
            break;
        case "87":
            document.getElementById("result-third").innerHTML = "sakson-yetti"
            break;
        case "88":
            document.getElementById("result-third").innerHTML = "sakson-sakkiz"
            break;
        case "89":
            document.getElementById("result-third").innerHTML = "sakson-to'qqiz"
            break;
        case "90":
            document.getElementById("result-third").innerHTML = "to'qson"
            break;
        case "91":
            document.getElementById("result-third").innerHTML = "to'qson-bir"
            break;
        case "92":
            document.getElementById("result-third").innerHTML = "to'qson-ikki"
            break;
        case "93":
            document.getElementById("result-third").innerHTML = "to'qson-uch"
            break;
        case "94":
            document.getElementById("result-third").innerHTML = "to'qson-to'rt"
            break;
        case "95":
            document.getElementById("result-third").innerHTML = "to'qson-besh"
            break;
        case "96":
            document.getElementById("result-third").innerHTML = "to'qson-olti"
            break;
        case "97":
            document.getElementById("result-third").innerHTML = "to'qson-yetti"
            break;
        case "98":
            document.getElementById("result-third").innerHTML = "to'qson-sakkiz"
            break;
        case "99":
            document.getElementById("result-third").innerHTML = "to'qson-to'qqiz"
            break;
        default:
            document.getElementById("result-third").innerHTML = "Birdan to'qson-to'qqizgacha bo'lgan son kiriting!"
            break;
    }

}





// 4-topshiriq


function sum(array){
    let Sum=0;
    for (let i=0;i<array.length;i++) {
   array[i]+=3;
    Sum+=array[i];
    }
    return Sum;
}
let massiv=[3,5,22,5,7,2,45,75,89,21,2];
let natija=document.getElementById('natija');

natija.innerHTML=sum(massiv)


// 5-topshiriq







let array = new Array();

function massiv_sum(array_1, array_2) {
    let massiv = document.getElementById('massiv');
    let massiv_1 = document.getElementById("array_1");
    let massiv_2 = document.getElementById("array_2");
    if (array_1.length == array_2.length) {
        for (let i = 0; i < array_1.length; i++) {
            array[i] = array_1[i] + array_2[i];

        }
    }
    massiv.innerText = `[${array}]`;
    massiv_1.innerText = `[${array_1}]`;
    massiv_2.innerText = `[${array_2}]`;

}
let array_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let array_2 = [4, 2, 21, 12, 13, 34, 46, 79, 10, 21, 34];
massiv_sum(array_1, array_2);










// 6-topshiriq
let inp=document.getElementById("uname")

inp.addEventListener("input", ()=>{
    inp.value = inp.value.toUpperCase();
});










// 8-topshiriq


let a = [23, 56, 4, 78, 5, 63, 45, 210, 56]
let reset_massiv = document.getElementById("reset_massiv");

let reset = document.getElementById("reset");
let new_massiv = document.getElementById("new_massiv");

function push(massiv) {
    let array = new Array();
    let qiymat = document.getElementById("massiv_element").value;
    
    for (let i = 0; i < massiv.length; i++) {

        if (massiv[i] != qiymat) {
            array.push(massiv[i]);
        }
    }
    console.log(array)
    new_massiv.innerHTML = array

}
reset_massiv.innerHTML=`[${a}]`;
reset.addEventListener('click', function (e) {
    e.preventDefault();
    push(a);
})










// 9-topshiriq
let task_nine=document.getElementById("task_nine");
let result_nine=document.getElementById("result_nine");





task_nine.addEventListener('change',function(e){
     e.preventDefault();
const p=document.createElement('p');
p.innerHTML=`${e.target.value}`;
result_nine.append(p)
e.target.value='';
})