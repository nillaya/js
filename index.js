/* console.log('Hello world')
var x = setInterval(function() { //ใช้ตัวแปรเพื่อไปใช้ในการยกเลิก
    console.log('sleepy')
}, 10000)
clearInterval(x) */

//ข้อมูลพื้นฐาน 
var id = 11
var name = `Niilaya id=${id}` //ค่าจากตัวแปรด้านบน
var ok = true

//object**
var student = {
    code: '001',
    name: 'Nillaya',
}
student.age = 23 //เพิ่ม key ใหม่  ถ้า  key มีอยู่แล้วก็เป็นการอัพเดตค่า
student['age'] = 23  // หรือแบบนี้ เขียนได้ 2 แบบ 
delete student.age // ลบคีย์ออก 
//undefined  คือ  ในกรณีที่ปริ้นตัวแปรที่ไม่มีจะขึ้นแบบนี้
console.log(student.code) //ปริ้น key ที่ต้องการ

// Array 
var list = ['xxx', 'halo', 1, {id : 12}, ['code1']]
for(var i = 0; i < list.length; i++){ //วนลูปดูจำนวนในอาเรย์

}

//Json
text = JSON.stringify(student)

var student01 = {id: 01}
var student02 = student01 // แบบนี้มันจะลิ้งกัน ถ้าเปลี่ยนใน 01 หรือ 02 ก็จะเปลี่ยนทั้งคู่

var student1 = {id: 01}
var student2 = JSON.parse(JSON.stringify(student1)) //เป็นการก้อปโดยแปลงไปเป็นสตริงก่อนแล้วแปลงกลับไปเป็นออบเจ็ค


 

