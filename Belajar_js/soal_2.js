
const checkTypeNumber = (givenNumber) =>{

if ((givenNumber % 2) == 0 && typeof(givenNumber) === 'number') {
    return (givenNumber + ' adalah bilangan genap ');
   
}else if ((givenNumber % 2) !== 0 && typeof(givenNumber) === 'number'){

    return (givenNumber + ' adalah bilangan ganjil');

}else if  (!givenNumber){
return ('Error : Bro where is the parameter?');

} else {
     return ('Error : Invalid data type');
     }

}
console.log(checkTypeNumber(5));
console.log(checkTypeNumber(2));
console.log(checkTypeNumber());
console.log(checkTypeNumber([]));
