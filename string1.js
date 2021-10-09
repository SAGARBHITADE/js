

let string2="sagar bhitade"

let na=string2.split(" ")
console.log(na)


function reversestring(word){

    console.log(word)

let revword=''
for(let ss=0;ss<word.length;ss++)
{
    revword=word[ss]+revword
}
return revword
}
