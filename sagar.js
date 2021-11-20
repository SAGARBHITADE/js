// let x = 10
// let y = 5
// console.log(x + y)
// console.log(x * y)
// console.log(x / y)
// console.log("hi sagar")


// let a = 10
// let b = 5

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)


// let s = 10
// let r = 5
// console.log(s + r)
// console.log(s - r)
// console.log(s * r)
// console.log(s / r)


// function cal(s, r) {
//     console.log(s + r)
//     console.log(s - r)
//     console.log(s * r)
//     console.log(s / r)
// }

// cal(10, 2)
// cal(20, 5)

// console.log("------")

// function mul(h, l) {
//     return h * l
// }


// let t = mul(5, 2)
// let m = mul(5, 3)

// console.log(t)
// console.log(m)

// console.log(t + 100)
// console.log(h + l)



function ram(a,b)
{

  return(a+b)
}
let h=ram(5,5)
console.log(h)



function nik(a,b)
{
    return (a*b)  
}
let s=nik(2,6)
console.log(s)

console.log('-----------')



let friend = ["rajveer", "prashant", "kalyan", "nikita", "pooja"]
let ry = []
//console.log(friend[0])
for (let h = 0; h < friend.length; h++) {
    //console.log(friend[h])
    ry.push(friend[h])
}

console.log(ry)



let rama=[15,20,10,11,21]
let rr=[0]
for(let i=0;i<rama.length;i++){
  
rr=rama[i]<rr
 //rr.push(rama[i])

  
  //console.log(rr)
   
}
console.log(rr)




let data1 = [5000, 6000, 5200, 7000]

let data2=data1.map(function(el,index,arr){

  return el=el*10/100

})
console.log(data2)


