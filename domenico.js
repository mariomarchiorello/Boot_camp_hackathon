const yodel = "Yodelayheeeeehooooo";


function checkEcho(echo){
   
let e = echo.split('').reverse().substring(2).reverse().join('')
return console.log(echo)
}
 console.log('fio')
}
checkEcho(yodel); // "Yodelayheeeeehooooo", "Yodelayheeeeehooo", "Yodelayheeeeeho", "Yodelayheeeee" ... until "Y"


