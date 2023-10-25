
// let jami = olma + nok + behi

// console.log(jami);
// alert(jami);
// confirm(jami);
// document.write('salom hammaga'); 
// let num = prompt(jami);

// document.write(num);
// let oqkoylak = 300_000;
// let shim = 200_000;
// let sumka = 180_000;
// let mayka = 50_000;


// let oqkoylakdona = prompt("Oq ko'ylak nechi dona olasiz olasiz 300 ming so'mdan ");
// let shimdona = prompt("Shim nechi dona olasiz 200 ming so'mdan");
// let sumkadona = prompt("Sumka nechi dona olasiz 180 ming so'mdan");

// let oqkoylakJami = oqkoylak * oqkoylakdona;
// let shimJami = shim * shimdona;
// let sumkaJami = sumka * sumkadona;

// let jami = oqkoylakJami + shimJami + sumkaJami;

// console.log(jami >= 1000000 ? 'sizga 5% chegirma berildi' : jami);
// console.log(jami <= 1000000 ? 'siz 100 ming somlik horid qilmadingiz shuning uchun chegirma yoq ming bor uzur' : jami)





















// SANA : 11.09.2023




// let javob = prompt("Bugun darsga keldizmi")

// if(javob == "keldim"){
//     console.log("Darsda yaxshi qatnashing");
// }
// else{
//     console.log("10 darra sichqoncha simi bilan urilsin");
// }
// let ikkinchi = 1945

// let jahon = prompt("Ikkinchi jahon urishi qachon tugagan");

// if(jahon == 1945){
//     console.log("Togri javob");
// }
// if(jahon >=1945){
//     console.log("Ikkinchi jahon urushi tugagan");
// }
// else{
//     console.log(ikkinchi <= 1945 ? 'Kechirasiz ikkinchi jahon urushi boshlanmagan' : ikkinchi);
// }
















//SANA: 13.09.2023






// let javob = prompt("iKKINCHI JAHON URUSHI QACHON BOLGAN  ??")

// if(isNaN(javob)){ 
//     console.log("Harf emas son yozing");
// }
// else if (javob > 1941 && 1945 < javob){
//     console.log("Jahon urishi tugagan");
// }
// else if (javob >1945 && 1941 < javob) {
//     console.log("Yaqinroq keldiz");
// }
// else if ( javob > 1945){
//     console.log("U payti tugamagan");
// }
// else{
//     console.log("Javob togri");
// }

// let javob = prompt("Hafta kunlarini kriting")


// if(isNaN(javob)){ 
//     console.log("Harfda emas sonda yozing");
// }

// else if(javob == 1){
//     console.log("Dushanba");
// }
// else if(javob == 2){
//     console.log("Seshanba");
// }
// else if (javob == 3) {
//     console.log("Chorshanba");
// }
// else if (javob == 4) {
//     console.log("Payshanba");
// }
// else if (javob == 5) {
//     console.log("Juma");
// }
// else if (javob == 6) {
//     console.log("shanba");
// }
// else if (javob == 7) {
//     console.log("Yakshanba");
// }
// else if (javob >= 8){
//     console.log("Hafta kunlari 7 kundan iborat");
// }
// else if (javob == 0){
//     console.log("Bu qiymat topilmadi");
// }

// else if (klient == 0) {
//     console.log("Siz hali godaksiz");
// }

// let klient = prompt("Yoshingizni kiriting")

// if(isNaN(klient)){ 
//     console.log("Harfda emas sonda yozing");
// }

// else if(klient >= 1 && 10 >= klient){
//     console.log("Salom kichkintoy");
// }
// else if(klient >=10 && 18 >= klient){
//     console.log("Salom mehmon");
// }
// else if (klient <= 50) {
//     console.log("Salom amaki");
// }
// else if (klient <= 100) {
//     console.log("Salom bobo");
// }
// else if (klient >= 110) {
//     console.log("Oho Ming ga kiring");
// }


// let birinchi = prompt("Brinchi sonni yozing ")
// let ikkinchi = prompt("Ikkinchi sonni kriting")

// if (isNaN(birinchi)) {
//     console.log("Harfda emas sonda yozing");
// }
// if (isNaN(ikkinchi)) {
//     console.log("Harfda emas sonda yozing");
// }

// console.log(+birinchi + +ikkinchi);



// let num = +prompt("Son kriting")

// for (let i = 1; i <= num; i++){
//     document.write("<p>" + i)
// }

// let num = +prompt("son yozing")

