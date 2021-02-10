// console.log("------------------ claculator Funtion------------------")

// function calculator ( num1,num2,operator){
    
//     if ( num2 === 0 && operator === "/"){
//         console.log(" I PETY THE FOOL WHO DEVIDES BY ZERO---- Mr.T");
//     }else if( operator === "+"){
//         console.log(num1 + num2);
//     }else if( operator === "-"){
//         console.log(num1 - num2);
//     }else if( operator === "*"){
//         console.log(num1 * num2);
//     }else if( operator === "/"){
//     console.log(num1 / num2);
//     };
// };

// calculator(3,1,"+");

// console.log("------------------ myEach Funtion------------------")

// let arr= [8,5,6,3,4];
// const cb = parameter => parameter + parameter;
// function myForEach(arr, cb) {
//     let mapped = [];
//      for (let i = 0; i < arr.length; i++){
//          mapped.push(cb(arr[i]))
//      }
//     return mapped;
//   }

//   let test = myForEach(arr,cb)
//   console.log(test)

// console.log("------------------ merge Funtion------------------")
// doesn't merge in the right order

// const obj1 = { a: 3, b: 2 }
// const obj2 ={ a: 2, c: 4 }
// function mergeObjects (para1,para2,para3){
//     let newObj = {}
//     newObj = Object.assign(para1,para2,para3);
//     console.log(newObj);
// };
// mergeObjects({ a: 3, b: 2 }, { a: 2, c: 4 }, { e: 8, c: 5});

// console.log("------------------ word count Funtion------------------")

// function wordCount (string){
//     let StringLenght = string.split(" ").length;
//     let cutToMaxLength = string.split(" ").slice(0,30).join(" ");
//     StringLenght >= 29 ? console.log(`ERROR, it's too long (thats what she said), you wrote ${StringLenght} words. We can only allow the following ${cutToMaxLength}-.`)
//     : console.log(StringLenght)
// }
// wordCount("Life is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like. ― Lao Tzu")

// console.log("------------------ print the century Funtion------------------")

// function printTheCentury (number){
//     let cent = Math.ceil(number/100)+1; 
//     if (cent === 1 ||  cent===31 ||  cent===41 ||  cent===51||  cent===61||  cent===71||  cent===81||  cent===91){
//         console.log(`${cent}st century`); 
//     }else{
//         console.log(`${cent}th centruy`);
//     };
// };

// console.log("------------------ switch cases in string Funtion------------------")

// let text = 'So, today we have REALLY good day';

// String.prototype.switcheroonie = function (c) { return text.split('').map((c) => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('')};

// const newWord = text.switcheroonie();
// console.log(newWord)

// console.log("------------------ can i build the word Funtion------------------")


// const areEqual = (blob, word) => {
//     const first = blob.split("");
//     const second =word.split("");    
//     for(let i = 0; i < first.length; i++){
//        if(!second.includes(first[i])){
//           console.log( false);
//        };
//     };
//     console.log(true);
//  };
//  areEqual("oria","mario");            
            
            
