  
   let namee = "sagar"
   console.log(typeof namee)

   let three = true
   console.log(typeof three)



   for (r = 0; r <= 4; r++) {

   //  console.log(namee)  
   console.log(namee[r])
   console.log(r)

   }

   console.log("............")



   let sss = ("Sagar")

   let x = sss.toUpperCase()
   let m = sss.toLowerCase()
   console.log(x, m)

   let sag = ("sagar")
   let j = sag.toUpperCase()
   console.log(j)
   console.log(typeof (j))



   let zzz = "sagar"
   for (let o = 4; o >= 0; o--) {
   console.log(zzz[o])
   }




   let sr = "ram"

   for (l = 0; l <= 2; l++)
   console.log(sr[l])


   console.log("............")


   let pp = " newA "
   console.log(pp.length)


   let hh = " sagarr "
   let kk = hh.trimLeft()
   console.log(kk.length)
console.log(kk)

   let nikita = "vanita dipu anita"
   let y = nikita.includes("vanita")
   console.log(typeof y)
   console.log(y)


   let fh = "sagarbhitade"
   let uu = fh.indexOf("b")
   console.log(uu)

   let jk = fh.slice(8, -2)
   console.log(jk)


   console.log("--------------------------")

   let nik = "sagar"
   let g = nik.includes("sagar")
   console.log(g)



   
   let string1 = "sagar bhitade"
    //ragas edatihb

   let na = string1.split(" ")
   console.log(na)
   blank = []

   function reversestring(word) {
   console.log(word)              //sagar         5
   let revword = ''

   for (let aa = 0; aa < word.length; aa++) {
    // revword= revword + word[aa] 
    //          0  =  0    +    s  
    //           s=s+a
    //           sa=sa+g
    //           sag=sag+a 
          revword = word[aa] + revword
    // 0=s+0
    // s=a+S
    // as=g+as
    // gas=a+gas              
    //    sag=a+sag     
   }
    return revword
   }
   for (let i = 0; i < na.length; i++) {
   // console.log(na[i])
   blank.push(reversestring(na[i]))
   console.log(blank)
   }
   console.log(blank.join(" "))

    
    