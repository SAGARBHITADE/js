

let object1 = {

    firstname: "ram",
    lastname: "joy",
    age: 25
}

console.log(object1.firstname)
console.log(object1['lastname'])

// updating value

object1.firstname = "sham"
console.log(object1.firstname)
console.log(object1['firstname'])


//updating property to object

object1.rollno = 28
console.log(object1)
// output { firstname: 'sham', lastname: 'joy', age: 25, rollno: 28 }
//deleting property to object

delete object1.rollno
console.log(object1)
//{ firstname: 'sham', lastname: 'joy', age: 25 }

// for loop 
// need understand loop how to work
for (key in object1) {
    console.log(key, object1[key])
}



let student = [

    {
        fname1: "sagar",
        age: 25
    },
    {
        fname1: "sandeep",
        age: 26
    }

]


//console.log(student[0])
//console.log(student[1])
//output
//{ fname1: 'sagar', age: 25 }
//{ fname1: 'sandeep', age: 26 }

console.log("----------------------")

for (let i = 0; i < student.length; i++) {

    console.log(student[i])
    let stud = student[i]
    for (key in stud) {

        console.log(key, stud[key])
    }
}

console.log("+++++++++++++++++++++++++++++++")

let book = [
    {
        title: "agnipankh",
        price: 200
    },
    {
        title: "javascript",
        price: 400
    }
]
for (let i = 0; i < book.length; i++) {
    console.log(book[i])          
    let obj = book[i]
    for (let key in obj) {
        console.log(obj[key])
    }
}

let object2=[
    {
        collorName:"red",
        collorPrice:50
    },
    {
        collorshopname:"Hindustan",
        collorQunttity:5
    }
]

for(let m=0;m<object2.length;m++)
{
    //console.log(object2[m])
    let obj1=object2[m]
    for(let key in obj1){
        console.log(key,obj1[key])
    }
}