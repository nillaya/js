
//Json
var student1 = {
    id: 1,
    name: 'bee',
}
var student2 = student1 // แบบนี้มันจะลิ้งกัน ถ้าเปลี่ยนใน 01 หรือ 02 ก็จะเปลี่ยนทั้งคู่
student2.id = 2 
console.log(student1.id , student2.id)

var student3 = JSON.parse(JSON.stringify(student1)) //เป็นการก้อปโดยแปลงไปเป็นสตริงก่อนแล้วแปลงกลับไปเป็นออบเจ็ค
student3.id = 3 
console.log(student1.id , student3.id)
