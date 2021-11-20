
let bank = {

    accountName: "Sagar Bhotade",
    bankName: "ICICI Bank",
    accountNumber: 649601504158,
    branchCode: 6496
}

// // Retrive value from objects 

console.log(bank.accountName)
console.log(bank["bankName"])

// updating value
bank.accountName = "Sandeep Shinde"
console.log(bank.accountName)
//updating property to object
bank.IFSCCode = "icic00006496"
console.log(bank)

// same property add??
// //(Duplicate keys are not inserted)

bank.IFSCCode = "icic000064961"
console.log(bank)


bank = {

    accountName: "Sagar Bhotade",
    bankName: "ICICI Bank",
    accountNumber: 649601504158,
    branchCode: 6496
}

delete bank.branchCode
console.log(bank)



let emp = [
    {
        empName: "sagar",
        rollNo: 22,
        empComp: ["icici", "hdfc", "boi"]

    },
    {
        empName: "roy",
        rollNo: 22,
        empComp: ["icici", "hdfc", "boi"]

    },
    {
        empName: "ram",
        rollNo: 55,
        empComp: ["sbi", "kfc", "icici", "hdfc"]
    }
]
//console.log(-----------------------------------)

for (let i = 0; i < emp.length; i++) {
    // console.log(emp[i])
    let obj = emp[i]
    console.log(obj.empName + " " + obj["empComp"].length)
}



console.log("-----------------------------------")

let student = [
    {
        firstName: "sagar",
        lName: "Jay",
        rollNo1: 25,
        sagarFriend: ["ram", "sandeep", "roy", "Joni"]
    },
{
        firstName: "sandeep",
        lName: "joy",
        rollNo1: 26,
        sagarFriend: ["samir", "sushant", "karan", "rakj", "harish"]

    }
]

for (let i = 0; i < student.length; i++) {
   // console.log(student[i])
   let objs=student[i]
   console.log(objs.firstName +" "+objs.sagarFriend.length)

}







let days=[1,2,3,4,5,6,7]
let dayName=["sunday","Monday","tuesday","wednesday","thursday","friday","saturday","sunday"]

let g={}

for(let i=0;i<days.length;i++){
   //console.log(days[i])
    //g[`day ${days[i]}`]= dayName[i]
    g[`Day ${days[i]}`]=dayName[i]
     console.log(g)
}





let two="rudrakranti"

console.log(two)
console.log(two.length-1)
console.log(two[0])
console.log(two[1])



let book={
    bookName:"c++",
    bookPrice:200,

}

for(let key in book){
    console.log(key,book[key])
}



let namesw = ["chinmay","poorva","sarika"]

// for(let i = 0 ; i < namesw; i++){
//     console.log(namesw[i])
// }

for(let h of namesw){
    console.log(h)
}


let song={
    songName:"hare hare ",
    songNnumber:10,
    songLike:"15k"
}

console.log(Object.keys(song))
console.log(Object.values(song))
console.log(Object.entries(song))


for(let j of Object.values(song))
console.log(j)

// hare hare
// 10
// 15k


for(let h of Object.keys(song))
console.log(h)

// songName
// songNnumber
// songLike

for(let m of Object.entries(song))
console.log(m)

for(let [key,value] of Object.entries(song)){
    console.log(key,value)
}


console.log("------------------------------------")


let sandeep=
    {
        firstnames:"sandy",
        lname:"shinde",
        san_aeg:25,
        roNo:2222
    }


for(let key in sandeep)

console.log(key,sandeep[key])


console.log(Object.keys(sandeep))
console.log(Object.values(sandeep))
console.log(Object.entries(sandeep))


sandeep=
    {
        firstnames:"sandy",
        lname:"shinde",
        san_aeg:25,
        roNo:2222
    }


let {firstnames:fn,lname:ln,san_aeg:saeg,roNo:rn}=sandeep

console.log(fn)
console.log(ln)
console.log(saeg)
console.log(rn)

let ght=Object.keys(sandeep)
console.log(ght)

let[a,b,c,d]=Object.keys(sandeep)
console.log(a,b,c,d)

let jkj=Object.values(sandeep)
console.log(jkj)

let [aa,ss,ff,cc]=Object.values(sandeep)
console.log(aa)
console.log(ss)
console.log(ff)
console.log(cc)

let [xx,xxx,xxxx,xxxxx]=Object.entries(sandeep)
console.log(xx)
console.log(xxx)
console.log(xxxx)
console.log(xxxxx)

console.log("++++++++++++++++")
for(let[key,value] of Object.entries(sandeep))
console.log(key,value)




//[ 'songName', 'hare hare ' ]
// [ 'songNnumber', 10 ]
// [ 'songLike', '15k' ]
// songName hare hare
// songNnumber 10
// songLike 15k 

// console.log("-----------------------------------")

// let question={
//     'whats your fev collor sagar':"red",
//     'whats your fevret collor sunil':"oreng",
//     'what is capital of India':"a",
//     'what is capital of India':"b"
// }
// correctAns =0

// for(let [Question,answer] of Object.question(entries)){
//     let userans=prompt(question)
//     if (userans===answer){
//         correctAns=correctAns+1

//     }
//     correctAns=correctAns+1
//     }




  









