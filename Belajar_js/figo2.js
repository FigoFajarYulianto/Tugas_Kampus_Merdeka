// function bintangg1(rentang) {
//     let hasil = '';
//     for (let i = 0; i < rentang; i++) {
//         for (let j = 0; j <= i; j++) {
//             hasil += '* ';
//         }
//         hasil += '\n';
//     }
//     return hasil;
// }
// console.log(bintangg1(4));

// function bintangg2(rentang) {
//     let hasil = '';
//     for (let i = 0; i < rentang; i++) {
//         for (let j = rentang; j > i; j--) {
//             hasil += '* ';
//         }
//         hasil += '\n';
//     }
//     return hasil;
// }
// console.log(bintangg2(4));

// function bintangg3(rentang) {
//     let hasil = '';
//     for (let i = 0; i < rentang-1; i++) {
//         for (let j = rentang; j > i; j--) {
           
//           hasil += '* ';
//         }
//         hasil += '\n';
//     }
//      for (let i = 0; i < rentang  ; i++) {
//         for (let j = 0; j <= i; j++) {
//             hasil += '* ';
//         }
//         hasil += '\n';
//     }
//     return hasil;
// }
// console.log(bintangg3(4));

// function bintangg4(rentang) {
//     let hasil = '';
//     for (let i = 0; i < rentang; i++) {
//         for (let j = 0; j <= i-1; j++) {
//             hasil += '* ';
//         }
//         hasil += '\n';
//     }
//     for (let i = 0; i < rentang; i++) {
//         for (let j = rentang; j > i; j--) {
           
//           hasil += '* ';
//         }
//         hasil += '\n';
//     }
   
//     return hasil;
// }
// console.log(bintangg4(4));

// function pola(n){
//     for (let i = 1; i <= n; i++){
//         let baris = "";
//         for (let j = 0; j < i; j++){
//             baris += i;
//         }
//         console.log(baris);
//     }
// }
// pola(5);


function validatePIN (pin) {
  //return true or false
const regek = /^(?=.*[a-z])(?=.*[0-9]).{4}/
        if (regek.test(pin)) {
          return "False";
        }

    const regex = /^(?=.*[0-9]).{4}$/;
        if (regex.test(pin)) {
          return "True";
        }
  const reges = /^(?=.*[0-9]).{4}/;
        if (reges.test(pin)) {
          return "False";
        }
  
}
console.log(validatePIN("1234"))
console.log(validatePIN("12345"))
console.log(validatePIN("a234"))