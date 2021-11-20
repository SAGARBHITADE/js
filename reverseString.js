console.log("hello")


let myName="sagar bhitade"

let rr=myName.split(" ")
let dd=[]
//console.log(rr)

for(let i =0;i<rr.length;i++){
    //console.log(rr[i])
    let word=rr[i]
    let sa=""
    for(let y=0;y<word.length;y++){  // sagar
        sa=word[y]+sa
        
    }
    console.log(sa)
    dd.push(sa)
    console.log(dd)
    console.log(dd.join(" "))
}



let mmmm="mahendrashing dhoni"

let sd=mmmm.split(" ")
let as=""
for(let i=0;i<sd.length;i++){
    //console.log(sd[i])
    let word=sd[i]
    for(let y=0;y<word.length;y++){
        //console.log(word[y])
        as=word[i]+as
        
    }
    console.log(as)
}





















