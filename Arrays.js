
console.log("-----------------")


// //push-New elements to add to the array and return new length of arry

let ram = ["sagar", "sandip", "sham", "sundar", "jani"]
let a = ram.push("ganesh")
console.log(a)
console.log(ram)
//Removes the last element from an array
let b = ram.pop()
console.log(b)
console.log(ram)
//Removes the first element from an array and returns it.
let c = ram.shift()
console.log(c)
console.log(ram)
// //Inserts new elements at the start of an array
console.log("***********************************")
let d = ram.unshift("sunil")
console.log(d)
console.log(ram)

console.log("-------------------")
//Determines whether an array includes a certain element, returning true or false as appropriate.
let f = ram.includes("sgar")
console.log(f)
//console.log(ram)

let e = ram.indexOf("sham")
console.log(e)
// //Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array
let g = ram.slice(2, -2)
console.log(g)


let friend = ["rajveer", "prashant", "kalyan", "nikita", "pooja"]
let ry = []
console.log(friend[0])
for (let h = 0; h < friend.length; h++) {
    console.log(friend[h])
    ry.push(friend[h])
}

console.log(ry)

let input = "prashant"
for (let i = 0; i < friend.length; i++) {
    if (friend[i] == input)

        console.log("friend is present")
}


if (friend.indexOf(input) >= 0) {
    console.log("present")
}
else {
    console.log("not present")
}

console.log("----------------------------")
let team = [2000, 2001, 2005, 2006]
let aa = []
for (let j = 0; j < team.length; j++) {
    aa = 2021 - team[j]

}
console.log(aa)

let ages = [21, 22, 32, 18]

//[21,22,32]

let above = []

for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 22) {
        above.push(ages[i])
    }
}
console.log(above)
console.log("----------------------------")
let ra = [10, 15, 20, 25]
let ramm = []
for (let m = 0; m < ra.length; m++) {
    if (ra[m] > 15) {
        ramm.push(ra[m])
    }
}
console.log(ramm)

console.log("----------------------------")

let king = [10, 15, 19, 18, 20]
let kk = []
for (let k = 0; k < king.length; k++) {
    if (king[k] >= 18) {
        kk.push(king[k])
    }
}
console.log(kk)

console.log("+++++++++++++++++++++++++")

let nikita = [12, 15, 25, 13, 18]
let vv = []
for (let z = 0; z < nikita.length; z++) {
    if (nikita[z] > 15) {
        vv.push(nikita[z])
    }
}
console.log(vv)

console.log("++++++++++++++++++++++++++")

let sagar = [2001, 2002, 2003, 2010]
let ram1 = []
for (let s = 0; s < sagar.length; s++) {
    let ram = 2021 - sagar[s]
    ram1.push(ram)
}
console.log(ram1)
console.log("----------------------------")


let shiva = [2010, 1998, 1995, 2004]
let rr1 = []

for (let i = 0; i < shiva.length; i++) {
    let r = 2021 - shiva[i]
    rr1.push(r)
}
console.log(rr1)





let sandy = [10, 20, 30, 40]
let sum = 0
for (let j = 0; j < sandy.length; j++) {
    sum = sum + sandy[j]
}
console.log(sum)


let jon = ["a", "b", "d", "c"]
let userinput = "b"
for (let dd = 0; dd < jon.length; dd++) {
    if (jon[dd] == userinput) {
        console.log("present")
    }
}

if (jon.includes(userinput)) {
    console.log("present")
}
else {
    console.log("not present")
}


if (jon.indexOf(userinput) >= 0) {
    console.log("present")
}
else {
    console.log("not present")
}


console.log("-----------------------------")

let bill = [2000, 2006, 2007, 2009]
//Calls a defined callback function on each element of an array, and returns an array that contains the results
let raam = bill.map(function (el, index, arr) {
    return 2021 - el
})
console.log(raam)


