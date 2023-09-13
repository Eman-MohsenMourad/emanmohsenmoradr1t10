function slice() {
    let text10 = document.getElementById('test12').innerHTML;
    let result1 = text10.slice(5);
    document.getElementById('test12').innerHTML = result1;
}
function substring() {
    let text11 = "Hello world!";
    let result2 = text11.substring(0, 5);
    document.getElementById('test13').innerHTML = result2;
}

function substr() {
    text12 = "Hello world!";
    console.log(text12.substr(0, 5));
    result3 = text12.substr(0, 5);
    document.getElementById('test14').innerHTML = result3;
}

function getreplaceword(name) {
    let text = document.getElementById('test').innerHTML;
    document.getElementById('test').innerHTML = text.replace("eman", name);
}
function getreplaceword1(name) {
    let text = document.getElementById('test1').innerHTML;
    document.getElementById('test1').innerHTML = text.replaceAll("eman", name);
}


let text1 = "eman mohsen mohsen";
let index = text1.indexOf("mohsen");
document.getElementById('test2').innerHTML = index;

let text2 = "eman mohsen mohsen";
let index1 = text1.lastIndexOf("mohsen");
document.getElementById('test3').innerHTML = index1;

let text3 = "welcome to our school we are pleasured being here with you all";
document.getElementById('test4').innerHTML = text3.includes("school");

let text4 = "welcome to our school we are pleasured being here with you all";

if (text4.includes("school") == true) {

    document.getElementById('test5').innerHTML = "good";

} else { document.getElementById('test5').innerHTML = "bad"; }

let text5 = "i love engineering,engineering is my dream from many years ago,engineering is my work";
const myArr = text5.match("engineering");
document.getElementById('test6').innerHTML = Array.from(myArr).length;

let text6 = "i love engineering,engineering is my dream from many years ago,engineering is my work";
const myArr1 = text6.matchAll("engineering");
document.getElementById('test7').innerHTML = Array.from(myArr1).length;

let text13 = "";

for (let i = 0; i < 10 ; i++) {
    
    document.getElementById('test15').innerHTML=text13 += "Number is "+" "+ i + "<br>";
}
const students = ["Ahmed", "sameh", "eman", "asia"];

if (students.length < 3) {
    document.getElementById('test8').innerHTML = "the group contains of" + " " + students.length + "students";

} else if (students.length > 3) {
    document.getElementById('test8').innerHTML = "the group contains more than required";

} else if (students.length == 3) {
    document.getElementById('test8').innerHTML = "the group is completed";
} else {
    document.getElementById('test8').innerHTML = "no data";
}

let x = 0;

switch (x) {
    case 0:
        text7 = "disabled";
        break;
    case 1:
        text7 = "enabled";
        break;
    default:
        text7 = "No Value";
}
document.getElementById('test9').innerHTML = text7;
let text8 = "";

for (let i = 0; i < students.length; i++) {
    text8 += students[i] + "<br>";
} document.getElementById('test10').innerHTML = text8;


const students1 = new Set(["mia", "sam", "yeihya", "ann"]);

let text9 = "";

for (const x of students1.values()) {
    text9 += x + "<br>";
}

document.getElementById('test11').innerHTML = text9;

