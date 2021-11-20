
let h = "12345ASDFG@#$%^asdfg"
let csl = ccl = ss = nn = 0

for(let i = 0 ; i < h.length ; i++){
   if(h.charCodeAt(i) >= 65 &&  h.charCodeAt(i)<=90){
       ccl = ccl +1
   }
   else if(h.charCodeAt(i) >= 97 &&  h.charCodeAt(i)<= 122){
       csl = csl +1
   }
   else if(h.charCodeAt(i) >= 48 &&  h.charCodeAt(i)<= 57){
       nn = nn + 1
   }
   else{
       ss = ss + 1
   }
}
console.log(csl,ccl,ss,nn)

console.log("++++++++++++++++++++++++++")

let rammm = "HSFSF@@@@@@21111111ssss"
let capital1 = smoll1 = specelc = number1 = 0

for (let i = 0; i < rammm.length; i++) {
    if (rammm.charCodeAt(i) >= 65 && rammm.charCodeAt(i) <= 90) {
        capital1 = capital1 + 1
    }
    else if (rammm.charCodeAt(i) >= 97 && rammm.charCodeAt(i) <= 122) {
        smoll1 = smoll1 + 1
    }
    else if (rammm.charCodeAt(i) >= 48 && rammm.charCodeAt(i) <= 57) {
        number1 = number1 + 1
    }
    else {
        specelc = specelc + 1
    }
}
console.log(capital1, smoll1, number1, specelc)


// I need tto understan this program and index Method 


let gh = "i am chinmay My name is chinmay My firstname is chinmay"


let hh = gh.split(" ") //  ["i" , "am", "chinmay", "My" ,"name", "is", "chinmay", "My' ,"firstname" ,"is","chinmay"]
let blank = []

//blank.indexOf('a')


let count = 0


for(let i = 0 ; i < hh.length ; i++ ){
    if(blank.indexOf(hh[i]) < 0){

        blank.push(hh[i]) // ["i" ,"am" ,"chinmay","My","is"]

    }
    else{
        count = count + 1
    }

}
console.log(count)


console.log("------------")
let  bjbj="ASDFS@@@@@12354aaaaa"

let cl=sl=sc=nu=0

for(let i=0;i<bjbj.length;i++)
{
    if(bjbj.charCodeAt(i)>=65&&bjbj.charCodeAt(i)<=90){
        cl=cl+1
    }
    if(bjbj.charCodeAt(i)>=97&&bjbj.charCodeAt(i)<=122){
        sc=sc+1
    }
}

console.log(cl,sc)














