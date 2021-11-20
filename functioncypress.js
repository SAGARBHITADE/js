//function as parameter to another function
// function declaration
 function add(x,y){
     return x+y
 }
 let addx = add(12,13)
 console.log(addx)

 let sub = function(x,y){
         return x-y
     }
     console.log(sub(12,13))
     console.log(sub)
    
    
     let sb =  function(x,y){
        return x-y
     }
    function addition(sb){

    let fn = sb(13,13)  // -1
    return fn + 2  // 1

}
let rrr = addition(sub)
console.log(rrr) // 1



//object  as parameter to another

let human={
    fullName:'sagar',
    last_name:'Bhosle',
    age:28,
    skill:["python","javascript","c++"]

}
//console.log(human.age)

function changeAge(obj){
   obj.age=30
   //obj.fullName="ram"
   return obj
}
 let {age,skill:[skill2,skill3]}=changeAge(human)
 console.log(age)
 console.log(skill2,skill3)



 console.log("***********************************************************")



  // let add = function(a,b){
// //     console.log(a+b) // 24
// //     //return  a + b
// // }
// // let d = add(12,13) //
// // //console.log(add(12,13)) //
// // console.log(d) // undefined
// // // console.log(add)
// // // console.log(d)

// // //console.log(add(12,13))

// // let add = function(a,b){
// //     return a + b
// // }
// // //console.log(add)

// // function sub(){
    
// //     return add
// // }


// // let h = function(a,b){
// //     return a + b
// // }


// // let h = sub()
// // let ff = h(12,33)
// // console.log(ff) // 45

// //------------------------>

// // let add = function(a,b){
// //     return a + b
// // }
// //console.log(add)

// // 

// // closure 
// let ba = function(x,y){
//     return function(){
//         return x+y
//     }

// }
// let r = ba(12,13)
// let add = r()
// console.log(add)


// this keyword


let fullName = "poorva"
let human1 = {

    fullName:"chinmay",
    rollNum:12,
    display:function(){
        console.log(this) // human

        console.log(this.fullName) // not defined output is insid the object

        let dis = ()=> {
            console.log(this.rollNum) // not defined

        }
        dis()    
        }

    }
     
    
//  console.log(human1)
//  console.log(human1.rollNum)
//  console.log(human1.display)
human1.display()
//console.log(this)



//console.log(this)

//var fullName ="ram"
// let human = {
//     fullName:"chinmay",
//     rollNum:12,
//     display:function(){
//         console.log(this) // human
//         function add(){
//             console.log(this)// window
//             console.log(this.fullName) // not defined
//         }
//         add()  
//     }
// }

// human.display()


// solution

// let human = {
//     fullName:"chinmay",
//     rollNum:12,
//     display:function(){
//         console.log(this) // human
//         let  add = () =>{
//             console.log(this)// window
//             console.log(this.fullName) // not defined
//         }
//         add()  
//     }
// }
// human.display()


// // window
// let human = {
//     fullName:"chinmay",
//     rollNum:12,
//     display:()=>{
//         console.log(this) // human
//         let  add = () =>{
//             console.log(this)// window
//             console.log(this.fullName) // not defined
//         }
//         add()  
//     }
// }
// human.display()















// let a = 10
// console.log(10)
// console.log(a)



// let human = {

//     age:12,
//     display:function(){
//         console.log("hello")
//     }

// }


// human.age
// human.display()



// let human = {
//     fullName:"chinmay",
//     age:12,
//     skills:["python","javascript","c++"]
// } 
// function changeAge(obj){

//     obj.age = 66
//     return obj
//     //console.log(obj)

// }

// let {age,skills:[skillOne,skillTwo]} = changeAge(human)
// console.log(age)//
// console.log(skillOne,skillTwo)//


