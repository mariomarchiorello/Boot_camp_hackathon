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
    /*let x1=a[0][0]
    let y1=a[0][1]
    let x2=a[1][0]
    let y2=a[1][1]
    let x3=b[0][0]
    let y3=b[0][1]
    let x4=b[1][0]
    let y4=b[1][1]
    let l1=[]*/

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
    
    /*for (x1; x1<=x2; x1++){
      //  console.log(x1)
         for (x3; x3<=x4; x3++){
           // console.log(x3)
            if (x1-x3==0){
                console.log(x1)
               l1[x1].push(x1) 
            }
         }
    }
     console.log(l1)} 
   //console.log(j,h,k,p)
    console.log(a[0][0])
    for(h=a[0][0];h<a[0][1];h++){
        console.log(h)
    }*/
   
} 

intersect([[1, 1], [4, 3]], [[2, 2], [6, 7]]); // => [2, 2], [4, 3]
intersect([[2, 1], [4, 4]], [[1, 1], [8, 8]]); // => [2, 1], [4, 4]


//8. myFilter
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
const res = words.forEach((word) => word.length > 6);

console.log(res)

