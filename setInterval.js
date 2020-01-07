var i = 0
var x = setInterval(function() { //ใช้ตัวแปรเพื่อไปใช้ในการยกเลิก
    console.log('i =', i)
    i++
    if (i === 3 ){
        clearInterval(x)   
    }
}, 1000)