let yee = bill.filter(function (el, index, arr) {
    return 2006 < el
})
console.log(yee)

let rahul = [5000, 6000, -5000, -300]

let roman = rahul.filter(function (el, index, arr) {

    return 0 < el
})
console.log(roman)

let roman11 = roman.reduce(function (sss, el, index, arr) {

    return sss + el

}, 0)
console.log(roman11)
let romanwith = rahul.filter(function (el, index, arr) {

    return 0 > el
})
console.log(romanwith)


let romanwith1 = romanwith.reduce(function (ar, el, index, arr) {
    return el + ar
}, 0)
console.log(romanwith1)

// map reduce filter find fiendindex

let roc = ["sam", "sunil", "sand", "roy"]
//console.log(roc[3].length)
let rocc = roc.findIndex(function (el, index, arr) {
    return el.length > 4
})
console.log(rocc)


let djj = [[5, 15, 21, 6], [8, 6, 9]]

console.log(djj[0])
console.log(djj[1])

let gh = djj.flat()

console.log(gh)
console.log("+++++++++++++++++++++++++++++++")
let zg = [19, 33, 10, 55, 66]

let st = zg.some(function (el, index, arr) {

    return el < 33
})


console.log(st)
//  0  1   2  3 4  5  6   7 8  9  10 11 12 13 14  
let fill1 = [1, 2, a, a, a, a, a, a, a, a, a, a, a, a, a]
let fill12 = fill1.fill(2, 2, fill1.length)
console.log(fill12)

let gx = [12, 33, 44, 56, 67, 78, 89, 99, 99]

//0   1  2 3  4   5  6  7  8
//12,33,44,56,67,78,89,99,99

let gxx = gx.fill('a', 2, gx.length)
console.log(gxx)


roc = ["sam", "su n nil", "sandy", "roy"]

let zm = roc.forEach(function (el, index, arr) {

    console.log('welcome', el)
})

let age = [11, 13, 14, 45, 45, 66]

let hm = age.some(function (el, index, arr) {
    return el < 18
})
console.log(hm)

// need to understand this mathod 
let rm = age.every(function (el, index, arr) {

    return el < 13
})
console.log(rm)


let billdiscount = [3000, 2000, 2500, 3500]
let pay = billdiscount.map(function (el, index, arr) {
    return el - (el * 10 / 100)
})
console.log(pay)
//[ 2700, 1800, 2250, 3150 ]

let discountAns = billdiscount.reduce(function (acc, el) {
    return el * 0.10 + acc
}, 0)
console.log(discountAns)

//1100

let discountTotal = billdiscount.reduce(function (arr, el, index) {
    return el - (el * 10 / 100) + arr
}, 0)
console.log(discountTotal)
//9900
let teamm = ["sachi", "virat", "dhoni", "balaji"]
//Returns the elements of an array that meet the condition specified in a callback function.
let team1 = teamm.filter(function (el, index, arr) {

    return el.length == 6
})
console.log(team1)


let pageNumber = [10, 15, 20, 25, 30, 28, 33, 37, 39]

//[true,true ,true ,false,false ,true ,false, false] // 20-33        
let pagen = pageNumber.map(function (el, index, arr) {
    return el >= 20 && el <= 33
})
console.log(pagen)

//   [
//     false, false, true,
//     true,  true,  true,
//     true,  false, false
//   ]

let pageFiend = pageNumber.filter(function (el, index, arr) {
    return el < 22
})
console.log(pageFiend)
console.log(pageNumber)



let data1 = [5000, 6000, 5200, 7000]
let data2 = data1.map(function (el, index, arr) {


    return el = (el * 0.50)
})
console.log(data2)

let data3=[15,11,55,22,11,33,-9]
let ff=0;
let mm=0;
for(let i=0;i<data3.length;i++){
    if(data3[i]>ff)
    ff=data3[i]
     else(data3[i]<mm)
    mm=data3[i]
}
console.log(ff)
console.log(mm)







