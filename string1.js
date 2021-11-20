
let string1 = "sagar"
let string3 = 10
console.log(typeof string1)
console.log(typeof string3)
// string
// number

console.log("India is my Country ")
console.log("India is 'my Country' ")
console.log('India is "my Country"')
console.log('India is my Country')

// India is my Country
// India is 'my Country'
// India is "my Country"

// string + string --> string 
// string + number --> string
// number + number --> number
// number + string --> string

let x = 10
let y = 30
let z = "hello"

console.log(x + z)
console.log(x + y)
console.log(x + z + z)



let fullName = "Sagar Bhitade"
let age = 25
console.log("my name is " + fullName + " my age is " + age)

// string literals 

console.log(`My Name Is ${fullName} My age is ${age}`)


console.log("+++++++++++++++++++++++++")
let myName = "sagar"
let kk = " "
for (let m = 0; m < myName.length; m++) {
   console.log(myName[m])

   kk = myName[m] + kk
}
console.log(kk)
console.log("+++++++++++++++++++++++++")
// s
// a
// g
// a
// r
//ragas
for (let n = myName.length - 1; n >= 0; n--) {
   console.log(myName[n])
}

// r
// a
// g
// a
// s

let reversestring1 = "hello"
let p = " "
for (let t = 0; t < reversestring1.length; t++) {

   p = reversestring1[t] + p

   //console.log(reversestring1[t])
}
console.log(p)


let vvvv = "bhaishanhga"

let nnnnn = vvvv.indexOf("a", vvvv.indexOf("a") + 1)
// for(let i=0;i< vvvv.length;i++)
// {

// }
console.log(nnnnn)





// let string2="sagar bhitade"
// let kk1=string2.split(" ")
// blank=[]
// console.log(kk1)
// let revword=' '
// function reversestring2(word){

//     for(let t=0;t<word.length;t++){

//            revword =word[t]+revword
//     }
// return revword
// }
// for(let i=0;i< kk1.length;i++){

//     //console.log(kk1[i])
//     blank.push(reversestring2(kk[i]))

// }
// console.log(blank.join(" "))

console.log("+++++++++++++++++++")


let stiring4 = "sagara"

let str = stiring4.indexOf("a", stiring4.indexOf("a", stiring4.indexOf("a") + 1) + 1)

console.log(str)


let didu = "Shreya Bhitade"
ye = didu.split(" ")
console.log(ye)

let yaa = []

for (let i = 0; i < ye.length; i++) {

   // console.log(ye[i])
   let word1 = ye[i]
   let ya = ""

   for (let k = 0; k < word1.length; k++) {

      ya = word1[k] + ya
   }
   yaa.push(ya)
}
console.log(yaa)
console.log(yaa.join(""))




let choti = "Srusthi Bhitade"

let ra = choti.split(" ")
console.log(ra)
let rev = []
for (let i = 0; i < ra.length; i++) {

   //console.log(ra[i])
   let word = ra[i]

   let rev1 = ""
   for (let y = 0; y < word.length; y++) {
      rev1 = word[y] + rev1 //

   }
   // console.log(rev1)
   rev.push(rev1)
   //console.log(rev)

}
console.log(rev)
console.log(rev.join(" "))





let string5 = "Nikhil Bhitade"


let mp = string5.split(" ")

console.log(mp)
let ttt = []
for (let i = 0; i < mp.length; i++) {

   //console.log(mp[i])
   let word = mp[i]
   let tt = ""
   for (let z = 0; z < word.length; z++) {
      tt = word[z] + tt
   }
   ttt.push(tt)
}
console.log(ttt)
console.log(ttt.join(" "))

console.log("------------------------")

let home = "shivba Nivas"

let shiv = home.split(" ")

let shiva = []
for (let i = 0; i < shiv.length; i++) {
   console.log(shiv[i])
   let word = shiv[i]
   let ss = ""
   for (let t = 0; t < word.length; t++) {
      ss = word[t] + ss

   }
   shiva.push(ss)
}

console.log(shiva)
console.log(shiva.join(" "))

let rr = "sagarada"

let ss;
let dd;

if (ss = rr.indexOf("a", rr.indexOf("a") + 1)) {
   dd = rr.indexOf("a", ss + 1)
}


console.log(dd)

console.log("------------------------")

//short circuting


let asa = 4 < 5 && 4 > 3 && 1 > 2
console.log(asa)

let sss = null || 5 > 8 || 9
console.log(sss)


let kaaa = null || null || 4 > 55 || false
console.log(kaaa)

console.log("------------------------")
//  print me all index of 'a'
let ddd = "sagaraa"
for (let i = 0; i < ddd.length; i++) {
   if (ddd[i] == "a") {
      console.log(i)
   }
}



let raa = [11, 55, 44, 8, -4, 58]
let max = [0]
let min = [0]

for (let i = 0; i < raa.length; i++) {
   if (raa[i] > max) {
      max = raa[i]
   }
   else if (raa[i] < min) {
      min = raa[i]
   }
}
console.log(max)
console.log(min)


let lll = "sagarbhitade"

for (let i = 0; i < lll.length; i++) {
   //console.log(i)
   if (lll[i] == "a") {
      console.log(i)
   }
}



let city = "mumbai"
let mm = city.toLocaleUpperCase()
console.log(mm)

let rk = mm.toLowerCase()
console.log(rk)

let kr = ""
for (let i = 0; i < city.length; i++) {
   if (i == 0) {
      kr = kr + city[i].toUpperCase()
   }
   else {
      kr = kr + city[i].toLowerCase()
   }
}

console.log(kr)







let ram = "nitin dhanve"

let dyr = ram.split(" ")
let jjo = []
//console.log(dy)
for (let i = 0; i < dyr.length; i++) {
   // console.log(dy[i])
   let word2 = dyr[i]
   let re = ""

   for (let y = 0; y < word2.length; y++) {
      //console.log(word2[y])
      re = word2[i] + re
   }
   // console.log(re)
   jjo.push(re)
}

console.log(jjo)
console.log(jjo.join(" "))



//charAt Method
//The zero-based index of the desired character.
//Returns the character at the specified index.
let fullname = "sagar Bhitade"
let rrk = fullName.charAt(2)
console.log(rrk)


// charCodeAt
//Returns the Unicode value of the character at the specified location.
//@param index — The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.

console.log(fullName.charCodeAt(2))
console.log("----------------------------")

//ASCII VALUE OF CHARACTOR
//----------------------------------------
// ------- count of numbers
// ------- count of capital Letters
// ------- count of small letters
// -------- special symbols 
//------------------------------------





let ffff = "Aaa123$"

let capital = smollc = numberc = 0
let splchar = 0;

for (let i = 0; i < ffff.length; i++) {
   if (ffff.charCodeAt(i) >= 65 && ffff.charCodeAt(i) <= 90) {
      capital = capital + 1
   }
   if (ffff.charCodeAt(i) >= 97 && ffff.charCodeAt(i) <= 122) {
      smollc = smollc + 1

   }
   if (ffff.charCodeAt(i) >= 48 && ffff.charCodeAt(i) <= 57) {
      numberc = numberc + 1
   }
   else {
      splchar = splchar + 1
   }

}
console.log(capital, smollc, numberc, splchar)
