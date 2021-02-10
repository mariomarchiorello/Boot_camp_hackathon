//2. The Echo
const yodel = "Yodelayheeeeehooooo";

function checkEcho(echo){
    if (echo.length<1){
    return console.log(echo);
    }else{
    console.log(echo)
    let e = echo.split('').reverse().slice(2).reverse().join(''); 
    return checkEcho(e);
    }
}

/*function checkEcho(echo){
        if (echo.length<1){
        return console.log(echo);
    }else{
        let e = echo.split('').reverse().slice(2).reverse().join(''); 
        console.log(e);
        return checkEcho(e);
    }
}*/
 console.log(yodel);

checkEcho(yodel); // "Yodelayheeeeehooooo", "Yodelayheeeeehooo", "Yodelayheeeeeho", "Yodelayheeeee" ... until "Y"

//5. rectangle Intersection

function intersect(a,b){
   
    let leftA = Math.min(a[0][0], a[1][0])
    let rightA = Math.max(a[0][0], a[1][0])
    let bottomA = Math.min(a[0][1], a[1][1])
    let topA =  Math.max(a[0][1], a[1][1])


    let leftB = Math.min(b[0][0], b[1][0])
    let rightB = Math.max(b[0][0], b[1][0])
    let bottomB = Math.min(b[0][1], b[1][1])
    let topB =  Math.max(b[0][1], b[1][1])

    let left = Math.max(leftA, leftB)
    let right = Math.min(rightA, rightB)
    let bottom = Math.max(bottomA, bottomB)
    let top =  Math.min(topA, topB)
    
    console.log([left,bottom],[right,top])
    } 

intersect([[1, 1], [4, 3]], [[2, 2], [6, 7]]); // => [2, 2], [4, 3]
intersect([[2, 1], [4, 4]], [[1, 1], [8, 8]]); // => [2, 1], [4, 4]


//8. myFilter

const myFilter = (collection, fn) => {
    const result = [];
    myEach(collection, function(el, index, arr) {
      if (fn(el, index, arr)) {
        result.push(el);
      }
    });
  
    return result;
  }
  
  const filtered = myFilter([2, 8, 5, 15], function(el, index) {
    return el % index === 0;
  });


//11. Min, Max, Length and Average

function minMaxLengthAverage(arr) {
  let mmla=[]

  function minmax(items) {
    return items.reduce((acc, val) => {
        acc[0] = ( acc[0] === undefined || val < acc[0] ) ? val : acc[0]
        acc[1] = ( acc[1] === undefined || val > acc[1] ) ? val : acc[1]
        acc[2] = items.length
        return acc;
    }, []);
    }

    let average = arr.reduce((total, next, idx, array) => {

        total += next;
      
        if (idx === array.length - 1) { 
          return total / array.length;
        } else { 
          return total;
        }
      });
      
  mmla=[...minmax(arr)]
  mmla.push(average)
       
 return mmla
 
}
console.log(minMaxLengthAverage([7, 13, 3, 77, 100])); // [ 3, 100, 5, 40 ]


//14. Convert Key, Values to an array of arrays

function objectToArray(obj){
var array = Object.keys(obj)
      .map(function(key) {
        return [key,obj[key]]
        });
console.log(array);}
objectToArray({likes: 2, dislikes: 3, followers: 10}) // [["likes", 2], ["dislikes", 3], ["followers", 10]]


//17. Who is the president ?
function whoIsThePresident(arr) {
        if(!arr.length){return console.log('Is it a democratic vote here ? Please vote again')}
       let vote = [];
  
       arr.forEach(candidate => vote[candidate] ? vote[candidate]++ : vote[candidate] = 1);
       let highestscore = [Object.keys(vote)[0], Object.values(vote)[0]];
       for(candidate in vote)
       {
           if (vote[candidate]> highestscore[1])
           {
                highestscore=[candidate,vote[candidate]];
            }else if (candidate != highestscore[0]&& vote[candidate]===highestscore[1])
            {
                highestscore.push('DRAW');
            }
       }
        return console.log(highestscore.includes('DRAW')?"We got a draw ! Please vote again.": `${highestscore[0]} is our new president with ${highestscore[1]} votes!`)
};
whoIsThePresident(["Teddy Bear", "Chewbacca", "Dracula", "Chewbacca"]); // Chewbacca is our new president with 2 votes !

whoIsThePresident(["Chewbacca", "Teddy Bear", "Dracula", "Chewbacca", "Dracula"]); // We got a draw ! Please vote again.

whoIsThePresident([]); // Is it a democratic vote here ? Please vote again.


//20. Alphabet Looper



const alphabetLetter = alphabetLooper('abcdefghijklmnopqrstuvwxyz');
alphabetLetter();   // 'a'
alphabetLetter();   // 'b'
alphabetLetter();   // 'c'
        .
        .
        .
alphabetLetter();   // 'z'
alphabetLetter();   // 'a'