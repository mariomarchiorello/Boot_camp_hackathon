


// 1. Fake news!

const news = [true, false, false, true, false, false, false, true, true, true];

function fakeNews(news) {
    let total = [];
    for (const one of news) {
        if (one === true) {
            total.push(one);
        }
    }
    console.log(`There is ${total.length} fake news !`)
}

fakeNews(news); // "There is 5 fake news !"



// 4. Social distancing

class Distanciation {
    constructor(radius) {
        this.r = radius;
        this.pi = 22 / 7;
    }
    getArea() {
        const area = this.pi * Math.pow(this.r, 2);
        console.log(area.toFixed(2));
    }
    getPerimeter() {
        const perimeter = 2 * this.pi * this.r;
        console.log(perimeter.toFixed(2));
    }
}

const socialDistancing = new Distanciation(5);



socialDistancing.getArea(); // 78.53

socialDistancing.getPerimeter() // 31.41


// 7. myMap

Array.prototype.myMap = function (callback) {
    const resultArray = [];
    for (let i = 0; i < this.length; i++) {
        resultArray.push(callback(this[i], i, this));
    }
    return resultArray;
}


let array = [1, 2, 3];
array = array.myMap(num => num * 2);
console.log(array); // [2,4,6]


// 10. Invert

function invert(obj) {
    const ret = {};
    Object.keys(obj).forEach(key => {
        ret[obj[key]] = key;
    });
    return ret;
}


invert({
    a: 3,
    b: 2
}); // { 2: 'b', 3: 'a' }


// 13. Array of Multiples

function arrayOfMultiples(num, length) {
    const result = [];
    for (let i = num; i <= num * length; i += num) {
        result.push(i);
    };
    return result;
}



console.log(arrayOfMultiples(7, 5)) //  [7, 14, 21, 28, 35]


// 16. Loves Me, Loves Me Not…


function lovesMe(num) {
    let result = "";

    for (let x = 0; x < num; x++) {
        let sentence = x % 2 === 0 ? "Loves me," : "Loves me not,";
        if ( x ===  num - 1){
            
            sentence = sentence.toUpperCase()
        }
       result += sentence 
    }

   return result.slice(0, -1);
}

// need to make last element capital 

console.log(lovesMe(3)) // "Loves me, Loves me not, LOVES ME"
lovesMe(6) // "Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT"
lovesMe(1) // "LOVES ME"



// 19. Length of a Nested Array

function getLength(arr) {
    return arr.reduce(function fn(acc, item) {
        if (Array.isArray(item)) return item.reduce(fn);
        return acc + 1;
    }, 0);
}




console.log(getLength([1, [2, 3]])) // 3
console.log(getLength([1, [2, [3, 4]]])) // 4

// 22. Hashtags Generator


function hashtagsGenerator(str) {
    if (str === "") {
        return false
    } else {
        return ` #${str.split(" ").join("").trim()}`;
    }
}


console.log(hashtagsGenerator("the   famous   hello   world   ")); // #TheFamousHelloWorld
console.log(hashtagsGenerator("javaScript rocks")); // #JavaScriptRocks
console.log(hashtagsGenerator("Propulsion Academy Students Are Amazing")); // #PropulsionAcademyStudentsAreAmazing
console.log(hashtagsGenerator("")); // false




// 25. Break Up Camel Case …
function breakUpCamelCase(str) {
    return str.replace(/(\B[A-Z])/g, ' $1');
}


console.log(breakUpCamelCase('breakUpCamelCase')); // break Up Camel Case
console.log(breakUpCamelCase('fullStackProgram')); // full Stack Program