// let total = 0;

// for (let i = 1; i <= num; i++){
//   total += i
// }
// document.write(total)


// let login = prompt("Login yozing")

// if (login == "admin") {
// }
// else if (login != "admin") {
//   console.log("Krish taqiqlanadi");
// }
// let parol = prompt("parolni kriting")

// if (parol == 12345) {
//   console.log("Hush kelibsiz");
// }
// else if (parol != 12345) {
// }



















// SANA : 18.09.2023







// let lorem = document.getElementById('lorem')

// let a = +document.getElementById('bir')
// let b = +document.getElementById('ikki')
// let c = +document.getElementById('uch')

// let result;

// function funResult() {
//   let obj = {
//     abir: a.value,
//     bikki: b.value,
//     cuch: c.value,
//   }
//   if (obj.abir == 0 && obj.bikki == 0 && obj.cuch  == 0) {
//     result = 'raqam kiritmadingiz1'
//   }
//   else if (isNaN(obj.abir, obj.bikki, obj.cuch)) {
//     result = 'harf emas son yozing'
//   }
//   else if (obj.abir == obj.bikki == obj.cuch) {
//     result = 'eng katta raqam yoq'
//   }
//   else if (obj.abir > obj.bikki && obj.abir > obj.cuch) {
//     obj.abir + 'eng katta raqam'
//   }
//   else if (obj.bikki > obj.abir && obj.bikki > obj.cuch) {
//     result = obj.bikki + 'eng katta raqam'
//   }
//   else if (obj.cuch > obj.abir && obj.cuch > obj.bikki) {
//     result = obj.cuch + 'eng katta raqam'
//   }
//   else{
//     result = 'raqam kiritmadingiz'
//   }
//   lorem.innerHTML = result
// }

// let lorem = document.getElementById('lorem')

// let a = +document.getElementById('bir');
// let b = +document.getElementById('ikki');

// function funResult(bir , ikki){
//   document.write(bir + ikki)
// }


// funResult(a , b)














// SANA 20.09.2023






// function men(namber , sen) {
//   document.write( namber + sen )
// }

// men(3 , 3)







// SANA 25:09.2023









// function funResult() {
//     let p = document.getElementById('lorem');
//     let raqam = document.getElementById('son').value;
//     let text = document.getElementById('text').value;
//     let result = " "
//     for(let i = 0; i <= raqam; i++){
//         result += text;
//         console.log(text);
//     }
//     p.innerHTML = '<p>' + result + '</p>';
// } 


// let p = document.getElementById('p')


// let num = ['anor','orange','appple','nok'];
// console.log(num);

// for(let i = 0;i < num.length; i++){
//     p.innerHTML = num
// }


// function boshidanqoshish() {
//     num.unshift('banana');
//     for(let i = 0;i < num.length; i++){
//         p.innerHTML = num;
//     }
// }
// console.log(num);

// for(let i = 0;i < num.length; i++){
//     p.innerHTML = num;
// }

// function boshidanochirad(){
//     num.shift();
//     for(let i = 0;i < num.length; i++){
//         p.innerHTML = num;
//     }
// }
// console.log(num);

// for(let i = 0;i < num.length; i++){
//     p.innerHTML = num;
// }

// function oxiridanochiradi() {
//     num.pop();
//     for(let i = 0;i < num.length; i++){
//         p.innerHTML = num;
//     }
// }
// console.log(num);

// function engohiridanqoshadi() {
//     num.push('olma');
//     for(let i = 0;i < num.length; i++){
//         p.innerHTML = num;
//     }
// }
// console.log(num);

// for(let i = 0;i < num.length; i++){
//     p.innerHTML = num;
// }

// function hohlaganjoydanochirish() {
//     num.splice(0 , 2);
//     for(let i = 0;i < num.length; i++){
//         p.innerHTML = num;
//     }
// }
// console.log(num);






// SANA 27.09.2023


   














// SANA 2.10.2023






// contstructor va object  farqi 



// let name1 = prompt('moshina nomi ')



let result =0;

function qoshish() {
    result++;
    p.innerHTML = result
}

function ayirish() {
    result--;
    p.innerHTML = result
}

function reset() {
    result = 0;
    p.innerHTML = result
}



// SANA: 09.10.2023




// let p = ['0','1','2','3','4','5','6','7','8','9']


// function array() {
//     for(i = 0 ; i <= p.length ; i++){
//         console.log(p[i]);
//         // p.innerHTML = p;
//     }
// }







































