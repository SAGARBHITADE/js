class Person {

    fullName = "unknow"
    age = 23
    height = 5 
    walk(){
        console.log(`I am walking`)
    }

    talk(){
        console.log(`I am talking`)
    }

}

let amol = new Person()
amol.fullName = "amol"
amol.age = 23
amol.lang= "hindi"

// let  chinmay  = new Person()
// let  poorva  = new Person()
// console.log(amol)
// console.log(chinmay)
// // retrive 
// console.log(chinmay.age)
// // update 
// chinmay.age = 34
// delete chinmay.age

// let n = [amol,chinmay,poorva]

// for(let i = 0 ; i < n.length ;i++){

//     // for(let key in n[i]){
//     //     console.log(key,n[i][key])
//     // }

//     for(let [key,value] of Object.entries(n[i])){
//         console.log(value,key)
//     }    
// }

// //------------------------------------->

// class city {

//     constructor(name,state,Rlanguage){
//         this.name = name
//         this.state  = state
//         this.Rlanguage = Rlanguage
//     }


// }

// let p = new city("pune","Maharashtra","marathi")
// let v = new city("nashik","MH","marathi")

// console.log(p)
// console.log(v)

// let cityvv = [p,v]

// cityvv.forEach(function(el){
//     for(let [key,value] of Object.entries(el)){
//         console.log(key,value)
//     }
// })